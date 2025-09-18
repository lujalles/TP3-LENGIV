import { useState } from "react";

function ImageUploader() {
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    
    if (!file.type.startsWith("image/")) {
      setError("El archivo no es una imagen válida");
      setImage(null);
      return;
    }

    setError("");
    setImage(URL.createObjectURL(file));
  };

  return (
    <div>
      <h2>Subir Imagen</h2>
      <input type="file" accept="image/*" onChange={handleFileChange} />

      {error && <p style={{ color: "red" }}>{error}</p>}

      {image && (
        <div>
          <h3>Vista previa:</h3>
          <img src={image} alt="preview" style={{ width: "300px", marginTop: "10px" }} />
        </div>
      )}
    </div>
  );
}

export default ImageUploader;
