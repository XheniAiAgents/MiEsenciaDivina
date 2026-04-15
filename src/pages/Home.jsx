// ============================================================
//  Home.jsx  —  Mi Esencia Divina
//  Hero + Strip + Colección + Nosotros
// ============================================================
import React, { useState } from "react";
import Hero         from "../components/Hero";
import ProductCard  from "../components/ProductCard";
import ProductModal from "../components/ProductModal";
import products     from "../data/products";
import "./Home.css";

export default function Home({ onNavigate, onAddToCart }) {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="home">
      <Hero onNavigate={onNavigate} />

      <div id="coleccion" className="section-header">
        <p className="eyebrow">✦ Colección Espiritual 2026 ✦</p>
        <h2>Cada fragancia, una intención</h2>
        <div className="gold-divider"><span>✦</span></div>
      </div>

      <div className="home__products">
        {products.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            onAddToCart={onAddToCart}
            onOpenDetail={setSelectedProduct}
          />
        ))}
      </div>

      {/* About / Nosotros */}
      <section className="home__about">
        <div className="home__about-text">
          <p className="eyebrow">Por qué somos diferentes</p>
          <h2>Perfumería con<br /><em>alma propia.</em></h2>
          <p>
            En Mi Esencia Divina creemos que el perfume es la forma más íntima de expresión personal.
            Cada fragancia es formulada con aceites esenciales puros y lleva en su interior un cristal
            natural cargado con intención.
          </p>
          <p>
            Ingredientes de origen ético, formulaciones libres de crueldad animal
            y packaging sostenible. Lujo consciente.
          </p>
          <ul className="home__about-feats">
            <li><span>✦</span><div><strong>Cristales naturales certificados</strong><small>Seleccionados por expertos en gemología.</small></div></li>
            <li><span>✦</span><div><strong>Sin crueldad animal (Cruelty-free)</strong><small>100% vegano y ético.</small></div></li>
            <li><span>✦</span><div><strong>Packaging sostenible</strong><small>Materiales reciclados y reciclables.</small></div></li>
            <li><span>✦</span><div><strong>En Amazon y TikTok Shop</strong><small>Pronto disponible en nuestras plataformas.</small></div></li>
          </ul>
          <button className="btn-primary" onClick={() => onNavigate("nosotros")}>
            Conocer más
          </button>
        </div>

        <div className="home__about-decoration">
          <div className="home__about-circle">
            <span>Mi Esencia</span>
            <em>Divina</em>
            <small>PARFUM</small>
          </div>
        </div>
      </section>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={onAddToCart}
        />
      )}
    </div>
  );
}
