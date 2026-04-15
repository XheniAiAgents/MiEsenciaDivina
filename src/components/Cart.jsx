// ============================================================
//  Cart.jsx  —  Mi Esencia Divina
//  Sidebar lateral del carrito
// ============================================================

import React, { useState } from "react";
import "./Cart.css";

export default function Cart({ isOpen, onClose, items, onUpdateQty, onRemove }) {
  const [showCheckout, setShowCheckout] = useState(false);

  const subtotal = items.reduce((acc, i) => acc + i.precio * i.qty, 0);
  const shipping  = subtotal >= 60 ? 0 : 4.99;
  const total     = subtotal + shipping;

  const fmt = (n) => n.toFixed(2).replace(".", ",") + " €";

  return (
    <>
      {/* Overlay */}
      {isOpen && <div className="cart-overlay" onClick={onClose} />}

      {/* Sidebar */}
      <aside className={`cart-sidebar ${isOpen ? "cart-sidebar--open" : ""}`}>
        {/* Header */}
        <div className="cart-sidebar__head">
          <h3>Tu carrito ✦</h3>
          <button onClick={onClose} className="cart-sidebar__close">✕</button>
        </div>

        {/* Items */}
        <div className="cart-sidebar__items">
          {items.length === 0 ? (
            <div className="cart-sidebar__empty">
              <span>✦</span>
              <p>Tu carrito está vacío</p>
              <small>Explora nuestra colección espiritual</small>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="cart-item">
                <div
                  className="cart-item__img"
                  style={{ background: item.color }}
                >
                  <img
                    src={`/public/images/${item.image}`}
                    alt={item.cristal}
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.parentElement.innerHTML = item.cristalEmoji;
                    }}
                  />
                </div>
                <div className="cart-item__info">
                  <p className="cart-item__name">Mi Esencia Divina</p>
                  <p className="cart-item__crystal">{item.cristalEmoji} {item.cristal}</p>
                  <p className="cart-item__price">{fmt(item.precio * item.qty)}</p>
                  <div className="cart-item__qty">
                    <button onClick={() => onUpdateQty(item.id, -1)}>−</button>
                    <span>{item.qty}</span>
                    <button onClick={() => onUpdateQty(item.id, +1)}>+</button>
                  </div>
                </div>
                <button className="cart-item__remove" onClick={() => onRemove(item.id)}>✕</button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="cart-sidebar__footer">
            <div className="cart-sidebar__row">
              <span>Subtotal</span><span>{fmt(subtotal)}</span>
            </div>
            <div className="cart-sidebar__row">
              <span>Envío</span>
              <span>{shipping === 0 ? "Gratis ✓" : fmt(shipping)}</span>
            </div>
            {shipping > 0 && (
              <p className="cart-sidebar__shipping-note">
                Añade {fmt(60 - subtotal)} más para envío gratis
              </p>
            )}
            <div className="cart-sidebar__row cart-sidebar__row--total">
              <span>Total</span><span>{fmt(total)}</span>
            </div>

            <button
              className="btn-primary cart-sidebar__checkout"
              onClick={() => setShowCheckout(true)}
            >
              Finalizar compra →
            </button>
            <p className="cart-sidebar__note">
              🔒 Pago seguro · RGPD compliant
            </p>
          </div>
        )}
      </aside>

      {/* Modal próximamente */}
      {showCheckout && (
        <div className="checkout-overlay" onClick={() => setShowCheckout(false)}>
          <div className="checkout-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal__close" onClick={() => setShowCheckout(false)}>✕</button>
            <span className="coming-badge">✦ Próximamente disponible ✦</span>
            <h2>¡Gracias por tu interés!</h2>
            <p>
              Estamos ultimando nuestra pasarela de pago oficial. 
              Déjanos tu email y te avisamos en cuanto esté disponible.
            </p>
            <div className="checkout-modal__form">
              <input type="email" placeholder="tu@email.com" />
              <button className="btn-primary" onClick={() => setShowCheckout(false)}>
                Avísame
              </button>
            </div>
            <p className="checkout-modal__also">
              También puedes encontrarnos pronto en <strong>Amazon</strong> y <strong>TikTok Shop</strong>.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
