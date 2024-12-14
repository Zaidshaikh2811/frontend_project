import React from 'react';

const Container1: React.FC = () => (
    <div id="home" className="bg-gradient-to-r from-indigo-200 via-purple-200 to-blue-200 rounded-lg shadow-lg overflow-hidden">
        <div className="relative w-full h-64 sm:h-80 md:h-96">
            <img
                src="/public/photo-1519389950473-47ba0277781c.avif"
                alt="Carousel"
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-30"></div>
            <div className="absolute inset-0 flex items-center justify-center text-white text-2xl sm:text-3xl font-bold">
                <p>Our Amazing Product</p>
            </div>
        </div>
    </div>
);

export default Container1;
