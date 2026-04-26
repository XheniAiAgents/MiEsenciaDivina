// ============================================================
//  numerology.js  —  Mi Esencia Divina
// ============================================================

// ── Helpers ───────────────────────────────────────────────────
function reduceToSingle(n) {
  while (n > 22) {
    n = String(n).split("").reduce((a, d) => a + parseInt(d), 0);
  }
  return n;
}
function reduceNumerology(n) {
  while (n > 9 && n !== 11 && n !== 22 && n !== 33) {
    n = String(n).split("").reduce((a, d) => a + parseInt(d), 0);
  }
  return n;
}

// ── Numerology ────────────────────────────────────────────────
export function calcLifePath(birthDate) {
  const digits = birthDate.replace(/-/g, "").split("").map(Number);
  return reduceNumerology(digits.reduce((a, b) => a + b, 0));
}

const PYTHAGOREAN = {
  a:1,b:2,c:3,d:4,e:5,f:6,g:7,h:8,i:9,
  j:1,k:2,l:3,m:4,n:5,o:6,p:7,q:8,r:9,
  s:1,t:2,u:3,v:4,w:5,x:6,y:7,z:8,
  á:1,é:5,í:9,ó:6,ú:3,ü:3,ñ:5,
};
const VOWELS = ["a","e","i","o","u","á","é","í","ó","ú"];

export function calcDestiny(fullName) {
  const letters = fullName.toLowerCase().replace(/\s+/g,"").split("");
  return reduceNumerology(letters.reduce((a,l) => a + (PYTHAGOREAN[l]||0), 0));
}
export function calcSoul(fullName) {
  const vowels = fullName.toLowerCase().split("").filter(l => VOWELS.includes(l));
  return reduceNumerology(vowels.reduce((a,l) => a + (PYTHAGOREAN[l]||0), 0) || 1);
}

// ── Matrix of Destiny ─────────────────────────────────────────
// Correct calculation per standard method:
// LEFT   (B) = Day of birth, reduced to 1–22           → Persona / Nacimiento
// TOP    (A) = Month of birth (1–12, never needs reducing) → Talentos
// RIGHT  (D) = Year digits summed, reduced to 1–22     → Tareas del Alma
// BOTTOM (C) = B + A + D, reduced to 1–22              → Karma
// CENTRE (G) = B + A + D + C, reduced to 1–22          → Energía Principal

function arcana(n) {
  n = Math.abs(n);
  while (n > 22) { n = String(n).split("").reduce((a, d) => a + parseInt(d), 0); }
  return n || 22;
}

export function calcMatrix(birthDate) {
  const [y, m, d] = birthDate.split("-").map(Number);
  const B = arcana(d);                                                          // Left  — Day
  const A = arcana(m);                                                          // Top   — Month
  const D = arcana(String(y).split("").map(Number).reduce((a, b) => a + b, 0)); // Right — Year sum
  const C = arcana(B + A + D);                                                  // Bottom — sum of 3 corners
  const G = arcana(B + A + D + C);                                              // Centre — all 4 corners
  return { A, B, C, D, G };
}


