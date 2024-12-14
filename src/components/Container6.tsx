import React, { useState } from 'react';

const Container6: React.FC = () => {
    const [isClicked, setIsClicked] = useState(false);

    return (
        <div id="testimonials" className="bg-gradient-to-r from-indigo-200 via-purple-200 to-blue-200 rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Exclusive Offer for New Users</h3>
            <p className="text-gray-600 mb-6">
                For a limited time, we are offering exclusive discounts for new customers. Don’t miss out
                on this opportunity to explore all the features of our platform at a discounted price.
            </p>
            <div className="flex justify-center items-center space-x-4">
                <button
                    onClick={() => setIsClicked(!isClicked)}
                    className="bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-700 transition-all"
                >
                    Learn More
                </button>
                <button
                    onClick={() => setIsClicked(!isClicked)}
                    className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition-all"
                >
                    Claim Offer
                </button>
            </div>
            {isClicked && (
                <div className="mt-4 p-6 bg-white rounded-lg shadow-lg animate-pulse">
                    <p className="text-xl text-gray-800"> Check out our special offer.</p>
                </div>
            )}
        </div>
    );
};

export default Container6;
