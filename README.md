# SmartBroker · Sitio Web Corporativo
> Corredora de seguros | "Tu mejor aliado"

---

## 🗂 Estructura de carpetas (MVC)

```
smartbroker/
├── index.html              ← Shell HTML (único archivo HTML)
├── styles.css              ← Todos los estilos (BEM + CSS Variables)
├── app.js                  ← Entry point: orquesta M→V→C
│
├── models/
│   └── models.js           ← Todos los datos de la app (textos, servicios, nav…)
│
├── views/
│   └── views.js            ← Funciones puras que generan HTML
│
└── controllers/
    └── controllers.js      ← Lógica de eventos (nav, scroll, formulario, carrusel)
```

---

## 🎨 Paleta de colores SmartBroker

| Token            | Hex       | Uso                                      |
|------------------|-----------|------------------------------------------|
| `--primary`      | `#2D2D2D` | Gris carbón (texto "smart", hero, footer)|
| `--accent`       | `#E8571A` | Naranja SmartBroker (ícono + "Broker")   |
| `--accent-alt`   | `#C44510` | Naranja oscuro (hover, profundidad)      |
| `--accent-light` | `#FFF0E8` | Naranja muy claro (fondos tenues, iconos)|
| `--light`        | `#F7F7F7` | Gris claro neutro (secciones alternas)   |
| `--color-muted`  | `#7A7A7A` | Gris medio (textos secundarios)          |

> Todos los colores se configuran desde `models.js` → `brand.colors` y se aplican como CSS custom properties automáticamente.

---

## ✏️ Cómo personalizar contenido

### Cambiar textos / servicios:
Abre **`models/models.js`** y edita los objetos:
- `brand` → nombre, tagline
- `hero` → headline, subtexto, estadísticas
- `services` → tarjetas de servicios
- `testimonials` → testimonios del carrusel
- `contact.info` → dirección, teléfono, email

### Agregar el logo real:
1. Coloca `logo.svg` (o `.png`) en `assets/`
2. En `models.js` → `brand.logo.image = "assets/logo.svg"`
3. En `views.js` → `renderHeader()`, reemplaza el SVG inline por `<img src="${brand.logo.image}" alt="${brand.name}" />`

### Cambiar fuentes:
En `styles.css`, línea 1, reemplaza el `@import` de Google Fonts.
Luego actualiza `--font-display` y `--font-body` en `:root`.

---

## 🚀 Cómo correr localmente

Necesitas un servidor local por los ES modules (`type="module"`):

```bash
# Con Python
python3 -m http.server 3000

# Con Node (npx)
npx serve .

# Con VS Code
Instala extensión "Live Server" → clic derecho → "Open with Live Server"
```

Abre: `http://localhost:3000`

---

## 📱 Breakpoints

| Dispositivo | Ancho    |
|-------------|----------|
| Mobile      | 320px+   |
| Tablet      | 768px+   |
| Desktop     | 1024px+  |

---

## 🗺 Mapa de navegación

```
SmartBroker (/)
├── #inicio        → Hero section
├── #servicios     → Tarjetas de seguros
│   ├── #vida
│   ├── #salud
│   ├── #vehicular
│   └── #empresarial
├── #nosotros      → Descripción + valores
├── #testimonios   → Carrusel de testimonios
└── #contacto      → Formulario + info de contacto
```

---

## 📦 Dependencias externas

| Recurso        | Uso                     | URL                       |
|----------------|-------------------------|---------------------------|
| Google Fonts   | Syne + DM Sans          | fonts.googleapis.com      |

Sin librerías JS de terceros. Vanilla JS puro.

---

## ✅ Checklist de producción

- [ ] Reemplazar logo placeholder con imagen real
- [ ] Actualizar datos de contacto en `models.js`
- [ ] Conectar formulario a backend / servicio de email (EmailJS, Formspree, etc.)
- [ ] Agregar Google Analytics / Tag Manager
- [ ] Configurar dominio y SSL
- [ ] Comprimir imágenes (webp)
- [ ] Agregar `sitemap.xml` para SEO
- [ ] Revisar con herramienta de accesibilidad (axe, Lighthouse)

---

© 2025 SmartBroker. Todos los derechos reservados.
