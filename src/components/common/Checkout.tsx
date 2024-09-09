import { useState } from "react";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";

export const Checkout = () => {
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
  const [currency, setCurrency] = useState(options.currency);

  const onCurrencyChange = ({ target: { value } }) => {
    setCurrency(value);
    dispatch({
      type: "resetOptions",
      value: {
        ...options,
        currency: value,
      },
    });
  };

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
    return actions.order.capture().then((details) => {
        console.log("Transaction Details:", details);

        // Guardar datos clave en tu base de datos o sistema
        const transactionData = {
            transactionID: details.id,
            status: details.status,
            amount: details.purchase_units[0].amount.value,
            currency: details.purchase_units[0].amount.currency_code,
            payerName: `${details.payer.name.given_name} ${details.payer.name.surname}`,
            payerEmail: details.payer.email_address,
            createTime: details.create_time,
            orderID: data.orderID
        };

        console.log("Datos de la transacción a guardar:", transactionData);

        // Aquí podrías realizar una llamada al backend para guardar la información
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
