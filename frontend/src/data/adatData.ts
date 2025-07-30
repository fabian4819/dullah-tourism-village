// src/data/adatData.ts
import type { AdatItem } from '../types/adat';

export const adatItems: AdatItem[] = [
    {
        slug: 'woma',
        name: 'Woma (Pusat Kekuasaan Adat)',
        location: 'Balai Ohoi Dullah, Ohoi Dullah, Kecamatan Pulau Dullah Utara, Kota Tual',
        dimensions: '2,18 meter × 2,16 meter × 1,75 meter',
        year: '-',
        inventoryNumber: 'DL - 001 - 2025',
        description: 'Merupakan pusat kekuasaan adat yang terletak di Desa Dullah. Secara tradisional woma Desa Dullah dikenal dengan Nguur Staha Vuur Woma Loor Uun yang berarti “Pasir pusat kekuasaan raja”. Woma secara tradisional memiliki nilai adat yang cukup sakral sebagai pusat kekuasaan dan tanda keberadaan kekuasaan raja di wilayah Desa Dullah. Sampai saat ini, Woma memiliki nilai yang sangat sakral terutama dalam pelaksanaan upacara adat seperti pengukuhan Raja Dullah. Woma digunakan sebagai tempat pengukuhan calon raja sekaligus tempat menunggu sebelum dijemput oleh Kapitan Lebetawi.',
        mainImage: '/images/woma.png', // Path to your main image
        galleryImages: [ // Paths to additional gallery images
            '/images/woma-1.png',
            '/images/woma-2.png',
            '/images/woma-3.png',
        ],
    },
    {
        slug: 'tembok-pembatas',
        name: 'Tembok Pembatas',
        location: 'Ohoi Dullah',
        dimensions: '1,66 meter × 0,65 meter × 1,70 meter',
        year: 'Abad 17',
        inventoryNumber: 'DL - 002 - 2025',
        description: 'Merupakan sisa dari bagian tembok yang mengelilingi Desa Dullah pada masa lampau. Seperti fungsi tembok pada umumnya, tembok ini dibangun sebagai bagian perlindungan desa dengan bentuk mengelilingi seluruh kota dengan jarak sepanjang beberapa km. Tembok ini dibangun mengelilingi desa dan diberi hiasan yang beragam dengan ukiran menghadap kedua sisi tembok. Pada beberapa bagian tembok diberikan pintu berbingkai sebagai jalan keluar masuk desa bagi masyarakat umum.',
        mainImage: '/images/tembok-pembatas.png',
        galleryImages: [
            '/images/tembok-1.png',
            '/images/tembok-2.png',
            '/images/tembok-3.png',
        ],
    },
    {
        slug: 'pohon-beringin',
        name: 'Pohon Beringin (Vavu Dit)',
        location: 'Pantai Namser, Ohoi Dullah',
        dimensions: '-',
        year: '-',
        inventoryNumber: 'DL - 003 - 2025', // Placeholder
        description: 'Pohon Beringin atau Vavu Dit adalah salah satu simbol penting dalam tradisi adat di Ohoi Dullah. Pohon ini memiliki nilai sejarah dan spiritual yang tinggi bagi masyarakat setempat.', // Placeholder description
        mainImage: '/images/pohon-beringin.png', // Placeholder image, use the one from Landing - Home if possible
        galleryImages: [],
    },
    {
        slug: 'panggung-penahbisan',
        name: 'Panggung Penahbisan',
        location: 'Pantai Namser, Ohoi Dullah',
        dimensions: '-',
        year: '-',
        inventoryNumber: 'DL - 004 - 2025', // Placeholder
        description: 'Panggung Penahbisan adalah lokasi penting untuk upacara adat dan ritual penahbisan di Ohoi Dullah, yang mencerminkan kekayaan budaya dan spiritual masyarakat.', // Placeholder description
        mainImage: '/images/panggung-penahbisan.png', // Placeholder image, use the one from Landing - Home if possible
        galleryImages: [],
    },
    {
        slug: 'varat-songnuhu',
        name: 'Tempat Persinggahan Pertama (Varat Songnuhu)',
        location: 'Ohoi Dullah, Kecamatan Pulau Dullah Utara, Kota Tual',
        dimensions: '-',
        year: 'Abad 17',
        inventoryNumber: 'DL - 005 - 2025',
        description: 'Merupakan salah satu tempat paling awal dan krusial dalam pembentukan sejarah Desa Dullah. Dimulai ketika Sultan Taherudin dari Kesultanan Jailolo berniat untuk berkunjung ke Tual (Dumar) tetapi memiliki kendala dan terpaksa singgah untuk sementara waktu di Varat Songnuhu (Langgirit). Kehadiran Sultan Taherudin disambut dengan sangat baik oleh masyarakat setempat yang diwakili oleh Divit Umar (penduduk asli Langgirit) dan Sibit Renyaan (penduduk asli Ngadi). Dari perhentian tersebut kemudian Sultan Taherudin menetap dan memiliki 2 orang anak yang kelak menjadi Raja Dullah dan Kapitan Lebetawi.',
        mainImage: '/images/tempat-persinggahan-pertama.png',
        galleryImages: [],
    },
];