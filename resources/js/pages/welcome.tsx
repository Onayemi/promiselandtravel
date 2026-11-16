import BannerSlider from "@/components/nav/BannerSlider";
import ImageCarouselSlider from "@/components/nav/ImageCarouselSlider";
import LogoCarousel from "@/components/nav/LogoCarousel";
import MainLayout from "@/layouts/main-layout";

const bannerSlides = [
    {
        id: 1,
        image: "/images/banners/banner1.png",
        // image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80",
        // title: "Build Modern Apps with Laravel & React",
        // subtitle:
        //     "Deliver high-performance web experiences with Inertia.js and TypeScript.",
        // ctaText: "Get Started",
        // ctaLink: "/about",
    },
    {
        id: 2,
        image: "/images/banners/banner2.png",
    },
    {
        id: 3,
        image: "/images/banners/banner3.png",
    },
    {
        id: 4,
        image: "/images/banners/banner4.png",
    },
];

export default function Welcome() {
    // const { auth } = usePage().props;

    return (
        <MainLayout title="Home Page" description="Welcome to our home page">
            {/* Full-width Hero Banner Slider */}
            <BannerSlider slides={bannerSlides} />

            <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#05599e] to-[#02508c] text-white text-center">
                <div className="max-w-4xl mx-auto space-y-4">
                    <h1 className="text-4xl font-extrabold tracking-tight">
                        Comprehensive Travel Solutions
                    </h1>
                    <p className="text-slate-200 text-lg font-light max-w-2xl mx-auto">
                        From flight ticketing to full-scale logistics, we handle
                        every detail.
                    </p>
                </div>
            </div>

            {/* Carousel Slide */}
            <ImageCarouselSlider />

            {/* Logo Carousel Slide */}
            <LogoCarousel />

            {/* Multi-item Image Carousel */}
            {/* <ImageCarousel items={carouselImages} /> */}
        </MainLayout>
    );
}
