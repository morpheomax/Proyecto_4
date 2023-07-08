// paso 1
// npm create vite@latest
// sigue los pasos de instalacion hasta haber instalado el pack
//Ejecutar el siguiente codigo
// node --experimental-specifier-resolution=node install.js

// una vez instaladas las dependencias ve al archivo .eslintrc.cjs e incorpora en rules la siguiente linea
// 'react/prop-types': 'off',

import { execSync } from "child_process";
import fs from "fs/promises";

console.log("Iniciando instalación...");

// Paso 1: Instalar dependencias
console.log("Instalando dependencias...");
execSync("npm install axios", { stdio: "inherit" });
execSync("npm install react-router-dom", { stdio: "inherit" });

// Boostrap
execSync("npm install bootstrap@5.3.0", { stdio: "inherit" });
// Bootstrap Icons
execSync("npm i bootstrap-icons", { stdio: "inherit" });

// Lorem Ipsum
// execSync("npm i react-lorem-ipsum", { stdio: "inherit" });

// tailwindcss
// execSync("npm i -D tailwindcss postcss autoprefixer", { stdio: "inherit" });

// Iconos
// execSync("npm i @heroicons/react", { stdio: "inherit" });
// execSync("npm install @headlessui/react", { stdio: "inherit" });

// Moment - para manejos de fechas
execSync("npm i moment", { stdio: "inherit" });

// Crear archivo de configuración de Tailwind CSS
// execSync("npx tailwindcss init -p", { stdio: "inherit" });

// Paso 2: Crear carpetas
console.log("Creando Carpetas...");
await fs.mkdir("./src/Components", { recursive: true });
await fs.mkdir("./src/Helpers", { recursive: true });
await fs.mkdir("./src/Pages", { recursive: true });
await fs.mkdir("./src/Routes", { recursive: true });

// Paso 3: creación de archivos
console.log("Creando Paginas...");
// -- Menus
const MenusContent = `import React from 'react'

export const Menus = () => {
  return (
    <div>Menus</div>
  )
}
`;
await fs.writeFile("./src/pages/Menus.jsx", MenusContent);

// -- Recetas
const RecetasContent = `import React from 'react'

export const Recetas = () => {
  return (
    <div>Recetas</div>
  )
}
`;
await fs.writeFile("./src/pages/Recetas.jsx", RecetasContent);

// -- Reserva
const ReservaContent = `import React from 'react'

export const Reserva = () => {
  return (
    <div>Reserva</div>
  )
}

`;
await fs.writeFile("./src/pages/Reserva.jsx", ReservaContent);

// Contacto
const ContactoContent = `import React from 'react'

export const Contacto = () => {
  return (
    <div>Contacto</div>
  )
}
`;
await fs.writeFile("./src/pages/Contacto.jsx", ContactoContent);

// Paso 4: Creación de Componentes
console.log("Creando Componentes...");
// -- NavBar
const NavBarContent = `import React from 'react'

export const NavBar = () => {
  return (
    <div>NavBar</div>
  )
}
`;
await fs.writeFile("./src/components/NavBar.jsx", NavBarContent);

// -- Header
const HeaderContent = `import React from 'react'

export const Header = () => {
  return (
    <div>Header</div>
  )
}
`;
await fs.writeFile("./src/components/Header.jsx", HeaderContent);

// -- Main
const MainContent = `import React from 'react'

export const Main = () => {
  return (
    <div>Main</div>
  )
}
`;
await fs.writeFile("./src/components/Main.jsx", MainContent);

// -- Slider
const SliderContent = `import React from 'react'

export const Slider = () => {
  return (
    <div>Slider</div>
  )
}
`;
await fs.writeFile("./src/components/Slider.jsx", SliderContent);

// -- Watsapp
const WhatsAppContent = `import React from 'react'

export const WhatsApp = () => {
  return (
    <div>WhatsApp</div>
  )
}
`;
await fs.writeFile("./src/components/WhatsApp.jsx", WhatsAppContent);

// -- Footer
const FooterContent = `import React from 'react'

export const Footer = () => {
  return (
    <div>Footer</div>
  )
}
`;
await fs.writeFile("./src/components/Footer.jsx", FooterContent);

console.log("Instalación Completa");
console.log("Elimina el archivo install.js");
