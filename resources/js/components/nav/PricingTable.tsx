import React, { useState } from "react";

const PRICING_PLANS = [
    {
        name: "Standard Explorer",
        tagline: "Ideal for individual travelers and occasional vacationers.",
        monthlyPrice: 0,
        annualPrice: 0,
        currency: "₦",
        period: "free forever",
        badge: null,
        features: [
            "Access to 450+ Airlines & Flights",
            "Standard Flight Booking & Cart",
            "Paystack & Pay-on-Site Support",
            "Email Support (24hr response)",
            "PDF Ticket Generation with QR Code",
        ],
        popular: false,
    },
    {
        name: "Pro Globetrotter",
        tagline: "Designed for frequent fliers, digital nomads, and families.",
        monthlyPrice: 15000,
        annualPrice: 120000,
        currency: "₦",
        period: "per user",
        badge: "Most Popular",
        features: [
            "Everything in Standard Explorer",
            "Zero Service Booking Fees",
            "Priority 24/7 WhatsApp & Email Support",
            "Exclusive 15% Off Hotel Reservations",
            "Flexible Flight Date Changes (+/- 3 days)",
            "Visa Assistance Priority Processing",
        ],
        popular: true,
    },
    {
        name: "Enterprise / Corporate",
        tagline: "Tailored for corporate teams, businesses, and agencies.",
        monthlyPrice: 50000,
        annualPrice: 450000,
        currency: "₦",
        period: "per organization",
        badge: "Business Class",
        features: [
            "Everything in Pro Globetrotter",
            "Dedicated Account Manager",
            "Centralized Monthly Business Billing",
            "Corporate Travel Policy Enforcement",
            "Custom Invoicing & Expense Analytics",
            "Unlimited Team Member Seats",
        ],
        popular: false,
    },
];

export default function PricingTable() {
    const [isAnnual, setIsAnnual] = useState(false);
    const whatsappNumber = "2348061313253"; // Replace with your WhatsApp business number

    const getWhatsAppUrl = (planName: string, priceText: string) => {
        const message = encodeURIComponent(
            `Hello Remlex, I am interested in the *${planName}* plan (${priceText}). Please provide more details and how to get started.`,
        );
        return `https://wa.me/${whatsappNumber}?text=${message}`;
    };

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 text-slate-100 font-sans">
            <div className="max-w-7xl mx-auto space-y-12">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto space-y-4">
                    <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-400/10 px-4 py-1.5 rounded-full border border-amber-400/20">
                        Transparent Pricing Plans
                    </span>
                    <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                        Choose the Right Plan for Your Journeys
                    </h2>
                    <p className="text-slate-400 text-base font-light">
                        Unlock premium perks, zero booking fees, and priority
                        travel assistance. Click any plan to chat with us on
                        WhatsApp.
                    </p>

                    {/* Billing Toggle Switch */}
                    <div className="flex items-center justify-center gap-4 pt-4">
                        <span
                            className={`text-xs font-semibold ${!isAnnual ? "text-white" : "text-slate-400"}`}
                        >
                            Monthly Billing
                        </span>
                        <button
                            onClick={() => setIsAnnual(!isAnnual)}
                            aria-label="Toggle annual billing"
                            className="w-14 h-8 bg-slate-800 rounded-full p-1 relative transition border border-slate-700"
                        >
                            <div
                                className={`w-6 h-6 rounded-full bg-amber-400 transition-transform ${isAnnual ? "translate-x-6" : "translate-x-0"}`}
                            ></div>
                        </button>
                        <span
                            className={`text-xs font-semibold flex items-center gap-1 ${isAnnual ? "text-white" : "text-slate-400"}`}
                        >
                            Annual Billing{" "}
                            <span className="bg-amber-400/20 text-amber-300 text-[10px] px-2 py-0.5 rounded-full">
                                Save 20%
                            </span>
                        </span>
                    </div>
                </div>

                {/* 3-Tier Pricing Cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                    {PRICING_PLANS.map((plan, idx) => {
                        const price = isAnnual
                            ? plan.annualPrice
                            : plan.monthlyPrice;
                        const priceText =
                            price === 0
                                ? "Free"
                                : `${plan.currency}${price.toLocaleString()} (${isAnnual ? "Annual" : "Monthly"})`;
                        const whatsappLink = getWhatsAppUrl(
                            plan.name,
                            priceText,
                        );

                        return (
                            <div
                                key={idx}
                                className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative border ${
                                    plan.popular
                                        ? "bg-gradient-to-b from-slate-900 to-slate-900/90 border-amber-400/50 shadow-2xl shadow-amber-500/10 scale-105 z-10"
                                        : "bg-slate-900/60 border-slate-800 hover:border-slate-700"
                                }`}
                            >
                                {plan.badge && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-400 text-slate-950 font-extrabold text-[11px] uppercase tracking-wider px-4 py-1 rounded-full shadow-md">
                                        {plan.badge}
                                    </div>
                                )}

                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-white">
                                            {plan.name}
                                        </h3>
                                        <p className="text-slate-400 text-xs mt-1.5 leading-relaxed">
                                            {plan.tagline}
                                        </p>
                                    </div>

                                    <div className="flex items-baseline gap-1">
                                        <span className="text-4xl sm:text-5xl font-black text-white">
                                            {price === 0
                                                ? "Free"
                                                : `${plan.currency}${price.toLocaleString()}`}
                                        </span>
                                        <span className="text-xs text-slate-400">
                                            /{" "}
                                            {isAnnual && price > 0
                                                ? "year"
                                                : plan.period}
                                        </span>
                                    </div>

                                    <div className="space-y-3 pt-4 border-t border-slate-800/80">
                                        <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 block">
                                            What's included:
                                        </span>
                                        <ul className="space-y-2.5 text-xs text-slate-300">
                                            {plan.features.map((feat, i) => (
                                                <li
                                                    key={i}
                                                    className="flex items-center gap-2.5"
                                                >
                                                    <span className="text-amber-400 font-bold">
                                                        ✓
                                                    </span>
                                                    {feat}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="pt-8">
                                    <a
                                        href={whatsappLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`block text-center w-full font-bold py-3.5 rounded-2xl text-xs transition shadow-lg flex items-center justify-center gap-2 ${
                                            plan.popular
                                                ? "bg-amber-400 hover:bg-amber-500 text-slate-950 shadow-amber-400/20"
                                                : "bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-600/20"
                                        }`}
                                    >
                                        <span>💬</span> Inquire via WhatsApp
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
