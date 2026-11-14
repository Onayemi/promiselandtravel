import React, { useState } from "react";
import MainLayout from "@/layouts/main-layout";
import PageHero from "@/components/nav/PageHero";

interface FAQItem {
    question: string;
    answer: string;
}

interface ServiceCategory {
    id: string;
    title: string;
    icon: string;
    description: string;
    faqs: FAQItem[];
}

const SERVICE_CATEGORIES: ServiceCategory[] = [
    {
        id: "visa-assistance",
        title: "Visa Assistance",
        icon: "🛂",
        description:
            "End-to-end visa processing, documentation audits, and embassy appointment scheduling for tourist, business, and transit visas.",
        faqs: [
            {
                question: "Do you guarantee 100% visa approval?",
                answer: "While final visa issuance rests solely with the respective embassy or consulate, our thorough document verification and interview preparation significantly maximize your approval chances.",
            },
            {
                question:
                    "What documents are required to start my visa application?",
                answer: "Basic requirements include a valid international passport (minimum 6 months validity), recent passport photographs, bank statements, and proof of travel purpose. Specific checklists vary by destination.",
            },
            {
                question:
                    "How early should I apply for my visa before my travel date?",
                answer: "We recommend initiating your visa application at least 6 to 8 weeks prior to your intended departure date to account for embassy processing times.",
            },
        ],
    },
    {
        id: "international-tourism",
        title: "International Tourism",
        icon: "🌍",
        description:
            "Curated holiday packages, guided city tours, luxury resort bookings, and group vacation itineraries across global destinations.",
        faqs: [
            {
                question:
                    "Can I customize a vacation package for my family or group?",
                answer: "Yes. We tailor flight schedules, hotel tiers, private tours, and airport transfers to fit your group size, preferences, and budget.",
            },
            {
                question:
                    "Are flights and hotel accommodations included in tour packages?",
                answer: "Our all-inclusive packages cover return flights, hotel stays, daily breakfast, airport pickups, and scheduled sightseeing tours unless you opt for land-only arrangements.",
            },
            {
                question:
                    "Do you offer installment payment plans for international tours?",
                answer: "Yes, for bookings made at least 3 months in advance, we offer flexible milestone payment plans with an initial deposit to lock in rates.",
            },
        ],
    },
    {
        id: "study-work-abroad",
        title: "Study and Work Abroad",
        icon: "🎓",
        description:
            "University admission placements, scholarship guidance, student visa processing, and international career relocation advisory.",
        faqs: [
            {
                question:
                    "Which countries do you process study and work admissions for?",
                answer: "We assist candidates seeking opportunities in the UK, Canada, USA, Germany, Australia, Ireland, and select European and Asian hubs.",
            },
            {
                question:
                    "Can you help secure scholarships or tuition discounts?",
                answer: "Yes, our academic advisors match your transcripts and profile with partner institutions offering merit-based scholarships and partial tuition waivers.",
            },
            {
                question:
                    "Do you assist with post-study work permits and relocation?",
                answer: "We provide comprehensive pre-departure briefings, accommodation assistance, and guidance on legal post-study work pathways in your destination country.",
            },
        ],
    },
    {
        id: "supply-of-services",
        title: "Supply of Services",
        icon: "🤝",
        description:
            "B2B procurement, corporate staffing logistics, event management support, and specialized operational outsourcing.",
        faqs: [
            {
                question:
                    "What types of organizations do you supply services to?",
                answer: "We partner with corporate enterprises, NGOs, government agencies, and SMEs requiring reliable operational, travel, and administrative support.",
            },
            {
                question: "How do you ensure service quality and compliance?",
                answer: "Every engagement is governed by a clear Service Level Agreement (SLA) with dedicated account managers and strict quality assurance benchmarks.",
            },
            {
                question: "Can we request a custom proposal or tender bid?",
                answer: "Yes. Send your Request for Proposal (RFP) or project scope via our contact page, and our corporate desk will respond within 24–48 hours.",
            },
        ],
    },
    {
        id: "import-export",
        title: "Import and Export",
        icon: "🚢",
        description:
            "Cross-border freight forwarding, customs clearance, agricultural and industrial commodity sourcing, and international trade compliance.",
        faqs: [
            {
                question:
                    "Do you handle customs clearance and regulatory documentation?",
                answer: "Yes, we manage Form M, PAAR, SONCAP, NAFDAC permits, Bills of Lading, and full customs brokerage at Nigerian sea and air ports.",
            },
            {
                question: "What commodities can I export through Àjàlá.ng?",
                answer: "We facilitate the export of non-oil commodities such as cocoa, cashew nuts, sesame seeds, shea butter, ginger, and manufactured goods to global buyers.",
            },
            {
                question:
                    "Do you offer both air freight and sea freight options?",
                answer: "Yes, we provide Full Container Load (FCL), Less than Container Load (LCL) sea shipping, and express air cargo depending on your timeline and volume.",
            },
        ],
    },
    {
        id: "general-commerce",
        title: "General Commerce",
        icon: "🏢",
        description:
            "Wholesale distribution, international product sourcing, retail supply chain management, and commercial trading partnerships.",
        faqs: [
            {
                question:
                    "Can you source verified manufacturers and suppliers abroad?",
                answer: "Yes, we verify factories and suppliers across China, Turkey, Europe, and the UAE, conducting quality inspections before shipment.",
            },
            {
                question:
                    "What is the minimum order quantity (MOQ) for commercial procurement?",
                answer: "MOQs depend on the product category, though we consolidate orders for small and medium businesses to help reduce unit procurement costs.",
            },
            {
                question: "How are commercial payments and escrow handled?",
                answer: "We provide transparent invoicing in NGN or USD and secure supplier settlement channels to protect your capital against fraud.",
            },
        ],
    },
    {
        id: "courier-service",
        title: "Courier Service",
        icon: "📦",
        description:
            "Fast, trackable domestic and international parcel delivery, door-to-door express shipping, and e-commerce fulfillment.",
        faqs: [
            {
                question: "How long does international courier delivery take?",
                answer: "Express international shipments typically arrive within 3 to 5 business days across major destinations in the UK, US, Europe, and Africa.",
            },
            {
                question: "Can I track my parcel in real time?",
                answer: "Yes, every shipment is assigned a unique waybill tracking number that allows you to monitor transit milestones from pickup to final delivery.",
            },
            {
                question: "Are there items restricted from courier shipping?",
                answer: "Hazardous materials, flammable liquids, perishable contraband, currency, and illegal substances are strictly prohibited under international aviation laws.",
            },
        ],
    },
];

