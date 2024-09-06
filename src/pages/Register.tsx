import { Container } from "../components/common/Container";
import { Input } from "../components/common/Input";
import { Button } from "../components/common/Button";
import { Nav } from "../components/common/Nav";

export const Register = () => {
  return (
    <Container>
      <Nav />
      <h1 className="gold w-fit">Crea una cuenta</h1>
      <form action="" className="flex flex-col gap-4">
        <Input placeholder="Correo electronico" />
        <Input placeholder="Contraseña" type="password" />
        <Input placeholder="Confirmar Contraseña" type="password" />
        <Input placeholder="Nombre" />
        <Input placeholder="Apellido" />
        <Button text="Crear Cuenta" />
      </form>
    </Container>
  );
};
