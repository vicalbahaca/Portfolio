# Victor Saiz — Portfolio

Portfolio personal construido en **Next.js 14** con **Tailwind CSS** y **Framer Motion**.
Diseñado para ser editado fácilmente desde **Cursor** o **Codex**.

---

## 🚀 Instalación

```bash
# 1. Instala dependencias
npm install

# 2. Arranca el servidor de desarrollo
npm run dev

# 3. Abre http://localhost:3000
```

---

## 📁 Estructura del proyecto

```
src/
├── components/
│   ├── Layout.jsx       ← Wrapper principal (Navbar + Footer)
│   ├── Navbar.jsx       ← Barra de navegación (con menú móvil)
│   ├── Footer.jsx       ← Pie de página con redes sociales
│   ├── Cursor.jsx       ← Cursor personalizado animado
│   ├── Hero.jsx         ← Sección principal con typewriter
│   ├── Marquee.jsx      ← Ticker de habilidades
│   ├── Projects.jsx     ← Grid de proyectos
│   ├── About.jsx        ← Sobre mí + skills + experiencia
│   ├── Articles.jsx     ← Lista de artículos
│   └── Contact.jsx      ← CTA de contacto
│
├── pages/
│   ├── index.jsx        ← Página principal
│   ├── articles/
│   │   └── index.jsx    ← Listado de artículos
│   └── projects/
│       └── index.jsx    ← Listado de proyectos
│
├── data/
│   └── content.js       ← ⭐ EDITA AQUÍ todo el contenido
│
└── styles/
    └── globals.css      ← Estilos globales y variables CSS
```

---

## ✏️ Cómo editar el contenido

**Todo el contenido del sitio está en un único archivo:**

```
src/data/content.js
```

### Cambiar tu información personal
```js
export const siteConfig = {
  name: 'Victor Saiz',
  role: 'UX/Product Designer & Developer',
  email: 'TU_EMAIL_REAL@ejemplo.com',  // ← cambia esto
  social: {
    linkedin: 'https://linkedin.com/in/TU_PERFIL',  // ← cambia esto
    ...
  }
}
```

### Añadir un proyecto
```js
export const projects = [
  {
    id: 'mi-proyecto',
    title: 'Nombre del Proyecto',
    description: 'Descripción breve...',
    tags: ['UX', 'React'],
    year: '2024',
    href: '/projects/mi-proyecto',
    color: '#C8FF00',   // color de acento para este proyecto
    featured: true,     // true = aparece grande en la home
  },
  ...
]
```

### Añadir una imagen a un proyecto

1. Copia tu imagen a `/public/images/nombre-proyecto.jpg`
2. En el componente `Projects.jsx`, reemplaza el placeholder por:
```jsx
<img
  src="/images/nombre-proyecto.jpg"
  alt="Nombre del Proyecto"
  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
/>
```

---

## 🎨 Cambiar colores o tipografías

Los colores están definidos como variables CSS en `src/styles/globals.css`:

```css
:root {
  --bg: #0A0A0A;         /* fondo principal */
  --surface: #111111;    /* tarjetas y superficies */
  --border: #1E1E1E;     /* bordes */
  --accent: #C8FF00;     /* verde lima — color de acento */
  --text: #F0F0F0;       /* texto principal */
  --muted: #888888;      /* texto secundario */
}
```

---

## 📦 Deploy

### Vercel (recomendado)
```bash
npx vercel
```

### Netlify
```bash
npm run build
# sube la carpeta .next
```

---

## 🛠️ Páginas pendientes de crear

Las siguientes páginas están preparadas en la data pero necesitan su template:

- `/projects/[slug].jsx` — Detalle de cada proyecto
- `/articles/[slug].jsx` — Detalle de cada artículo

Puedes crearlas en `src/pages/projects/[slug].jsx` y `src/pages/articles/[slug].jsx`.

---

Construido con ❤️ por Victor Saiz
# Portfolio
