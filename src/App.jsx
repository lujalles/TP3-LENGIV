import { Routes, Route } from "react-router-dom";
import ImageUploader from "./ImageUploader";
import Contacto from "./Contacto";
import Navbar from "./Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Routes>
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
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
