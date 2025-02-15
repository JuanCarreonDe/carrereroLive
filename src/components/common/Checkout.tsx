import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { useAuthStore } from "../../stores/useAuthStore";
import { API_URL } from "../../constants";
import { useNavigate } from "react-router-dom";

export const Checkout = () => {
  const { session, checkSubscription } = useAuthStore();
  const navigate = useNavigate();

  const [{ isPending }] = usePayPalScriptReducer();

  // const onCreateOrder = (data: any, actions: any) => {
  const onCreateOrder = (_data: any, actions: any) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: "8.99",
          },
        },
      ],
    });
  };

  const onApproveOrder = (data: any, actions: any) => {
    return actions.order.capture().then(async (details: any) => {
      // Crear el objeto transactionData
      const transactionData = {
        transaction_id: details.id,
        status: details.status,
        amount: details.purchase_units[0].amount.value,
        currency: details.purchase_units[0].amount.currency_code,
        payer_name: `${details.payer.name.given_name} ${details.payer.name.surname}`,
        payer_email: details.payer.email_address,
        create_time: details.create_time,
        order_id: data.orderID,
        user_id: session?.user?.id, // Asegúrate de que la sesión esté activa
      };

      // 3. Envía los datos a la API en Node para validación y registro.
      const response = await fetch(`${API_URL}/webhook/paypal`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          orderID: data.orderID,
          transactionData, // Incluir transactionData aquí
        }),
      });
      console.log(
        "🚀 ~ returnactions.order.capture ~ transactionData: DATA ENVIADA:",
        transactionData
      );

      if (response.ok) {
        console.log(
          "🚀 ~ returnactions.order.capture ~ response.ok:",
          response.ok
        );
        checkSubscription(); // Verificar sub si todo fue ok
        navigate(`/lives`);
      }
    });
  };

  return (
    <div className="flex flex-col w-full">
      {isPending ? (
        <p>LOADING...</p>
      ) : (
        <PayPalButtons
          style={{ layout: "vertical" }}
          createOrder={(data, actions) => onCreateOrder(data, actions)}
          onApprove={(data, actions) => onApproveOrder(data, actions)}
        />
      )}
    </div>
  );
};
