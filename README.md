# Mi Esencia Divina – Parfum 🌸

Tienda web de perfumería espiritual con cristales naturales.
Construida con **React + Vite**.

---

## 📁 Estructura del proyecto

```
mi-esencia-divina/
├── index.html                  ← HTML base
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx                ← Punto de entrada
    ├── App.jsx                 ← Raíz: router + carrito global
    ├── styles/
    │   └── global.css          ← Variables CSS y estilos base
    ├── data/
    │   └── products.js         ← ⭐ AQUÍ editas los productos
    ├── assets/
    │   └── images/
    │       ├── logo.jpeg       ← Tu logo
    │       ├── blanco.png      ← Foto perfume blanco
    │       ├── verde.png       ← Foto perfume verde
    │       ├── rojo.png        ← Foto perfume rojo
    │       ├── azul.png        ← Foto perfume azul
    │       ├── lila.png        ← Foto perfume lila
    │       └── marron.png      ← Foto perfume marrón
    ├── components/
    │   ├── Navbar.jsx / .css   ← Menú de navegación
    │   ├── Hero.jsx / .css     ← Sección principal
    │   ├── ProductCard.jsx / .css  ← Tarjeta de producto
    │   ├── ProductModal.jsx / .css ← Modal detalle producto
    │   ├── Cart.jsx / .css     ← Carrito lateral
    │   ├── CookieBanner.jsx / .css ← Banner cookies RGPD
    │   └── Footer.jsx / .css   ← Pie de página
    └── pages/
        ├── Home.jsx / .css     ← Página principal
        └── LegalPages.jsx / .css ← Cookies, Privacidad, Aviso, Términos
```

---

## 🚀 Cómo arrancar

```bash
# 1. Instala las dependencias
npm install

# 2. Arranca en modo desarrollo
npm run dev

# 3. Abre en el navegador
# → http://localhost:5173
```

---

## 🖼️ Añadir las fotos de los perfumes

1. Copia tus fotos en la carpeta `src/assets/images/`
2. Asegúrate de que los nombres coincidan con los de `products.js`:
   - `blanco.png`
   - `verde.png`
   - `rojo.png`
   - `azul.png`
   - `lila.png`
   - `marron.png`
   - `logo.jpeg`

---

## ✏️ Editar productos

Abre `src/data/products.js` y modifica los datos de cada perfume:

```js
{
  id: 1,
  image: "blanco.png",      // nombre de tu foto
  cristal: "Cuarzo Transparente",
  chakra: "Corona",
  intencion: "Tu texto aquí",
  descripcion: "Descripción larga...",
  notasCabeza: "Bergamota, Limón",
  notasCorazon: "Jazmín, Iris",
  notasFondo: "Sándalo, Almizcle",
  precio: 89,               // precio en euros (sin céntimos)
  precioAnterior: null,     // null = sin precio tachado
  badge: "Bestseller",      // null = sin etiqueta
}
```

---

## 📦 Build para producción

```bash
npm run build
# Los archivos listos estarán en la carpeta /dist
```

---

## 🔮 Pendiente para cuando registres el negocio

- [ ] Rellenar CIF y dirección en `LegalPages.jsx` y `Footer.jsx`
- [ ] Conectar pasarela de pago (Stripe o Redsys) en `Cart.jsx`
- [ ] Configurar dominio propio
- [ ] Añadir píxeles de seguimiento (Meta, TikTok) en `index.html`
- [ ] Configurar Amazon Seller Central
- [ ] Configurar TikTok Shop

---

## 🛠️ ¿Quieres cambiar algo?

| Quiero cambiar...         | Archivo a editar              |
|--------------------------|-------------------------------|
| Productos / precios       | `src/data/products.js`        |
| El menú de navegación     | `src/components/Navbar.jsx`   |
| La sección principal      | `src/components/Hero.jsx`     |
| El carrito                | `src/components/Cart.jsx`     |
| Las cookies               | `src/components/CookieBanner.jsx` |
| El pie de página          | `src/components/Footer.jsx`   |
| Colores / fuentes globales| `src/styles/global.css`       |
| Textos legales            | `src/pages/LegalPages.jsx`    |
