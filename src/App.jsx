// ============================================================
//  App.jsx  —  Mi Esencia Divina
// ============================================================

import React, { useState, useCallback, useEffect } from "react";

import Navbar          from "./components/Navbar";
import Cart            from "./components/Cart";
import CookieBanner    from "./components/CookieBanner";
import Footer          from "./components/Footer";
import AuthModal       from "./components/AuthModal";

import Home            from "./pages/Home";
import PageCristales   from "./pages/PageCristales";
import PageNosotros    from "./pages/PageNosotros";
import PageComingSoon  from "./pages/PageComingSoon";
import PageFAQ from "./pages/PageFAQ";
import PageMiLectura   from "./pages/PageMiLectura";
import PageProfile     from "./pages/PageProfile";
import {
  PageCookies, PagePrivacidad, PageAvisoLegal, PageTerminos,
} from "./pages/LegalPages";

import { useAuth, loadCart, persistCart } from "./hooks/useAuth";
import "./styles/global.css";

export default function App() {
  const [page,     setPage]     = useState("home");
  const [cartOpen, setCartOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);

  const { user, login, register, logout, saveReadings, redeemCode } = useAuth();

  // Initialise cart from localStorage (user-scoped if logged in)
  const [cart, setCart] = useState(() => loadCart(user?.email));

  // When user changes (login / logout) reload the right cart
  useEffect(() => {
    setCart(loadCart(user?.email));
  }, [user?.email]);

  // Persist cart whenever it changes
  useEffect(() => {
    persistCart(cart, user?.email);
  }, [cart, user?.email]);

  const navigate = useCallback((target) => {
    setPage(target);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const addToCart = useCallback((product) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing) return prev.map((i) => i.id === product.id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { ...product, qty: 1 }];
    });
    setCartOpen(true);
  }, []);

  const updateQty = useCallback((id, delta) => {
    setCart((prev) =>
      prev.map((i) => i.id === id ? { ...i, qty: i.qty + delta } : i).filter((i) => i.qty > 0)
    );
  }, []);

  const removeItem = useCallback((id) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const cartCount = cart.reduce((acc, i) => acc + i.qty, 0);

  function renderPage() {
    switch (page) {
      case "home":
      case "coleccion":
        return <Home onNavigate={navigate} onAddToCart={addToCart} />;
      case "cristales":
        return <PageCristales onNavigate={navigate} />;
      case "nosotros":
        return <PageNosotros onNavigate={navigate} />;
      case "lectura":
        return (
          <PageMiLectura
            user={user}
            onSaveReadings={saveReadings}
            onOpenAuth={() => setAuthOpen(true)}
            onRedeemCode={redeemCode}
          />
        );
      case "perfil":
        return user
          ? <PageProfile user={user} onLogout={logout} onNavigate={navigate} />
          : <Home onNavigate={navigate} onAddToCart={addToCart} />;
      case "meditaciones":
        return <PageComingSoon title="Meditaciones" subtitle="Estamos preparando meditaciones guiadas para acompañar tus fragancias y amplificar tu energía. Vuelve pronto." onNavigate={navigate} />;
      case "videos":
        return <PageComingSoon title="Videos Subliminales" subtitle="Pronto tendrás acceso a nuestra biblioteca de videos subliminales diseñados para potenciar la intención de cada cristal. Vuelve pronto." onNavigate={navigate} />;
      case "cookies":    return <PageCookies onNavigate={navigate} />;
      case "privacidad": return <PagePrivacidad onNavigate={navigate} />;
      case "aviso":      return <PageAvisoLegal onNavigate={navigate} />;
      case "terminos":   return <PageTerminos onNavigate={navigate} />;
      case "faq":        return <PageFAQ onNavigate={navigate} />;
      default:           return <Home onNavigate={navigate} onAddToCart={addToCart} />;
    }
  }

  return (
    <>
      <Navbar cartCount={cartCount} onCartOpen={() => setCartOpen(true)} onNavigate={navigate} user={user} onOpenAuth={() => setAuthOpen(true)} />
      <main>{renderPage()}</main>
      <Footer onNavigate={navigate} />
      <Cart isOpen={cartOpen} onClose={() => setCartOpen(false)} items={cart} onUpdateQty={updateQty} onRemove={removeItem} />
      <CookieBanner onNavigate={navigate} />
      {authOpen && <AuthModal onClose={() => setAuthOpen(false)} onLogin={login} onRegister={register} />}
    </>
  );
}
