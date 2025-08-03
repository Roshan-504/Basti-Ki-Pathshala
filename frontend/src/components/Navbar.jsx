import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Users, ChevronDown, LayoutDashboard, LogOut, Settings, PlusCircle, Search } from 'lucide-react'; // Added PlusCircle and Search
import useAuthStore from '../stores/authStore';
import { toast } from 'react-hot-toast';

function Navbar() {
    const { user, logout } = useAuthStore();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        toast.success('Logged out successfully!'); // Provide feedback on logout
        navigate('/');
    };


    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
                <a href="/"><img className='w-auto h-8' src="https://bastikipathshala.org/wp-content/uploads/2024/02/Basti_Ki_Pathshala-_Official_Logo-removebg-preview.png" alt="logo" /></a>
                <span className="text-gray-800 text-lg font-semibold hidden md:block">Basti Ki Pathshala</span>
            </div>
            <ul className="flex items-center space-x-6">
                <li><a href="/" className="text-gray-600 hover:text-yellow-600 transition-colors duration-300">Home</a></li>
                <li><a href="about-us" className="text-gray-600 hover:text-yellow-600 transition-colors duration-300">About Us</a></li>
                <li>
                    <a href="/register" className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg font-normal hover:bg-yellow-600 transition-colors duration-300">
                        Join Our Team
                    </a>
                </li>
                {/* Admin Login Link */}
                <li>{
                    user ? <button
                        onClick={handleLogout}
                        className="flex items-center font-normal gap-2 px-4 py-2 text-white bg-red-500 hover:bg-red-600 rounded transition-all duration-200"
                        >
                        <LogOut size={18} />
                        Logout
                        </button>
                    : <Link to="/login" className="bg-yellow-500 text-gray-800 font-normal px-4 py-2 rounded shadow-lg hover:bg-yellow-600 transition-colors duration-300">
                        Admin Login
                    </Link>
                    }
                </li>
            </ul>
        </nav>
    </header>
    );
}

export default Navbar;