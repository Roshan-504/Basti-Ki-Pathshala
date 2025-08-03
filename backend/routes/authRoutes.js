import express from 'express';
import {  login } from '../controllers/authController.js';
import { authenticate } from '../middlewares/auth.js';

const router = express.Router();


// POST /api/auth/login
router.post('/login', login);

router.get('/verify', authenticate, (req, res) => {
  // The authenticate middleware already verified the token
  res.json({user: {
    email: req.user.email
  }});
});



export default router;