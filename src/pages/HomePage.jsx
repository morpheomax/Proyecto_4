import { Slider } from "../components/Slider/Slider";
import { Nosotros } from "../components/Nosotros/Nosotros";
import Reservacion from "../components/Reserva/Reservacion";

export const HomePage = () => {
  return (
    <>
      <Slider />
      <Nosotros />
      <Reservacion />
    </>
  );
};
