import React from 'react';

interface HeaderProps {
    onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => (
    <header className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-500 text-white p-4 flex items-center justify-between shadow-md sticky top-0 z-30">
        {/* Logo/Title */}
        <h1 className="text-2xl font-extrabold tracking-wide">
            <span className="text-indigo-300">SaaS</span> Product
        </h1>

        {/* Mobile Menu Button */}
        <button
            className="lg:hidden text-white hover:text-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-300 rounded"
            onClick={onMenuClick}
            aria-label="Toggle Menu"
        >
            ☰
        </button>

        {/* Navigation for Desktop */}
        <nav className="hidden lg:flex space-x-8">
            <a
                href="#home"
                className="text-lg font-medium hover:text-indigo-300 transition-colors"
            >
                Home
            </a>
            <a
                href="#about"
                className="text-lg font-medium hover:text-indigo-300 transition-colors"
            >
                About
            </a>
            <a
                href="#showcase"
                className="text-lg font-medium hover:text-indigo-300 transition-colors"
            >
                Showcase
            </a>
            <a
                href="#features"
                className="text-lg font-medium hover:text-indigo-300 transition-colors"
            >
                Features
            </a>
            <a
                href="#get-started"
                className="text-lg font-medium hover:text-indigo-300 transition-colors"
            >
                Get Started
            </a>   <a
                href="#testimonials"
                className="text-lg font-medium hover:text-indigo-300 transition-colors"
            >
                Testimonials
            </a>
        </nav>
    </header>
);

export default Header;
