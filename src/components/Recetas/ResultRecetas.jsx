import React from "react";
import { RecetaList } from "./RecetasList";

export const ResultRecetas = ({ categoriaSeleccionada }) => {
  return (
    <div>
      {categoriaSeleccionada && (
        <RecetaList categoria={categoriaSeleccionada} />
      )}
      
    </div>
  );
};
