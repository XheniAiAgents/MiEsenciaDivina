// ============================================================
//  PageFAQ.jsx  —  Mi Esencia Divina
// ============================================================

import React, { useState } from "react";
import "./PageFAQ.css";

const FAQS = [
  {
    category: "Los Perfumes",
    items: [
      {
        q: "¿Qué hace especiales a los perfumes de Mi Esencia Divina?",
        a: "Cada fragancia de Mi Esencia Divina está creada con una intención energética específica y vinculada a un cristal y un chakra concreto. No son simplemente perfumes: son herramientas de bienestar diseñadas para acompañar tu práctica espiritual, amplificar tus intenciones y resonar con tu energía interior."
      },
      {
        q: "¿Los perfumes son naturales?",
        a: "Nuestras fragancias están formuladas con ingredientes de alta calidad seleccionados cuidadosamente para garantizar una experiencia olfativa elevada y respetuosa. Cada composición combina notas de cabeza, corazón y fondo que evolucionan sobre la piel creando una experiencia única y personal."
      },
      {
        q: "¿Cuánto dura la fragancia en la piel?",
        a: "La duración varía según el tipo de piel y las condiciones ambientales, pero en general puedes esperar entre 4 y 8 horas de proyección. Para potenciar la duración, aplica el perfume sobre puntos de calor — muñecas, cuello, interior de codos — e hidratar bien la piel antes de aplicarlo."
      },
      {
        q: "¿Cómo elijo cuál es mi perfume?",
        a: "Puedes guiarte por tu chakra, por el cristal que más te resuena, o por tu número de camino de vida obtenido en nuestra sección Mi Lectura. Cada perfume incluye su cristal de correspondencia y su intención energética. Confía en tu intuición: el cuerpo suele saber qué frecuencia necesita."
      },
      {
        q: "¿Puedo usar más de un perfume a la vez?",
        a: "Sí. Muchas personas combinan dos fragancias para crear su propia mezcla de intenciones. Te recomendamos empezar con uno y familiarizarte con su energía antes de combinar. Si decides mezclarlos, aplícalos en zonas diferentes del cuerpo para que cada uno tenga espacio de expresión."
      },
    ]
  },
  {
    category: "Los Cristales",
    items: [
      {
        q: "¿Qué cristal viene con cada perfume?",
        a: "Cada fragancia está vinculada a un cristal específico que comparte su intención energética. Por ejemplo, el Cuarzo Rosa acompaña nuestra fragancia del chakra corazón, mientras que la Amatista se vincula con el tercer ojo. Puedes ver la correspondencia completa en nuestra página de Cristales."
      },
      {
        q: "¿El cristal tiene algún efecto real?",
        a: "Los cristales han sido utilizados durante milenios en distintas tradiciones espirituales como herramientas de enfoque, intención y energía. Más allá del debate científico, lo que sí es cierto es que trabajar con un cristal de forma consciente — teniéndolo en la mano, colocándolo en tu espacio, usándolo durante la meditación — crea un ancla física para tus intenciones."
      },
      {
        q: "¿Cómo debo cuidar mi cristal?",
        a: "Limpia tu cristal regularmente para renovar su energía. Puedes hacerlo dejándolo bajo la luz de sol, enterrándolo brevemente en tierra, pasándolo por humo de salvia o simplemente lavándolo con agua fría con intención. Evita el sol directo prolongado con cristales de color como la amatista, que puede decolorarse."
      },
    ]
  },
  {
    category: "Mi Lectura — Numerología y Matriz del Destino",
    items: [
      {
        q: "¿Qué es la Matriz del Destino?",
        a: "La Matriz del Destino es un sistema de autoconocimiento de origen eslavo que utiliza tu fecha de nacimiento para calcular los arquetipos energéticos que rigen tu vida. Basada en los 22 Arcanos Mayores del Tarot, revela tu energía principal, tus talentos, tu energía de nacimiento, tus tareas del alma y tus patrones kármicos. Es una herramienta profunda de reflexión y crecimiento personal."
      },
      {
        q: "¿Es gratuita la lectura numerológica?",
        a: "Sí. Cualquier persona puede acceder a la sección Mi Lectura, introducir su nombre y fecha de nacimiento y obtener sus números de camino de vida, destino y alma, junto con su diagrama de Matriz del Destino y las descripciones de sus 5 energías principales. La lectura completa y detallada se desbloquea con el código incluido en tu pedido."
      },
      {
        q: "¿Cómo desbloqueo mi lectura completa?",
        a: "Dentro de cada pedido de Mi Esencia Divina encontrarás una tarjeta dorada con un código único. Crea tu cuenta gratuita en nuestra web, ve a Mi Lectura, calcula tu matriz e introduce el código al final de la página. Tu lectura completa quedará guardada en tu perfil de forma permanente."
      },
      {
        q: "¿Necesito una cuenta para ver mi lectura?",
        a: "No es obligatorio, pero sí muy recomendable. Sin cuenta puedes calcular tu lectura y ver el diagrama, pero los resultados no se guardan — cada vez que entres tendrás que volver a introducir tus datos. Con cuenta, tu lectura queda guardada y accesible en cualquier momento desde cualquier dispositivo."
      },
      {
        q: "¿La lectura es la misma para todos los que nacen el mismo día?",
        a: "El diagrama de Matriz del Destino depende únicamente de la fecha de nacimiento, por lo que personas nacidas el mismo día tendrán los mismos arquetipos base. Sin embargo, los números de destino y alma de la numerología se calculan también con el nombre completo, lo que hace que tu lectura completa sea única."
      },
    ]
  },
  {
    category: "Pedidos y Envíos",
    items: [
      {
        q: "¿Cuándo estará disponible la tienda online?",
        a: "Estamos ultimando nuestra pasarela de pago para ofrecerte la mejor experiencia de compra posible. Pronto podrás adquirir tus fragancias directamente en la web. También estaremos disponibles próximamente en Amazon y TikTok Shop. Déjanos tu email para ser la primera en saberlo."
      },
      {
        q: "¿Hacéis envíos internacionales?",
        a: "Sí. Enviamos a toda España y a los principales países de Europa y América Latina. Los gastos de envío y tiempos de entrega varían según el destino. El envío es gratuito en pedidos superiores a 60€ dentro de España."
      },
      {
        q: "¿Qué hago si tengo un problema con mi pedido?",
        a: "Escríbenos a hola@miesenciadivina.com con tu número de pedido y te respondemos en menos de 48 horas. Tu satisfacción es nuestra prioridad y encontraremos siempre una solución."
      },
    ]
  },
  {
    category: "Mi Cuenta",
    items: [
      {
        q: "¿Es seguro crear una cuenta?",
        a: "Sí. Tus datos se almacenan de forma segura y nunca los compartimos con terceros. Cumplimos con el Reglamento General de Protección de Datos (RGPD) de la Unión Europea. Puedes consultar nuestra Política de Privacidad para más información."
      },
      {
        q: "¿Puedo acceder a mi perfil desde cualquier dispositivo?",
        a: "Actualmente el perfil se almacena en el navegador que usaste para registrarte. Estamos trabajando para implementar cuentas en la nube que te permitan acceder desde cualquier dispositivo muy pronto."
      },
      {
        q: "¿Puedo tener más de una lectura guardada?",
        a: "Por el momento cada cuenta almacena una lectura vinculada al nombre y fecha de nacimiento introducidos. Si necesitas consultar la lectura de otra persona, puedes calcularla sin cuenta en la sección Mi Lectura."
      },
    ]
  },
];

