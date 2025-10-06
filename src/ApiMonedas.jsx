import { useEffect, useState } from "react";

function ApiMonedas() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.exchangerate-api.com/v4/latest/USD")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error al obtener los datos");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p style={{ textAlign: "center" }}>Cargando datos...</p>;
  if (error) return <p style={{ color: "red", textAlign: "center" }}>{error}</p>;

  return (
    <div style={{
      textAlign: "center",
      marginTop: "100px",
      padding: "20px",
      background: "#f9f9f9",
      borderRadius: "8px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      maxWidth: "500px",
      marginLeft: "auto",
      marginRight: "auto"
    }}>
      <h2>Cotizaciones de monedas</h2>
      <p>Base: {data.base}</p>
      <p>Fecha: {data.date}</p>

      <table style={{
        width: "100%",
        marginTop: "20px",
        borderCollapse: "collapse"
      }}>
        <thead>
          <tr style={{ background: "#333", color: "white" }}>
            <th style={{ padding: "8px" }}>Moneda</th>
            <th style={{ padding: "8px" }}>Valor</th>
          </tr>
        </thead>
        <tbody>
          {["ARS", "EUR", "BRL", "JPY", "GBP"].map((code) => (
            <tr key={code} style={{ borderBottom: "1px solid #ccc" }}>
              <td style={{ padding: "8px" }}>{code}</td>
              <td style={{ padding: "8px" }}>{data.rates[code]}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <img
        src="https://cdn-icons-png.flaticon.com/512/3135/3135706.png"
        alt="Monedas"
        style={{ width: "100px", marginTop: "20px" }}
      />
    </div>
  );
}

export default ApiMonedas;
