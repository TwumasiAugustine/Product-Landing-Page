/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Video from '../assets/pexels-karolina-grabowska-8532808-4096x2160-25fps.mp4';
import SignUp from '../component/signup';
import '../style/heroSection.css';

function HeroSection() {
    return (
        <section className="video-background">
            <div className="video-overlay">
                <div className="text">
                    <h1>Discover the world's finest watches</h1>
                    <p>
                        From the most exclusive brands to the most sought-after timepieces, Klassic Watches is your
                        destination for the world's finest watches.
                    </p>
                    <a href="#" className="btn" aria-label='Shop now'>
                        Shop Now
                    </a>
                </div>
            </div>
            <video autoPlay loop muted loading="lazy">
                <source src={Video} type="video/mp4"></source>
            </video>
            <SignUp />
        </section>
    );
}

export default HeroSection;
