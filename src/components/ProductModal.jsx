// ============================================================
//  ProductModal.jsx  —  Mi Esencia Divina
//  Modal de detalle del producto
// ============================================================

import React from "react";
import "./ProductModal.css";

export default function ProductModal({ product, onClose, onAddToCart }) {
  if (!product) return null;

  const {
    image, color, cristal, cristalEmoji, chakra, chakraColor,
    intencion, descripcion, notasCabeza, notasCorazon, notasFondo,
    precio, precioAnterior, badge, nombre,
  } = product;

  function handleAdd() {
    onAddToCart(product);
    onClose();
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose}>✕</button>

        {/* Imagen */}
        <div className="modal__img" style={{ background: color }}>
          <img
            src={`/src/assets/images/${image}`}
            alt={`Mi Esencia Divina – ${cristal}`}
            className="modal__photo"
            onError={(e) => { e.target.style.display = "none"; }}
          />
          <span className="modal__crystal-pill" style={{ borderColor: chakraColor, color: chakraColor }}>
            {cristalEmoji} {cristal}
          </span>
        </div>

        {/* Cuerpo */}
        <div className="modal__body">
          <p className="eyebrow">Chakra {chakra}</p>
          <h2 className="modal__name">{nombre}</h2>
          <p className="modal__brand">Mi Esencia Divina · Parfum</p>
          <p className="modal__intent">"{intencion}"</p>

          <p className="modal__price">
            {precio === 0 ? "Gratis" : `${precio},00 €`}
            {precioAnterior && <s>{precioAnterior},00 €</s>}
          </p>

          <p className="modal__desc">{descripcion}</p>

          {/* Caja cristal */}
          <div className="modal__crystal-box" style={{ borderLeftColor: chakraColor }}>
            <h4>{cristalEmoji} El cristal: {cristal}</h4>
            <p>Asociado al chakra <strong>{chakra}</strong>, este cristal potencia tu energía y armoniza tu campo vibracional. Cada frasco incluye una pieza natural seleccionada a mano.</p>
          </div>

          {/* Notas */}
          <div className="modal__notes">
            <p><strong>Notas de cabeza:</strong> {notasCabeza}</p>
            <p><strong>Notas de corazón:</strong> {notasCorazon}</p>
            <p><strong>Notas de fondo:</strong> {notasFondo}</p>
          </div>

          <button className="btn-primary modal__cta" onClick={handleAdd}>
            + Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
}
