import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Page2 } from "../pages/Page2";
import { Register } from "../pages/Register";
import { Login } from "../pages/Login";
import { Pay } from "../pages/Pay";
import { pathBase } from "../constants";
import { Lives } from "../pages/Lives";
import { Stream } from "../pages/Stream";

export const Navegation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`${pathBase}`} element={<Home />} />
        <Route path={"page2"} element={<Page2 />} />
        <Route path={`${pathBase}/register`} element={<Register />} />
        <Route path={`${pathBase}/login`} element={<Login />} />
        <Route path={`${pathBase}/pay`} element={<Pay />} />
        <Route path={`${pathBase}/lives`} element={<Lives />} />
        <Route path={`${pathBase}/stream`} element={<Stream />} />
        <Route path={`/*`} element={<p>404 not found</p>} />
      </Routes>
    </BrowserRouter>
  );
};
