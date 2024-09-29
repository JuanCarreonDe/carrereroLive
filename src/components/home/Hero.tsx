import { pathBase } from "../../constants";
import { useSupabaseStore } from "../../stores/supabaseStore";
import { Button } from "../common/Button";
import { Container } from "../common/Container";

export const Hero = () => {
  const { session } = useSupabaseStore(); // Acceder a signIn y session del store

  return (
    <Container>
      <div className="flex flex-col justify-center items-center flex-1 z-10 w-full gap-8">
        <div className="flex flex-col justify-center items-center">
          <h1 className="gold w-fit">Carrerero</h1>
          <span className="uppercase text-secondary">
            La marca de los campeones
          </span>
        </div>
        <p>
          Trae para ustes Carrerero Live. Disfrute de las mejores transmisiones
          de carreras de caballos en un mismo lugar.
        </p>
        <div className="flex gap-4">
          <Button
            toPath={`/${pathBase}/${session ? "lives" : "register"}`}
            text={"Unirse"}
          />
          <Button
            href={"#advantages"}
            text={"Saber más"}
            tailwindClass="bg-gray text-white border-[1px]"
          />
        </div>
      </div>
      <div className="absolute bg-gray w-full h-full"></div>
    </Container>
  );
};
