import React from 'react';

const Container5: React.FC = () => (
    <div id="get-started" className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Get Started with Our Product</h2>
        <p className="text-gray-600">
            Join thousands of businesses that are scaling their operations with our powerful
            SaaS platform. Sign up today and experience the benefits of automation, collaboration,
            and real-time analytics.
        </p>
        <div className="flex justify-center space-x-4">
            <button className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 transition-all">
                Start Free Trial
            </button>
            <button className="bg-gray-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-gray-700 transition-all">
                Learn More
            </button>
        </div>
    </div>
);

export default Container5;
