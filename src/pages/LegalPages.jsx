// ============================================================
//  LegalPages.jsx  —  Mi Esencia Divina
//  Cookies, Privacidad, Aviso Legal, Términos y Condiciones
// ============================================================

import React from "react";
import "./LegalPages.css";

function LegalLayout({ title, eyebrow, children, onNavigate }) {
  return (
    <div className="legal">
      <button className="legal__back" onClick={() => onNavigate("home")}>
        ← Volver al inicio
      </button>
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="legal__date">Última actualización: Enero 2025</p>
      {children}
    </div>
  );
}

// ── Política de Cookies ──────────────────────────────────────
export function PageCookies({ onNavigate }) {
  return (
    <LegalLayout title="Política de Cookies" eyebrow="Legal" onNavigate={onNavigate}>
      <h2>¿Qué son las cookies?</h2>
      <p>Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Nos permiten recordar tus preferencias y mejorar tu experiencia de navegación.</p>

      <h2>Cookies que utilizamos</h2>
      <p><strong>Cookies estrictamente necesarias:</strong> Imprescindibles para el funcionamiento de la web (carrito de compra, sesión de usuario, seguridad). No pueden desactivarse.</p>
      <p><strong>Cookies analíticas:</strong> Nos ayudan a entender cómo interactúas con el sitio (Google Analytics). Los datos son anónimos.</p>
      <p><strong>Cookies de marketing:</strong> Nos permiten mostrarte anuncios relevantes en otras plataformas (Meta Pixel, TikTok Pixel).</p>
      <p><strong>Cookies de preferencias:</strong> Recuerdan tus ajustes como idioma o moneda.</p>

      <h2>Base legal</h2>
      <p>El uso de cookies se rige por el Reglamento (UE) 2016/679 (RGPD) y la Ley 34/2002 de Servicios de la Sociedad de la Información (LSSI). Solicitamos tu consentimiento antes de instalar cualquier cookie no esencial.</p>

      <h2>Tus derechos</h2>
      <p>Puedes aceptar, rechazar o personalizar el uso de cookies en cualquier momento a través del panel de gestión disponible en el pie de página.</p>

      <h2>Cookies de terceros</h2>
      <p>Utilizamos servicios de terceros como Google Analytics, Meta Pixel y TikTok Pixel que pueden instalar sus propias cookies. Consulta sus políticas de privacidad para más información.</p>

      <h2>Contacto</h2>
      <p>Para cualquier consulta sobre nuestra política de cookies: <strong>info@miesenciadivina.com</strong></p>
    </LegalLayout>
  );
}

// ── Política de Privacidad ───────────────────────────────────
export function PagePrivacidad({ onNavigate }) {
  return (
    <LegalLayout title="Política de Privacidad" eyebrow="Legal" onNavigate={onNavigate}>
      <h2>Responsable del tratamiento</h2>
      <p>
        <strong>Denominación:</strong> Mi Esencia Divina<br />
        <strong>CIF:</strong> [Pendiente de registro]<br />
        <strong>Domicilio:</strong> [Pendiente de registro]<br />
        <strong>Email:</strong> info@miesenciadivina.com
      </p>

      <h2>Datos que recopilamos</h2>
      <ul>
        <li>Datos de contacto (nombre, email, teléfono) al realizar un pedido o suscribirte</li>
        <li>Datos de envío y facturación</li>
        <li>Datos de navegación a través de cookies (con tu consentimiento)</li>
      </ul>

      <h2>Finalidad del tratamiento</h2>
      <ul>
        <li>Gestión de pedidos y envíos</li>
        <li>Comunicaciones comerciales (solo con tu consentimiento)</li>
        <li>Mejora de la experiencia de usuario</li>
        <li>Cumplimiento de obligaciones legales</li>
      </ul>

      <h2>Base legal</h2>
      <p>El tratamiento se basa en la ejecución del contrato de compraventa (Art. 6.1.b RGPD), el cumplimiento de obligaciones legales (Art. 6.1.c) y el consentimiento del usuario (Art. 6.1.a) para comunicaciones comerciales.</p>

      <h2>Conservación de datos</h2>
      <p>Los datos se conservarán durante el tiempo necesario para la relación comercial y durante los plazos legalmente establecidos (generalmente 5 años para datos fiscales).</p>

      <h2>Tus derechos</h2>
      <p>Tienes derecho a acceder, rectificar, suprimir, oponerte, limitar y portar tus datos. Puedes ejercer estos derechos enviando un email a <strong>info@miesenciadivina.com</strong> con una copia de tu documento de identidad.</p>
      <p>También puedes presentar una reclamación ante la Agencia Española de Protección de Datos (aepd.es).</p>

      <h2>Transferencias internacionales</h2>
      <p>Algunos de nuestros proveedores (Google, Meta, TikTok) pueden transferir datos fuera del Espacio Económico Europeo. En todos los casos se aplican las garantías adecuadas conforme al RGPD.</p>
    </LegalLayout>
  );
}

