// ============================================================
//  Hero.jsx  —  Mi Esencia Divina
//  Sección principal de la home
// ============================================================

import React from "react";
import "./Hero.css";
const logo = "/public/images/logo.jpeg";


export default function Hero({ onNavigate }) {
  return (
    <section className="hero">
      <div className="hero__content">
        <p className="eyebrow">✦ Perfumería Espiritual · Colección 2026 ✦</p>
        <h1>
          La esencia no se crea...<br />
          <em>se recuerda ...</em><br />
        </h1>
        <p className="hero__desc">
          Cada fragancia lleva en su interior un cristal natural con una intención única.
          Perfumes unisex diseñados para elevar tu energía, sanar y manifestar.
        </p>
        <div className="hero__actions">
          <button className="btn-primary" onClick={() => onNavigate("coleccion")}>
            Explorar colección
          </button>
          <button className="btn-outline" onClick={() => onNavigate("nosotros")}>
            Nuestra filosofía
          </button>
        </div>
      </div>

      <div className="hero__visual">
        <img src={logo} alt="Mi Esencia Divina" className="hero__logo-big" />
        <div className="hero__rings">
          <div className="hero__ring hero__ring--1" />
          <div className="hero__ring hero__ring--2" />
          <div className="hero__ring hero__ring--3" />
        </div>
      </div>

      {/* Strip inferior */}
      <div className="hero__strip">
        <span>✨ Cristales naturales incluidos</span>
        <span>✦ 100% Unisex</span>
        <span>🌿 Ingredientes éticos</span>
        <span>🚚 Envío gratis +60€</span>
        <span>🔄 30 días devolución</span>
      </div>
    </section>
  );
}
