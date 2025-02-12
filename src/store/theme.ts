// Création d'un store global avec Zustand pour la gestion du thème
import { create } from 'zustand'

interface ThemeStore {
  theme: 'light' | 'dark' | 'system'
  setTheme: (theme: 'light' | 'dark' | 'system') => void
}

export const useThemeStore = create<ThemeStore>((set) => ({
  theme: 'system',
  setTheme: (theme) => set({ theme }),
})) 