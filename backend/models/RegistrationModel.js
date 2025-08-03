
import mongoose from 'mongoose';

const registrationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true
    },
    address: { // Renamed from 'city' to 'address'
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['Intern', 'Volunteer'],
        required: true
    },
    motivation: {
        type: String,
        required: true
    },
    registeredAt: {
        type: Date,
        default: Date.now
    }
});

const Registration = mongoose.model('Registration', registrationSchema);

export default Registration;