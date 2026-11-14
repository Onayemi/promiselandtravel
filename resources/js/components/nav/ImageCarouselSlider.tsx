import React, { useState, useEffect } from "react";

interface CarouselSlideItem {
    id: number;
    image: string;
    currencySymbol: string;
    amount: string;
    sourceName: string;
    sourceLogo: string;
    badgeColor: string;
    category?: string;
    title: string;
}

const CAROUSEL_SLIDES: CarouselSlideItem[] = [
    {
        id: 1,
        image: "/images/game/advert1.jpg",
        currencySymbol: "€",
        amount: "500",
        sourceName: "Payment from Meta",
        sourceLogo: "🌐",
        badgeColor: "text-blue-400",
        // category: "Personal Account",
        title: "Receive Global Funds",
    },
    {
        id: 2,
        image: "/images/game/advert2.jpg",
        currencySymbol: "$",
        amount: "1,250",
        sourceName: "Payment from Upwork",
        sourceLogo: "💼",
        badgeColor: "text-emerald-400",
        // category: "Freelancer Account",
        title: "Get Paid in USD & EUR",
    },
    {
        id: 3,
        image: "/images/game/advert3.jpg",
        currencySymbol: "£",
        amount: "3,400",
        sourceName: "Stripe Payout",
        sourceLogo: "⚡",
        badgeColor: "text-purple-400",
        // category: "Business Account",
        title: "Multi-Currency Payouts",
    },
    {
        id: 4,
        image: "/images/game/advert4.jpg",
        currencySymbol: "$",
        amount: "890",
        sourceName: "Client Transfer",
        sourceLogo: "🤝",
        badgeColor: "text-amber-400",
        // category: "Corporate",
        title: "Instant Settlement",
    },
    {
        id: 5,
        image: "/images/game/advert5.jpg",
        currencySymbol: "€",
        amount: "2,100",
        sourceName: "PayPal Invoice",
        sourceLogo: "💳",
        badgeColor: "text-cyan-400",
        // category: "Freelancer",
        title: "Secure Global Invoicing",
    },
];

export default function ImageCarouselSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Determine items visible per view based on Tailwind breakpoints
    // sm = 1, md = 2, lg = 4
    const getVisibleCount = () => {
        if (typeof window === "undefined") return 4;
        if (window.innerWidth >= 1024) return 4;
        if (window.innerWidth >= 768) return 2;
        return 1;
    };

    const [visibleCount, setVisibleCount] = useState(4);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setVisibleCount(4);
            } else if (window.innerWidth >= 768) {
                setVisibleCount(2);
            } else {
                setVisibleCount(1);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const maxIndex = Math.max(0, CAROUSEL_SLIDES.length - visibleCount);

    // Auto-advance slide every 5 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(timer);
    }, [maxIndex]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    };

    return (
        <section className="bg-slate-950 py-16 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden">
            <div className="max-w-7xl mx-auto space-y-8">
                {/* Section Header */}
                <div className="flex justify-between items-end">
                    <div>
                        <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
                            Global Coverage
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
                            Trusted Payouts & Global Reach
                        </h2>
                    </div>

                    {/* Navigation Arrows */}
                    <div className="flex gap-2">
                        <button
                            onClick={prevSlide}
                            aria-label="Previous Slide"
                            className="w-10 h-10 bg-slate-900 hover:bg-slate-800 text-white rounded-full flex items-center justify-center transition border border-slate-700/60 shadow"
                        >
                            ❮
                        </button>
                        <button
                            onClick={nextSlide}
                            aria-label="Next Slide"
                            className="w-10 h-10 bg-slate-900 hover:bg-slate-800 text-white rounded-full flex items-center justify-center transition border border-slate-700/60 shadow"
                        >
                            ❯
                        </button>
                    </div>
                </div>

                {/* Horizontal Sliding Track */}
                <div className="relative overflow-hidden w-full">
                    <div
                        className="flex transition-transform duration-700 ease-out gap-6"
                        style={{
                            transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
                        }}
                    >
                        {CAROUSEL_SLIDES.map((slide) => (
                            <div
                                key={slide.id}
                                className="w-full sm:w-1/2 lg:w-1/4 flex-shrink-0"
                            >
                                <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 shadow-xl h-[400px] flex flex-col justify-between group">
                                    {/* Background Image */}
                                    <img
                                        src={slide.image}
                                        alt={slide.title}
                                        className="absolute inset-0 w-full h-full object-cover brightness-[0.95] group-hover:scale-135 transition duration-500"
                                    />

                                    {/* Gradient Vignette Overlay */}
                                    {/* <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div> */}

                                    {/* Top Floating Category Badge */}
                                    {/* <div className="relative z-10 p-5">
                                        <span className="bg-slate-900/80 backdrop-blur-md border border-slate-700/65 px-3 py-1 rounded-full text-[11px] font-bold text-white tracking-wide shadow">
                                            {slide.category}
                                        </span>
                                    </div> */}

                                    {/* Bottom Content & Notification Card */}
                                    {/* <div className="relative z-10 p-5 space-y-4">
                                        <h3 className="text-lg font-bold text-white">
                                            {slide.title}
                                        </h3>
                                    </div> */}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
