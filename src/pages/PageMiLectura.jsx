// ============================================================
//  PageMiLectura.jsx  —  Mi Esencia Divina
// ============================================================

import React, { useState } from "react";
import {
  calcLifePath, calcDestiny, calcSoul, calcMatrix,
  MEANINGS, ARCANA,
} from "../utils/numerology";
import "./PageMiLectura.css";

// ── 5 main energies definition ────────────────────────────────
const FIVE_ENERGIES = [
  {
    key: "G", label: "Energía Principal", icon: "◎", position: "Centro",
    context: "La energía central de tu matriz es la síntesis de todo lo que eres en esta vida. Se obtiene sumando las cuatro esquinas de tu matriz y representa la frecuencia dominante con la que tu alma eligió trabajar. Es el arquetipo que más se repite en tus patrones de vida, en la forma en que tomas decisiones y en cómo te relacionas con el mundo. Conocerla te ayuda a entender por qué ciertas situaciones se repiten y cómo puedes trabajar con esa energía en lugar de resistirla.",
  },
  {
    key: "B", label: "Energía de Nacimiento", icon: "☽", position: "Izquierda · Día de nacimiento",
    context: "Esta energía corresponde al día en que naciste y marca el punto de partida de tu alma al llegar a este mundo. Refleja las cualidades con las que viniste equipada desde el primer momento: tu carácter base, tus instintos naturales y la forma en que percibes la realidad antes de que la experiencia te moldee. Es el punto de origen desde el que todo lo demás se construye.",
  },
  {
    key: "A", label: "Talentos", icon: "✦", position: "Arriba · Mes de nacimiento",
    context: "La energía en la cima de tu matriz está dada por tu mes de nacimiento y señala los dones naturales que tienes a tu disposición en esta vida. Son capacidades que fluyen con relativa facilidad cuando te permites expresarlas plenamente. El universo los pone en tu camino como herramientas para cumplir tu misión. Reconocerlos y cultivarlos es uno de los actos más importantes de tu desarrollo personal.",
  },
  {
    key: "D", label: "Tareas del Alma", icon: "◈", position: "Derecha · Año de nacimiento",
    context: "Esta energía se obtiene de los dígitos de tu año de nacimiento y representa las tareas que tu alma vino a trabajar y desarrollar en esta encarnación. No son obstáculos sino retos elegidos conscientemente antes de nacer. Cada vez que te encuentras con la energía de este arquetipo en tu vida —en situaciones, personas o emociones— es una invitación a crecer y a cumplir con esa parte de tu misión.",
  },
  {
    key: "C", label: "Karma", icon: "⟳", position: "Abajo · Suma de las tres esquinas",
    context: "La energía en la base de tu matriz se calcula sumando las tres esquinas anteriores y representa los patrones kármicos que traes como parte de tu historia del alma. Son los temas recurrentes, los miedos profundos o las lecciones que ya llevan tiempo esperándote. Esta vida te ofrece la oportunidad de reconocerlos, sanarlos y transformarlos. No se trata de un castigo sino de una invitación a la liberación.",
  },
];

// ── Star diagram geometry (viewBox 0 0 420 420) ───────────────
// Diamond square: B=left, A=top, D=right, C=bottom
// Upright square corners (decorative, no values): NW, NE, SE, SW
const POS = {
  A:  { cx: 210, cy: 25  },
  B:  { cx: 25,  cy: 210 },
  C:  { cx: 210, cy: 395 },
  D:  { cx: 395, cy: 210 },
  NW: { cx: 85,  cy: 85  },
  NE: { cx: 335, cy: 85  },
  SE: { cx: 335, cy: 335 },
  SW: { cx: 85,  cy: 335 },
  G:  { cx: 210, cy: 210 },
};

// ─────────────────────────────────────────────────────────────

