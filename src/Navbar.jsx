import { Link } from "react-router-dom";
import "./Navbar.css"; // nuevo archivo de estilos para la navbar

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Lucía Jallés</div>
      <ul className="navbar-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
