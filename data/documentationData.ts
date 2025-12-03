import { DocSection } from '../types/documentation';
import { DOCUMENTATION_DATA } from './constants'; // Import dari file yang Anda buat sebelumnya

export { DOCUMENTATION_DATA };

// Helper untuk mendapatkan kategori unik
export const getUniqueCategories = (data: DocSection[]): string[] => {
  return Array.from(new Set(data.map(d => d.category)));
};

// Helper untuk mendapatkan dokumen aktif
export const getActiveDocument = (data: DocSection[], id: string): DocSection => {
  return data.find(d => d.id === id) || data[0];
};