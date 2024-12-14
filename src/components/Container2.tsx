import React from 'react';

const Container2: React.FC = () => (
    <div id="about" className="bg-white p-6 rounded-lg shadow-lg space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Why Choose Us?</h2>
        <p className="text-gray-600">
            We provide the best SaaS solutions to help businesses scale with ease. Our platform
            is packed with features that you won’t find anywhere else, and we’ve made it easy to
            use for both small businesses and large enterprises.
        </p>
        <ul className="list-disc pl-5 space-y-2">
            <li className="text-gray-600">Easy to integrate</li>
            <li className="text-gray-600">Scalable and secure</li>
            <li className="text-gray-600">24/7 customer support</li>
        </ul>
    </div>
);

export default Container2;
