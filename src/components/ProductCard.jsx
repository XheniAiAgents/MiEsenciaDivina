// ============================================================
//  ProductCard.jsx  —  Mi Esencia Divina
//  Tarjeta individual de producto en el catálogo
// ============================================================

import React from "react";
import "./ProductCard.css";

export default function ProductCard({ product, onAddToCart, onOpenDetail }) {
  const { image, color, cristal, cristalEmoji, chakra, intencion,
          precio, precioAnterior, badge, nombre } = product;

  function handleAdd(e) {
    e.stopPropagation();
    onAddToCart(product);
  }

  return (
    <article className="pcard" onClick={() => onOpenDetail(product)}>
      {/* Imagen */}
      <div className="pcard__img" style={{ background: color }}>
        {badge && <span className="pcard__badge">{badge}</span>}

        <img
          src={`/images/${image}`}
          alt={`Mi Esencia Divina – ${cristal}`}
          className="pcard__photo"
          onError={(e) => {
            e.target.style.display = "none";
            e.target.nextSibling.style.display = "flex";
          }}
        />
        <div className="pcard__emoji-fallback" style={{ display: "none" }}>
          {cristalEmoji}
        </div>

        {/* Cristal tag */}
        <span className="pcard__crystal-tag">
          {cristalEmoji} {cristal}
        </span>
      </div>

      {/* Info */}
      <div className="pcard__info">
        <p className="pcard__chakra">Chakra {chakra}</p>
        <h3 className="pcard__name">{nombre}</h3>
        <p className="pcard__subtitle">Mi Esencia Divina</p>
        <p className="pcard__intent">"{intencion}"</p>
        <p className="pcard__price">
          {precio === 0 ? "Gratis" : `${precio},00 €`}
          {precioAnterior && (
            <s>{precioAnterior},00 €</s>
          )}
        </p>
        <button className="pcard__add-btn" onClick={handleAdd}>
          + Añadir al carrito
        </button>
      </div>
    </article>
  );
}
