import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Users, ChevronDown, LayoutDashboard, LogOut, Settings, PlusCircle, Search, Menu, X } from 'lucide-react';
import useAuthStore from '../stores/authStore';
import { toast } from 'react-hot-toast';

function Navbar() {
    const { user, logout } = useAuthStore();
    const navigate = useNavigate();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleLogout = () => {
        logout();
        toast.success('Logged out successfully!');
        navigate('/');
    };

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo Section */}
                <div className="flex items-center space-x-2">
                    <a href="/">
                        <img className='w-auto h-8' src="https://bastikipathshala.org/wp-content/uploads/2024/02/Basti_Ki_Pathshala-_Official_Logo-removebg-preview.png" alt="logo" />
                    </a>
                    <span className="text-gray-800 text-lg font-semibold hidden md:block">Basti Ki Pathshala</span>
                </div>

                {/* Mobile Menu Button (Hamburger) */}
                <div className="md:hidden">
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-600 hover:text-yellow-600 focus:outline-none">
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center space-x-6">
                    <li><a href="/" className="text-gray-600 hover:text-yellow-600 transition-colors duration-300">Home</a></li>
                    <li><a href="about-us" className="text-gray-600 hover:text-yellow-600 transition-colors duration-300">About Us</a></li>
                    <li>
                        {!user ?
                            <a href="/register" className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg font-normal hover:bg-yellow-600 transition-colors duration-300">
                                Join Our Team
                            </a>
                            : ""
                        }
                    </li>
                    <li>
                        {user ? 
                            <button
                                onClick={handleLogout}
                                className="flex items-center font-normal gap-2 px-4 py-2 text-white bg-red-500 hover:bg-red-600 rounded transition-all duration-200"
                            >
                                <LogOut size={18} />
                                Logout
                            </button>
                            : 
                            <Link to="/login" className="bg-yellow-500 text-gray-800 font-normal px-4 py-2 rounded shadow-lg hover:bg-yellow-600 transition-colors duration-300">
                                Admin Login
                            </Link>
                        }
                    </li>
                </ul>
            </nav>
            
            {/* Mobile Menu (Collapsible) */}
            <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
                <ul className="flex flex-col space-y-4 px-4 py-4 bg-white shadow-md">
                    <li><a href="/" className="block text-gray-600 hover:text-yellow-600 transition-colors duration-300">Home</a></li>
                    <li><a href="about-us" className="block text-gray-600 hover:text-yellow-600 transition-colors duration-300">About Us</a></li>
                    <li>
                        {!user ?
                            <a href="/register" className="block w-full text-center bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg font-normal hover:bg-yellow-600 transition-colors duration-300">
                                Join Our Team
                            </a>
                            : ""
                        }
                    </li>
                    <li>
                        {user ? 
                            <button
                                onClick={handleLogout}
                                className="flex items-center justify-center w-full font-normal gap-2 px-4 py-2 text-white bg-red-500 hover:bg-red-600 rounded transition-all duration-200"
                            >
                                <LogOut size={18} />
                                Logout
                            </button>
                            : 
                            <Link to="/login" className="block w-full text-center bg-yellow-500 text-gray-800 font-normal px-4 py-2 rounded shadow-lg hover:bg-yellow-600 transition-colors duration-300">
                                Admin Login
                            </Link>
                        }
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Navbar;