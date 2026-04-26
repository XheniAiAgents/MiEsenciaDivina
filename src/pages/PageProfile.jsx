// ============================================================
//  PageProfile.jsx  —  Mi Esencia Divina
//  Página de perfil del usuario
// ============================================================

import React from "react";
import { MEANINGS } from "../utils/numerology";
import "./PageProfile.css";

export default function PageProfile({ user, onLogout, onNavigate }) {
  const r = user?.readings;

  const fmt = new Date(user.createdAt).toLocaleDateString("es-ES", {
    year: "numeric", month: "long", day: "numeric"
  });

  return (
    <div className="profile-page">
      {/* Header */}
      <section className="profile-hero">
        <div className="profile-hero__avatar">
          {user.name.charAt(0).toUpperCase()}
        </div>
        <div className="profile-hero__info">
          <h1>{user.name}</h1>
          <p>{user.email}</p>
          <span>Miembro desde {fmt}</span>
        </div>
        <button className="profile-logout" onClick={onLogout}>
          Cerrar sesión
        </button>
      </section>

      <div className="profile-content">
        {/* Readings summary */}
        <section className="profile-section">
          <div className="profile-section__head">
            <h2>✦ Mi Lectura Numerológica</h2>
            <button
              className="profile-section__link"
              onClick={() => onNavigate("lectura")}
            >
              {r ? "Ver lectura completa →" : "Calcular ahora →"}
            </button>
          </div>

          {r ? (
            <div className="profile-readings">
              <div className="profile-reading-mini">
                <span className="profile-reading-mini__icon">☽</span>
                <div>
                  <p className="profile-reading-mini__label">Camino de Vida</p>
                  <p className="profile-reading-mini__number">{r.lifePath}</p>
                  <p className="profile-reading-mini__title">{MEANINGS.lifePath[r.lifePath]?.title}</p>
                </div>
              </div>
              <div className="profile-reading-mini">
                <span className="profile-reading-mini__icon">✦</span>
                <div>
                  <p className="profile-reading-mini__label">Destino</p>
                  <p className="profile-reading-mini__number">{r.destiny}</p>
                  <p className="profile-reading-mini__title">{MEANINGS.destiny[r.destiny]?.title}</p>
                </div>
              </div>
              <div className="profile-reading-mini">
                <span className="profile-reading-mini__icon">◈</span>
                <div>
                  <p className="profile-reading-mini__label">Alma</p>
                  <p className="profile-reading-mini__number">{r.soul}</p>
                  <p className="profile-reading-mini__title">{MEANINGS.soul[r.soul]?.title}</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="profile-empty">
              <p>Aún no has calculado tu lectura numerológica.</p>
              <button className="profile-cta" onClick={() => onNavigate("lectura")}>
                Descubrir mis números →
              </button>
            </div>
          )}
        </section>

        {/* Orders placeholder */}
        <section className="profile-section">
          <div className="profile-section__head">
            <h2>🛍 Mis Pedidos</h2>
          </div>
          <div className="profile-empty">
            <p>Aún no tienes pedidos registrados. La pasarela de pago estará disponible pronto.</p>
            <button className="profile-cta" onClick={() => onNavigate("coleccion")}>
              Explorar colección →
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
