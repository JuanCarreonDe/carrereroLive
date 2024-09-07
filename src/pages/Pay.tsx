import { Button } from "../components/common/Button";
import { Container } from "../components/common/Container";

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
        <div className="flex flex-col gap-4">
          <Button text="PayPal" tailwindClass="bg-[#FFC439] text-black" />
          <Button text="Debit or Credit Card" />
        </div>
      </div>
    </Container>
  );
};
