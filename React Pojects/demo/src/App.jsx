import { useState } from "react";
import "./App.css";

import reactLogo from "./assets/react.svg";

const content = [
  [
    "React es extremadamente popular",
    "Hace que construir interfaces complejas e interactivas sea muy sencillo",
    "Es potente y flexible",
    "Tiene un ecosistema muy activo y versátil"
  ],
  [
    "Componentes, JSX y propiedades (props)",
    "Estado",
    "Hooks (p. ej., useEffect())",
    "Renderizado dinámico"
  ],
  [
    "Página web oficial (react.dev)",
    "Next.js (framework full-stack)",
    "React Native (crea apps móviles nativas con React)"
  ],
  [
    "JavaScript puro requiere programación imperativa",
    "Programación imperativa: defines todos los pasos necesarios para lograr un resultado",
    "React, en cambio, adopta la programación declarativa",
    "Con React, defines el objetivo y React determina cómo llegar a él"
  ]
];

/** 
function Profile() {
  return (
    <img
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt="Katherine Johnson"
    />
  );
}

export function Welcome(props) {
  return <h1>Hola, {props.name}</h1>;
}

export default function Gallery() {
  return (
    <Welcome name="Pepito" />
    <section>
      <h1>Científicos increíbles</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}
*/


export default function App() {
  const [activeContentIndex, setActiveContentIndex] = useState(0);

  return (
    <div>
      <header>
        <img src={reactLogo} alt="Logo de React" />
        <div>
          <h1>React.js</h1>
          <p>es decir, usar la biblioteca React para renderizar la interfaz</p>
        </div>
      </header>

      <div id="tabs">
        <menu>
          <button
            className={activeContentIndex === 0 ? "active" : ""}
            onClick={() => setActiveContentIndex(0)}
          >
            ¿Por qué React?
          </button>
          <button
            className={activeContentIndex === 1 ? "active" : ""}
            onClick={() => setActiveContentIndex(1)}
          >
            Características clave
          </button>
          <button
            className={activeContentIndex === 2 ? "active" : ""}
            onClick={() => setActiveContentIndex(2)}
          >
            Recursos relacionados
          </button>
          <button
            className={activeContentIndex === 3 ? "active" : ""}
            onClick={() => setActiveContentIndex(3)}
          >
            React vs. JavaScript
          </button>
        </menu>
        <div id="tab-content">
          <ul>
            {content[activeContentIndex].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
