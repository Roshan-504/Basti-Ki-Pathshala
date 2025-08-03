import React, { useState, useEffect } from 'react';
import axiosInstance from '../services/axiosInstance';
import toast from 'react-hot-toast';
import Navbar from '../components/Navbar';
import { User, Mail, Phone, MapPin, Briefcase, MessageSquare, Eye, Trash2, Loader2, AlertCircle } from 'lucide-react';

const ApplicantModal = ({ applicant, onClose }) => {
    if (!applicant) return null;

    return (
        <div className="fixed inset-0 bg-slate-800/30 bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-xl w-full max-w-md">
                <div className="bg-yellow-500 px-6 py-4 rounded-t-xl flex justify-between items-center">
                    <h3 className="text-xl font-bold text-gray-900 flex items-center">
                        <User className="mr-2 h-5 w-5" />
                        {applicant.name}
                    </h3>
                    <button
                        onClick={onClose}
                        className="text-gray-900 hover:text-black transition-colors"
                    >
                        ✕
                    </button>
                </div>

                <div className="p-6 space-y-4">
                    <div className="flex items-start">
                        <Mail className="h-5 w-5 text-yellow-500 mt-0.5 mr-3 flex-shrink-0" />
                        <div>
                            <p className="text-sm font-medium text-gray-500">Email</p>
                            <p className="text-gray-900">{applicant.email}</p>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <Phone className="h-5 w-5 text-yellow-500 mt-0.5 mr-3 flex-shrink-0" />
                        <div>
                            <p className="text-sm font-medium text-gray-500">Phone</p>
                            <p className="text-gray-900">{applicant.phone}</p>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-yellow-500 mt-0.5 mr-3 flex-shrink-0" />
                        <div>
                            <p className="text-sm font-medium text-gray-500">Address</p>
                            <p className="text-gray-900">{applicant.address}</p>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <Briefcase className="h-5 w-5 text-yellow-500 mt-0.5 mr-3 flex-shrink-0" />
                        <div>
                            <p className="text-sm font-medium text-gray-500">Role</p>
                            <p className="text-gray-900">{applicant.role}</p>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <MessageSquare className="h-5 w-5 text-yellow-500 mt-0.5 mr-3 flex-shrink-0" />
                        <div>
                            <p className="text-sm font-medium text-gray-500">Motivation</p>
                            <p className="text-gray-900">{applicant.motivation}</p>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-50 px-6 py-4 rounded-b-xl flex justify-end">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

const AdminPage = () => {
    const [applicants, setApplicants] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedApplicant, setSelectedApplicant] = useState(null);

    const fetchApplicants = async () => {
        try {
            const response = await axiosInstance.get('/api/application/applicants');
            setApplicants(response.data);
        } catch (err) {
            console.error('Failed to fetch applicants:', err);
            setError('Failed to fetch applicant data.');
            toast.error('Failed to load applicant data.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchApplicants();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this application?')) {
            try {
                await axiosInstance.delete(`/api/application/delete/${id}`);
                setApplicants(applicants.filter(applicant => applicant._id !== id));
                toast.success('Application deleted successfully!');
            } catch (err) {
                console.error('Failed to delete applicant:', err);
                toast.error('Failed to delete application.');
            }
        }
    };

    const handleViewDetails = (applicant) => {
        setSelectedApplicant(applicant);
        setIsModalOpen(true);
    };
    
    const clipText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + '...';
        }
        return text;
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-50">
                <div className="text-center">
                    <Loader2 className="h-12 w-12 text-yellow-500 animate-spin mx-auto" />
                    <p className="mt-4 text-lg font-medium text-gray-700">Loading applicants...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-50">
                <div className="text-center max-w-md p-6 bg-white rounded-xl shadow-md">
                    <AlertCircle className="h-12 w-12 text-red-500 mx-auto" />
                    <h3 className="mt-4 text-lg font-medium text-gray-900">Error loading data</h3>
                    <p className="mt-2 text-gray-500">{error}</p>
                    <button
                        onClick={fetchApplicants}
                        className="mt-4 px-4 py-2 bg-yellow-500 text-gray-900 rounded-lg hover:bg-yellow-600 transition-colors"
                    >
                        Try Again
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            
            <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                        Applications Dashboard
                    </h1>
                    <p className="text-lg text-gray-600">
                        Manage all intern and volunteer applications
                    </p>
                </div>

                {applicants.length === 0 ? (
                    <div className="bg-white rounded-xl shadow-sm p-8 text-center">
                        <User className="h-12 w-12 text-gray-400 mx-auto" />
                        <h3 className="mt-4 text-lg font-medium text-gray-900">No applications yet</h3>
                        <p className="mt-2 text-gray-500">When applications come in, they'll appear here.</p>
                    </div>
                ) : (
                    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Address</th>
                                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Motivation</th>
                                        <th className="px-6 py-4 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {applicants.map((applicant) => (
                                        <tr key={applicant._id} className="hover:bg-yellow-50 transition-colors">
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-yellow-100 flex items-center justify-center">
                                                        <User className="h-5 w-5 text-yellow-600" />
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-gray-900">{applicant.name}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{applicant.email}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{applicant.phone}</td>
                                            <td className="px-6 py-4 text-sm text-gray-500 max-w-xs">{clipText(applicant.address, 30)}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                                    applicant.role === 'Intern' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                                                }`}>
                                                    {applicant.role}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-500 max-w-xs">{clipText(applicant.motivation, 50)}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                                                <button
                                                    onClick={() => handleViewDetails(applicant)}
                                                    className="text-yellow-600 hover:text-yellow-800 transition-colors inline-flex items-center"
                                                    title="View details"
                                                >
                                                    <Eye className="h-4 w-4 mr-1" /> View
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(applicant._id)}
                                                    className="text-red-600 hover:text-red-800 transition-colors inline-flex items-center"
                                                    title="Delete"
                                                >
                                                    <Trash2 className="h-4 w-4 mr-1" /> Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>

            {/* Conditionally render the modal */}
            {isModalOpen && (
                <ApplicantModal 
                    applicant={selectedApplicant} 
                    onClose={() => setIsModalOpen(false)} 
                />
            )}
        </div>
    );
};

export default AdminPage;