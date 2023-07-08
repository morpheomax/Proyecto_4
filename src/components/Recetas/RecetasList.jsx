import axios from "axios";
import { useState, useEffect } from "react";

export const RecetaList = ({ categoria }) => {
  const [recetas, setRecetas] = useState([]);

  useEffect(() => {
    const fetchRecetas = async () => {
      try {
        const { data } = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoria}`
        );
        setRecetas(data.meals);
      } catch (error) {
        console.log("Error al obtener la información:", error);
      }
    };

    
    fetchRecetas();
  }, [categoria]);

  return (
    <div>
      <h1>Listado de Recetas - {categoria}</h1>
      {recetas.map((receta) => (
        <div key={receta.idMeal}>
          <h2>{receta.strMeal}</h2>
          <img src={receta.strMealThumb} alt={receta.strMeal} />
        </div>
      ))}
    </div>
  );
};