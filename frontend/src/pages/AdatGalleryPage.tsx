// src/pages/AdatGalleryPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import { adatItems } from '../data/adatData'; // Import your data
import { useBreakpoint, getResponsiveValue } from "../hooks/useBreakpoint";
import Navbar from '../components/Navbar';
import FooterSection from '../components/FooterSection';

// Helper function to create responsive classes without repetitive twMerge calls
const getResponsiveClass = (breakpoint: string | null, mobile: string, tablet?: string, desktop?: string): string => {
    const values = { mobile, tablet, desktop };
    return getResponsiveValue(values, breakpoint) || mobile;
};

const AdatGalleryPage: React.FC = () => {
    const currentBreakpoint = useBreakpoint();

    const getResponsiveClasses = (mobile: string, tablet?: string, desktop?: string) =>
        getResponsiveClass(currentBreakpoint, mobile, tablet, desktop);

    const commonCardClasses = 'bg-white rounded-[20px] outline outline-1 outline-neutral-700/50 flex flex-col overflow-hidden transition-all duration-300 ease-in-out';
    const hoverCardClasses = 'hover:shadow-lg hover:outline-emerald-900 transform hover:-translate-y-1';

    return (
        <div className="min-h-screen bg-white flex flex-col relative overflow-hidden">
            <Navbar />
            <main className={twMerge(
                getResponsiveClasses("px-4 py-8", "px-8 py-12", "px-16 py-20"),
                "relative z-10 mx-auto w-full max-w-7xl"
            )}>
                {/* Header Section */}
                <div className={twMerge(
                    getResponsiveClasses(
                        "mb-10 text-center",
                        "mb-12 text-center",
                        "mb-16 text-center max-w-[1056px] mx-auto"
                    )
                )}>
                    <h1 className={twMerge(
                        getResponsiveClasses(
                            "text-3xl",
                            "text-5xl",
                            "text-6xl"
                        ),
                        "text-emerald-900 font-['Cormorant'] font-normal"
                    )}>
                        Galeri Adat
                    </h1>
                    <p className={twMerge(
                        getResponsiveClasses(
                            "text-sm leading-tight mt-3",
                            "text-lg leading-relaxed mt-4",
                            "text-3xl leading-relaxed mt-6"
                        ),
                        "text-stone-700 font-['Albert_Sans'] font-normal"
                    )}>
                        Budaya Tual punya keunikan yang sulit ditemukan di tempat lain. Melalui galeri adat ini, Anda bisa melihat sendiri kekayaan tradisi yang masih terjaga hingga kini.
                    </p>
                </div>

                {/* Adat Items Grid */}
                <div className={twMerge(
                    getResponsiveClasses(
                        "grid grid-cols-1 gap-6",
                        "grid grid-cols-2 gap-8",
                        "grid grid-cols-3 gap-8"
                    ),
                    "mx-auto"
                )}>
                    {adatItems.map((item) => (
                        <Link
                            to={`/galeri-adat/${item.slug}`}
                            key={item.slug}
                            className={twMerge(commonCardClasses, hoverCardClasses, "shadow-md")}
                        >
                            <img
                                className={twMerge(
                                    getResponsiveClasses(
                                        "h-48 rounded-t-[18px]",
                                        "h-56 rounded-t-[18px]",
                                        "h-64 rounded-t-[18px]"
                                    ),
                                    "w-full object-cover"
                                )}
                                src={item.mainImage}
                                alt={item.name}
                            />
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className={twMerge(
                                    getResponsiveClasses(
                                        "text-lg leading-snug",
                                        "text-xl leading-snug",
                                        "text-2xl"
                                    ),
                                    "text-stone-900 font-semibold font-['Albert_Sans'] mb-2 min-h-[3rem]"
                                )}>
                                    {item.name}
                                </h3>
                                <p className={twMerge(
                                    getResponsiveClasses(
                                        "text-sm",
                                        "text-base",
                                        "text-lg"
                                    ),
                                    "text-stone-700 font-normal font-['Albert_Sans']"
                                )}>
                                    {item.location}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </main>
            <FooterSection />
        </div>
    );
};

export default AdatGalleryPage;