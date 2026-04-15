// ============================================================
//  PageCristales.jsx  —  Mi Esencia Divina
//  Página dedicada a los cristales y sus chakras
// ============================================================

import React from "react";
import products from "../data/products";
import "./PageCristales.css";

export default function PageCristales({ onNavigate }) {
  return (
    <div className="cristales-page">
      {/* Header */}
      <div className="cristales-page__header">
        <p className="eyebrow">✦ El alma de cada perfume ✦</p>
        <h1>Los cristales y<br /><em>sus poderes</em></h1>
        <p className="cristales-page__subtitle">
          Cada frasco de Mi Esencia Divina lleva en su interior un cristal natural
          seleccionado por su vibración energética única. Conoce su historia y su intención.
        </p>
      </div>

      {/* Grid de cristales */}
      <div className="cristales-page__grid">
        {products.map((p) => (
          <div
            key={p.id}
            className="cristal-detail"
            style={{ borderTopColor: p.chakraColor }}
          >
            <div className="cristal-detail__top" style={{ background: p.color }}>
              <span className="cristal-detail__emoji">{p.cristalEmoji}</span>
              <div
                className="cristal-detail__chakra-dot"
                style={{ background: p.chakraColor }}
              />
            </div>
            <div className="cristal-detail__body">
              <p
                className="cristal-detail__chakra-label"
                style={{ color: p.chakraColor }}
              >
                Chakra {p.chakra}
              </p>
              <h3>{p.cristal}</h3>
              <p className="cristal-detail__intent">"{p.intencion}"</p>
              <p className="cristal-detail__desc">{p.descripcion}</p>
              <button
                className="cristal-detail__btn"
                onClick={() => onNavigate("coleccion")}
                style={{ borderColor: p.chakraColor, color: p.chakraColor }}
              >
                Ver perfume →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="cristales-page__cta">
        <p className="eyebrow">✦ Encuentra tu cristal ✦</p>
        <h2>¿Cuál resuena contigo?</h2>
        <p>Cada cristal trabaja con una energía diferente. Deja que tu intuición te guíe.</p>
        <button className="btn-primary" onClick={() => onNavigate("coleccion")}>
          Ver la colección completa
        </button>
      </div>
    </div>
  );
}
