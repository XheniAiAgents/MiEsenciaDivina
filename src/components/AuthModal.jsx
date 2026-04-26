// ============================================================
//  AuthModal.jsx  —  Mi Esencia Divina
//  Modal de login / registro
// ============================================================

import React, { useState } from "react";
import "./AuthModal.css";

export default function AuthModal({ onClose, onLogin, onRegister }) {
  const [mode, setMode] = useState("login"); // "login" | "register"
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
    setError("");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (mode === "register") {
      if (!form.name.trim()) return setError("Por favor, introduce tu nombre."), setLoading(false);
      if (form.password !== form.confirm) return setError("Las contraseñas no coinciden."), setLoading(false);
      if (form.password.length < 6) return setError("La contraseña debe tener al menos 6 caracteres."), setLoading(false);
      const result = onRegister({ name: form.name.trim(), email: form.email.trim(), password: form.password });
      if (!result.ok) { setError(result.error); setLoading(false); return; }
    } else {
      const result = onLogin({ email: form.email.trim(), password: form.password });
      if (!result.ok) { setError(result.error); setLoading(false); return; }
    }

    setLoading(false);
    onClose();
  }

  return (
    <div className="auth-overlay" onClick={onClose}>
      <div className="auth-modal" onClick={e => e.stopPropagation()}>
        <button className="auth-modal__close" onClick={onClose}>✕</button>

        <div className="auth-modal__header">
          <div className="auth-modal__symbol">✦</div>
          <h2>{mode === "login" ? "Bienvenida de nuevo" : "Crea tu espacio"}</h2>
          <p>{mode === "login" ? "Accede a tu perfil espiritual" : "Únete a nuestra comunidad"}</p>
        </div>

        <div className="auth-modal__tabs">
          <button
            className={mode === "login" ? "active" : ""}
            onClick={() => { setMode("login"); setError(""); }}
          >
            Iniciar sesión
          </button>
          <button
            className={mode === "register" ? "active" : ""}
            onClick={() => { setMode("register"); setError(""); }}
          >
            Registrarse
          </button>
        </div>

        <form className="auth-modal__form" onSubmit={handleSubmit}>
          {mode === "register" && (
            <div className="auth-field">
              <label>Nombre completo</label>
              <input
                type="text"
                name="name"
                placeholder="Tu nombre"
                value={form.name}
                onChange={handleChange}
                required
                autoComplete="name"
              />
            </div>
          )}
          <div className="auth-field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="tu@email.com"
              value={form.email}
              onChange={handleChange}
              required
              autoComplete="email"
            />
          </div>
          <div className="auth-field">
            <label>Contraseña</label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              value={form.password}
              onChange={handleChange}
              required
              autoComplete={mode === "login" ? "current-password" : "new-password"}
            />
          </div>
          {mode === "register" && (
            <div className="auth-field">
              <label>Confirmar contraseña</label>
              <input
                type="password"
                name="confirm"
                placeholder="••••••••"
                value={form.confirm}
                onChange={handleChange}
                required
                autoComplete="new-password"
              />
            </div>
          )}

          {error && <p className="auth-modal__error">⚠ {error}</p>}

          <button type="submit" className="auth-modal__submit" disabled={loading}>
            {loading ? "..." : mode === "login" ? "Entrar" : "Crear cuenta"}
          </button>
        </form>

        <p className="auth-modal__switch">
          {mode === "login" ? "¿No tienes cuenta?" : "¿Ya tienes cuenta?"}
          <span onClick={() => { setMode(mode === "login" ? "register" : "login"); setError(""); }}>
            {mode === "login" ? " Regístrate" : " Inicia sesión"}
          </span>
        </p>

        <p className="auth-modal__privacy">
          🔒 Tus datos están protegidos · RGPD compliant
        </p>
      </div>
    </div>
  );
}
