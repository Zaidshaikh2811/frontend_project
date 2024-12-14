import React from 'react';

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => (
    <aside
        className={`fixed z-20 inset-y-0 left-0 w-64 bg-secondary text-black transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
            } transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static`}
    >
        <nav className="p-4 space-y-4">
            <a href="#home" className="block hover:text-accent">Home</a>
            <a href="#about" className="block hover:text-accent">About</a>
            <a href="#showcase" className="block hover:text-accent">Showcase</a>
            <a href="#features" className="block hover:text-accent">Features</a>
            <a href="#get-started" className="block hover:text-accent">Get Started</a>
            <a href="#testimonials" className="block hover:text-accent">Testimonials</a>
        </nav>
        <button
            className="absolute top-4 right-4 text-white lg:hidden"
            onClick={onClose}
            aria-label="Close Menu"
        >
            ✕
        </button>
    </aside>
);

export default Sidebar;
