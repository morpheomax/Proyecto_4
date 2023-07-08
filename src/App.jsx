import { NavBar } from "./components/NavBar/NavBar/";
import { Footer } from "./components/Footer/Footer";
import { MainRoutes } from "./routes/MainRoutes";

import "./App.css";

function App() {
  // logica usuario conexión

  return (
    <>
      <NavBar />
      <MainRoutes />
      
      <Footer />
    </>
  );
}

export default App;
