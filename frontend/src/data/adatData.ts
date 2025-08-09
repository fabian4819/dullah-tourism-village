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
        description: 'Merupakan pusat kekuasaan adat yang terletak di Ohoi Dullah. Secara tradisional woma Ohoi Dullah dikenal dengan Nguur Staha Vuur Woma Loor Uun yang berarti “Pasir pusat kekuasaan raja”. Woma secara tradisional memiliki nilai adat yang cukup sakral sebagai pusat kekuasaan dan tanda keberadaan kekuasaan raja di wilayah Ohoi Dullah. Sampai saat ini, Woma memiliki nilai yang sangat sakral terutama dalam pelaksanaan upacara adat seperti pengukuhan Raja Dullah. Woma digunakan sebagai tempat pengukuhan calon raja sekaligus tempat menunggu sebelum dijemput oleh Kapitan Lebetawi.',
        mainImage: '/images/woma.png', // Path to your main image
        galleryImages: [ // Paths to additional gallery images
            '/images/woma-1.png',
            '/images/woma-2.png',
            '/images/woma-3.png',
        ],
    },
    {
        slug: 'tembok-pembatas',
        name: 'Vatlavav (Tembok Perdamaian)',
        location: 'Ohoi Dullah, Kecamatan Pulau Dullah Utara, Kota Tual',
        dimensions: '1,66 meter × 0,65 meter × 1,70 meter',
        year: 'Abad 17',
        inventoryNumber: 'DL - 002 - 2025',
        description: 'Merupakan sisa tembok yang dibangun sebagai simbol perdamaian perang Siwalima beberapa ratus tahun yang lalu. Tembok ini sempat runtuh dan hancur menjadi beberapa bagian sebelum akhirnya disusun kembali sebagai peringatan terhadap perang yang sudah terjadi. Di sisi utara tembok ini terdapat juga sisa tembok lainnya dengan ukuran lebih kecil dan sederhana yang keduanya berperan sebagai lambang kedamaian di tanah Maluku.',
        mainImage: '/images/tembok-pembatas.png',
        galleryImages: [
            '/images/tembok-1.png',
            '/images/tembok-2.png',
            '/images/tembok-3.png',
        ],
    },
    {
        slug: 'pohon-beringin',
        name: 'Vavu Dit (Pohon Beringin)',
        location: 'Pantai Namser, Ohoi Dullah, Kecamatan Pulau Dullah Utara, Kota Tual',
        dimensions: '±25 meter (tinggi)',
        year: 'Abad 17',
        inventoryNumber: 'DL - 003 - 2025', // Placeholder
        description: 'Merupakan pohon adat yang sangat sakral dan dijaga oleh masyarakat di Ohoi Dullah. Pohon ini ditanam di depan pintu masuk kota dan digunakan dalam berbagai prosesi dan upacara adat masyarakat Ohoi Dullah. Pada zaman dahulu di atas pohon beringin ini diberikan hiasan beserta burung elang dengan tulisan “LUS ANDOK AI DIT RAT NARA, LUS KUKUN ROK TURDA HELDANG YAN WOT ANWEL MADOMAN MUR U NAB LO YAN HEHE” yang bila diterjemahkan ke dalam bahasa Indonesia diartikan sebagai “Di atas Pohon Beringin dijaga seekor burung elang yang kukunya dipasang dan memperlihatkan kukunya yang tajam itu mempertahankan kekuasaan dan cahayanya yang terang seperti bulan 14 hari itu sebagai salah sukuh untuk setiap orang dapat melihat setiap hukum itu adalah benar”.',
        mainImage: '/images/pohon-beringin.png', // Placeholder image, use the one from Landing - Home if possible
        galleryImages: [],
    },
    {
        slug: 'panggung-penahbisan',
        name: 'Panggung Penahbisan',
        location: 'Pantai Namser, Ohoi Dullah, Kecamatan Pulau Dullah Utara, Kota Tual',
        dimensions: '17,9 meter × 4,2 meter × 5,4 meter',
        year: '-',
        inventoryNumber: 'DL - 004 - 2025', // Placeholder
        description: 'Merupakan panggung penahbisan yang dibangun untuk melambangkan kapal tradisional masyarakat Kei, Belan. Di tengahnya bertuliskan “Taer U Mehe” yang berarti armada 11 dalam bahasa Kei. Keberadaan armada 11 ini memiliki peran yang sangat signifikan dalam memastikan keamanan dan ekspansi yang dilakukan oleh Raja Dullah hingga memiliki wilayah yang luas saat ini. Pada zaman dahulu Ohoi Dullah merupakan pusat pemerintahan sehingga menjadi tempat lalu lalang orang ketika berkunjung ke wilayah di bawahnya. Peran “Taer U Mahe” dalam hal ini adalah penegak hukum dan penjaga wilayah pinggir Negeri Dullah.', // Placeholder description
        mainImage: '/images/panggung-penahbisan.png', // Placeholder image, use the one from Landing - Home if possible
        galleryImages: [],
    },
    {
        slug: 'varat-songnuhu',
        name: 'Varat Songnuhu (Tempat Persinggahan Pertama)',
        location: 'Ohoi Dullah, Kecamatan Pulau Dullah Utara, Kota Tual',
        dimensions: '-',
        year: 'Abad 17',
        inventoryNumber: 'DL - 005 - 2025',
        description: 'Merupakan salah satu tempat paling awal dan krusial dalam pembentukan sejarah Ohoi Dullah. Dimulai setelah kedatangan Sultan Taherudin di Ohoi Saramlay dan menikah dengan seorang anak kapitan bernama Hanar Sadmas di Dumar. Anak keduanya yang bernama Wahadat kemudian melakukan perjalanan dan singgah di Varat Songnuhu sebelum akhirnya bertemu dengan dua penduduk asli, yaitu Divit Umar dan Sibit Renyaan. Setelah pertemuan tersebut Wahadat kemudian diberikan kepercayaan untuk memimpin daerah baru tersebut.',
        mainImage: '/images/tempat-persinggahan-pertama.png',
        galleryImages: [],
    },
    {
        slug: 'peta-ratschap',
        name: 'Peta Ratschap Kepulauan Kei',
        location: '-',
        dimensions: '-',
        year: '-',
        inventoryNumber: '-',
        description: 'Sejak beberapa abad yang lalu, Kepulauan Kei terus mengalami perkembangan termasuk pertumbuhan dan diversifikasi kelompok masyarakat penghuninya. Perkembangan ini terjadi secara konsisten dan membentuk masyarakat kompleks dengan sistem adat yang berlaku di dalamnya. Dari keberagaman tersebut kemudian dibentuk sebuah hubungan antar wilayah yang menjadi tanda kekeluargaan dan berlaku secara adat di seluruh Kepulauan Kei. Sampai saat ini terdapat 22 Rat (Raja) di seluruh Kepulauan Kei yang terbagi ke dalam 3 Ratschap, yaitu Ursiuw (kelompok sembilan), Lorlim (kelompok lima), dan Lor Lobay (kelompok penengah). Keberadaan ketiga Ratschap ini juga memegang peranan penting dalam persebaran Hukum Larvul Ngabal di wilayah karena ketiga Ratschap inilah yang membentuk dan menerapkan hukum tersebut di wilayah kekuasaan mereka.',
        mainImage: '/images/peta-ratschap.png',
        galleryImages: [],
    },
];