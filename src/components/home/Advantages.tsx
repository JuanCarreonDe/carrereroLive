import { Button } from "../common/Button";
import { Container } from "../common/Container";
import devices from "../../assets/devices.png";
import { pathBase } from "../../constants";
import { useAuthStore } from "../../stores/useAuthStore";

export const Advantages = () => {
  const { session } = useAuthStore(); // Acceder a signIn y session del store

  return (
    <Container id="advantages">
      <h1 className="gold">Transmisiones en vivo</h1>
      <p>
        Accede desde cualquier lugar a las transmisiones en vivo de las mejores
        pistas de Nuevo León. Zuazua Arena Downs, River Racing Track, Rancho El
        Texano y Agua Nueva desde un solo lugar
      </p>
      <Button
        toPath={`/${pathBase}/${session ? "lives" : "register"}`}
        text="Unirse"
        tailwindClass="self-start bg-secondary text-black"
      />
      <img src={devices} alt="" className="w-full max-w-md" />
    </Container>
  );
};
