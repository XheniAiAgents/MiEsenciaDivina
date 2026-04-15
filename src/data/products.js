// ============================================================
//  products.js  —  Mi Esencia Divina
//  Edita aquí los datos de tus perfumes.
//  Cada imagen debe estar en: src/assets/images/<imagen>
// ============================================================

const products = [
  {
    id: 1,
    image: "blanco.png",           // ← pon aquí el nombre exacto de tu foto
    color: "#F5F0E8",              // color de fondo de la tarjeta
    accentColor: "#D4C5A9",
    cristal: "Cuarzo Transparente",
    cristalEmoji: "✨",
    chakra: "Corona",
    chakraColor: "#9B59B6",
    intencion: "Claridad, amplificación y conexión espiritual",
    descripcion:
      "El cuarzo transparente activa el chakra corona, el punto más elevado de nuestra energía. Esta fragancia te invita a elevar tu consciencia, amplificar tus intenciones y conectar con tu yo más puro. Ideal para momentos de meditación y claridad mental.",
    notasCabeza: "Bergamota, Limón, Neroli",
    notasCorazon: "Jazmín blanco, Iris, Magnolia",
    notasFondo: "Sándalo blanco, Almizcle, Cedro",
    precio: 89,
    precioAnterior: null,
    badge: "Bestseller",
  },
  {
    id: 2,
    image: "verde.png",
    color: "#EAF4EC",
    accentColor: "#7AB87A",
    cristal: "Aventurina Verde",
    cristalEmoji: "🌿",
    chakra: "Corazón",
    chakraColor: "#27AE60",
    intencion: "Abundancia, equilibrio y amor incondicional",
    descripcion:
      "La aventurina verde resuena con el chakra del corazón, centro de todo amor y compasión. Esta fragancia despierta la generosidad, atrae la prosperidad y equilibra las emociones. Úsala para abrir tu corazón a nuevas oportunidades y relaciones.",
    notasCabeza: "Menta, Té verde, Pepino",
    notasCorazon: "Rosa, Geranio, Violeta",
    notasFondo: "Musgo, Pachulí, Vetiver",
    precio: 85,
    precioAnterior: null,
    badge: "Nuevo",
  },
  {
    id: 3,
    image: "rojo.png",
    color: "#FAEAEA",
    accentColor: "#C0392B",
    cristal: "Jaspe Rojo",
    cristalEmoji: "❤️",
    chakra: "Raíz",
    chakraColor: "#C0392B",
    intencion: "Vitalidad, arraigo y fuerza interior",
    descripcion:
      "El jaspe rojo conecta con el chakra raíz, nuestra base energética. Esta fragancia potente y terrosa te ancla al presente, despierta tu fuerza vital y te llena de determinación. Perfecta para comenzar el día con energía y seguridad.",
    notasCabeza: "Pimienta negra, Cardamomo, Jengibre",
    notasCorazon: "Rosa roja, Canela, Clavo",
    notasFondo: "Oud, Ámbar, Madera de cedro",
    precio: 92,
    precioAnterior: 110,
    badge: "Oferta",
  },
  {
    id: 4,
    image: "azul.png",
    color: "#E8F0FA",
    accentColor: "#2980B9",
    cristal: "Lapislázuli",
    cristalEmoji: "💙",
    chakra: "Garganta",
    chakraColor: "#2980B9",
    intencion: "Comunicación auténtica, verdad y expresión",
    descripcion:
      "El lapislázuli activa el chakra de la garganta, sede de nuestra voz y verdad. Esta fragancia oceánica y profunda te ayuda a expresarte con claridad y confianza, disolver bloqueos comunicativos y hablar desde el corazón.",
    notasCabeza: "Brisa marina, Eucalipto, Lavanda",
    notasCorazon: "Iris, Violeta, Aldehídos",
    notasFondo: "Almizcle azul, Cachemira, Ámbar gris",
    precio: 95,
    precioAnterior: null,
    badge: null,
  },
  {
    id: 5,
    image: "lila.png",
    color: "#F3EEF9",
    accentColor: "#8E44AD",
    cristal: "Amatista",
    cristalEmoji: "💜",
    chakra: "Tercer Ojo",
    chakraColor: "#8E44AD",
    intencion: "Intuición, protección espiritual y sabiduría",
    descripcion:
      "La amatista activa el chakra del tercer ojo, centro de la intuición y la percepción elevada. Esta fragancia mística y envolvente agudiza tu visión interior, protege tu energía y te conecta con la sabiduría universal.",
    notasCabeza: "Lavanda, Bergamota, Incienso",
    notasCorazon: "Rosa, Sándalo, Jazmín",
    notasFondo: "Ámbar, Vainilla, Pachulí",
    precio: 89,
    precioAnterior: null,
    badge: "Más vendido",
  },
  {
    id: 6,
    image: "marron.png",
    color: "#F5EDE4",
    accentColor: "#8B5E3C",
    cristal: "Ojo de Tigre",
    cristalEmoji: "🤎",
    chakra: "Plexo Solar",
    chakraColor: "#E67E22",
    intencion: "Confianza, manifestación y poder personal",
    descripcion:
      "El ojo de tigre vibra con el chakra del plexo solar, nuestro centro de poder y voluntad. Esta fragancia cálida y especiada despierta la confianza, impulsa la manifestación de tus metas y fortalece tu identidad. Para quienes lideran con alma.",
    notasCabeza: "Naranja, Pomelo, Especias",
    notasCorazon: "Vetiver, Cuero, Tabaco",
    notasFondo: "Oud, Madera de agar, Benjuí",
    precio: 98,
    precioAnterior: null,
    badge: "Edición especial",
  },
];

export default products;
