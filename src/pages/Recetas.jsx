import axios from "axios";
import { useState, useEffect } from "react";
import { ResultRecetas } from "../components/recetas/ResultRecetas/";

export const Recetas = () => {
  const init = localStorage.getItem("recetas")
    ? JSON.parse(localStorage.getItem("recetas"))
    : [];

  const [recetas, setRecetas] = useState(init);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");

  const handleVerMasClick = (categoria) => {
    setCategoriaSeleccionada(categoria);
  };
  useEffect(() => {
    const fetchRecetas = async () => {
      try {
        const { data } = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/categories.php"
        );
        setRecetas(data.categories);
        // console.log(data.categories);

        localStorage.setItem("recetas", JSON.stringify(data.categories));
      } catch (error) {
        console.log("Error al obtener la información:", error);
      }
    };
    init.length === 0 ? fetchRecetas() : setRecetas(init);
  }, []);

  const truncateText = (text, limit) => {
    const words = text.split(" ");
    if (words.length > limit) {
      return words.slice(0, limit).join(" ") + "...";
    }
    return text;
  };

  return (
    <>
      <div className="p-5 mb-4 bg-light rounded-3 text-center">
        <div className="container-fluid">
          <h1 className="display-5 fw-bold">Nuestras Recetas</h1>
          <p className=" fs-10">
            Explora categorías y descubre recetas de comidas de todo el mundo.
            Elige la categoría que más te interese y accede a un listado de
            recetas auténticas y deliciosas. Sorpréndete con sabores, aromas y
            experiencias culinarias únicas. ¡Prepárate para descubrir nuevos
            ingredientes y técnicas de cocina! La aventura comienza aquí, elige
            tu categoría y explora la cocina global.
          </p>
        </div>
      </div>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4 text-center m-5">
        {recetas.map((receta) => (
          <div className="col" key={receta.idCategory}>
            <div className="card ">
              <img
                src={receta.strCategoryThumb}
                className="card-img-top"
                alt={receta.strCategory}
              />
              <div className="card-body">
                <h5 className="card-title">{receta.strCategory}</h5>
                <p className="card-text">
                  {truncateText(receta.strCategoryDescription, 10)}
                </p>

                <button
                  className="btn btn-warning"
                  onClick={() => handleVerMasClick(receta.strCategory)}
                >
                  Ver más...
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* <ResultRecetas categoriaSeleccionada={categoriaSeleccionada} /> */}
    </>
  );
};
