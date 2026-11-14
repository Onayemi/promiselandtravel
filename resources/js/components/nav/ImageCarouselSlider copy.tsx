import React, { useState, useEffect } from "react";

interface CarouselCardData {
    id: number;
    category: string;
    title: string;
    slides: {
        id: number;
        image: string;
        currencySymbol: string;
        amount: string;
        sourceName: string;
        sourceLogo: string;
        badgeColor: string;
    }[];
}

// Data set for the 4 grid columns/cards, each containing its own sliding images
const GRID_CAROUSEL_ITEMS: CarouselCardData[] = [
    {
        id: 1,
        category: "Personal Account",
        title: "Global Payouts",
        slides: [
            {
                id: 101,
                image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800",
                currencySymbol: "€",
                amount: "500",
                sourceName: "Payment from Meta",
                sourceLogo: "🌐",
                badgeColor: "text-blue-400",
            },
            {
                id: 102,
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
                currencySymbol: "$",
                amount: "1,250",
                sourceName: "Stripe Payout",
                sourceLogo: "⚡",
                badgeColor: "text-emerald-400",
            },
        ],
    },
    {
        id: 2,
        category: "Business Account",
        title: "Multi-Currency Flow",
        slides: [
            {
                id: 201,
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
                currencySymbol: "$",
                amount: "3,400",
                sourceName: "Payment from Upwork",
                sourceLogo: "💼",
                badgeColor: "text-emerald-400",
            },
            {
                id: 202,
                image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800",
                currencySymbol: "£",
                amount: "2,100",
                sourceName: "Client Transfer",
                sourceLogo: "🏦",
                badgeColor: "text-purple-400",
            },
        ],
    },
    {
        id: 3,
        category: "Travel & Tours",
        title: "Instant Flight Booking",
        slides: [
            {
                id: 301,
                image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800",
                currencySymbol: "₦",
                amount: "145,000",
                sourceName: "Lagos to London",
                sourceLogo: "✈️",
                badgeColor: "text-amber-400",
            },
            {
                id: 302,
                image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800",
                currencySymbol: "$",
                amount: "850",
                sourceName: "Dubai Vacation Package",
                sourceLogo: "🏖️",
                badgeColor: "text-amber-400",
            },
        ],
    },
    {
        id: 4,
        category: "Trade & Logistics",
        title: "Import & Export",
        slides: [
            {
                id: 401,
                image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
                currencySymbol: "$",
                amount: "12,400",
                sourceName: "Cargo Clearance",
                sourceLogo: "🚢",
                badgeColor: "text-blue-400",
            },
            {
                id: 402,
                image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800",
                currencySymbol: "₦",
                amount: "950,000",
                sourceName: "Wholesale Supply",
                sourceLogo: "📦",
                badgeColor: "text-purple-400",
            },
        ],
    },
];

// Reusable Sub-component for an individual grid card with its own 5-second slide timer
function CarouselGridCard({ item }: { item: CarouselCardData }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % item.slides.length);
        }, 5000); // Slides every 5 seconds
        return () => clearInterval(timer);
    }, [item.slides.length]);

    const currentSlide = item.slides[currentIndex];

    return (
        <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 shadow-xl h-[400px] flex flex-col justify-between group">
            {/* Background Image Track */}
            <div className="absolute inset-0">
                <img
                    src={currentSlide.image}
                    alt={item.title}
                    className="w-full h-full object-cover brightness-[0.65] transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>
            </div>

            {/* Top Badge */}
            <div className="relative z-10 p-5 flex justify-between items-center">
                <div className="bg-slate-900/80 backdrop-blur-md border border-slate-700/60 px-3.5 py-1.5 rounded-full flex items-center gap-2 shadow-md">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span className="text-[11px] font-bold text-white tracking-wide">
                        {item.category}
                    </span>
                </div>
            </div>

            {/* Bottom Content & Floating Notification Card */}
            <div className="relative z-10 p-5 space-y-4">
                <h3 className="text-xl font-extrabold text-white leading-tight">
                    {item.title}
                </h3>

                {/* Floating Transaction / Activity Card */}
                <div className="bg-white/95 backdrop-blur-md text-slate-950 px-4 py-3 rounded-2xl shadow-lg flex items-center gap-3 border border-white/20 transition-all duration-500">
                    <div className="w-8 h-8 rounded-xl bg-slate-100 flex items-center justify-center text-sm font-bold shadow-inner">
                        {currentSlide.sourceLogo}
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="text-[10px] font-semibold text-slate-500 uppercase truncate">
                            {currentSlide.sourceName}
                        </div>
                        <div
                            className={`text-base font-black ${currentSlide.badgeColor}`}
                        >
                            +{currentSlide.currencySymbol}
                            {currentSlide.amount}
                        </div>
                    </div>
                </div>

                {/* Slide Indicator Dots for this specific card */}
                <div className="flex justify-center gap-1.5 pt-1">
                    {item.slides.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            aria-label={`Go to slide ${idx + 1}`}
                            className={`h-1 rounded-full transition-all duration-300 ${
                                currentIndex === idx
                                    ? "w-6 bg-amber-400"
                                    : "w-2 bg-white/40"
                            }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function ImageCarouselSlider() {
    return (
        <section className="bg-slate-950 py-20 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-7xl mx-auto space-y-10">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto space-y-3">
                    <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-400/10 px-4 py-1.5 rounded-full border border-amber-400/20">
                        Dynamic Showcase
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                        Explore Our Solutions in Action
                    </h2>
                    <p className="text-slate-400 text-xs sm:text-sm font-light">
                        Real-time transactions and live service previews across
                        our platform features.
                    </p>
                </div>

                {/* Responsive Grid Layout: 1 col on sm, 2 cols on md, 4 cols on lg */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {GRID_CAROUSEL_ITEMS.map((item) => (
                        <CarouselGridCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
}
