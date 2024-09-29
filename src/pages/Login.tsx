import { useEffect, useState } from "react";
import { Container } from "../components/common/Container";
import { Nav } from "../components/common/Nav";
import { useSupabaseStore } from "../stores/supabaseStore"; // Asegúrate de que la ruta sea correcta
import { useNavigate } from "react-router-dom";
import { pathBase } from "../constants";

export const Login = () => {
  const { signIn, session } = useSupabaseStore(); // Acceder a signIn y session del store
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate(); // Obtener la función de navegación

  useEffect(() => {
    // Redirigir si ya existe una sesión
    if (session) {
      navigate(`/${pathBase}/lives`); // Redirigir a lives si hay sesión
    }
  }, [session, navigate]);

  // Manejar el inicio de sesión
  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault(); // Evitar el comportamiento por defecto del formulario
    setError(null); // Limpiar errores anteriores

    const errorMessage = await signIn(email, password); // Obtener el mensaje de error
    if (errorMessage) {
      setError(errorMessage); // Si hay un error, establecerlo en el estado
    } else {
      navigate(`/${pathBase}/lives`);
    }
  };

  return (
    <Container>
      <Nav />
      <h1 className="gold w-fit">Iniciar Sesión</h1>
      <form onSubmit={handleSignIn} className="flex flex-col gap-4">
        <input
          className="focus-visible:outline-none bg-transparent border-[1px] border-gray px-4 py-2"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Actualizar el estado de email
        />
        <input
          className="focus-visible:outline-none bg-transparent border-[1px] border-gray px-4 py-2"
          placeholder="Contraseña"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Actualizar el estado de password
        />
        <button
          className={`px-6 py-1 hover:scale-105 transition-transform text-center bg-secondary text-black`}
        >
          Iniciar sesión
        </button>
        {error && <p className="text-red-500">{error}</p>}{" "}
        {session && <p>{session.user.email}</p>}
      </form>
    </Container>
  );
};