export default function PageFAQ({ onNavigate }) {
  const [openItem, setOpenItem] = useState(null);

  function toggle(id) {
    setOpenItem(prev => prev === id ? null : id);
  }

  return (
    <div className="faq-page">
      {/* Hero */}
      <section className="faq-hero">
        <div className="faq-hero__ornament">✦ ✦ ✦</div>
        <h1>Preguntas Frecuentes</h1>
        <p>Todo lo que necesitas saber sobre nuestras fragancias, cristales y lecturas energéticas</p>
      </section>

      {/* FAQ content */}
      <section className="faq-content">
        <div className="faq-inner">
          {FAQS.map((section, si) => (
            <div className="faq-category" key={si}>
              <h2 className="faq-category__title">
                <span>✦</span> {section.category}
              </h2>
              <div className="faq-list">
                {section.items.map((item, ii) => {
                  const id = `${si}-${ii}`;
                  const isOpen = openItem === id;
                  return (
                    <div
                      key={id}
                      className={`faq-item ${isOpen ? "faq-item--open" : ""}`}
                    >
                      <button
                        className="faq-item__question"
                        onClick={() => toggle(id)}
                      >
                        <span>{item.q}</span>
                        <span className="faq-item__icon">{isOpen ? "−" : "+"}</span>
                      </button>
                      {isOpen && (
                        <div className="faq-item__answer">
                          <p>{item.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Contact CTA */}
          <div className="faq-contact">
            <span>✦</span>
            <h3>¿No encuentras lo que buscas?</h3>
            <p>Escríbenos y te respondemos en menos de 48 horas.</p>
            <a href="mailto:hola@miesenciadivina.com" className="faq-contact__btn">
              hola@miesenciadivina.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
