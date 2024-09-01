import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Page2 } from "../pages/Page2";

export const Navegation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={""} element={<Home />} />
        <Route path={"page2"} element={<Page2 />} />
        <Route path={`/*`} element={<p>404 not found</p>} />
      </Routes>
    </BrowserRouter>
  );
};
