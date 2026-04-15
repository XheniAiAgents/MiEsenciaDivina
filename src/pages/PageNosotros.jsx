// ============================================================
//  PageNosotros.jsx  —  Mi Esencia Divina
// ============================================================

import React from "react";
import "./PageNosotros.css";

export default function PageNosotros({ onNavigate }) {
  return (
    <div className="nosotros-page">

      {/* Hero */}
      <div className="nosotros-page__hero">
        <p className="eyebrow">✦ Nuestra historia ✦</p>
        <h1>Nacidos del alma,<br /><em>creados con intención.</em></h1>
      </div>

      {/* Story */}
      <div className="nosotros-page__story">
        <div className="nosotros-page__text">
          <p className="eyebrow">Quiénes somos</p>
          <h2>La idea detrás de<br />Mi Esencia Divina</h2>
          <p>
            Mi Esencia Divina nació de la creencia de que el perfume puede ser mucho más
            que un aroma — puede ser una herramienta espiritual, un recordatorio de tu
            intención diaria, una extensión de tu alma.
          </p>
          <p>
            Cada fragancia es formulada con aceites esenciales de alta calidad y lleva
            en su interior un cristal natural seleccionado por su vibración energética
            específica. No es magia, es la unión de la aromaterapia ancestral con la
            sabiduría de la gemoterapia.
          </p>
          <p>
            Somos una marca 100% cruelty-free, vegana y comprometida con el packaging
            sostenible. Creemos que el lujo puede ser consciente.
          </p>
        </div>

        <div className="nosotros-page__decoration">
          <div className="nosotros-circle">
            <span>Mi Esencia</span>
            <em>Divina</em>
            <small>PARFUM · 2026</small>
          </div>
        </div>
      </div>

      {/* Valores */}
      <div className="nosotros-page__values">
        <div className="section-header">
          <p className="eyebrow">✦ Nuestros valores ✦</p>
          <h2>Lo que nos define</h2>
          <div className="gold-divider"><span>✦</span></div>
        </div>

        <div className="nosotros-page__values-grid">
          {[
            { emoji: "💎", title: "Cristales certificados", desc: "Cada cristal es seleccionado a mano por expertos en gemología, garantizando su autenticidad y pureza energética." },
            { emoji: "🌿", title: "Cruelty-free & vegano", desc: "Ninguno de nuestros ingredientes ha sido testado en animales. Formulaciones 100% éticas y respetuosas con la vida." },
            { emoji: "♻️", title: "Packaging sostenible", desc: "Nuestros envases están fabricados con materiales reciclados y reciclables. El lujo no tiene por qué costar al planeta." },
            { emoji: "🔮", title: "Intención energética", desc: "Cada perfume es formulado en luna llena para cargar el cristal con la máxima energía y potenciar su intención." },
            { emoji: "🌍", title: "Comercio justo", desc: "Trabajamos con proveedores de materias primas que garantizan condiciones laborales justas y origen ético." },
            { emoji: "✨", title: "Alta perfumería",  desc: "Nuestras fragancias son creadas por maestros perfumistas con décadas de experiencia en alta perfumería europea." },
          ].map((v) => (
            <div className="value-card" key={v.title}>
              <span className="value-card__emoji">{v.emoji}</span>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="nosotros-page__cta">
        <p className="eyebrow">✦ Únete a la familia ✦</p>
        <h2>¿Lista para elevar tu energía?</h2>
        <p>Descubre qué cristal resuena con tu alma.</p>
        <div className="nosotros-page__cta-btns">
          <button className="btn-primary" onClick={() => onNavigate("coleccion")}>
            Ver la colección
          </button>
          <button className="btn-outline" onClick={() => onNavigate("cristales")}>
            Conocer los cristales
          </button>
        </div>
      </div>

    </div>
  );
}