export default function Services() {
    const [activeCategoryId, setActiveCategoryId] = useState<string>(
        SERVICE_CATEGORIES[0].id,
    );
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

    const activeCategory =
        SERVICE_CATEGORIES.find((cat) => cat.id === activeCategoryId) ||
        SERVICE_CATEGORIES[0];

    const toggleFaq = (index: number) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    return (
        <MainLayout
            title="Our Services & FAQs"
            description="Explore Visa Assistance, International Tourism, Study & Work Abroad, Import & Export, General Commerce, and Courier Services."
        >
            <PageHero
                badge="What We Do"
                title="Comprehensive Global & Travel Services"
                subtitle="From international tourism and study abroad placements to import/export trade and express courier logistics."
            />

            {/* Services Grid */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SERVICE_CATEGORIES.map((service) => (
                        <div
                            key={service.id}
                            id={service.id}
                            className="bg-white rounded-2xl p-7 border border-slate-100 shadow-sm hover:shadow-lg transition flex flex-col justify-between space-y-6"
                        >
                            <div className="space-y-3">
                                <div className="text-4xl">{service.icon}</div>
                                <h3 className="text-xl font-bold text-slate-900">
                                    {service.title}
                                </h3>
                                <p className="text-slate-600 text-xs leading-relaxed">
                                    {service.description}
                                </p>
                            </div>

                            <div className="pt-2 flex items-center justify-between border-t border-slate-100">
                                <button
                                    onClick={() => {
                                        setActiveCategoryId(service.id);
                                        setOpenFaqIndex(0);
                                        document
                                            .getElementById("faq-section")
                                            ?.scrollIntoView({
                                                behavior: "smooth",
                                            });
                                    }}
                                    className="text-xs font-bold text-[#5a0b4d] hover:underline"
                                >
                                    View FAQs ↓
                                </button>
                                <a
                                    href="/contact"
                                    className="bg-slate-100 hover:bg-[#5a0b4d] text-slate-800 hover:text-white font-semibold px-4 py-2 rounded-xl text-xs transition"
                                >
                                    Get Started
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Categorized FAQ Section */}
            <section
                id="faq-section"
                className="bg-slate-100 py-20 border-t border-slate-200/70"
            >
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
                    <div className="text-center space-y-2">
                        <span className="text-xs font-bold uppercase tracking-widest text-[#5a0b4d] bg-[#5a0b4d]/10 px-3 py-1 rounded-full">
                            Frequently Asked Questions
                        </span>
                        <h2 className="text-3xl font-extrabold text-slate-900">
                            Answers Tailored to Every Service
                        </h2>
                        <p className="text-slate-600 text-sm">
                            Select a service category below to browse common
                            questions and answers.
                        </p>
                    </div>

                    {/* Service Category Selector Pills */}
                    <div className="flex flex-wrap justify-center gap-2">
                        {SERVICE_CATEGORIES.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => {
                                    setActiveCategoryId(category.id);
                                    setOpenFaqIndex(0);
                                }}
                                className={`px-4 py-2 rounded-full text-xs font-bold transition ${
                                    activeCategoryId === category.id
                                        ? "bg-[#5a0b4d] text-white shadow-md"
                                        : "bg-white text-slate-700 hover:bg-slate-200 border border-slate-200"
                                }`}
                            >
                                {category.icon} {category.title}
                            </button>
                        ))}
                    </div>

                    {/* Active Category Accordion */}
                    <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-4">
                        <div className="border-b border-slate-100 pb-4 flex items-center gap-3">
                            <span className="text-2xl">
                                {activeCategory.icon}
                            </span>
                            <div>
                                <h3 className="text-lg font-bold text-slate-900">
                                    {activeCategory.title} — FAQs
                                </h3>
                                <p className="text-xs text-slate-500">
                                    Everything you need to know before getting
                                    started
                                </p>
                            </div>
                        </div>

                        <div className="divide-y divide-slate-100">
                            {activeCategory.faqs.map((faq, index) => {
                                const isOpen = openFaqIndex === index;
                                return (
                                    <div key={index} className="py-4">
                                        <button
                                            onClick={() => toggleFaq(index)}
                                            className="w-full flex justify-between items-center text-left gap-4 focus:outline-none"
                                        >
                                            <span className="text-sm font-bold text-slate-800">
                                                {faq.question}
                                            </span>
                                            <span className="text-[#5a0b4d] font-bold text-lg">
                                                {isOpen ? "−" : "+"}
                                            </span>
                                        </button>
                                        {isOpen && (
                                            <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed pr-6">
                                                {faq.answer}
                                            </p>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}
