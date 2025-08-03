import Registration from "../models/RegistrationModel.js";


export const addNewRegisteration = async (req, res) => {
    try {
        const { name, email, phone, address, role, motivation } = req.body;

        // Check for existing email to prevent duplicates
        const existingApplicant = await Registration.findOne({ email });
        if (existingApplicant) {
            return res.status(409).json({ message: 'An application with this email already exists.' });
        }

        // Create a new registration document
        const newRegistration = new Registration({
            name,
            email,
            phone,
            address,
            role,
            motivation
        });

        // Save the document to the database
        await newRegistration.save();

        res.status(201).json({ message: 'Registration successful!', registration: newRegistration });

    } catch (error) {
        console.error('Error saving registration:', error);
        res.status(500).json({ message: 'Server error. Please try again later.' });
    }
};

export const getApplication = async (req, res) => {
    try {
        const applicants = await Registration.find().sort({ registeredAt: -1 });
        res.status(200).json(applicants);
    } catch (error) {
        console.error('Error fetching applicants:', error);
        res.status(500).json({ message: 'Server error. Could not fetch applicants.' });
    }
};

// New API route for deleting a single application
export const deleteApplication = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedApplication = await Registration.findByIdAndDelete(id);
        if (!deletedApplication) {
            return res.status(404).json({ message: 'Application not found.' });
        }
        res.status(200).json({ message: 'Application deleted successfully.', deletedApplication });
    } catch (error) {
        console.error('Error deleting application:', error);
        res.status(500).json({ message: 'Server error. Could not delete application.' });
    }
};

