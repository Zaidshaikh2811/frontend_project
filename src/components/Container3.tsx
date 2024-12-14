import React, { useState } from 'react';

const Container3: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            image: "/public/unseen-studio-s9CC2SKySJM-unsplash.jpg",
            title: "Feature 1",
            description: "This is the first feature of our product.",
        },
        {
            image: "/public/ian-schneider-TamMbr4okv4-unsplash.jpg",
            title: "Feature 2",
            description: "This is the second feature of our product.",
        },
        {
            image: "/public/ian-schneider-TamMbr4okv4-unsplash.jpg",
            title: "Feature 3",
            description: "This is the third feature of our product.",
        },
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div id="showcase" className="bg-white p-6 rounded-lg shadow-lg">
            <div className="relative">
                <img
                    src={slides[currentSlide].image}
                    alt="Feature"
                    className="w-full h-64 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black opacity-25"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white space-y-4">
                    <h3 className="text-2xl font-semibold">{slides[currentSlide].title}</h3>
                    <p className="text-lg">{slides[currentSlide].description}</p>
                </div>
                <div className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white cursor-pointer">
                    <button onClick={prevSlide}>❮</button>
                </div>
                <div className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white cursor-pointer">
                    <button onClick={nextSlide}>❯</button>
                </div>
            </div>
        </div>
    );
};

export default Container3;
