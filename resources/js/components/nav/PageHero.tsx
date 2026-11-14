import React from "react";

interface PageHeroProps {
    title: string;
    subtitle: string;
    badge?: string;
}

export default function PageHero({ title, subtitle, badge }: PageHeroProps) {
    return (
        <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#04658e] to-[#04409b] text-white text-center">
            <div className="max-w-4xl mx-auto space-y-4">
                {badge && (
                    <span className="inline-block text-xs font-bold uppercase tracking-widest text-amber-300 bg-amber-400/20 px-3.5 py-1.5 rounded-full">
                        {badge}
                    </span>
                )}
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                    {title}
                </h1>
                <p className="text-slate-200 text-lg font-light max-w-2xl mx-auto">
                    {subtitle}
                </p>
            </div>
        </div>
    );
}
