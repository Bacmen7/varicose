
import React, { useState, useEffect, useRef } from "react";
import Link from "@/compat/Link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const treatments = [
    {
        title: "Endovenous Laser Treatment (EVLT)",
        desc: "Gold-standard laser therapy",
        img: "/ev1.png",
        slug: "evlt"
    },
    {
        title: "Radiofrequency Ablation (RFA)",
        desc: "Quick, comfortable closure of faulty veins",
        img: "/ev2.png",
        slug: "rfa"
    },
    {
        title: "Ultrasound-Guided Foam Sclerotherapy",
        desc: "Precise, non-surgical treatment",
        img: "/ev3.png",
        slug: "sclerotherapy"
    },
    {
        title: "VenaSeal / Glue Therapy",
        desc: "No heat, no injections, fast recovery",
        img: "/ev1.png",
        slug: "venaseal"
    },
    {
        title: "Microphlebectomy",
        desc: "Removal of bulging surface veins through tiny incisions",
        img: "/ev2.png",
        slug: "microphlebectomy"
    }
];

export default function TreatmentsSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsToShow, setItemsToShow] = useState(3);
    const [maxIndex, setMaxIndex] = useState(0);
    const touchStart = useRef<number | null>(null);
    const touchEnd = useRef<number | null>(null);

    // Responsive items to show
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setItemsToShow(1);
            } else if (window.innerWidth < 1024) {
                setItemsToShow(2);
            } else {
                setItemsToShow(3);
            }
        };

        // Initial check
        handleResize();

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const max = Math.max(0, treatments.length - itemsToShow);
        setMaxIndex(max);
        // Ensure current index is within bounds if window resizes
        if (currentIndex > max) {
            setCurrentIndex(max);
        }
    }, [itemsToShow, treatments.length, currentIndex]);

    const nextSlide = () => {
        if (currentIndex < maxIndex) {
            setCurrentIndex(currentIndex + 1);
        } else {
            // Optional loop behavior
            // setCurrentIndex(0); 
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    // Touch handlers for mobile swipe
    const minSwipeDistance = 50;
    const onTouchStart = (e: React.TouchEvent) => {
        touchEnd.current = null;
        touchStart.current = e.targetTouches[0].clientX;
    };

    const onTouchMove = (e: React.TouchEvent) => {
        touchEnd.current = e.targetTouches[0].clientX;
    };

    const onTouchEnd = () => {
        if (!touchStart.current || !touchEnd.current) return;
        const distance = touchStart.current - touchEnd.current;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe && currentIndex < maxIndex) {
            nextSlide();
        }
        if (isRightSwipe && currentIndex > 0) {
            prevSlide();
        }
    };

    return (
        <section className="py-14 md:py-20 w-full relative bg-white">
            <div className="mx-auto w-full max-w-[1320px] px-5 md:px-8">
                {/* Header */}
                <div className="mb-10 text-center">
                    <p className="text-[12px] md:text-[13px] font-semibold uppercase tracking-[0.18em] text-primary mb-4">
                        TREATMENTS
                    </p>
                    <h2 className="font-heading font-normal tracking-tight leading-[1.15] text-[1.9rem] sm:text-[2.3rem] text-secondary mb-6">
                        Modern, effective, clinic-based procedures
                    </h2>
                    <p className="text-[15px] md:text-base leading-relaxed text-gray-600 max-w-2xl mx-auto">
                        Our partner clinics offer the full spectrum of evidence-based vein therapies.
                    </p>
                </div>

                {/* Carousel Container */}
                <div className="relative mb-16 group">

                    {/* Navigation Arrows (Absolute) */}
                    {/* Only show if we can scroll */}
                    {maxIndex > 0 && (
                        <>
                            <button
                                onClick={prevSlide}
                                disabled={currentIndex === 0}
                                className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10
                        w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center
                        text-primary transition-all duration-300
                        ${currentIndex === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100 hover:scale-110'}
                        max-md:hidden
                    `}
                                aria-label="Previous Treatment"
                            >
                                <ChevronLeft size={24} />
                            </button>

                            <button
                                onClick={nextSlide}
                                disabled={currentIndex >= maxIndex}
                                className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10
                        w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center
                        text-primary transition-all duration-300
                        ${currentIndex >= maxIndex ? 'opacity-0 pointer-events-none' : 'opacity-100 hover:scale-110'}
                        max-md:hidden
                    `}
                                aria-label="Next Treatment"
                            >
                                <ChevronRight size={24} />
                            </button>
                        </>
                    )}

                    {/* Wrapper for overflow hidden */}
                    <div
                        className="overflow-hidden px-3 -mx-3"
                        onTouchStart={onTouchStart}
                        onTouchMove={onTouchMove}
                        onTouchEnd={onTouchEnd}
                    >
                        <div
                            className="flex transition-transform duration-700 ease-in-out"
                            style={{
                                transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`
                            }}
                        >
                            {treatments.map((item, index) => (
                                <div
                                    key={index}
                                    className="shrink-0 px-3"
                                    style={{ width: `${100 / itemsToShow}%` }}
                                >
                                    <Link href={`/treatments/${item.slug}`} className="block h-full">
                                        <div className="group relative rounded-xl border border-black/5 bg-white shadow-sm hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col h-full cursor-pointer">
                                            {/* Image Container */}
                                            <div className="h-48 overflow-hidden relative rounded-t-xl">
                                                <img
                                                    src={item.img}
                                                    alt={item.title}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                                />
                                                <div className="absolute inset-0 bg-[#1e2a5e]/10 group-hover:bg-transparent transition-colors"></div>
                                            </div>

                                            {/* Content */}
                                            <div className="p-6 flex-grow flex flex-col justify-between">
                                                <div>
                                                    <h3 className="font-heading text-secondary text-xl font-medium mb-3 group-hover:text-primary transition-colors">
                                                        {item.title}
                                                    </h3>
                                                    <p className="text-gray-600 leading-relaxed mb-4">
                                                        {item.desc}
                                                    </p>
                                                </div>
                                                <span className="text-primary font-semibold text-sm flex items-center">
                                                    Learn more
                                                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Dots Pagination */}
                    <div className="flex justify-center mt-8 md:hidden gap-2">
                        {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-primary' : 'w-2 bg-gray-300'
                                    }`}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>

                </div>

                {/* CTA */}
                <div className="flex justify-center">
                    <button
                        className="bg-cta text-white rounded-full px-6 py-2 text-sm font-semibold hover:brightness-105 transition-colors flex items-center gap-2 group cursor-pointer"
                    >
                        See Treatment Options
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
    </section>
    );
}
