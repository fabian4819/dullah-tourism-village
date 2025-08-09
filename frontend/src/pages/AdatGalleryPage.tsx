// src/pages/AdatGalleryPage.tsx
import React from 'react';
import Navbar from '../components/Navbar';
import FooterSection from '../components/FooterSection';
import { twMerge } from 'tailwind-merge';
import { useBreakpoint, getResponsiveValue } from "../hooks/useBreakpoint";
import { Link } from 'react-router-dom';
import { adatItems } from '../data/adatData';

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
        const currentBp = currentBreakpoint || 'mobile';
        return twMerge(getResponsiveValue(values, currentBp) || mobile);
    };

    return (
        <div className="min-h-screen bg-white flex flex-col relative overflow-hidden">
            <Navbar />
            <main className={twMerge(
                responsiveClass(
                    "flex-grow px-4 py-8",
                    "flex-grow px-8 py-12",
                    "flex-grow px-16 py-20"
                ),
                "relative z-10 mx-auto w-full max-w-7xl"
            )}>
                {/* Header Section */}
                <div className={twMerge(
                    responsiveClass(
                        "mb-10 text-center",
                        "mb-12 text-center",
                        "mb-16 text-center max-w-[1056px] mx-auto"
                    )
                )}>
                    <h1 className={twMerge(
                        responsiveClass(
                            "text-3xl",
                            "text-5xl",
                            "text-6xl"
                        ),
                        "text-emerald-900 font-['Cormorant'] font-normal"
                    )}>
                        Galeri Adat
                    </h1>
                    <p className={twMerge(
                        responsiveClass(
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
                    responsiveClass(
                        "grid grid-cols-1 gap-6",
                        "grid grid-cols-2 gap-8",
                        "grid grid-cols-3 gap-10"
                    ),
                    "mx-auto"
                )}>
                    {adatItems.map((item) => (
                        <Link
                            to={`/galeri-adat/${item.slug}`}
                            key={item.slug}
                            className={twMerge(
                                "w-full bg-white rounded-[20px] shadow-md outline outline-1 outline-neutral-700/50 flex flex-col overflow-hidden",
                                "transition-all duration-300 ease-in-out hover:shadow-xl hover:outline-emerald-900 transform hover:-translate-y-1"
                            )}
                        >
                            <img
                                className={twMerge(
                                    responsiveClass(
                                        "w-full h-48",
                                        "w-full h-56",
                                        "w-full h-64"
                                    ),
                                    "object-cover rounded-t-[18px]"
                                )}
                                src={item.mainImage}
                                alt={item.name}
                            />
                            <div className="p-6 flex flex-col gap-2 flex-grow">
                                <h3 className={responsiveClass(
                                    "text-stone-900 text-lg font-semibold font-['Albert_Sans'] leading-tight",
                                    "text-stone-900 text-xl font-semibold font-['Albert_Sans'] leading-snug",
                                    "text-stone-900 text-2xl font-semibold font-['Albert_Sans'] leading-snug"
                                )}>
                                    {item.name}
                                </h3>
                                <div className={twMerge(
                                    responsiveClass(
                                        "text-stone-900 text-xs font-normal font-['Albert_Sans']",
                                        "text-stone-900 text-sm font-normal font-['Albert_Sans']",
                                        "text-stone-900 text-base font-normal font-['Albert_Sans']"
                                    ),
                                    "flex-1" // Memastikan tulisan tidak terpotong
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