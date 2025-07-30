// src/pages/AdatDetailPage.tsx
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import FooterSection from '../components/FooterSection';
import { twMerge } from 'tailwind-merge';
import { useBreakpoint, getResponsiveValue } from "../hooks/useBreakpoint";
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { adatItems } from '../data/adatData'; // Import your data
import type { AdatItem } from '../types/adat';

const AdatDetailPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    const currentBreakpoint = useBreakpoint();
    const [item, setItem] = useState<AdatItem | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [mainImage, setMainImage] = useState<string>('');

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

    useEffect(() => {
        setLoading(true);
        const foundItem = adatItems.find(i => i.slug === slug);
        if (foundItem) {
            setItem(foundItem);
            setMainImage(foundItem.mainImage); // Set initial main image
            setLoading(false);
        } else {
            setError('Item not found');
            setLoading(false);
        }
    }, [slug]);

    if (loading) {
        return (
            <div className="min-h-screen bg-white flex flex-col">
                <Navbar />
                <main className="flex-grow flex items-center justify-center">
                    <div className="text-emerald-900 text-xl">Loading item details...</div>
                </main>
                <FooterSection />
            </div>
        );
    }

    if (error || !item) {
        return (
            <div className="min-h-screen bg-white flex flex-col">
                <Navbar />
                <main className="flex-grow px-12 py-16 text-center">
                    <h1 className="text-4xl font-bold text-red-500 mb-4">
                        {error || 'Item tidak ditemukan.'}
                    </h1>
                    <button
                        onClick={() => navigate('/galeri-adat')}
                        className="mt-8 px-6 py-3 bg-emerald-900 text-white rounded-lg hover:bg-emerald-800 transition-colors"
                    >
                        Kembali ke Galeri Adat
                    </button>
                </main>
                <FooterSection />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white flex flex-col relative overflow-hidden">
            <Navbar />
            <main className={twMerge(
                responsiveClass(
                    "flex-grow px-3 py-8",
                    "flex-grow px-5 py-12",
                    "flex-grow px-12 py-16"
                ),
                "relative z-10 mx-auto max-w-[1280px]" // Added mx-auto for centering
            )}>
                <div className={responsiveClass(
                    "px-3 flex flex-col gap-5",
                    "px-6 flex flex-col gap-5",
                    "px-6 flex flex-col gap-5"
                )}>
                    {/* Back Button */}
                    <button
                        onClick={() => navigate(-1)}
                        className="inline-flex justify-start items-center gap-1.5 text-emerald-900 text-base font-medium font-['Albert_Sans'] leading-tight hover:text-emerald-700 transition-colors"
                        aria-label="Kembali ke halaman sebelumnya"
                    >
                        <ArrowLeft className="w-4 h-4 text-emerald-900" />
                        Kembali
                    </button>

                    {/* Item Title */}
                    <h1 className={responsiveClass(
                        "w-full text-emerald-900 text-3xl font-bold font-['Montserrat']",
                        "w-full text-emerald-900 text-5xl font-bold font-['Montserrat']",
                        "w-[1180px] text-emerald-900 text-6xl font-bold font-['Montserrat']"
                    )}>
                        {item.name}
                    </h1>
                </div>

                <div className={twMerge(
                    responsiveClass(
                        "flex flex-col gap-7 mt-8",
                        "flex flex-col gap-7 mt-8",
                        "inline-flex justify-start items-start gap-7 mt-12 w-full"
                    )
                )}>
                    <div className={twMerge(
                        responsiveClass(
                            "w-full flex flex-col justify-start items-start gap-5",
                            "w-full flex flex-col justify-start items-start gap-5",
                            "w-[655px] flex flex-col justify-start items-start gap-5"
                        )
                    )}>
                        <img
                            className={twMerge(
                                responsiveClass(
                                    "w-full h-auto rounded-3xl object-cover",
                                    "w-full h-auto rounded-[35px] object-cover",
                                    "w-[655px] flex-1 rounded-[35px] object-cover"
                                )
                            )}
                            src={mainImage}
                            alt={item.name}
                        />
                        {item.galleryImages && item.galleryImages.length > 0 && (
                            <div className={twMerge(
                                responsiveClass(
                                    "w-full inline-flex justify-start gap-3 overflow-x-auto pb-2", // Mobile: scrollable horizontal gallery
                                    "w-full inline-flex justify-start gap-5", // Tablet: larger gap
                                    "w-[655px] inline-flex justify-between items-start"
                                )
                            )}>
                                {item.galleryImages.map((img, index) => (
                                    <img
                                        key={index}
                                        className={twMerge(
                                            responsiveClass(
                                                "w-24 h-16 rounded-lg object-cover cursor-pointer hover:border-2 hover:border-emerald-900 transition-all",
                                                "w-32 h-20 rounded-xl object-cover cursor-pointer hover:border-2 hover:border-emerald-900 transition-all",
                                                "w-52 h-32 rounded-[20px] object-cover cursor-pointer hover:border-2 hover:border-emerald-900 transition-all"
                                            )
                                        )}
                                        src={img}
                                        alt={`${item.name} gallery image ${index + 1}`}
                                        onClick={() => setMainImage(img)}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                    <div className={twMerge(
                        responsiveClass(
                            "w-full text-black text-base font-normal font-['Albert_Sans'] leading-relaxed",
                            "w-full text-black text-lg font-normal font-['Albert_Sans'] leading-relaxed",
                            "w-[524px] text-black text-3xl font-normal font-['Albert_Sans']"
                        )
                    )}>
                        {item.description}
                    </div>
                </div>

                {/* Details Section */}
                <div className="self-stretch flex flex-col justify-start items-start gap-2.5 mt-12">
                    <div className={twMerge(
                        responsiveClass(
                            "self-stretch px-3 inline-flex flex-col justify-start items-start gap-1",
                            "self-stretch px-5 inline-flex flex-col justify-start items-start gap-1",
                            "self-stretch px-7 inline-flex justify-start items-center gap-2.5"
                        )
                    )}>
                        <div className={responsiveClass(
                            "w-full text-black text-lg font-bold font-['Albert_Sans']",
                            "w-full text-black text-xl font-bold font-['Albert_Sans']",
                            "w-52 text-black text-3xl font-bold font-['Albert_Sans']"
                        )}>
                            Nama
                        </div>
                        <div className={responsiveClass(
                            "w-full text-black text-base font-normal font-['Albert_Sans']",
                            "w-full text-black text-lg font-normal font-['Albert_Sans']",
                            "w-[620px] text-black text-3xl font-normal font-['Albert_Sans']"
                        )}>
                            <span className="font-bold desktop:font-normal">:</span> {item.name}
                        </div>
                    </div>
                    <div className={twMerge(
                        responsiveClass(
                            "self-stretch px-3 inline-flex flex-col justify-start items-start gap-1",
                            "self-stretch px-5 inline-flex flex-col justify-start items-start gap-1",
                            "self-stretch px-7 inline-flex justify-start items-center gap-2.5"
                        )
                    )}>
                        <div className={responsiveClass(
                            "w-full text-black text-lg font-bold font-['Albert_Sans']",
                            "w-full text-black text-xl font-bold font-['Albert_Sans']",
                            "w-52 text-black text-3xl font-bold font-['Albert_Sans']"
                        )}>
                            Lokasi
                        </div>
                        <div className={responsiveClass(
                            "w-full text-black text-base font-normal font-['Albert_Sans']",
                            "w-full text-black text-lg font-normal font-['Albert_Sans']",
                            "w-[1033px] text-black text-3xl font-normal font-['Albert_Sans']"
                        )}>
                            <span className="font-bold desktop:font-normal">:</span> {item.location}
                        </div>
                    </div>
                    <div className={twMerge(
                        responsiveClass(
                            "self-stretch px-3 inline-flex flex-col justify-start items-start gap-1",
                            "self-stretch px-5 inline-flex flex-col justify-start items-start gap-1",
                            "self-stretch px-7 inline-flex justify-start items-center gap-2.5"
                        )
                    )}>
                        <div className={responsiveClass(
                            "w-full text-black text-lg font-bold font-['Albert_Sans']",
                            "w-full text-black text-xl font-bold font-['Albert_Sans']",
                            "w-52 text-black text-3xl font-bold font-['Albert_Sans']"
                        )}>
                            Dimensi
                        </div>
                        <div className={responsiveClass(
                            "w-full text-black text-base font-normal font-['Albert_Sans']",
                            "w-full text-black text-lg font-normal font-['Albert_Sans']",
                            "w-[1033px] text-black text-3xl font-normal font-['Albert_Sans']"
                        )}>
                            <span className="font-bold desktop:font-normal">:</span> {item.dimensions}
                        </div>
                    </div>
                    <div className={twMerge(
                        responsiveClass(
                            "self-stretch px-3 inline-flex flex-col justify-start items-start gap-1",
                            "self-stretch px-5 inline-flex flex-col justify-start items-start gap-1",
                            "self-stretch px-7 inline-flex justify-start items-center gap-2.5"
                        )
                    )}>
                        <div className={responsiveClass(
                            "w-full text-black text-lg font-bold font-['Albert_Sans']",
                            "w-full text-black text-xl font-bold font-['Albert_Sans']",
                            "w-52 text-black text-3xl font-bold font-['Albert_Sans']"
                        )}>
                            Tahun
                        </div>
                        <div className={responsiveClass(
                            "w-full text-black text-base font-normal font-['Albert_Sans']",
                            "w-full text-black text-lg font-normal font-['Albert_Sans']",
                            "w-[1033px] text-black text-3xl font-normal font-['Albert_Sans']"
                        )}>
                            <span className="font-bold desktop:font-normal">:</span> {item.year}
                        </div>
                    </div>
                    <div className={twMerge(
                        responsiveClass(
                            "self-stretch px-3 inline-flex flex-col justify-start items-start gap-1",
                            "self-stretch px-5 inline-flex flex-col justify-start items-start gap-1",
                            "self-stretch px-7 inline-flex justify-start items-center gap-2.5"
                        )
                    )}>
                        <div className={responsiveClass(
                            "w-full text-black text-lg font-bold font-['Albert_Sans']",
                            "w-full text-black text-xl font-bold font-['Albert_Sans']",
                            "w-52 text-black text-3xl font-bold font-['Albert_Sans']"
                        )}>
                            Nomor Inven
                        </div>
                        <div className={responsiveClass(
                            "w-full text-black text-base font-normal font-['Albert_Sans']",
                            "w-full text-black text-lg font-normal font-['Albert_Sans']",
                            "w-[1033px] text-black text-3xl font-normal font-['Albert_Sans']"
                        )}>
                            <span className="font-bold desktop:font-normal">:</span> {item.inventoryNumber}
                        </div>
                    </div>
                </div>
            </main>
            <FooterSection />
        </div>
    );
};

export default AdatDetailPage;