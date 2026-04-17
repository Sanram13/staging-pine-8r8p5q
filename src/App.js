import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

function Home() {
  return <h2>Bienvenido al sistema de mascotas 🐶</h2>;
}

function RegistroMascota() {
  const [nombre, setNombre] = useState("");

  return (
    <div>
      <h2>Registro de Mascota</h2>
      <input
        placeholder="Nombre de la mascota"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <button onClick={() => alert("Mascota registrada: " + nombre)}>
        Guardar
      </button>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Inicio</Link> |{" "}
        <Link to="/registro">Registrar Mascota</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registro" element={<RegistroMascota />} />
      </Routes>
    </Router>
  );
}
