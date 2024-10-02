import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { Navegation } from "./routes/Navegation";
const initialOptions = {
  clientId:
    "AVY6pdxTFutqPFONCJxc1I7o4hLai7MduAIo0at20w756psNyBJB5idJLK5kOH-7lucv444WssYxVkxG",
  currency: "MXN",
  intent: "capture",
};
function App() {
  return (
    <PayPalScriptProvider options={initialOptions}>
      <Navegation />
    </PayPalScriptProvider>
  );
}

export default App;

// import "./index.css";
// import { useState, useEffect } from "react";
// import { createClient, Session } from "@supabase/supabase-js";
// import { Auth } from "@supabase/auth-ui-react";
// import { ThemeSupa } from "@supabase/auth-ui-shared";

// const supabaseUrl = "https://edqxzmycshnvtkdttfbl.supabase.co/";
// const supabaseKey =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVkcXh6bXljc2hudnRrZHR0ZmJsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcwNDE4NTUsImV4cCI6MjA0MjYxNzg1NX0.GVqqp7tdK_qTfObvXRGbGJHJf-OUjPYz_LInp2SAq8g";
// const supabase = createClient(supabaseUrl, supabaseKey);

// export default function App() {
//   const [session, setSession] = useState<Session | null>(null);

//   useEffect(() => {
//     supabase.auth.getSession().then(({ data: { session } }) => {
//       setSession(session);
//     });

//     const {
//       data: { subscription },
//     } = supabase.auth.onAuthStateChange((_event, session) => {
//       setSession(session);
//     });

//     console.log(session);
//     return () => subscription.unsubscribe();
//   }, []);

//   async function signOut() {
//     const { error } = await supabase.auth.signOut();
//   }

//   if (!session) {
//     return (
//       <Auth
//         supabaseClient={supabase}
//         appearance={{ theme: ThemeSupa }}
//         providers={[]}
//       />
//     );
//   } else {
//     return (
//       <div>
//         <h1>Logged in! {}</h1>
//         <button onClick={() => signOut()}>Log out</button>
//       </div>
//     );
//   }
// }

// import { useState, useEffect } from "react";
// import { createClient, Session } from "@supabase/supabase-js";

// // Crear el cliente de Supabase
// const supabaseUrl = "https://edqxzmycshnvtkdttfbl.supabase.co/";
// const supabaseKey =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVkcXh6bXljc2hudnRrZHR0ZmJsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcwNDE4NTUsImV4cCI6MjA0MjYxNzg1NX0.GVqqp7tdK_qTfObvXRGbGJHJf-OUjPYz_LInp2SAq8g";
// const supabase = createClient(supabaseUrl, supabaseKey);

// export default function App() {
//   const [session, setSession] = useState<Session | null>(null);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState<string | null>(null);

//   // Obtener la sesión actual cuando la app carga
//   useEffect(() => {
//     supabase.auth.getSession().then(({ data: { session } }) => {
//       setSession(session);
//     });

//     const { data: authListener } = supabase.auth.onAuthStateChange(
//       (_event, session) => {
//         setSession(session);
//       }
//     );

//     return () => {
//       authListener.subscription.unsubscribe();
//     };
//   }, []);

//   // Función para registrar un nuevo usuario
//   const signUp = async () => {
//     setError(null);
//     const { data, error } = await supabase.auth.signUp({
//       email,
//       password,
//     });
//     if (error) setError(error.message);
//     else alert("Registro exitoso, revisa tu correo para confirmar.");
//   };

//   // Función para iniciar sesión
//   const signIn = async () => {
//     setError(null);
//     const { data, error } = await supabase.auth.signInWithPassword({
//       email,
//       password,
//     });
//     if (error) setError(error.message);
//   };

//   // Función para cerrar sesión
//   const signOut = async () => {
//     const { error } = await supabase.auth.signOut();
//     if (error) setError(error.message);
//   };

//   // Si el usuario no está autenticado, mostrar el formulario de login/registro
//   if (!session) {
//     return (
//       <div>
//         <h1>Iniciar Sesión / Registrar</h1>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Contraseña"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button onClick={signIn}>Iniciar Sesión</button>
//         <button onClick={signUp}>Registrar</button>
//         {error && <p>{error}</p>}
//       </div>
//     );
//   }

//   // Si el usuario está autenticado, mostrar el contenido protegido
//   return (
//     <div>
//       <h1>¡Estás autenticado!</h1>
//       <button onClick={signOut}>Cerrar Sesión</button>
//     </div>
//   );
// }
