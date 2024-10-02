import { useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { useAuthStore } from "../stores/useAuthStore"; // Estado global de sesión con Zustand

// Configuración de Supabase
const supabaseUrl = "https://edqxzmycshnvtkdttfbl.supabase.co/";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVkcXh6bXljc2hudnRrZHR0ZmJsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcwNDE4NTUsImV4cCI6MjA0MjYxNzg1NX0.GVqqp7tdK_qTfObvXRGbGJHJf-OUjPYz_LInp2SAq8g";
const supabase = createClient(supabaseUrl, supabaseKey);

// Hook personalizado para manejar la autenticación
export const useAuth = () => {
  const setSession = useAuthStore((state) => state.setSession); // Obtener la función para setear la sesión global
  const session = useAuthStore((state) => state.session); // Obtener el estado actual de la sesión

  useEffect(() => {
    // Inicializar la sesión al cargar el hook
    const initializeSession = async () => {
      const { data } = await supabase.auth.getSession();
      setSession(data.session); // Setear la sesión global en Zustand
    };

    initializeSession();

    // Escuchar cambios en la sesión de Supabase
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_, session) => {
        setSession(session); // Actualizar la sesión en Zustand
      }
    );

    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, [setSession]);

  // Métodos de autenticación
  const signIn = async (
    email: string,
    password: string
  ): Promise<string | null> => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) return Promise.reject(error.message); // Asegúrate de rechazar la promesa
    setSession(data.session);
    return null;
  };

  const signOut = async (): Promise<void> => {
    await supabase.auth.signOut();
    setSession(null); // Limpiar la sesión en Zustand
  };

  const signUp = async (
    email: string,
    password: string
  ): Promise<string | null> => {
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) return Promise.reject(error.message); // Asegúrate de rechazar la promesa
    setSession(data.session); // Setear la sesión en Zustand al registrar
    return null;
  };

  return { session, signIn, signOut, signUp };
};
