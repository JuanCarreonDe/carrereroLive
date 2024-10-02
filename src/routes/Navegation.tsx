import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Page2 } from "../pages/Page2";
import { Register } from "../pages/Register";
import { Login } from "../pages/Login";
import { Pay } from "../pages/Pay";
import { pathBase } from "../constants";
import { Lives } from "../pages/Lives";
import { Stream } from "../pages/Stream";
import { useAuthStore } from "../stores/useAuthStore";

export const Navegation = () => {
  const { session } = useAuthStore(); // Acceder a signIn y session del store
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`${pathBase}`} element={<Home />} />
        <Route path={"page2"} element={<Page2 />} />

        {session ? (
          <>
            <Route path={`${pathBase}/pay`} element={<Pay />} />
            <Route path={`${pathBase}/lives`} element={<Lives />} />
            <Route path={`${pathBase}/stream`} element={<Stream />} />
          </>
        ) : (
          <>
            <Route path={`${pathBase}/register`} element={<Register />} />
            <Route path={`${pathBase}/login`} element={<Login />} />
          </>
        )}
        <Route path={`/*`} element={<p>404 not found</p>} />
      </Routes>
    </BrowserRouter>
  );
};
