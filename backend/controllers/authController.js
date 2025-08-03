import { generateToken } from '../utils/jwtToken.js';

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    // Hardcoded credentials
    const hardcodedEmail = 'admin@gmail.com';
    const hardcodedPassword = '1234';

    // Check credentials
    if (email !== hardcodedEmail || password !== hardcodedPassword) {
      return res.status(401).json({ message: 'Invalid Email or Password' });
    }

    // Mock user object for JWT generation
    const user = { email };

    // Generate JWT
    const token = generateToken(user);

    res.json({ 
      token,
      user: { email }
    });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Login failed' });
  }
};
