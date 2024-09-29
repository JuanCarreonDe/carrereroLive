import { Container } from "../components/common/Container";
import { Nav } from "../components/common/Nav";
import { useSupabaseStore } from "../stores/supabaseStore";
import { useState } from "react";

export const Register = () => {
  const { signUp } = useSupabaseStore(); // Acceder a signIn y session del store
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  // Manejar el inicio de sesión
  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault(); // Evitar el comportamiento por defecto del formulario
    setError(null); // Limpiar errores anteriores

    const errorMessage = await signUp(email, password); // Obtener el mensaje de error
    if (errorMessage) {
      setError(errorMessage); // Si hay un error, establecerlo en el estado
    } else {
      alert("Registro exitoso, revisa tu correo para confirmar."); // O redirige a otra página
    }
  };

  return (
    <Container>
      <Nav />
      <h1 className="gold w-fit">Crea una cuenta</h1>
      <form onSubmit={handleSignUp} className="flex flex-col gap-4">
        {/* <Input placeholder="Correo electronico" />
        <Input placeholder="Contraseña" type="password" />
        <Input placeholder="Confirmar Contraseña" type="password" />
        <Input placeholder="Nombre" />
        <Input placeholder="Apellido" /> */}
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
        {/* <Button text="Crear Cuenta" toPath={`/${pathBase}/login`} /> */}
        {error && <p className="text-red-500">{error}</p>}{" "}
      </form>
    </Container>
  );
};
