import { create } from 'zustand';
import { Brand } from '@/types';

interface AppState {
  selectedBrand: Brand | null;
  selectedModule: string | null;
  setSelectedBrand: (brand: Brand | null) => void;
  setSelectedModule: (moduleId: string | null) => void;
}

export const useStore = create<AppState>((set) => ({
  selectedBrand: null,
  selectedModule: null,
  setSelectedBrand: (brand) => set({ selectedBrand: brand }),
  setSelectedModule: (moduleId) => set({ selectedModule: moduleId }),
}));