// ── Aviso Legal ──────────────────────────────────────────────
export function PageAvisoLegal({ onNavigate }) {
  return (
    <LegalLayout title="Aviso Legal" eyebrow="Legal" onNavigate={onNavigate}>
      <h2>Titular del sitio web</h2>
      <p>En cumplimiento del artículo 10 de la Ley 34/2002 de Servicios de la Sociedad de la Información (LSSI), se informa:</p>
      <p>
        <strong>Denominación:</strong> Mi Esencia Divina<br />
        <strong>CIF:</strong> [Pendiente de registro]<br />
        <strong>Domicilio:</strong> [Pendiente de registro]<br />
        <strong>Email:</strong> info@miesenciadivina.com
      </p>

      <h2>Propiedad intelectual</h2>
      <p>Todos los contenidos de este sitio web (textos, imágenes, diseño, logotipos) son propiedad de Mi Esencia Divina y están protegidos por la legislación española e internacional sobre propiedad intelectual e industrial.</p>

      <h2>Condiciones de uso</h2>
      <p>El acceso y uso de este sitio web implica la aceptación de las presentes condiciones. El usuario se compromete a hacer un uso adecuado de los contenidos y servicios.</p>

      <h2>Limitación de responsabilidad</h2>
      <p>Mi Esencia Divina no se hace responsable de los daños y perjuicios que pudieran derivarse del acceso o uso del sitio web, de la interrupción del servicio o de la presencia de virus informáticos.</p>

      <h2>Legislación aplicable</h2>
      <p>Las presentes condiciones se rigen por la legislación española. Para la resolución de conflictos, las partes se someten a los Juzgados y Tribunales de [ciudad pendiente de registro].</p>
    </LegalLayout>
  );
}

// ── Términos y Condiciones ───────────────────────────────────
export function PageTerminos({ onNavigate }) {
  return (
    <LegalLayout title="Términos y Condiciones" eyebrow="Legal" onNavigate={onNavigate}>
      <h2>Proceso de compra</h2>
      <p>Al realizar un pedido en Mi Esencia Divina, el usuario declara ser mayor de 18 años y aceptar los presentes términos. El contrato de compraventa se perfecciona con la confirmación del pedido por email.</p>

      <h2>Precios y formas de pago</h2>
      <p>Todos los precios incluyen el IVA vigente. Aceptamos tarjeta de crédito/débito, PayPal y Bizum. Los pagos son procesados de forma segura mediante sistemas de encriptación SSL.</p>

      <h2>Envíos</h2>
      <p>Realizamos envíos a toda España y Europa. El plazo de entrega habitual es de 3-5 días laborables para la Península. Envío gratuito en pedidos superiores a 60€.</p>

      <h2>Devoluciones</h2>
      <p>Tienes 30 días desde la recepción del pedido para ejercer tu derecho de desistimiento, conforme al Real Decreto Legislativo 1/2007 (TRLGDCU). El producto debe estar en perfectas condiciones y sin abrir.</p>

      <h2>Garantías</h2>
      <p>Todos nuestros productos cuentan con la garantía legal de 2 años establecida por la legislación española de consumidores.</p>

      <h2>Disponibilidad en otras plataformas</h2>
      <p>Nuestros productos también estarán disponibles próximamente en Amazon y TikTok Shop. Las condiciones de venta en dichas plataformas se rigen por sus propios términos.</p>

      <h2>Resolución de disputas</h2>
      <p>En caso de controversia, puedes acudir a la plataforma europea de resolución de litigios en línea: <strong>ec.europa.eu/consumers/odr</strong></p>
    </LegalLayout>
  );
}

