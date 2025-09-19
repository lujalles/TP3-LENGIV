import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contacto.css";

function Contacto() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_w4ptjxp",   // reemplazá con tu SERVICE ID
        "template_pql2kj5",  // reemplazá con tu TEMPLATE ID
        form.current,
        "qWb417_06nRpZT-7U"    // reemplazá con tu PUBLIC KEY
      )
      .then(
        (result) => {
          alert("Mensaje enviado con éxito ✅");
          form.current.reset();
        },
        (error) => {
          alert("Error al enviar ❌");
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-container">
      <h2>Contacto</h2>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          required
        />
        <textarea
          name="mensaje"
          placeholder="Escribe tu mensaje..."
          required
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Contacto;
