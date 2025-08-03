import React, { useState } from 'react';
import axiosInstance from '../services/axiosInstance';
import toast from 'react-hot-toast';
import Navbar from '../components/Navbar';

const RegisterPage = () => {
    // State to hold form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        role: 'Intern', // Default value
        motivation: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Show a loading toast and get its ID
        const loadingToastId = toast.loading('Submitting your application...');

        try {
            // Make sure the backend server is running on port 5000
            const response = await axiosInstance.post('/api/application/register', formData);
            
            // Update the loading toast to a success toast
            toast.success('Registration successful! Thank you for your interest.', {
                id: loadingToastId,
            });

            // Reset the form after successful submission
            setFormData({
                name: '',
                email: '',
                phone: '',
                address: '',
                role: 'Intern',
                motivation: '',
            });

        } catch (error) {
            // Handle errors and display a toast notification
            const errorMessage = error.response?.data?.message || 'Something went wrong. Please try again.';
            
            // Update the loading toast to an error toast
            toast.error(errorMessage, {
                id: loadingToastId,
            });
            console.error('Registration error:', error);
        }
    };

    return (
        <div className="bg-white min-h-screen font-sans">
            {/* Header Component (placeholder) */}
            <Navbar/>

            {/* Registration Form Section */}
            <section className="py-20 px-4 md:px-8 bg-gray-100">
                <div className="container mx-auto max-w-2xl bg-white p-8 rounded-lg shadow-lg">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                            Join Our Team
                        </h2>
                        <p className="mt-2 text-gray-600">
                            Become a force for change and help us empower communities through education.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Full Name */}
                        <div>
                            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                required
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                required
                            />
                        </div>

                        {/* Phone Number */}
                        <div>
                            <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                required
                            />
                        </div>

                        {/* Address */}
                        <div>
                            <label htmlFor="address" className="block text-gray-700 font-semibold mb-2">Address</label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                required
                            />
                        </div>

                        {/* Role */}
                        <div>
                            <label htmlFor="role" className="block text-gray-700 font-semibold mb-2">Applying as</label>
                            <select
                                id="role"
                                name="role"
                                value={formData.role}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                required
                            >
                                <option value="Intern">Intern</option>
                                <option value="Volunteer">Volunteer</option>
                            </select>
                        </div>

                        {/* Motivation */}
                        <div>
                            <label htmlFor="motivation" className="block text-gray-700 font-semibold mb-2">Why do you want to join us?</label>
                            <textarea
                                id="motivation"
                                name="motivation"
                                value={formData.motivation}
                                onChange={handleChange}
                                rows="4"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                required
                            ></textarea>
                        </div>
                        
                        {/* Submit Button */}
                        <div className="text-center">
                            <button
                                type="submit"
                                className="w-full bg-yellow-500 text-gray-900 font-normal py-3 px-8 rounded-lg shadow-lg hover:bg-yellow-600 transition-colors duration-300"
                            >
                                Submit Application
                            </button>
                        </div>
                    </form>
                </div>
            </section>

            {/* Optional: Add a simple footer */}
            <footer className="bg-gray-800 text-white text-center p-6">
                <p>&copy; {new Date().getFullYear()} Basti Ki Pathshala Foundation. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default RegisterPage;