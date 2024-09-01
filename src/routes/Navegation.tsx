import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Page1 } from "../pages/Page1";
import { Page2 } from "../pages/Page2";

export const Navegation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={""} element={<Page1 />} />
        <Route path={"page2"} element={<Page2 />} />
        <Route path={`/*`} element={<p>404 not found</p>} />
      </Routes>
    </BrowserRouter>
  );
};
