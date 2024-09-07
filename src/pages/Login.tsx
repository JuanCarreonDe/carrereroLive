import { Button } from "../components/common/Button";
import { Container } from "../components/common/Container";
import { Input } from "../components/common/Input";
import { Nav } from "../components/common/Nav";

export const Login = () => {
  return (
    <Container>
      <Nav />
      <h1 className="gold w-fit">Iniciar Sesión</h1>
      <form action="" className="flex flex-col gap-4">
        <Input placeholder="Correo electronico" />
        <Input placeholder="Contraseña" type="password" />
        <Button text="Iniciar Sesión" />
      </form>
    </Container>
  );
};
