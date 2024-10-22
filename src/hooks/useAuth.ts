// import { useAuthStore } from "../stores/useAuthStore"; // Estado global de sesión con Zustand
// import { bdClient } from "../utilities/bdClient";

// // Hook personalizado para manejar la autenticación
// export const useAuth = () => {
//   const setSession = useAuthStore((state) => state.setSession); // Obtener la función para setear la sesión global
//   const setSubscription = useAuthStore((state) => state.setSubscription); // Obtener la función para setear la subscripcion global
//   const session = useAuthStore((state) => state.session); // Obtener el estado actual de la sesión
//   const subscription = useAuthStore((state) => state.subscription); // Obtener el estado actual de la subscripcion

//   // Métodos de autenticación
//   const signIn = async (
//     email: string,
//     password: string
//   ): Promise<string | null> => {
//     const { data, error } = await bdClient.auth.signInWithPassword({
//       email,
//       password,
//     });
//     if (error) return Promise.reject(error.message); // Asegúrate de rechazar la promesa
//     setSession(data.session);
//     return null;
//   };

//   const signOut = async (): Promise<void> => {
//     await bdClient.auth.signOut();
//     setSession(null); // Limpiar la sesión en Zustand
//     setSubscription(null);
//   };

//   const signUp = async (
//     email: string,
//     password: string
//   ): Promise<string | null> => {
//     const { data, error } = await bdClient.auth.signUp({ email, password });
//     if (error) return Promise.reject(error.message); // Asegúrate de rechazar la promesa
//     setSession(data.session); // Setear la sesión en Zustand al registrar
//     return null;
//   };

//   const checkSub = async (userId: string) => {
//     console.log("CHECKSUB");

//     const { data, error } = await bdClient
//       .from("subscriptions")
//       .select("*")
//       .eq("user_id", userId)
//       .gt("end_date", new Date().toISOString())
//       .single();
//     console.log("🚀 ~ checkSub ~ data:", data);
//     console.log("🚀 ~ checkSub ~ error:", error);

//     if (error) return error.message;
//     setSubscription(data);
//     return null;
//   };

//   return {
//     session,
//     subscription,
//     setSubscription,
//     signIn,
//     signOut,
//     signUp,
//     checkSub,
//   };
// };
