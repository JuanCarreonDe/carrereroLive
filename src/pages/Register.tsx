import { Link } from "react-router-dom";
import { Container } from "../components/common/Container";
import { Nav } from "../components/common/Nav";
// import { useSupabaseStore } from "../stores/supabaseStore";
import { useState } from "react";
import { Toaster, toast } from "sonner";
// import { useAuth } from "../hooks/useAuth";
import { useAuthStore } from "../stores/useAuthStore";

export const Register = () => {
  const { signUp } = useAuthStore(); // Acceder a signIn y session del store
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Manejar el inicio de sesión
  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    toast.promise(signUp(email, password), {
      loading: "Loading...",
      success: () => {
        setIsLoading(false);
        return `Registro exitoso, revisa tu correo para confirmar.`;
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
      <h1 className="gold w-fit">Crea una cuenta</h1>
      <form onSubmit={handleSignUp} className="flex flex-col gap-4">
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
          Registrarse
        </button>
        <Link
          to={`/login`}
          className="flex justify-center underline text-neutral-500"
        >
          Ya tengo cuenta
        </Link>
      </form>
    </Container>
  );
};
