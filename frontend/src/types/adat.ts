// src/types/adat.ts
export interface AdatItem {
    slug: string; // Unique identifier for the item (e.g., 'woma', 'tembok-pembatas')
    name: string;
    location: string;
    dimensions: string;
    year: string;
    inventoryNumber: string;
    description: string;
    mainImage: string; // Path to the main image
    galleryImages?: string[]; // Optional: Paths to additional gallery images
}