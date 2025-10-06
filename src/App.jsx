import { Routes, Route } from "react-router-dom";
import ImageUploader from "./ImageUploader";
import Contacto from "./Contacto";
import Navbar from "./Navbar";
import ApiMonedas from "./ApiMonedas"; // 👈 importamos la nueva página

function App() {
  return (
    <div>
      {/* Navbar fija en la parte superior */}
      <Navbar />

      <main>
        <Routes>
          {/* Página principal */}
          <Route
            path="/"
            element={
              <div style={{ textAlign: "center", marginTop: "120px" }}>
                <h1>Para subir imágenes con React!</h1>
                <h2>Hecho por Lucía Jallés</h2>
                <ImageUploader />
              </div>
            }
          />

          {/* Página de contacto */}
          <Route path="/contacto" element={<Contacto />} />

          {/* Nueva página para el TP5 */}
          <Route path="/api" element={<ApiMonedas />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
