import { useState } from "react";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://xxfwxypfvxxaftxjmjzm.supabase.co/";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh4Znd4eXBmdnh4YWZ0eGptanptIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk0MjY1MTIsImV4cCI6MjAzNTAwMjUxMn0.yIgy0jtACOyQ9-IcWGR-VYymDr4p0YU7tMapxiqJIhc";
const supabase = createClient(supabaseUrl, supabaseKey);

export const Checkout = () => {
  const [{ options, isPending }] = usePayPalScriptReducer();
  // const [currency, setCurrency] = useState(options.currency);

  // const onCurrencyChange = ({ target: { value } }) => {
  //   setCurrency(value);
  //   dispatch({
  //     type: "resetOptions",
  //     value: {
  //       ...options,
  //       currency: value,
  //     },
  //   });
  // };

  const onCreateOrder = (data, actions) => {
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

  const onApproveOrder = (data, actions) => {
    return actions.order.capture().then(async (details) => {
      console.log("Transaction Details:", details);

      const transactionData = {
        transaction_id: details.id,
        status: details.status,
        amount: details.purchase_units[0].amount.value,
        currency: details.purchase_units[0].amount.currency_code,
        payer_name: `${details.payer.name.given_name} ${details.payer.name.surname}`,
        payer_email: details.payer.email_address,
        create_time: details.create_time,
        order_id: data.orderID,
      };

      console.log("Datos de la transacción a guardar:", transactionData);

      // Guardar en Supabase
      const { data: result, error } = await supabase
        .from("transactions")
        .insert([transactionData]);

      if (error) {
        console.error("Error al guardar en Supabase:", error);
      } else {
        console.log("Transacción guardada en Supabase:", result);
      }
    });
  };

  return (
    <div className="flex flex-col w-full">
      {isPending ? (
        <p>LOADING...</p>
      ) : (
        <>
          {/* <select value={currency} onChange={onCurrencyChange}>
            <option value="USD">💵 USD</option>
            <option value="EUR">💶 Euro</option>
          </select> */}
          <PayPalButtons
            style={{ layout: "vertical" }}
            createOrder={(data, actions) => onCreateOrder(data, actions)}
            onApprove={(data, actions) => onApproveOrder(data, actions)}
          />
        </>
      )}
    </div>
  );
};
