import { Route, Routes } from "react-router-dom";

import { HomePage } from "../pages/HomePage/";
import { Carta } from "../pages/Carta";
import { Recetas } from "../pages/Recetas";
import { Reserva } from "../pages/Reserva";
import { Contacto } from "../pages/Contacto/";
// import ResultRecetas from "../components/recetas/ResultRecetas";

export const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="carta" element={<Carta />} />
        <Route path="recetas" element={<Recetas />} />
        {/* <Route path="resultresetas" element={<ResultRecetas />} /> */}
        <Route path="reserva" element={<Reserva />} />
        <Route path="contacto" element={<Contacto />} />
      </Routes>
    </>
  );
};
