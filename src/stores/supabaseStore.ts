import { create } from "zustand";
import { createClient, Session } from "@supabase/supabase-js";

// Configuración de Supabase
const supabaseUrl = "https://edqxzmycshnvtkdttfbl.supabase.co/";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVkcXh6bXljc2hudnRrZHR0ZmJsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcwNDE4NTUsImV4cCI6MjA0MjYxNzg1NX0.GVqqp7tdK_qTfObvXRGbGJHJf-OUjPYz_LInp2SAq8g";
const supabase = createClient(supabaseUrl, supabaseKey);

interface SupabaseStore {
  session: Session | null;
  signIn: (email: string, password: string) => Promise<string | null>;
  signOut: () => Promise<void>;
  signUp: (email: string, password: string) => Promise<string | null>; // Método para registrar nuevos usuarios
}

export const useSupabaseStore = create<SupabaseStore>((set) => {
  // Inicializa la sesión al cargar la aplicación
  supabase.auth.getSession().then(({ data: { session } }) => {
    set({ session });
  });

  // Escuchar cambios en la sesión
  supabase.auth.onAuthStateChange((_, session) => {
    set({ session });
  });

  return {
    session: null,
    signIn: async (email: string, password: string) => {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) {
        return error.message;
      }
      set({ session: data.session });
      return null;
    },
    signOut: async () => {
      await supabase.auth.signOut();
      set({ session: null });
    },
    signUp: async (email: string, password: string) => {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });
      if (error) {
        return error.message; // Retorna el mensaje de error
      }
      console.log(data);
      console.log(error);

      return null;
    },
  };
});