// ── 22 Arcana descriptions ────────────────────────────────────
export const ARCANA = {
  1:  { name: "El Mago",           teaser: "Voluntad creadora y poder de manifestación.",
        full: "El 1 es la chispa primigenia, el impulso que transforma el pensamiento en realidad. Quien lo porta tiene una voluntad excepcional y la capacidad de materializar lo que imagina. Su desafío es aprender que el poder verdadero nace del amor, no del control. Cuando el Mago actúa desde el corazón, su magia es ilimitada." },
  2:  { name: "La Sacerdotisa",    teaser: "Intuición profunda y sabiduría interior.",
        full: "El 2 es el portal entre el mundo visible y el invisible. Quienes lo portan perciben lo que otros no ven: las emociones ocultas, las verdades no dichas, los patrones que se repiten. Su don es la empatía y la conexión con lo sagrado femenino. Su reto: confiar en su voz interior sin perder sus propios límites." },
  3:  { name: "La Emperatriz",     teaser: "Abundancia, creatividad y amor incondicional.",
        full: "El 3 irradia la energía de la creación en su forma más bella. Fertilidad, belleza, abundancia y amor son sus sellos. Esta energía enseña que la vida es generosa cuando nos abrimos a recibirla. El reto es no quedarse en la superficie ni en el placer inmediato, sino cultivar la profundidad del amor." },
  4:  { name: "El Emperador",      teaser: "Estructura, liderazgo y construcción de bases sólidas.",
        full: "El 4 es el arquitecto del destino. Construye con paciencia, gobierna con justicia y protege con firmeza. Esta energía enseña que la libertad verdadera nace del orden consciente. Su reto es no volverse rígido ni autoritario, aprendiendo a liderar desde la compasión además de desde la razón." },
  5:  { name: "El Sumo Sacerdote", teaser: "Conocimiento espiritual y transmisión de sabiduría.",
        full: "El 5 es el puente entre lo divino y lo humano. Porta la sabiduría de las tradiciones y tiene el don de transmitirla de manera que transforma. Su misión es enseñar, guiar y abrir caminos espirituales para otros. Su reto: no dogmatizar, sino mantenerse abierto a que la verdad siempre es más grande." },
  6:  { name: "Los Amantes",       teaser: "Elección, amor y unión de opuestos.",
        full: "El 6 representa el momento sagrado de la elección. No solo el amor romántico, sino la unión de todo lo que parece contradictorio: razón y corazón, dar y recibir, yo y el otro. Esta energía invita a tomar decisiones desde la integridad. Su reto: elegir desde el amor propio, no desde el miedo al abandono." },
  7:  { name: "El Carro",          teaser: "Victoria, control de la voluntad y movimiento con propósito.",
        full: "El 7 es la energía del guerrero espiritual que avanza sin detenerse. Disciplina, determinación y claridad de rumbo son sus armas. Esta energía enseña que la vida es un viaje, no un destino, y que el movimiento consciente siempre conduce hacia adelante. Su reto: aprender cuándo descansar sin interpretar la pausa como derrota." },
  8:  { name: "La Justicia",       teaser: "Equilibrio kármico, verdad y responsabilidad.",
        full: "El 8 es el espejo del universo: devuelve exactamente lo que se da. Quien lo porta comprende que cada acción tiene consecuencia y que la verdadera abundancia viene de actuar con integridad. Es la energía del karma consciente. Su reto: soltar el juicio propio y ajeno, confiando en que el universo siempre reequilibra." },
  9:  { name: "El Ermitaño",       teaser: "Sabiduría interior, guía y búsqueda de la verdad.",
        full: "El 9 es el faro que alumbra en la oscuridad. Quienes lo portan son buscadores profundos, maestros silenciosos que aprenden de la soledad y la reflexión. Su misión es encontrar la luz propia para luego ofrecerla a otros. Su reto: no aislarse en exceso, recordando que la sabiduría cobra sentido cuando se comparte." },
  10: { name: "La Rueda de la Fortuna", teaser: "Ciclos, cambio y confianza en el flujo de la vida.",
        full: "El 10 es la energía del cambio perpetuo y los grandes ciclos. Nada es permanente, todo se transforma. Quien porta esta energía aprende a fluir con la vida en lugar de resistirla. Los momentos difíciles son peldaños, los momentos de gracia son regalos para recibir con gratitud. Su reto: soltar el control y confiar." },
  11: { name: "La Fuerza",         teaser: "Valentía interior, dominio del ego y amor que vence el miedo.",
        full: "El 11 es la energía que doma al león interior: los miedos, los instintos reactivos, las sombras. No con violencia, sino con amor y presencia. Esta energía enseña que la verdadera fortaleza es gentileza con uno mismo y con los demás. Su reto: no confundir amabilidad con debilidad, ni dureza con valentía." },
  12: { name: "El Colgado",        teaser: "Rendición, pausa sagrada y nuevo punto de vista.",
        full: "El 12 invita a soltar el control y ver la vida desde un ángulo completamente nuevo. La pausa no es derrota: es sabiduría. Este arcano enseña que a veces el mayor avance ocurre cuando nos detenemos, cuando entregamos y confiamos. Su reto: aprender que rendirse no es perder, sino abrir espacio para algo mayor." },
  13: { name: "La Muerte",         teaser: "Transformación profunda, cierre de ciclos y renacimiento.",
        full: "El 13 no es el fin, sino la metamorfosis más poderosa. Es la energía que cierra lo que ya no sirve para dar paso a lo que quiere nacer. Quienes lo portan son agentes de transformación profunda, capaces de reinventarse una y otra vez. Su reto: soltar el apego a lo conocido con gratitud, no con dolor." },
  14: { name: "La Templanza",      teaser: "Alquimia, equilibrio y paciencia creadora.",
        full: "El 14 es el alquimista que mezcla con maestría. Paciencia, moderación y la capacidad de encontrar el punto medio entre los extremos son sus dones. Esta energía enseña que la perfección no existe, pero la armonía sí es posible cuando se trabaja con constancia y amor. Su reto: no caer en el perfeccionismo paralizante." },
  15: { name: "El Diablo",         teaser: "Sombra, liberación de cadenas y poder personal.",
        full: "El 15 confronta lo que nos ata: adicciones, patrones inconscientes, miedos que se disfrazan de necesidades. Su energía no es maligna: es reveladora. Al mirarnos en este espejo sin juicio, encontramos el camino hacia la libertad real. Su reto: transformar la sombra en poder, sin negarla ni dejarse dominar por ella." },
  16: { name: "La Torre",          teaser: "Revelación súbita, derrumbe liberador y verdad que libera.",
        full: "El 16 es el rayo que ilumina lo que necesitaba caer. Las estructuras falsas, las ilusiones cómodas, las verdades a medias: todas se derrumban ante esta energía. Y en ese aparente caos, emerge algo auténtico y sólido. Su reto: aprender a ver los derrumbes no como catástrofes sino como liberaciones necesarias." },
  17: { name: "La Estrella",       teaser: "Esperanza, inspiración y conexión con lo divino.",
        full: "El 17 es la luz después de la tormenta. Esperanza genuina, inspiración que fluye sin esfuerzo y la certeza de que el universo es benevolente. Esta energía recuerda que somos seres de luz navegando una experiencia humana. Su reto: mantener esa fe cuando las circunstancias oscurecen el horizonte." },
  18: { name: "La Luna",           teaser: "Mundo interior, ilusiones y profundidad emocional.",
        full: "El 18 es el reino de lo inconsciente, los sueños y las emociones que fluyen bajo la superficie. Quienes lo portan son profundamente intuitivos pero también pueden perderse en ilusiones o miedos. Esta energía invita a sumergirse en el mundo interior con valentía. Su reto: distinguir la intuición genuina del miedo disfrazado." },
  19: { name: "El Sol",            teaser: "Éxito, vitalidad y alegría radiante.",
        full: "El 19 es la energía más luminosa del mazo. Vitalidad, éxito, alegría desbordante y la capacidad de iluminar a todos a su alrededor. Quienes la portan tienen el don de hacer que todo florezca. Su reto: aprender que también necesitan recibir luz, no solo darla, y que la vulnerabilidad no apaga su brillo." },
  20: { name: "El Juicio",         teaser: "Llamado del alma, despertar y renovación profunda.",
        full: "El 20 es el gran despertar: el momento en que el alma recuerda su misión y responde al llamado. Esta energía trae claridad sobre el propósito de vida y la valentía para actuar en consecuencia. Su reto: escuchar ese llamado interior aunque contradiga las expectativas ajenas, y actuar desde la verdad del alma." },
  21: { name: "El Mundo",          teaser: "Plenitud, integración y ciclo completado.",
        full: "El 21 es la energía de la culminación: el punto en que todos los aprendizajes se integran y el alma siente que ha llegado a casa. Plenitud, éxito verdadero y la sensación de que todo tiene sentido. Su reto: saber que cada final es también un comienzo, y abrazar el siguiente ciclo con la misma gracia." },
  22: { name: "El Loco",           teaser: "Salto al vacío, confianza absoluta y nuevo comienzo.",
        full: "El 22 es el alma que da el salto sin red, confiando en que el universo la sostiene. Libertad radical, apertura total y la disposición a comenzar sin importar lo que se deja atrás. Esta energía enseña que la verdadera seguridad no viene de las circunstancias sino de la confianza en uno mismo y en la vida." },
};

