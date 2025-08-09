// src/pages/AdatDetailPage.tsx
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import FooterSection from '../components/FooterSection';
import { twMerge } from 'tailwind-merge';
import { useBreakpoint, getResponsiveValue } from "../hooks/useBreakpoint";
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { adatItems } from '../data/adatData';
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
        // Perbaikan: tambahkan fallback 'mobile' jika currentBreakpoint adalah null
        const currentBp = currentBreakpoint || 'mobile';
        return twMerge(getResponsiveValue(values, currentBp) || mobile);
    };

    useEffect(() => {
        setLoading(true);
        const foundItem = adatItems.find(i => i.slug === slug);
        if (foundItem) {
            setItem(foundItem);
            setMainImage(foundItem.mainImage);
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
                    <div className="text-emerald-900 text-xl font-['Albert_Sans']">Memuat detail item...</div>
                </main>
                <FooterSection />
            </div>
        );
    }

    if (error || !item) {
        return (
            <div className="min-h-screen bg-white flex flex-col">
                <Navbar />
                <main className="flex-grow px-8 py-16 text-center">
                    <h1 className="text-4xl font-bold text-red-500 mb-4 font-['Cormorant']">
                        {error || 'Item tidak ditemukan.'}
                    </h1>
                    <p className="text-lg text-stone-700 mb-8 font-['Albert_Sans']">
                        Mohon maaf, item yang Anda cari tidak dapat ditemukan.
                    </p>
                    <button
                        onClick={() => navigate('/galeri-adat')}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-900 text-white rounded-lg hover:bg-emerald-800 transition-colors duration-300 font-['Albert_Sans']"
                    >
                        <ArrowLeft size={18} />
                        Kembali ke Galeri
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
                    "px-4 py-8",
                    "px-8 py-12",
                    "px-16 py-20"
                ),
                "relative z-10 mx-auto w-full max-w-7xl"
            )}>
                {/* Back Button */}
                <button
                    onClick={() => navigate(-1)}
                    className="inline-flex items-center gap-2 text-emerald-900 font-medium hover:text-emerald-700 transition-colors mb-6 md:mb-8"
                    aria-label="Kembali ke halaman sebelumnya"
                >
                    <ArrowLeft size={18} />
                    <span className="font-['Albert_Sans'] text-base md:text-lg">Kembali</span>
                </button>

                {/* Item Header */}
                <h1 className={twMerge(
                    responsiveClass(
                        "text-3xl mb-4",
                        "text-5xl mb-6",
                        "text-6xl mb-8"
                    ),
                    "text-emerald-900 font-bold font-['Cormorant']"
                )}>
                    {item.name}
                </h1>

                {/* Main Content: Image Gallery & Description */}
                <div className="flex flex-col gap-8 md:grid md:grid-cols-2 md:gap-12">
                    {/* Image Section */}
                    <div className="w-full flex flex-col gap-4 md:gap-5">
                        <div className="overflow-hidden rounded-3xl shadow-xl">
                            <img
                                className="w-full h-auto object-cover"
                                src={mainImage}
                                alt={item.name}
                            />
                        </div>
                        {item.galleryImages && item.galleryImages.length > 0 && (
                            <div className={twMerge(
                                responsiveClass(
                                    "flex gap-3 overflow-x-auto pb-2",
                                    "flex gap-4 md:gap-5"
                                ),
                                "no-scrollbar"
                            )}>
                                {item.galleryImages.map((img, index) => (
                                    <div
                                        key={index}
                                        className={twMerge(
                                            "relative flex-shrink-0 cursor-pointer transition-all duration-300",
                                            "rounded-xl md:rounded-2xl overflow-hidden",
                                            "shadow-sm hover:scale-105",
                                            mainImage === img ? "border-2 border-emerald-900" : "opacity-75"
                                        )}
                                        onClick={() => setMainImage(img)}
                                    >
                                        <img
                                            className={responsiveClass(
                                                "w-20 h-16 object-cover",
                                                "w-28 h-20 object-cover",
                                                "w-40 h-28 object-cover"
                                            )}
                                            src={img}
                                            alt={`${item.name} gallery image ${index + 1}`}
                                        />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    {/* Description Section */}
                    <div className="w-full font-['Albert_Sans'] text-stone-900">
                        <p className={responsiveClass(
                            "text-sm leading-relaxed",
                            "text-lg leading-relaxed",
                            "text-xl leading-relaxed"
                        )}>
                            {item.description}
                        </p>
                    </div>
                </div>

                {/* Details Section */}
                <div className="mt-12 md:mt-16">
                    <h2 className={twMerge(
                        responsiveClass("text-xl mb-4", "text-2xl mb-6", "text-3xl mb-8"),
                        "font-bold text-emerald-900 font-['Cormorant']"
                    )}>
                        Detail Informasi
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-y-6 md:gap-x-12">
                        {/* Detail Item: Nama */}
                        <div className="flex flex-col md:flex-row gap-1 md:gap-4">
                            <span className="font-bold text-stone-900 text-sm md:text-base font-['Albert_Sans'] min-w-[120px]">Nama</span>
                            <span className="text-stone-700 text-sm md:text-base font-['Albert_Sans']">: {item.name}</span>
                        </div>
                        {/* Detail Item: Lokasi */}
                        <div className="flex flex-col md:flex-row gap-1 md:gap-4">
                            <span className="font-bold text-stone-900 text-sm md:text-base font-['Albert_Sans'] min-w-[120px]">Lokasi</span>
                            <span className="text-stone-700 text-sm md:text-base font-['Albert_Sans']">: {item.location}</span>
                        </div>
                        {/* Detail Item: Dimensi */}
                        <div className="flex flex-col md:flex-row gap-1 md:gap-4">
                            <span className="font-bold text-stone-900 text-sm md:text-base font-['Albert_Sans'] min-w-[120px]">Dimensi</span>
                            <span className="text-stone-700 text-sm md:text-base font-['Albert_Sans']">: {item.dimensions}</span>
                        </div>
                        {/* Detail Item: Tahun */}
                        <div className="flex flex-col md:flex-row gap-1 md:gap-4">
                            <span className="font-bold text-stone-900 text-sm md:text-base font-['Albert_Sans'] min-w-[120px]">Tahun</span>
                            <span className="text-stone-700 text-sm md:text-base font-['Albert_Sans']">: {item.year}</span>
                        </div>
                        {/* Detail Item: Nomor Inven */}
                        <div className="flex flex-col md:flex-row gap-1 md:gap-4">
                            <span className="font-bold text-stone-900 text-sm md:text-base font-['Albert_Sans'] min-w-[120px]">Nomor Inven</span>
                            <span className="text-stone-700 text-sm md:text-base font-['Albert_Sans']">: {item.inventoryNumber}</span>
                        </div>
                    </div>
                </div>
            </main>
            <FooterSection />
        </div>
    );
};

export default AdatDetailPage;