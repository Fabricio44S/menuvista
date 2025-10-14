import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MainMenu from "./pages/MainMenu";

function App() {
  return (
    <BrowserRouter>
      <nav style={{textAlign:"center", padding:"10px"}}>
        <Link to="/">Inicio</Link> | <Link to="/opciones">Opciones</Link> | <Link to="/salir">Salir</Link>
      </nav>

      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/opciones" element={<h1>Configuraciones</h1>} />
        <Route path="/salir" element={<h1>Salir</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
