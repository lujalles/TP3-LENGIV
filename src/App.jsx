import { useState } from 'react'
import './App.css'
import ImageUploader from './ImageUploader'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Para subir imágenes con React!</h1>
        <h2>Hecho por Lucía Jallés</h2>
        <ImageUploader />
      </div>
    </>
  )
}

export default App
