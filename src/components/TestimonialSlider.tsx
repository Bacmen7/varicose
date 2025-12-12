"use client";

import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: "Ritu, Mumbai",
        quote: "I tried compression stockings for years. One laser session changed everything.",
        image: "/team/1.png"
    },
    {
        id: 2,
        name: "Sanjay, Delhi",
        quote: "The heaviness, swelling, and night cramps — gone after my RFA treatment.",
        image: "/team/3.png"
    },
    {
        id: 3,
        name: "Neha, Bangalore",
        quote: "The platform helped me find a specialist I could trust within minutes.",
        image: "/team/2.png"
    }
];

const TestimonialSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);
    const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        if (isAutoPlaying) {
            autoPlayRef.current = setInterval(nextSlide, 5000);
        }
        return () => {
            if (autoPlayRef.current) clearInterval(autoPlayRef.current);
        };
    }, [isAutoPlaying, currentIndex]);

    const pauseAutoPlay = () => setIsAutoPlaying(false);
    const resumeAutoPlay = () => setIsAutoPlaying(true);

    const minSwipeDistance = 50;

    const onTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
        pauseAutoPlay();
    };

    const onTouchMove = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX);

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) nextSlide();
        if (isRightSwipe) prevSlide();

        resumeAutoPlay();
    };

    return (
        <div className="w-full pt-0 pb-12" style={{ backgroundColor: '#2C847F' }}>
            <div className="container mx-auto px-4 max-w-[1200px]">
                {/* Slider Container */}
                <div
                    className="relative w-full overflow-hidden group"
                    onMouseEnter={pauseAutoPlay}
                    onMouseLeave={resumeAutoPlay}
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                >
                    {/* Slides Track */}
                    <div
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {testimonials.map((testimonial) => (
                            <div
                                key={testimonial.id}
                                className="w-full flex-shrink-0 flex flex-col md:flex-row h-auto md:h-[500px]"
                            >
                                {/* Left Side: Image */}
                                <div className="w-full md:w-1/2 h-[300px] sm:h-[350px] md:h-full relative bg-gray-100">
                                    <img
                                        src={testimonial.image}
                                        alt={`Testimonial from ${testimonial.name}`}
                                        className="w-full h-full object-contain md:object-cover md:object-top"
                                        draggable="false"
                                    />
                                </div>

                                {/* Right Side: Content */}
                                <div
                                    className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-16 text-white"
                                    style={{ backgroundColor: '#2C847F' }}
                                >
                                    <div className="max-w-lg">
                                        <p
                                            className="text-sm font-semibold uppercase tracking-wider mb-4 text-white/70"
                                            style={{ fontFamily: '"Proxima Nova", Arial, sans-serif' }}
                                        >
                                            Real people. Real relief.
                                        </p>
                                        <h3
                                            className="text-xl md:text-2xl lg:text-3xl font-medium leading-snug mb-8 tracking-wide"
                                            style={{ fontFamily: 'Recoleta, Georgia, sans-serif' }}
                                        >
                                            &ldquo;{testimonial.quote}&rdquo;
                                        </h3>
                                        <p
                                            className="text-sm md:text-base font-semibold text-white/90 mb-12"
                                            style={{ fontFamily: '"Proxima Nova", Arial, sans-serif' }}
                                        >
                                            {testimonial.name}
                                        </p>

                                        {/* Bar Pagination */}
                                        <div className="flex space-x-2">
                                            {testimonials.map((_, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => goToSlide(index)}
                                                    className={`h-1.5 rounded-full transition-all duration-300 focus:outline-none cursor-pointer ${currentIndex === index
                                                        ? 'bg-white w-12'
                                                        : 'bg-white/30 hover:bg-white/50 w-8'
                                                        }`}
                                                    aria-label={`Go to slide ${index + 1}`}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Arrows */}
                    <div className="absolute inset-0 pointer-events-none flex items-center justify-between px-4">
                        <button
                            onClick={prevSlide}
                            className="pointer-events-auto bg-black/20 hover:bg-black/40 text-white p-2 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                            aria-label="Previous Slide"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="pointer-events-auto bg-black/20 hover:bg-black/40 text-white p-2 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                            aria-label="Next Slide"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialSlider;