export default function PageMiLectura({ user, onSaveReadings, onOpenAuth, onRedeemCode }) {
  const saved    = user?.readings || null;
  const unlocked = user?.unlocked || false;

  const [form, setForm] = useState({
    name:      saved?.name      || user?.name || "",
    birthDate: saved?.birthDate || "",
  });
  const [result,      setResult]      = useState(saved?.matrix ? saved : null);
  const [calculating, setCalculating] = useState(false);
  const [codeModal,   setCodeModal]   = useState(false);
  const [codeInput,   setCodeInput]   = useState("");
  const [codeError,   setCodeError]   = useState("");
  const [codeSuccess, setCodeSuccess] = useState(false);
  const [showHint,    setShowHint]    = useState(false);

  function handleChange(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  }

  function calculate(e) {
    e.preventDefault();
    if (!form.name.trim() || !form.birthDate) return;
    setCalculating(true);
    setTimeout(() => {
      const lifePath = calcLifePath(form.birthDate);
      const destiny  = calcDestiny(form.name);
      const soul     = calcSoul(form.name);
      const matrix   = calcMatrix(form.birthDate);
      const readings = { name: form.name.trim(), birthDate: form.birthDate, lifePath, destiny, soul, matrix };
      setResult(readings);
      if (user && onSaveReadings) onSaveReadings(readings);
      setCalculating(false);
    }, 700);
  }

  function reset() {
    setResult(null);
    setForm({ name: user?.name || "", birthDate: "" });
  }

  function openCodeModal() {
    if (!user) { onOpenAuth(); return; }
    setCodeModal(true);
    setCodeInput("");
    setCodeError("");
    setCodeSuccess(false);
  }

  function handleRedeemSubmit(e) {
    e.preventDefault();
    const res = onRedeemCode(codeInput);
    if (!res.ok) { setCodeError(res.error); return; }
    setCodeSuccess(true);
    setTimeout(() => setCodeModal(false), 1800);
  }

  return (
    <div className="lectura-page">

      {/* Hero */}
      <section className="lectura-hero">
        <div className="lectura-hero__ornament">✦ ✦ ✦</div>
        <h1>Tu Lectura Numerológica</h1>
        <p>Descubre los números y energías que guían tu alma, tu destino y tu camino de vida</p>
      </section>

      {/* Form */}
      {!result && (
        <section className="lectura-form-section">
          <div className="lectura-form-wrap">
            <div className="lectura-form-intro">
              <h2>Introduce tus datos</h2>
              <p>Tu nombre completo de nacimiento y fecha de nacimiento revelan los códigos únicos de tu alma.</p>
            </div>
            <form className="lectura-form" onSubmit={calculate}>
              <div className="lectura-field">
                <label>Nombre completo de nacimiento</label>
                <input type="text" name="name" value={form.name} onChange={handleChange}
                  placeholder="Ej: María García López" required />
                <span className="lectura-field__hint">Tal como aparece en tu documento de identidad</span>
              </div>
              <div className="lectura-field">
                <label>Fecha de nacimiento</label>
                <input type="date" name="birthDate" value={form.birthDate} onChange={handleChange} required />
              </div>
              <button type="submit" className="lectura-btn" disabled={calculating}>
                {calculating
                  ? <span className="lectura-btn__loading"><span className="dot">✦</span> Calculando tu vibración...</span>
                  : "Revelar mi lectura →"}
              </button>
              {!user && (
                <p className="lectura-form__save-hint">
                  <span onClick={onOpenAuth}>Inicia sesión</span> para guardar tu lectura y acceder a ella siempre.
                </p>
              )}
            </form>
          </div>
        </section>
      )}

      {/* Results */}
      {result && (
        <section className="lectura-results">
          <div className="lectura-results__header">
            <p className="lectura-results__name">Lectura para <strong>{result.name}</strong></p>
            {unlocked
              ? <p className="lectura-results__saved">✦ Lectura completa desbloqueada</p>
              : user && <p className="lectura-results__lock-hint">🔒 Introduce tu código para desbloquear la lectura completa</p>
            }
          </div>

          {/* Numerology cards */}
          <div className="lectura-cards">
            <NumberCard number={result.lifePath} label="Camino de Vida"    icon="☽" subtitle="El propósito de tu alma"  meaning={MEANINGS.lifePath[result.lifePath]} unlocked={unlocked} accent />
            <NumberCard number={result.destiny}  label="Número de Destino" icon="✦" subtitle="Lo que viniste a lograr"  meaning={MEANINGS.destiny[result.destiny]}  unlocked={unlocked} />
            <NumberCard number={result.soul}     label="Número del Alma"   icon="◈" subtitle="Tu deseo más profundo"    meaning={MEANINGS.soul[result.soul]}        unlocked={unlocked} />
          </div>

          {/* Crystal */}
          {MEANINGS.lifePath[result.lifePath]?.cristal && (
            <div className="lectura-cristal">
              <div className="lectura-cristal__inner">
                <span className="lectura-cristal__icon">💎</span>
                <div>
                  <p className="lectura-cristal__label">Tu cristal de poder</p>
                  <p className="lectura-cristal__name">{MEANINGS.lifePath[result.lifePath].cristal}</p>
                  <p className="lectura-cristal__chakra">Chakra {MEANINGS.lifePath[result.lifePath].chakra}</p>
                </div>
              </div>
            </div>
          )}

          {/* ── Matrix of Destiny ── */}
          <div className="matrix-section">
            <div className="matrix-section__head">
              <h2>Matriz del Destino</h2>
              <p>El mapa energético de tu alma según los 22 arquetipos universales</p>
            </div>

            <div className="matrix-wrap">
              <StarDiagram matrix={result.matrix} />
            </div>

            {/* 5 energies — one per row */}
            <div className="matrix-five">
              {FIVE_ENERGIES.map(({ key, label, icon, position, context }) => {
                const arcanaNum = result.matrix[key];
                const arcana    = ARCANA[arcanaNum];
                return (
                  <div className="matrix-row" key={key}>
                    <div className="matrix-row__header">
                      <span className="matrix-row__icon">{icon}</span>
                      <div className="matrix-row__meta">
                        <p className="matrix-row__position">{position}</p>
                        <p className="matrix-row__label">{label}</p>
                      </div>
                      <div className="matrix-row__badge">
                        <span className="matrix-row__num">{arcanaNum}</span>
                        <span className="matrix-row__arcana-name">{arcana?.name}</span>
                      </div>
                    </div>
                    <div className="matrix-row__body">
                      <p className="matrix-row__context">{context}</p>
                      <p className="matrix-row__teaser">
                        <em>"{arcana?.teaser}"</em>
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Read more CTA */}
            <div className="matrix-readmore">
              {unlocked ? (
                <div className="matrix-readmore__unlocked">
                  <span>✦</span>
                  <p>Lectura completa desbloqueada</p>
                </div>
              ) : (
                <button className="matrix-readmore__btn" onClick={openCodeModal}>
                  <span className="matrix-readmore__btn-title">Leer más sobre mis energías</span>
                  <span className="matrix-readmore__btn-sub">
                    {user ? "🔒 Introduce el código de tu pedido" : "→ Crea una cuenta gratuita"}
                  </span>
                </button>
              )}
            </div>
          </div>

          <div className="lectura-results__actions">
            <button className="lectura-btn lectura-btn--outline" onClick={reset}>← Nueva lectura</button>
            {!user && <button className="lectura-btn" onClick={onOpenAuth}>Guardar en mi perfil</button>}
          </div>
        </section>
      )}

      {/* Info footer */}
      <section className="lectura-info">
        <div className="lectura-info__grid">
          <div className="lectura-info__card"><span>☽</span><h3>Camino de Vida</h3><p>Suma de los dígitos de tu fecha de nacimiento. Revela el propósito central de tu alma.</p></div>
          <div className="lectura-info__card"><span>✦</span><h3>Número de Destino</h3><p>Valores numéricos de tu nombre completo. Las cualidades que viniste a desarrollar.</p></div>
          <div className="lectura-info__card"><span>◈</span><h3>Número del Alma</h3><p>Las vocales de tu nombre. Refleja tus deseos más íntimos y tu paz interior.</p></div>
          <div className="lectura-info__card"><span>⬡</span><h3>Matriz del Destino</h3><p>Mapa de los 22 arquetipos calculados desde tu fecha de nacimiento según la tradición eslava.</p></div>
        </div>
      </section>

      {/* Code modal */}
      {codeModal && (
        <div className="code-overlay" onClick={() => setCodeModal(false)}>
          <div className="code-modal" onClick={e => e.stopPropagation()}>
            <button className="code-modal__close" onClick={() => setCodeModal(false)}>✕</button>
            {codeSuccess ? (
              <div className="code-modal__success">
                <span>✦</span>
                <h3>¡Lectura desbloqueada!</h3>
                <p>Tu lectura completa ya está disponible.</p>
              </div>
            ) : (
              <>
                <div className="code-modal__header">
                  <span>🔐</span>
                  <h3>Desbloquea tu lectura completa</h3>
                  <p>Introduce el código que encontrarás en el interior de tu pedido para acceder a las descripciones completas de tus energías.</p>
                </div>
                <form className="code-modal__form" onSubmit={handleRedeemSubmit}>
                  <div className="code-modal__input-wrap">
                    <input
                      type="text"
                      value={codeInput}
                      onChange={e => { setCodeInput(e.target.value); setCodeError(""); }}
                      placeholder="XXXXXX"
                      maxLength={20}
                      autoFocus
                    />
                    <button type="button" className="code-modal__hint-btn"
                      onClick={() => setShowHint(h => !h)} title="¿Dónde encuentro mi código?">ℹ</button>
                  </div>
                  {showHint && (
                    <div className="code-modal__hint">
                      Tu código único viene impreso en la <strong>tarjeta dorada</strong> incluida dentro de tu caja. Si no la encuentras, escríbenos a <em>hola@miesenciadivina.com</em>
                    </div>
                  )}
                  {codeError && <p className="code-modal__error">⚠ {codeError}</p>}
                  <button type="submit" className="lectura-btn">Desbloquear →</button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// ── NumberCard ────────────────────────────────────────────────
function NumberCard({ number, label, icon, subtitle, meaning, unlocked, accent }) {
  return (
    <div className={`num-card ${accent ? "num-card--accent" : ""}`}>
      <div className="num-card__icon">{icon}</div>
      <div className="num-card__number">{number}</div>
      <div className="num-card__label">{label}</div>
      <div className="num-card__subtitle">{subtitle}</div>
      {meaning && (
        <div className="num-card__meaning">
          <p className="num-card__title">{meaning.title}</p>
          <p className="num-card__desc">
            {unlocked ? meaning.desc : meaning.desc.split(" ").slice(0, 8).join(" ") + "..."}
          </p>
        </div>
      )}
    </div>
  );
}

// ── StarDiagram ───────────────────────────────────────────────
function StarDiagram({ matrix }) {
  // Two overlapping squares forming an 8-pointed star
  const diamond = `${POS.A.cx},${POS.A.cy} ${POS.D.cx},${POS.D.cy} ${POS.C.cx},${POS.C.cy} ${POS.B.cx},${POS.B.cy}`;
  const upright  = `${POS.NW.cx},${POS.NW.cy} ${POS.NE.cx},${POS.NE.cy} ${POS.SE.cx},${POS.SE.cy} ${POS.SW.cx},${POS.SW.cy}`;

  // Lines from each main corner to centre
  const spokes = [["A","G"],["B","G"],["C","G"],["D","G"]];

  return (
    <svg viewBox="0 0 420 420" xmlns="http://www.w3.org/2000/svg" className="matrix-svg">
      {/* Upright square */}
      <polygon points={upright} fill="rgba(201,168,76,0.04)" stroke="rgba(201,168,76,0.3)" strokeWidth="1" />
      {/* Diamond square */}
      <polygon points={diamond} fill="rgba(201,168,76,0.06)" stroke="rgba(201,168,76,0.5)" strokeWidth="1.5" />

      {/* Spokes to centre */}
      {spokes.map(([a, b]) => (
        <line key={a+b}
          x1={POS[a].cx} y1={POS[a].cy}
          x2={POS[b].cx} y2={POS[b].cy}
          stroke="rgba(201,168,76,0.2)" strokeWidth="1" strokeDasharray="4 4"
        />
      ))}

      {/* Decorative corner points (no values) */}
      {["NW","NE","SE","SW"].map(k => (
        <circle key={k} cx={POS[k].cx} cy={POS[k].cy} r={6}
          fill="#faf7f0" stroke="rgba(201,168,76,0.3)" strokeWidth="1" />
      ))}

      {/* Main 4 corners — larger, labeled */}
      {["A","B","C","D"].map(k => (
        <g key={k}>
          <circle cx={POS[k].cx} cy={POS[k].cy} r={22}
            fill="#faf7f0" stroke="#C9A84C" strokeWidth="1.5" />
          <text x={POS[k].cx} y={POS[k].cy + 1}
            textAnchor="middle" dominantBaseline="middle"
            fontSize="14" fontFamily="'Cormorant Garamond', serif" fontWeight="600" fill="#0D0D0D">
            {matrix[k]}
          </text>
        </g>
      ))}

      {/* Centre — G */}
      <circle cx={POS.G.cx} cy={POS.G.cy} r={28}
        fill="#0D0D0D" stroke="#C9A84C" strokeWidth="2" />
      <text x={POS.G.cx} y={POS.G.cy + 1}
        textAnchor="middle" dominantBaseline="middle"
        fontSize="16" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fill="#C9A84C">
        {matrix.G}
      </text>
    </svg>
  );
}