// ── Numerology meanings ───────────────────────────────────────
export const MEANINGS = {
  lifePath: {
    1:  { title: "El Pionero",           desc: "Lideras con fuerza e independencia. Tu misión es iniciar, crear y abrir caminos.", cristal: "Rubí",              chakra: "Raíz" },
    2:  { title: "El Diplomático",       desc: "Tu don es la sensibilidad y la cooperación. Traes armonía donde hay conflicto.",   cristal: "Piedra de Luna",   chakra: "Sacro" },
    3:  { title: "El Creador",           desc: "La expresión es tu esencia. Arte, palabra y alegría son tus herramientas.",        cristal: "Citrino",          chakra: "Plexo Solar" },
    4:  { title: "El Constructor",       desc: "Edificas con paciencia y disciplina. Eres el pilar que sostiene a los demás.",     cristal: "Ojo de Tigre",     chakra: "Raíz" },
    5:  { title: "El Explorador",        desc: "La libertad es tu oxígeno. Cambio, aventura y versatilidad definen tu camino.",    cristal: "Turquesa",         chakra: "Garganta" },
    6:  { title: "El Sanador",           desc: "El amor y el servicio son tu vocación. Cuidas, proteges y nutres.",                cristal: "Cuarzo Rosa",      chakra: "Corazón" },
    7:  { title: "El Místico",           desc: "La búsqueda de la verdad es tu camino. Filosofía y espiritualidad son tus dones.", cristal: "Amatista",         chakra: "Tercer Ojo" },
    8:  { title: "El Alquimista",        desc: "Transformas el esfuerzo en abundancia. El éxito es tu destino natural.",           cristal: "Pirita",           chakra: "Plexo Solar" },
    9:  { title: "El Sabio",             desc: "Compasión, visión global y entrega son tus sellos. Tu vida es un acto de amor.",   cristal: "Lapislázuli",      chakra: "Corona" },
    11: { title: "El Iluminado",         desc: "Número maestro. Eres un canal de energía espiritual elevada.",                     cristal: "Selenita",         chakra: "Corona" },
    22: { title: "El Maestro Constructor", desc: "Número maestro. Puedes materializar grandes sueños y dejar un legado.",         cristal: "Cuarzo Transparente", chakra: "Todos" },
    33: { title: "El Maestro Sanador",   desc: "Número maestro. La compasión más elevada. Elevas la consciencia colectiva.",       cristal: "Aguamarina",       chakra: "Corazón" },
  },
  destiny: {
    1:  { title: "Liderazgo e Independencia",   desc: "Tu nombre vibra con la energía del liderazgo. Estás aquí para tomar iniciativa." },
    2:  { title: "Cooperación y Equilibrio",    desc: "Tu esencia es la mediación. Tienes el don de crear puentes entre personas." },
    3:  { title: "Expresión y Creatividad",     desc: "La comunicación y el arte son los vehículos de tu propósito de vida." },
    4:  { title: "Orden y Estabilidad",         desc: "Construyes bases sólidas. Tu destino es crear estructuras duraderas." },
    5:  { title: "Libertad y Transformación",   desc: "El cambio es tu aliado. Tu destino es explorar y liberar a otros." },
    6:  { title: "Amor y Responsabilidad",      desc: "El servicio amoroso es tu propósito. Vibras con familia, belleza y cuidado." },
    7:  { title: "Sabiduría e Introspección",   desc: "Tu destino es profundizar. La búsqueda espiritual es tu gran maestra." },
    8:  { title: "Abundancia y Poder",          desc: "Estás destinado a la prosperidad. Tu energía atrae el éxito con integridad." },
    9:  { title: "Humanismo y Conclusión",      desc: "Tu misión es servir a la colectividad. La generosidad abre todos tus caminos." },
    11: { title: "Inspiración e Intuición Elevada", desc: "Tu nombre porta energía maestra. Eres un canal de sabiduría espiritual." },
    22: { title: "Manifestación Maestra",       desc: "Puedes construir algo de impacto universal. Combinas visión e inteligencia práctica." },
    33: { title: "Compasión Universal",         desc: "El amor en su expresión más pura. Llevas la energía del sanador universal." },
  },
  soul: {
    1:  { title: "Deseo de Autonomía",         desc: "En lo más profundo, anhelas ser tú mismo sin limitaciones." },
    2:  { title: "Deseo de Amor y Unión",      desc: "Tu alma busca conexión genuina. La armonía es tu alimento interior." },
    3:  { title: "Deseo de Expresión",         desc: "Tu alma quiere ser escuchada. La creatividad es tu combustible espiritual." },
    4:  { title: "Deseo de Seguridad",         desc: "Tu alma busca estabilidad. Un hogar sólido y propósito claro te dan paz." },
    5:  { title: "Deseo de Libertad",          desc: "Tu alma necesita movimiento. La aventura y el cambio alimentan tu espíritu." },
    6:  { title: "Deseo de Armonía",           desc: "Tu alma anhela un mundo de belleza. Cuidas y necesitas sentirte valorada." },
    7:  { title: "Deseo de Verdad",            desc: "Tu alma busca respuestas profundas. La meditación y el conocimiento te dan paz." },
    8:  { title: "Deseo de Logro",             desc: "Tu alma quiere reconocimiento. El éxito bien ganado te completa." },
    9:  { title: "Deseo de Trascendencia",     desc: "Tu alma anhela dejar huella. El amor universal y la sabiduría te elevan." },
    11: { title: "Deseo de Iluminación",       desc: "Tu alma siente el llamado espiritual. Buscas unirte a algo mayor que tú." },
    22: { title: "Deseo de Impacto Global",    desc: "Tu alma quiere construir algo que perdure con propósito espiritual." },
    33: { title: "Deseo de Sanar el Mundo",    desc: "Tu alma es compasión pura. Necesitas contribuir al despertar colectivo." },
  },
};
