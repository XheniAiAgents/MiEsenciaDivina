// ============================================================
//  CookieBanner.jsx  —  Mi Esencia Divina
//  Banner de cookies RGPD (Ley española + UE)
// ============================================================

import React, { useState } from "react";
import "./CookieBanner.css";

export default function CookieBanner({ onNavigate }) {
  const [visible, setVisible]   = useState(true);
  const [expanded, setExpanded] = useState(false);
  const [prefs, setPrefs]       = useState({
    analytics:   true,
    marketing:   false,
    preferences: true,
  });

  if (!visible) return null;

  function accept() { setVisible(false); }
  function reject() { setPrefs({ analytics: false, marketing: false, preferences: false }); setVisible(false); }
  function saveCustom() { setVisible(false); }

  function toggle(key) {
    setPrefs((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  return (
    <div className="cookie-bar">
      <div className="cookie-bar__icon">🍪</div>

      <div className="cookie-bar__text">
        <h4>Tu privacidad, tu elección</h4>
        <p>
          Usamos cookies propias y de terceros para mejorar tu experiencia y mostrarte contenido personalizado.
          Consulta nuestra{" "}
          <span onClick={() => onNavigate("cookies")}>política de cookies</span>.{" "}
          <em>(RGPD · Ley 34/2002)</em>
        </p>

        {/* Panel expandido */}
        {expanded && (
          <div className="cookie-bar__prefs">
            <label className="cookie-bar__check cookie-bar__check--disabled">
              <input type="checkbox" checked disabled />
              <span>Cookies necesarias (siempre activas)</span>
            </label>
            <label className="cookie-bar__check">
              <input
                type="checkbox"
                checked={prefs.analytics}
                onChange={() => toggle("analytics")}
              />
              <span>Analíticas (Google Analytics)</span>
            </label>
            <label className="cookie-bar__check">
              <input
                type="checkbox"
                checked={prefs.marketing}
                onChange={() => toggle("marketing")}
              />
              <span>Marketing (Meta Pixel, TikTok Pixel)</span>
            </label>
            <label className="cookie-bar__check">
              <input
                type="checkbox"
                checked={prefs.preferences}
                onChange={() => toggle("preferences")}
              />
              <span>Preferencias (idioma, historial)</span>
            </label>
          </div>
        )}
      </div>

      <div className="cookie-bar__actions">
        <button className="cookie-bar__accept" onClick={accept}>
          Aceptar todas
        </button>
        <button className="cookie-bar__reject" onClick={reject}>
          Solo necesarias
        </button>
        {!expanded ? (
          <button className="cookie-bar__custom" onClick={() => setExpanded(true)}>
            Personalizar
          </button>
        ) : (
          <button className="cookie-bar__custom" onClick={saveCustom}>
            Guardar selección
          </button>
        )}
      </div>
    </div>
  );
}
