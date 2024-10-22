import { useEffect, useState } from "react";
import { Container } from "../components/common/Container";
import { Nav } from "../components/common/Nav";
// import { useSupabaseStore } from "../stores/supabaseStore"; // Asegúrate de que la ruta sea correcta
import { Link, useNavigate } from "react-router-dom";
import { pathBase } from "../constants";
import { Toaster, toast } from "sonner";
// import { useAuth } from "../hooks/useAuth";
import { useAuthStore } from "../stores/useAuthStore";

export const Login = () => {
  const { signIn, session } = useAuthStore(); // Acceder a signIn y session del store
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate(); // Obtener la función de navegación

  useEffect(() => {
    // Redirigir si ya existe una sesión
    if (session) {
      navigate(`/lives`); // Redirigir a lives si hay sesión
    }
  }, [session, navigate]);

  // Manejar el inicio de sesión
  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault(); // Evitar el comportamiento por defecto del formulario

    toast.promise(signIn(email, password), {
      loading: "Loading...",
      success: () => {
        setIsLoading(false);
        navigate(`/`);
        return `Sesión iniciada.`;
      },
      error: (err) => {
        setIsLoading(false);
        return `${err}`;
      },
    });
  };

  return (
    <Container>
      <Nav />
      <Toaster
        toastOptions={{
          style: {
            background: "#000",
            color: "#FFF",
            borderColor: "#171717",
          },
          className: "class",
        }}
      />
      <h1 className="gold w-fit">Iniciar Sesión</h1>
      <form onSubmit={handleSignIn} className="flex flex-col gap-4">
        <input
          className="focus-visible:outline-none bg-transparent border-[1px] border-gray px-4 py-2"
          placeholder="Correo electrónico"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)} // Actualizar el estado de email
        />
        <input
          className="focus-visible:outline-none bg-transparent border-[1px] border-gray px-4 py-2"
          placeholder="Contraseña"
          type="password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)} // Actualizar el estado de password
        />
        <button
          type="submit"
          className={`px-6 py-1 hover:scale-105 transition-all text-center bg-secondary text-black ${
            isLoading ? "bg-neutral-900 text-white" : ""
          }`}
          disabled={isLoading}
        >
          Iniciar sesión
        </button>
        <Link
          to={`/register`}
          className="flex flex-col justify-center items-center text-neutral-500"
        >
          ¿Aún no tiene una cuenta?
          <span className="underline">Registrese aqui</span>
        </Link>
      </form>
    </Container>
  );
};
