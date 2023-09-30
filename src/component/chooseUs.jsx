import React, { useState, useEffect, useRef } from "react";

const ChooseUs = () => {
    const bannerRef = useRef(null);
    const [showCard, setShowCard] = useState(false);
    const cardRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const bannerRect = bannerRef.current.getBoundingClientRect();
            const cardRect = cardRef.current.getBoundingClientRect();
            if (bannerRect.top <= cardRect.top) {
                setShowCard(true);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <div className="banner" ref={bannerRef}>
                <div
                    className={`ourHeritage-card animate__animated ${showCard ? 'animate__slideInLeft' : ''}`}
                    ref={cardRef}
                >
                    <h3>Our Heritage</h3>
                    <p className="long-desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae. Lorem ipsum dolor sit
                        amet consectetur adipisicing elit. Quisquam, quae. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Quisquam, quae. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quisquam, quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae. Lorem
                        ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <a href='#'>Read More About Our History</a>
                </div>
            </div>
    )
}

export default ChooseUs