// ============================================================
//  Footer.jsx  —  Mi Esencia Divina
// ============================================================
import React from "react";
import "./Footer.css";

const logo = "/public/images/logo.jpeg";

export default function Footer({ onNavigate }) {
  return (
    <footer className="footer">
      <div className="footer__grid">
        <div className="footer__brand">
          <div className="footer__brand-logo" onClick={() => onNavigate("home")}>
            <img src={logo} alt="Mi Esencia Divina" />
            <span>Mi Esencia Divina</span>
          </div>
          <p>Perfumería espiritual con cristales naturales. Eleva tu energía, define tu esencia.</p>
          <div className="footer__socials">
            <a href="#" aria-label="Instagram">📸</a>
            <a href="#" aria-label="TikTok">🎵</a>
            <a href="#" aria-label="Amazon">📦</a>
          </div>
        </div>

        <div className="footer__col">
          <h4>Colección</h4>
          <ul>
            <li><a onClick={() => onNavigate("coleccion")}>Todos los perfumes</a></li>
            <li><a onClick={() => onNavigate("coleccion")}>Cuarzo Transparente</a></li>
            <li><a onClick={() => onNavigate("coleccion")}>Amatista</a></li>
            <li><a onClick={() => onNavigate("coleccion")}>Lapislázuli</a></li>
            <li><a onClick={() => onNavigate("coleccion")}>Jaspe Rojo</a></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Ayuda</h4>
          <ul>
            <li><a>Envíos y devoluciones</a></li>
            <li><a>Guía de cristales</a></li>
            <li><a>Contacto</a></li>
            <li><a>FAQ</a></li>
            <li><a>Amazon</a></li>
            <li><a>TikTok Shop</a></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Legal</h4>
          <ul>
            <li><a onClick={() => onNavigate("cookies")}>Política de cookies</a></li>
            <li><a onClick={() => onNavigate("privacidad")}>Política de privacidad</a></li>
            <li><a onClick={() => onNavigate("aviso")}>Aviso legal</a></li>
            <li><a onClick={() => onNavigate("terminos")}>Términos y condiciones</a></li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <span>© 2025 Mi Esencia Divina · Todos los derechos reservados · CIF: [Pendiente]</span>
        <span>
          <a onClick={() => onNavigate("cookies")}>Cookies</a>
          {" · "}
          <a onClick={() => onNavigate("privacidad")}>Privacidad</a>
          {" · "}
          <a onClick={() => onNavigate("aviso")}>Aviso legal</a>
        </span>
      </div>
    </footer>
  );
}
