// useAuthStore.ts
import { create } from "zustand";
import { Session } from "@supabase/supabase-js";

// Definición de la interfaz para el estado de autenticación
interface AuthStore {
  session: Session | null;
  setSession: (session: Session | null) => void;
}

// Implementación del store de Zustand para manejar la sesión globalmente
export const useAuthStore = create<AuthStore>((set) => ({
  session: null,
  setSession: (session) => set({ session }),
}));
