// import { useEffect } from "react";
// import { bdClient } from "../utilities/bdClient"; // Importa tu instancia de supabase
// import { useAuthStore } from "../stores/useAuthStore"; // Estado global de sesión con Zustand
// import { useAuth } from "./useAuth";

// export const useAuthListener = () => {
//   const { checkSub } = useAuth();
//   const setSession = useAuthStore((state) => state.setSession);
//   //   const session = useAuthStore((state) => state.session); // Obtener el estado actual de la sesión

//   useEffect(() => {
//     const initializeSession = async () => {
//       const { data } = await bdClient.auth.getSession();
//       setSession(data.session); // Setear la sesión global en Zustand
//     };

//     initializeSession();

//     // Escuchar cambios en la sesión de bdClient
//     const { data: authListener } = bdClient.auth.onAuthStateChange(
//       (event, session) => {
//         setSession(session); // Actualizar la sesión en Zustand
//         if (session) {
//           console.log("Auth state changed:", event);
//           if (event === "SIGNED_IN") {
//             console.log("usuario iniciao", session?.user.email);
//             checkSub(session?.user.id);
//           }
//         }
//       }
//     );

//     return () => {
//       authListener?.subscription.unsubscribe();
//     };
//   }, [setSession]);
// };
