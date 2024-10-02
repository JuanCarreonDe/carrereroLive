// import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
// import { useAuthStore } from "../../stores/useAuthStore";

export const Checkout = () => {
  // const { session } = useAuthStore();

  // const [{ options, isPending }] = usePayPalScriptReducer();

  // const onCreateOrder = (data: any, actions: any) => {
  //   return actions.order.create({
  //     purchase_units: [
  //       {
  //         amount: {
  //           value: "8.99",
  //         },
  //       },
  //     ],
  //   });
  // };

  // const onApproveOrder = (data: any, actions: any) => {
  //   return actions.order.capture().then(async (details: any) => {
  //     // Crear el objeto transactionData
  //     const transactionData = {
  //       transaction_id: details.id,
  //       status: details.status,
  //       amount: details.purchase_units[0].amount.value,
  //       currency: details.purchase_units[0].amount.currency_code,
  //       payer_name: `${details.payer.name.given_name} ${details.payer.name.surname}`,
  //       payer_email: details.payer.email_address,
  //       create_time: details.create_time,
  //       order_id: data.orderID,
  //       user_id: session?.user?.id, // Asegúrate de que la sesión esté activa
  //     };

  //     // 3. Envía los datos a la API en Node para validación y registro.
  //     const response = await fetch("http://localhost:3000/webhook/paypal", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({
  //         orderID: data.orderID,
  //         //   user: {
  //         //     id: session?.user?.id, // Aquí puedes enviar solo el ID del usuario
  //         //     email: session?.user?.email, // Puedes enviar otros datos del usuario si es necesario
  //         //   },
  //         transactionData, // Incluir transactionData aquí
  //       }),
  //     });

  //     const result = await response.json();
  //     console.log("Resultado de la API:", result);
  //   });
  // };

  return (
    <div className="flex flex-col w-full">
      {/* {isPending ? (
        <p>LOADING...</p>
      ) : (
        <PayPalButtons
          style={{ layout: "vertical" }}
          createOrder={(data, actions) => onCreateOrder(data, actions)}
          onApprove={(data, actions) => onApproveOrder(data, actions)}
        />
      )} */}
      {<p>en proceso...</p>}
    </div>
  );
};
