import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    const features = [
        {
            title: 'Automated Timetable Creation',
            description: 'Generate conflict-free schedules automatically with our smart algorithm',
            icon: '🗓️',
        },
        {
            title: 'Google Calendar Integration',
            description: 'Seamlessly sync your timetables with Google Calendar',
            icon: '📅',
        },
        {
            title: 'Conflict Resolution',
            description: 'Intelligent system to detect and resolve scheduling conflicts',
            icon: '⚡',
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Banner Section */}
            <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                <div className="container mx-auto px-4 py-16 md:py-24">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Timetable Management System
                        </h1>
                        <p className="text-xl md:text-2xl mb-8">
                            Streamline your scheduling process with our intelligent timetable solution
                        </p>
                        <Link
                            to="/login"
                            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors duration-200 focus:ring-4 focus:ring-white focus:ring-opacity-50 focus:outline-none"
                            role="button"
                            aria-label="Get Started with Timetable Management"
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="container mx-auto px-4 py-16">
                <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                    Key Features
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200"
                        >
                            <div className="text-4xl mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold mb-3 text-gray-800">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gray-100 py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-8 text-gray-800">
                        Ready to Get Started?
                    </h2>
                    <Link
                        to="/signup"
                        className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors duration-200 focus:ring-4 focus:ring-blue-300 focus:outline-none"
                        role="button"
                        aria-label="Sign up for Timetable Management"
                    >
                        Create Account
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;