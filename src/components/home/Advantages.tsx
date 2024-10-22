import { Button } from "../common/Button";
import { Container } from "../common/Container";
import devices from "../../assets/devices.png";
import { pathBase } from "../../constants";
import { useAuthStore } from "../../stores/useAuthStore";
// import { useAuth } from "../../hooks/useAuth";

export const Advantages = () => {
  // const { session } = useAuthStore(); // Acceder a signIn y session del store
  const { session, subscription, loading } = useAuthStore();

  return (
    <Container id="advantages">
      <h1 className="gold">Transmisiones en vivo</h1>
      <p>
        Accede desde cualquier lugar a las transmisiones en vivo de las mejores
        pistas de Nuevo León. Zuazua Arena Downs, River Racing Track, Rancho El
        Texano y Agua Nueva desde un solo lugar
      </p>
      {loading ? (
        <span>loading</span>
      ) : subscription ? (
        <Button toPath={`/lives`} text={"Ir a Lives"} />
      ) : (
        <Button
          toPath={`/${session ? "pay" : "register"}`}
          text="Unirse"
          tailwindClass="self-start bg-secondary text-black"
        />
      )}
      <img src={devices} alt="" className="w-full max-w-md" />
    </Container>
  );
};
