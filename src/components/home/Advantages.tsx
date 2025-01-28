import { Button } from "../common/Button";
import { Container } from "../common/Container";
import devices from "../../assets/devices.png";
import { useAuthStore } from "../../stores/useAuthStore";
// import { useAuth } from "../../hooks/useAuth";

export const Advantages = () => {
  // const { session } = useAuthStore(); // Acceder a signIn y session del store
  const { session, subscription, loading } = useAuthStore();

  return (
    <Container id="advantages">
      <h1 className="accent">Transmisiones en vivo</h1>
      <p className="w-full text-left">
        Accede desde cualquier lugar a las mejores transmisiones en vivo de
        Zuazua Arena Race Track.
      </p>
      {loading ? (
        <span>loading</span>
      ) : session ? (
        subscription ? (
          // con sub
          <Button
            toPath={`/lives`}
            text={"Ir a Lives"}
            tailwindClass="self-start bg-red-600 animate-pulse"
          />
        ) : (
          <Button
            toPath={`/pay`}
            text={"Activar Subscripcion"}
            tailwindClass="self-start bg-white text-gray animate-pulse"
          />
        )
      ) : (
        <Button
          toPath={`/register`}
          text="Unirse"
          tailwindClass="self-start bg-secondary text-black"
        />
      )}
      <img src={devices} alt="" className="w-full max-w-md" />
    </Container>
  );
};

// {loading ? (
//   <span>loading</span>
// ) : subscription ? (
//   <Button
//     toPath={`/lives`}
//     text={"Ir a Lives"}
//     tailwindClass="bg-red-600 animate-pulse"
//   />
// ) : (
//   <Button
//     toPath={`/${session ? "pay" : "register"}`}
//     text="Unirse"
//     tailwindClass="self-start bg-secondary text-black"
//   />
// )}
