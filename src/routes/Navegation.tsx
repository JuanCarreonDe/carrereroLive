import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Home } from "../pages/Home";
import { Page2 } from "../pages/Page2";
import { Register } from "../pages/Register";
import { Login } from "../pages/Login";
import { Pay } from "../pages/Pay";
import { Lives } from "../pages/Lives";
import { Stream } from "../pages/Stream";
import { useAuthStore } from "../stores/useAuthStore";
import { pathBase } from "../constants";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { session, loading } = useAuthStore();
  const { setLoading } = useAuthStore();
  useEffect(() => {
    setLoading(false);
  }, [setLoading]);
  if (loading) {
    return <div>Cargando...</div>;
  }
  return session ? children : <Navigate to={`/${pathBase}/login`} />;
};

const SubscriptionRoute = ({ children }: { children: React.ReactNode }) => {
  const { subscription, loading } = useAuthStore();
  if (loading) {
    return <div>Cargando...</div>;
  }
  return subscription ? children : <Navigate to={`/${pathBase}/pay`} />;
};

const NoSessionRoute = ({ children }: { children: React.ReactNode }) => {
  const { session, loading } = useAuthStore();
  const { setLoading } = useAuthStore();
  useEffect(() => {
    setLoading(false);
  }, [setLoading]);
  if (loading) {
    return <div>Cargando...</div>;
  }
  return session ? <Navigate to={`/${pathBase}/pay`} /> : children;
};

export const Navegation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={``} element={<Home />} />
        <Route path={`/page2`} element={<Page2 />} />

        {/* Rutas protegidas por sesión */}
        <Route
          path={`/pay`}
          element={
            <ProtectedRoute>
              <Pay />
            </ProtectedRoute>
          }
        />

        {/* Rutas protegidas por suscripción */}
        <Route
          path={`/lives`}
          element={
            <SubscriptionRoute>
              <Lives />
            </SubscriptionRoute>
          }
        />
        <Route
          path={`/stream`}
          element={
            <SubscriptionRoute>
              <Stream />
            </SubscriptionRoute>
          }
        />

        {/* Rutas públicas */}
        <Route
          path={`/register`}
          element={
            <NoSessionRoute>
              <Register />
            </NoSessionRoute>
          }
        />
        <Route
          path={`/login`}
          element={
            <NoSessionRoute>
              <Login />
            </NoSessionRoute>
          }
        />
        <Route path={`/*`} element={<p>404 not found</p>} />
      </Routes>
    </BrowserRouter>
  );
};
