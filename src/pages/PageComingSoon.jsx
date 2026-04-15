// ============================================================
//  PageComingSoon.jsx  —  Mi Esencia Divina
// ============================================================

import React from "react";
import "./PageComingSoon.css";

export default function PageComingSoon({ title, subtitle, onNavigate }) {
  return (
    <div className="coming-page">
      <div className="coming-page__inner">
        <div className="coming-page__rings">
          <div className="coming-ring coming-ring--1" />
          <div className="coming-ring coming-ring--2" />
          <div className="coming-ring coming-ring--3" />
        </div>

        <div className="coming-page__content">
          <p className="eyebrow">✦ Próximamente ✦</p>
          <h1>{title}</h1>
          <p className="coming-page__subtitle">
            {subtitle || "Estamos preparando algo especial para ti. Vuelve pronto."}
          </p>
          <div className="coming-page__divider">
            <span>✦</span>
          </div>
          <p className="coming-page__note">
            Mientras tanto, suscríbete para ser la primera en enterarte:
          </p>
          <div className="coming-page__form">
            <input type="email" placeholder="tu@email.com" />
            <button className="btn-primary">Avísame</button>
          </div>
          <button className="coming-page__back" onClick={() => onNavigate("home")}>
            ← Volver al inicio
          </button>
        </div>
      </div>
    </div>
  );
}
