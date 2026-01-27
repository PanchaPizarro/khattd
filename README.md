# KHATTD - Sitio Web Oficial

Sitio web profesional para el artista urbano Khattd, con diseño moderno y colores neón vibrantes estilo trap.

## 📁 Estructura del Proyecto

```
thisiskhattd/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # JavaScript interactivo
└── README.md          # Este archivo
```

## 🚀 Deployment Rápido

### Opción 1: Netlify (Recomendado)

1. **Crear cuenta en Netlify**: https://app.netlify.com/signup
2. **Deploy manual**:
   - Arrastra toda la carpeta `thisiskhattd` a Netlify Drop
   - O sube los archivos vía Git

3. **Configurar dominio personalizado**:
   - Ve a "Domain settings" en tu sitio
   - Añade `thisiskhattd.cl`
   - Sigue las instrucciones para configurar DNS

**DNS Settings para tu dominio:**
```
Tipo: A
Nombre: @
Valor: 75.2.60.5

Tipo: CNAME
Nombre: www
Valor: tu-sitio.netlify.app
```

### Opción 2: Vercel

1. **Crear cuenta**: https://vercel.com/signup
2. **Deploy**:
   ```bash
   npm i -g vercel
   cd thisiskhattd
   vercel
   ```
3. **Configurar dominio**: Similar a Netlify

### Opción 3: GitHub Pages

1. **Crear repositorio** en GitHub
2. **Subir archivos**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/thisiskhattd.git
   git push -u origin main
   ```
3. **Activar GitHub Pages**:
   - Settings → Pages
   - Source: main branch
   - Custom domain: thisiskhattd.cl

### Opción 4: Hosting Tradicional (cPanel)

1. **Comprimir archivos** en un .zip
2. **Subir vía FTP** o File Manager de cPanel
3. **Configurar dominio** en tu hosting

## 🎨 Personalización

### Cambiar Colores

Edita las variables en `styles.css` (línea 8-14):

```css
:root {
    --neon-pink: #ff00ff;      /* Rosa neón */
    --neon-cyan: #00ffff;      /* Cyan neón */
    --neon-purple: #bf00ff;    /* Morado neón */
    /* ... más colores */
}
```

### Añadir Más Plataformas

En `index.html`, busca la sección "Platform Links" (línea ~190) y añade:

```html
<a href="URL_PLATAFORMA" target="_blank" class="platform-btn">
    <svg><!-- Icono SVG --></svg>
    Nombre Plataforma
</a>
```

### Actualizar Información

**Bio**: Edita el texto en la sección `#bio` de `index.html`

**Stats**: Modifica los números en la sección `.hero-stats`

**Tracks**: Actualiza la lista en `.tracks-grid`

### Agregar Redes Sociales

En `index.html`, sección footer (línea ~350):

```html
<a href="URL_RED_SOCIAL" target="_blank" aria-label="Nombre Red">
    <svg><!-- Icono --></svg>
</a>
```

## 🎵 Iconos de Plataformas Disponibles

Los SVG de Spotify, Apple Music, etc. ya están incluidos. Para añadir más:

1. **Busca el icono** en https://simpleicons.org/
2. **Copia el SVG**
3. **Pégalo** en el `<a>` correspondiente

## 📱 Características

- ✅ **Responsive Design**: Se adapta a móviles, tablets y desktop
- ✅ **Animaciones Suaves**: Efectos de scroll y hover
- ✅ **SEO Optimizado**: Meta tags configurados
- ✅ **Performance**: Carga rápida con assets optimizados
- ✅ **Spotify Embed**: Player integrado
- ✅ **Analytics Ready**: Listo para Google Analytics

## 🔧 Añadir Google Analytics

1. Crea una cuenta en https://analytics.google.com/
2. Obtén tu código de seguimiento
3. Añade antes de `</head>` en `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## 📧 Formulario de Contacto

Para añadir un formulario funcional, puedes usar:

- **Formspree**: https://formspree.io/ (gratis, fácil)
- **Netlify Forms**: Si usas Netlify
- **EmailJS**: https://www.emailjs.com/

## 🛠️ Próximas Mejoras

Cuando tengas los links de otras plataformas:

1. **Apple Music**: Reemplaza `#` por el URL real
2. **Tidal**: Añade el botón con su URL
3. **Amazon Music**: Añade el botón
4. **YouTube**: Embebe videos o canal
5. **Instagram**: Añade feed o botón
6. **TikTok**: Añade botón o embeds

## 📞 Soporte

Para modificaciones o dudas:
- Email: pizarrogarcia.francisca@gmail.com
- Tel: +56 9 5823 2163

## 📄 Licencia

© 2026 KHATTD. Todos los derechos reservados.

---

**Desarrollado para Khattd** 🎵
Nuevo talento urbano desde Limache, Chile 🇨🇱
