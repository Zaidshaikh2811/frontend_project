import React from 'react';

const Carousel: React.FC = () => (
    <div className="relative">
        <div className="overflow-hidden">
            <img src="/photo-1519389950473-47ba0277781c.avif" alt="Slide 1" />
        </div>
        <button className="absolute left-0">◀</button>
        <button className="absolute right-0">▶</button>
    </div>
);

export default Carousel;
