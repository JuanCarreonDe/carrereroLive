import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { Navegation } from "./routes/Navegation";
const initialOptions = {
  clientId: "AVY6pdxTFutqPFONCJxc1I7o4hLai7MduAIo0at20w756psNyBJB5idJLK5kOH-7lucv444WssYxVkxG",
  currency: "MXN",
  intent: "capture",
};
function App() {
  return (
    <PayPalScriptProvider options={initialOptions}>
      <Navegation />
    </PayPalScriptProvider>
  );
}

export default App;
