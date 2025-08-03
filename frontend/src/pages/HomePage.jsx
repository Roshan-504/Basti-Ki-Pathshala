// src/pages/HomePage.js

import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
// Make sure to add DM Sans to your index.html and tailwind.config.js for this to work
// import Header from '../components/Header'; // Assuming you will create this later
// import Footer from '../components/Footer'; // Assuming you will create this later

const HomePage = () => {
    return (
        <div className="bg-white min-h-screen font-sans">
            {/* Header Component (placeholder) */}
            <Navbar/>
            
            {/* Hero Section */}
            <section className="bg-white py-20 px-4 md:px-8">
                <div className="container mx-auto flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                            Where <span className="text-yellow-500">learning</span> knows no boundaries.
                        </h1>
                        <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto md:mx-0">
                            Join us in our mission to break the barriers of education in underserved communities. With your support, we can provide quality education to children living in slum areas, empowering them with the knowledge and skills they need to build a brighter future. Together, let’s make a difference. Take action today and be a part of the change!                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                            <a href="/register" className="bg-yellow-500 text-gray-900 font-normal py-3 px-8 rounded shadow-lg hover:bg-yellow-600 transition-transform transform hover:scale-105 duration-300">
                                Join Our Team
                            </a>
                            <a href="https://bastikipathshala.org/donate" className="bg-gray-100 text-gray-800 font-normal py-3 px-8 rounded shadow-lg hover:bg-gray-200 transition-transform transform hover:scale-105 duration-300" target="_blank" rel="noopener noreferrer">
                                Donate
                            </a>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <img
                            src="https://bastikipathshala.org/wp-content/uploads/2024/02/image-2048x1306.jpg"
                            alt="Children smiling while studying"
                            className="w-full h-auto rounded-lg shadow-xl"
                        />
                    </div>
                </div>
            </section>

            {/* About Us Section */}
            <section id="about-us" className="bg-[#FBF6ED] py-20 px-4 md:px-8">
                <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-8">
                    <div className="md:w-1/2">
                        <img
                            src="https://bastikipathshala.org/wp-content/uploads/2024/02/IMG20240114122634-scaled.jpg"
                            alt="Students in a classroom"
                            className="w-full h-auto rounded-lg shadow-xl max-h-[400px] object-cover"
                        />
                    </div>
                    <div className="md:w-1/2 text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                            Lighting the Path to Change
                        </h2>
                        <p className="mt-4 text-lg text-gray-600">
                            At Basti Ki Pathshala Foundation, we are more than just an organization – we are a movement, driven by the belief that education is the cornerstone of empowerment. Established under the Indian Societies Act of 1860, we stand as a beacon of hope in underserved communities, dedicated to breaking the chains of poverty through the transformative power of learning.
                        </p>
                        <p className="mt-4 text-lg text-gray-600">
                            Join us in our quest to rewrite the narrative of education, one success story at a time. Together, let’s build a world where every child has the opportunity to dream, to learn, and to soar.
                        </p>
                        <div className="mt-8 flex justify-center md:justify-start">
                             <a href="about-us" className="bg-yellow-500 text-gray-900 font-normal py-3 px-8 rounded shadow-lg hover:bg-yellow-600 transition-transform transform hover:scale-105 duration-300">
                                About Us
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Mission Section */}
            <section className="bg-white py-20 px-4 md:px-8">
                <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
                    <div className="md:w-1/2 text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                            Our Mission
                        </h2>
                        <p className="mt-4 text-lg text-gray-600">
                            Our mission is clear: to break the barriers of education in underserved communities by providing quality education to children living in slum areas. We are dedicated to creating a nurturing learning environment where every child can access the tools and support they need to unlock their full potential.
                        </p>
                        <p className="mt-4 text-lg text-gray-600">
                            Through innovative teaching methods, community engagement, and strategic partnerships, we empower children with the knowledge and skills necessary to build a brighter future. Our work extends beyond the classroom to foster long-term, sustainable change.
                        </p>
                    </div>
                    <div className="md:w-1/2">
                        <img
                            src="https://bastikipathshala.org/wp-content/uploads/2024/02/IMG-20240218-WA0084.jpg"
                            alt="Mentoring session with students"
                            className="w-full h-auto rounded-lg shadow-xl max-h-[400px] object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Statistics Section */}
            <section className="bg-[#FBF6ED] py-16 px-4 md:px-8">
                <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div>
                        <p className="text-4xl md:text-5xl font-extrabold text-yellow-500">31,245</p>
                        <p className="mt-2 text-lg text-gray-600">Lives Changed</p>
                    </div>
                    <div>
                        <p className="text-4xl md:text-5xl font-extrabold text-yellow-500">28,976</p>
                        <p className="mt-2 text-lg text-gray-600">Meals Served</p>
                    </div>
                    <div>
                        <p className="text-4xl md:text-5xl font-extrabold text-yellow-500">19,854</p>
                        <p className="mt-2 text-lg text-gray-600">Interns</p>
                    </div>
                    <div>
                        <p className="text-4xl md:text-5xl font-extrabold text-yellow-500">10,989</p>
                        <p className="mt-2 text-lg text-gray-600">Supporters</p>
                    </div>
                </div>
            </section>

            {/* Join Our Team Section */}
            <section className="bg-white py-20 px-4 md:px-8 text-center">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                        Join Our Team: Be a Force for Change
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        We’re not just building a team; we’re assembling a force for change. We invite passionate individuals to join us in making a tangible difference in the lives of underserved children.
                    </p>
                    <p className="mt-4 text-lg text-gray-600">
                        Whether you’re an educator, a community organizer, or simply someone with a heart for social impact, there’s a place for you in our team.
                    </p>
                    <div className="mt-8">
                        <a href="/register" className="bg-yellow-500 text-gray-900 font-normal py-3 px-10 rounded shadow-lg hover:bg-yellow-600 transition-transform transform hover:scale-105 duration-300">
                            Apply to Join
                        </a>
                    </div>
                </div>
            </section>

            {/* Optional: Add a simple footer */}
            <footer className="bg-gray-800 text-white text-center p-6">
                <p>&copy; {new Date().getFullYear()} Basti Ki Pathshala Foundation. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default HomePage;