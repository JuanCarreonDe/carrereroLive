import { Container } from "../components/common/Container";
import { Checkout } from "../components/common/Checkout";
import { useAuthStore } from "../stores/useAuthStore";
import { Nav } from "../components/common/Nav";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { initialOptions } from "../constants";

export const Pay = () => {
  const { subscription, loading } = useAuthStore();

  return (
    <Container>
      <PayPalScriptProvider options={initialOptions}>
        <Nav />
        <h1 className="gold w-fit">Pago</h1>
        <div className="flex flex-col gap-4 md:px-20">
          <h2 className="font-semibold">Nombre del plan</h2>
          <p className="text-neutral-500">
            *Informacion del plan, accesos, monto, etc*
          </p>
          <span>
            <strong>$149</strong>/mes
          </span>
          {subscription?.end_date.toString()}
          <div className="flex flex-col gap-4 justify-center items-center">
            {loading ? (
              <span>Cargando</span>
            ) : subscription ? (
              <span>Aun cuentas con sub</span>
            ) : (
              <Checkout />
            )}
          </div>
        </div>
      </PayPalScriptProvider>
    </Container>
  );
};
