import { useAuthStore } from "../../stores/useAuthStore";
// import { useAuth } from "../../hooks/useAuth";
import { Button } from "../common/Button";
import { Container } from "../common/Container";

export const Hero = () => {
  const { session, subscription, loading } = useAuthStore();

  return (
    <Container>
      <div className="flex flex-col justify-center items-center flex-1 z-10 w-full gap-8">
        <div className="flex flex-col justify-center items-center">
          <h1 className="accent w-fit text-center">Zuazua Arena Race Track</h1>
          {/* <span className="uppercase text-secondary">
            La marca de los campeones
          </span> */}
        </div>
        {loading ? (
          <span>loading</span>
        ) : session ? (
          subscription ? (
            // con sub
            <Button
              toPath={`/lives`}
              text={"Ir a Lives"}
              tailwindClass="bg-red-600 animate-pulse"
            />
          ) : (
            <>
              {/* sin sub */}
              <p className="text-center text-pretty">
                ¡Estas a un paso de acceder al contenido de Zuazua Arena Race
                Track!
              </p>
              <div className="flex gap-4">
                <Button
                  toPath={`/pay`}
                  text={"Activar Subscripcion"}
                  tailwindClass="bg-white text-gray animate-pulse"
                />
              </div>
            </>
          )
        ) : (
          <>
            {/* sin session */}
            <p className="text-center text-pretty">
              Trae para ustedes las mejores transmisiones de carreras de
              caballos en un mismo lugar.
            </p>
            <div className="flex gap-4">
              <Button toPath={`/register`} text={"Unirse"} />
              <Button
                href={"#advantages"}
                text={"Saber más"}
                tailwindClass="bg-primary text-white border-[1px]"
              />
            </div>
          </>
        )}
      </div>
      <div className="absolute bg-primary w-full h-full"></div>
    </Container>
  );
};
