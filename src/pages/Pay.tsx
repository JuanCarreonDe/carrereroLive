import { Container } from "../components/common/Container";
import { Checkout } from "../components/common/Checkout";

export const Pay = () => {
  return (
    <Container>
      <h1 className="gold w-fit">Pago</h1>
      <div className="flex flex-col gap-4">
        <h2 className="font-semibold">Nombre del plan</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ut
          nulla, ex velit repudiandae minus praesentium, autem repellendus
          impedit reiciendis vel totam natus quas maxime molestiae sequi!
          Eveniet, molestiae dolorum.
        </p>
        <span>
          <strong>$149</strong>/mes
        </span>
        <div className="flex flex-col gap-4 justify-center items-center">
          <Checkout />
        </div>
      </div>
    </Container>
  );
};