// ── Política de Devoluciones ─────────────────────────────────
export function PageDevoluciones({ onNavigate }) {
  return (
    <LegalLayout title="Política de Devoluciones" eyebrow="Legal" onNavigate={onNavigate}>
      <h2>Tu derecho de desistimiento</h2>
      <p>De acuerdo con el Real Decreto Legislativo 1/2007 (Texto Refundido de la Ley General para la Defensa de los Consumidores y Usuarios) y la Directiva Europea 2011/83/UE, tienes derecho a desistir de tu compra en un plazo de <strong>14 días naturales</strong> desde la recepción del pedido, sin necesidad de justificación alguna.</p>

      <h2>¿Qué productos pueden devolverse?</h2>
      <p>Podrás ejercer el derecho de desistimiento siempre que el producto se encuentre en las siguientes condiciones:</p>
      <ul>
        <li>El producto no ha sido abierto ni usado</li>
        <li>Conserva su precinto original intacto</li>
        <li>Se devuelve en su embalaje original, incluyendo todos los accesorios y la tarjeta de código incluida</li>
        <li>No han transcurrido más de 14 días naturales desde la recepción</li>
      </ul>

      <h2>Productos excluidos de devolución</h2>
      <p>Por razones de higiene y protección de la salud, quedan excluidos del derecho de desistimiento los productos de perfumería y cosmética que hayan sido <strong>abiertos o cuyo precinto haya sido retirado</strong>, conforme al Art. 103.e) del Real Decreto Legislativo 1/2007.</p>
      <p>Asimismo, los códigos de desbloqueo de lectura espiritual que hayan sido canjeados no son reembolsables, al tratarse de contenido digital de uso inmediato.</p>

      <h2>¿Cómo iniciar una devolución?</h2>
      <p>Para solicitar una devolución, sigue estos pasos:</p>
      <ul>
        <li>Escríbenos a <strong>hola@miesenciadivina.com</strong> dentro del plazo de 14 días indicando tu nombre, número de pedido y motivo de la devolución</li>
        <li>Te confirmaremos la recepción de tu solicitud y te indicaremos la dirección de envío</li>
        <li>Envía el producto en su embalaje original. Los gastos de devolución corren a cargo del cliente, salvo que el producto esté defectuoso o hayamos cometido un error en el pedido</li>
        <li>Una vez recibido e inspeccionado el producto, procesaremos el reembolso en un plazo máximo de <strong>14 días naturales</strong></li>
      </ul>

      <h2>Reembolsos</h2>
      <p>El reembolso se realizará mediante el mismo método de pago utilizado en la compra original. No se aplicarán comisiones por el reembolso. En caso de que el envío original hubiera sido gratuito por superar el mínimo de 60€ y la devolución parcial dejara el pedido por debajo de dicho importe, podremos descontar los gastos de envío originales del reembolso.</p>

      <h2>Productos defectuosos o incorrectos</h2>
      <p>Si recibes un producto defectuoso, dañado durante el transporte o diferente al pedido, contáctanos en un plazo de <strong>48 horas</strong> desde la recepción en <strong>hola@miesenciadivina.com</strong> adjuntando fotografías del producto y del embalaje. En estos casos, los gastos de devolución y reenvío corren íntegramente a nuestro cargo.</p>

      <h2>Garantía legal</h2>
      <p>Todos nuestros productos cuentan con la garantía legal de <strong>2 años</strong> establecida por la legislación española y europea de protección al consumidor. En caso de producto defectuoso dentro del periodo de garantía, procederemos a su reparación, sustitución o reembolso según corresponda.</p>

      <h2>Resolución de disputas</h2>
      <p>En caso de controversia no resuelta, puedes acudir a la plataforma europea de resolución de litigios en línea disponible en: <strong>ec.europa.eu/consumers/odr</strong></p>

      <h2>Contacto</h2>
      <p>Para cualquier consulta relacionada con devoluciones: <strong>hola@miesenciadivina.com</strong></p>
    </LegalLayout>
  );
}
