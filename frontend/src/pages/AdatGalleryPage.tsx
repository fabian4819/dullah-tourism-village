// src/pages/AdatGalleryPage.tsx
import React from 'react';
import Navbar from '../components/Navbar';
import FooterSection from '../components/FooterSection';
import { twMerge } from 'tailwind-merge';
import { useBreakpoint, getResponsiveValue } from "../hooks/useBreakpoint";
import { Link } from 'react-router-dom';
import { adatItems } from '../data/adatData'; // Import your data

const AdatGalleryPage: React.FC = () => {
    const currentBreakpoint = useBreakpoint();

    const responsiveClass = (
        mobile: string,
        tablet?: string,
        desktop?: string
    ) => {
        const values = {
            mobile,
            tablet,
            desktop,
        };
        return twMerge(getResponsiveValue(values, currentBreakpoint) || mobile);
    };

    return (
        <div className="min-h-screen bg-white flex flex-col relative overflow-hidden">
            <Navbar />
            <main className={twMerge(
                responsiveClass(
                    "flex-grow px-3 py-8",
                    "flex-grow px-5 py-12",
                    "flex-grow px-12 py-16"
                ),
                "relative z-10 mx-auto" // Added mx-auto for centering on desktop
            )}>
                {/* Header Section */}
                <div className={twMerge(
                    responsiveClass(
                        "w-full flex flex-col justify-start items-center gap-3.5 mb-12",
                        "w-full flex flex-col justify-start items-center gap-3.5 mb-14",
                        "w-[1180px] flex flex-col justify-start items-center gap-3.5 mb-16"
                    ),
                    "mx-auto" // Center the header
                )}>
                    <h1 className={responsiveClass(
                        "text-emerald-900 text-3xl font-normal text-center font-['Cormorant']",
                        "text-emerald-900 text-5xl font-normal text-center font-['Cormorant']",
                        "text-emerald-900 text-6xl font-normal text-center font-['Cormorant']"
                    )}>
                        Galeri Adat
                    </h1>
                    <p className={responsiveClass(
                        "w-full text-center text-black text-sm font-normal font-['Albert_Sans'] leading-tight",
                        "w-full text-center text-black text-lg font-normal font-['Albert_Sans'] leading-relaxed",
                        "w-[1056px] text-center text-black text-3xl font-normal font-['Albert_Sans'] leading-relaxed"
                    )}>
                        Budaya Tual punya keunikan yang sulit ditemukan di tempat lain. Melalui galeri adat ini, Anda bisa melihat sendiri kekayaan tradisi yang masih terjaga hingga kini.
                    </p>
                </div>

                {/* Adat Items Grid */}
                <div className={twMerge(
                    responsiveClass(
                        "grid grid-cols-1 gap-6",
                        "grid grid-cols-2 gap-7",
                        "grid grid-cols-3 gap-7"
                    ),
                    "w-full max-w-[1180px] mx-auto" // Control max-width and center
                )}>
                    {adatItems.map((item) => (
                        <Link
                            to={`/galeri-adat/${item.slug}`}
                            key={item.slug}
                            className={twMerge(
                                responsiveClass(
                                    "w-full bg-white rounded-xl outline outline-1 outline-neutral-700/50 flex flex-col overflow-hidden",
                                    "w-full bg-white rounded-2xl outline outline-1 outline-neutral-700/50 flex flex-col overflow-hidden",
                                    "w-96 bg-white rounded-[20px] outline outline-1 outline-emerald-900 flex flex-col overflow-hidden"
                                ),
                                "shadow-[0_4px_9px_0_rgba(0,0,0,0.10),0_16px_16px_0_rgba(0,0,0,0.09),0_35px_21px_0_rgba(0,0,0,0.05),0_63px_25px_0_rgba(0,0,0,0.01),0_98px_27px_0_rgba(0,0,0,0.00)] hover:shadow-lg transition-shadow"
                            )}
                        >
                            <img
                                className={twMerge(
                                    responsiveClass(
                                        "w-full h-40 object-cover rounded-t-xl",
                                        "w-full h-48 object-cover rounded-t-2xl",
                                        "self-stretch h-60 rounded-tl-[10px] rounded-tr-[10px] object-cover"
                                    )
                                )}
                                src={item.mainImage}
                                alt={item.name}
                            />
                            <div className={twMerge(
                                responsiveClass(
                                    "p-4 flex flex-col gap-2",
                                    "p-5 flex flex-col gap-2",
                                    "px-5 py-6 flex flex-col gap-2"
                                ),
                                "flex-grow" // Ensures the content area grows to fill space
                            )}>
                                <h3 className={twMerge(
                                    responsiveClass(
                                        "text-stone-900 text-lg font-semibold font-['Albert_Sans'] leading-tight",
                                        "text-stone-900 text-xl font-semibold font-['Albert_Sans'] leading-snug",
                                        "text-stone-900 text-2xl font-semibold font-['Albert_Sans']"
                                    ),
                                    "min-h-[3.5rem]" // Maintain consistent height for titles
                                )}>
                                    {item.name}
                                </h3>
                                <div className={twMerge(
                                    responsiveClass(
                                        "w-full text-stone-900 text-xs font-normal font-['Albert_Sans']",
                                        "w-full text-stone-900 text-sm font-normal font-['Albert_Sans']",
                                        "w-80 h-4 text-stone-900 text-base font-normal font-['Albert_Sans']"
                                    )
                                )}>
                                    {item.location}
                                </div>
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