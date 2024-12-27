'use client'
import { useState } from "react";

export default function Hero() {
    const [activeIndex, setActiveIndex] = useState(0);

    const images = [
        "https://images.pexels.com/photos/3059609/pexels-photo-3059609.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/1961792/pexels-photo-1961792.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/1961792/pexels-photo-1961792.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/3059609/pexels-photo-3059609.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/3059609/pexels-photo-3059609.jpeg?auto=compress&cs=tinysrgb&w=400"
    ];

    const nextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setActiveIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
    };

    return (
        <section className="p-6">
            <div id="controls-carousel" className="relative w-full">
                <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={`absolute w-full transition-opacity duration-700 ease-in-out ${
                                index === activeIndex
                                    ? "opacity-100"
                                    : "opacity-0"
                            }`}
                        >
                            <img
                                src={image}
                                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                alt={`Slide ${index}`}
                            />
                        </div>
                    ))}
                </div>

                {/* Previous Button */}
                <button
                    type="button"
                    className="absolute top-1/2 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    onClick={prevSlide}
                    style={{ transform: "translateY(-50%)" }}
                >
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg
                            className="w-4 h-4 text-white  rtl:rotate-180"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 1 1 5l4 4"
                            />
                        </svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>

                {/* Next Button */}
                <button
                    type="button"
                    className="absolute top-1/2 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    onClick={nextSlide}
                    style={{ transform: "translateY(-50%)" }}
                >
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg
                            className="w-4 h-4 text-white  rtl:rotate-180"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m1 9 4-4-4-4"
                            />
                        </svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>
        </section>
    );
}
