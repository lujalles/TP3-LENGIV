import { useEffect, useState } from "react";

function ApiMonedas() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://open.er-api.com/v6/latest/USD")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) return <p style={{ color: "white", textAlign: "center" }}>Cargando cotizaciones...</p>;
  if (error) return <p style={{ color: "red", textAlign: "center" }}>Error al cargar los datos.</p>;

  const monedas = ["ARS", "EUR", "BRL", "JPY", "GBP"];

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
        color: "#222",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "40px",
          borderRadius: "15px",
          width: "90%",
          maxWidth: "600px",
          margin: "0 auto",
          boxShadow: "0 0 20px rgba(0,0,0,0.3)",
        }}
      >
        <h2 style={{ color: "#1a1a1a", marginBottom: "10px" }}>💱 Cotizaciones de monedas</h2>
        <p style={{ fontSize: "0.9rem", color: "#555" }}>Base: USD</p>
        <p style={{ fontSize: "0.9rem", color: "#555", marginBottom: "20px" }}>
          Fecha: {new Date(data.time_last_update_utc).toLocaleDateString()}
        </p>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            fontSize: "1rem",
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "#333", color: "white" }}>
              <th style={{ padding: "10px", textAlign: "center" }}>Moneda</th>
              <th style={{ padding: "10px", textAlign: "center" }}>Valor</th>
            </tr>
          </thead>
          <tbody>
            {monedas.map((moneda) => (
              <tr key={moneda} style={{ borderBottom: "1px solid #ddd" }}>
                <td style={{ padding: "10px", fontWeight: "bold" }}>{moneda}</td>
                <td style={{ padding: "10px" }}>{data.rates[moneda].toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={{ marginTop: "30px" }}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/2382/2382461.png"
            alt="monedas"
            width="90"
            height="90"
          />
        </div>
      </div>
    </div>
  );
}

export default ApiMonedas;
