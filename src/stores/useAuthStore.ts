import { create } from "zustand";
import { Session, User } from "@supabase/supabase-js";
import { bdClient } from "../utilities/bdClient";
import { SubscriptionResponse } from "../types/responses-bd";

// Definición de la interfaz para el estado de autenticación
interface AuthStore {
  session: Session | null;
  user: User | null;
  subscription: SubscriptionResponse | null;
  loading: boolean; // Estado de carga
  setSession: (session: Session | null) => void;
  setUser: (user: User | null) => void;
  setSubscription: (subscription: SubscriptionResponse | null) => void;
  signIn: (email: string, password: string) => Promise<string | null>;
  signUp: (email: string, password: string) => Promise<string | null>;
  signOut: () => Promise<void>;
  checkSubscription: () => Promise<void>;
  setLoading: (loading: boolean) => void;
}

// Implementación del store de Zustand con la lógica centralizada
export const useAuthStore = create<AuthStore>((set) => ({
  session: null,
  user: null,
  subscription: null,
  loading: false,
  setSession: (session) => set({ session }),
  setUser: (user) => set({ user }),
  setSubscription: (subscription) => set({ subscription }),
  setLoading: (loading) => set({ loading }),
  // Iniciar sesión
  signIn: async (email, password) => {
    try {
      const { data, error } = await bdClient.auth.signInWithPassword({
        email,
        password,
      });
      if (error) {
        throw new Error(error.message); // Lanza un error para manejarlo con una promesa rechazada
      }
      set({ session: data.session, user: data.user });
      return null; // En caso de éxito, devuelve null
    } catch (err) {
      return Promise.reject(err); // Rechaza la promesa con el error
    }
  },
  // Registrar usuario
  signUp: async (email, password) => {
    try {
      const { data, error } = await bdClient.auth.signUp({ email, password });
      if (error) {
        throw new Error(error.message); // Lanza un error si ocurre
      }
      set({ session: data.session, user: data.user });
      return null; // Devuelve null si todo es exitoso
    } catch (err) {
      return Promise.reject(err); // Rechaza la promesa con el error
    }
  },

  // Cerrar sesión
  signOut: async () => {
    await bdClient.auth.signOut();
    set({ session: null, user: null, subscription: null });
  },

  // Verificar suscripción del usuario actual
  checkSubscription: async () => {
    set({ loading: true });
    const state = useAuthStore.getState();
    if (!state.user) return;
    const { data, error } = await bdClient
      .from("subscriptions")
      .select("*")
      .eq("user_id", state.user.id)
      .gt("end_date", new Date().toISOString())
      .single();
    if (!error) set({ subscription: data });
    if (data || error) set({ loading: false });

    console.log("🚀 ~ checkSubscription: ~ data:", data);
    console.log("🚀 ~ checkSubscription: ~ error:", error);
  },
}));

// Listener para cambios en el estado de autenticación
bdClient.auth.onAuthStateChange((event, session) => {
  useAuthStore.getState().setSession(session);
  useAuthStore.getState().setUser(session?.user ?? null);
  if (session?.user && (event === "SIGNED_IN" || event === "TOKEN_REFRESHED")) {
    console.log(
      "🚀 ~ bdClient.auth.onAuthStateChange ~ session?.user:",
      session?.user
    );
    console.log("🚀 ~ Ejecutando checkSubscription debido al evento:", event);
    useAuthStore.getState().checkSubscription();
  }
});
