// ============================================================
//  Navbar.jsx  —  Mi Esencia Divina
//  Navegación con hamburger menu para móvil + auth
// ============================================================
import React, { useState } from "react";
import "./Navbar.css";
const logo = "/images/logo.jpeg";

export default function Navbar({ cartCount, onCartOpen, onNavigate, user, onOpenAuth }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleNav(page) {
    onNavigate(page);
    setMenuOpen(false);
  }

  return (
    <>
      <nav className="navbar">
        {/* Logo */}
        <div className="navbar__logo" onClick={() => handleNav("home")}>
          <img src={logo} alt="Mi Esencia Divina" className="navbar__logo-img" />
          <div className="navbar__logo-text">
            Mi Esencia Divina
            <span>Parfum</span>
          </div>
        </div>

        {/* Links desktop */}
        <ul className="navbar__links">
          <li><a onClick={() => handleNav("home")}>Inicio</a></li>
          <li><a onClick={() => handleNav("coleccion")}>Colección</a></li>
          <li><a onClick={() => handleNav("cristales")}>Cristales</a></li>
          <li><a onClick={() => handleNav("meditaciones")}>Meditaciones</a></li>
          <li><a onClick={() => handleNav("videos")}>Videos Subliminales</a></li>
          <li><a onClick={() => handleNav("lectura")} className="navbar__link--highlight">Mi Lectura</a></li>
          <li><a onClick={() => handleNav("nosotros")}>Nosotros</a></li>
          <li><a onClick={() => handleNav("faq")}>FAQ</a></li>
        </ul>

        {/* Iconos */}
        <div className="navbar__icons">
          {/* Profile / Auth */}
          <button
            className="navbar__icon-btn"
            onClick={() => user ? handleNav("perfil") : onOpenAuth()}
            aria-label={user ? "Mi perfil" : "Iniciar sesión"}
            title={user ? user.name : "Iniciar sesión"}
          >
            {user ? (
              <span className="navbar__avatar">{user.name.charAt(0).toUpperCase()}</span>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            )}
          </button>

          {/* Cart */}
          <button className="navbar__cart" onClick={onCartOpen} aria-label="Carrito">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1"/>
              <circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 001.99 1.61h9.72a2 2 0 001.99-1.61L23 6H6"/>
            </svg>
            {cartCount > 0 && (
              <span className="navbar__cart-count">{cartCount}</span>
            )}
          </button>

          {/* Hamburger */}
          <button
            className={`navbar__hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menú"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="navbar__mobile-overlay" onClick={() => setMenuOpen(false)}>
          <div className="navbar__mobile" onClick={(e) => e.stopPropagation()}>
            <button className="navbar__mobile-close" onClick={() => setMenuOpen(false)}>✕</button>
            <div className="navbar__mobile-logo">
              <img src={logo} alt="Mi Esencia Divina" />
              <span>Mi Esencia Divina</span>
            </div>

            {user && (
              <div className="navbar__mobile-user" onClick={() => handleNav("perfil")}>
                <span className="navbar__mobile-avatar">{user.name.charAt(0).toUpperCase()}</span>
                <div>
                  <p className="navbar__mobile-username">{user.name}</p>
                  <p className="navbar__mobile-userhint">Ver mi perfil →</p>
                </div>
              </div>
            )}

            <ul className="navbar__mobile-links">
              <li><a onClick={() => handleNav("home")}>Inicio</a></li>
              <li><a onClick={() => handleNav("coleccion")}>Colección</a></li>
              <li><a onClick={() => handleNav("cristales")}>Cristales</a></li>
              <li><a onClick={() => handleNav("meditaciones")}>Meditaciones</a></li>
              <li><a onClick={() => handleNav("videos")}>Videos Subliminales</a></li>
              <li><a onClick={() => handleNav("lectura")} className="mobile-link--highlight">✦ Mi Lectura</a></li>
              <li><a onClick={() => handleNav("nosotros")}>Nosotros</a></li>
              <li><a onClick={() => handleNav("faq")}>FAQ</a></li>
          <li><a onClick={() => handleNav("faq")}>FAQ</a></li>
              {!user && (
                <li><a onClick={() => { setMenuOpen(false); onOpenAuth(); }} className="mobile-link--auth">Iniciar sesión / Registrarse</a></li>
              )}
            </ul>
            <div className="navbar__mobile-footer">
              <a onClick={() => handleNav("cookies")}>Cookies</a>
              <a onClick={() => handleNav("privacidad")}>Privacidad</a>
              <a onClick={() => handleNav("terminos")}>Términos</a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
