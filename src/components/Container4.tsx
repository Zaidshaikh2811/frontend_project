import React from 'react';

const Container4: React.FC = () => (
    <div id="features" className="bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
        <div className="w-full md:w-1/2">
            <img
                src="/public/igor-omilaev-eGGFZ5X2LnA-unsplash.jpg"
                alt="Feature"
                className="w-full h-auto object-cover rounded-lg"
            />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl font-semibold text-gray-800">Our Key Features</h2>
            <p className="text-gray-600 mt-4">
                Our platform offers a wide range of features designed to streamline your business
                operations, including automation, analytics, and collaboration tools.
            </p>
        </div>
    </div>
);

export default Container4;
