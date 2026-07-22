# hectorwaldmann.site — Brief de despliegue

Portfolio personal de Hector Waldman — Next.js 14 (App Router) + TypeScript + Tailwind CSS.
Replica el diseño aprobado en Claude Design. El código y el contenido ya están terminados.

**Este archivo es un brief para Claude Cowork (o cualquier agente con acceso a terminal y navegador):
sigue los pasos en orden, de arriba a abajo, para dejar el sitio publicado en hectorwaldmann.site.**

---

## Ya está hecho (no tocar)
- Las 7 secciones del sitio, con el contenido y los links reales (Foodly, NPSN, CACCF, GoTribe).
- Tema light/dark funcional con persistencia.
- Formulario de contacto conectado a Formspree (`https://formspree.io/f/mlgqwdvq`) — funciona tal cual.
- CV en PDF enlazado desde el botón "Download CV".

## Nota importante antes de empezar
Este proyecto se escribió a mano siguiendo las convenciones estándar de Next.js 14, pero **no se pudo
ejecutar `npm install` / `npm run build` en el entorno donde se generó** (restricción de red temporal
del sandbox). Por eso el Paso 1 es obligatorio y no se puede saltar: hay que confirmar que compila
limpio antes de desplegar.

---

## Paso 1 — Instalar dependencias y verificar que compila

```bash
cd site
npm install
npm run build
```

- Si `npm run build` termina sin errores → seguir al Paso 2.
- Si aparecen errores de TypeScript/imports → corregirlos (son archivos `.tsx` estándar de Next.js
  App Router, nada exótico) y repetir `npm run build` hasta que quede limpio.
- Verificación visual rápida: `npm run dev`, abrir `http://localhost:3000`, revisar que las 7 secciones
  carguen bien y que el toggle de tema (arriba a la derecha) cambie entre claro y oscuro sin parpadeos.

## Paso 2 — Subir el código a GitHub

```bash
git init
git add .
git commit -m "Initial portfolio site"
```

- Crear un repositorio nuevo en GitHub (público o privado, a elección de Hector) — por ejemplo
  `hectorwaldmann-portfolio`.
- Conectarlo y subir:

```bash
git remote add origin <URL_DEL_REPO_NUEVO>
git branch -M main
git push -u origin main
```

## Paso 3 — Desplegar en Vercel (gratis)

1. Entrar a [vercel.com](https://vercel.com) e iniciar sesión con la cuenta de GitHub de Hector.
2. "Add New" → "Project" → importar el repositorio recién creado.
3. Vercel detecta Next.js automáticamente — no hace falta tocar configuración de build ni variables
   de entorno.
4. Click en "Deploy" y esperar a que termine (1-2 minutos). Vercel entrega una URL tipo
   `hectorwaldmann-portfolio.vercel.app` — confirmar que el sitio carga bien ahí antes de seguir.

## Paso 4 — Conectar el dominio hectorwaldmann.site (Hostinger → Vercel)

1. En el proyecto de Vercel: **Settings → Domains → Add** → escribir `hectorwaldmann.site` → Add.
2. Vercel muestra los registros DNS exactos a configurar (normalmente un registro **A** para el
   dominio raíz apuntando a `76.76.21.21`, y un **CNAME** para `www` apuntando a
   `cname.vercel-dns.com` — usar los valores exactos que Vercel muestre en pantalla, pueden variar).
3. Entrar al panel de Hostinger: [hpanel.hostinger.com/domains](https://hpanel.hostinger.com/domains)
   → seleccionar `hectorwaldmann.site` → **DNS / Nameservers** → **Zona DNS**.
4. Editar/crear los registros A y CNAME con los valores exactos que dio Vercel en el paso 2.
5. Guardar. La propagación puede tardar entre unos minutos y 24-48h (normalmente es rápida).
6. Confirmar que `https://hectorwaldmann.site` carga el sitio y que Vercel marca el dominio como
   "Valid Configuration" (candado verde) en su panel.

## Paso 5 (opcional) — Reemplazar el placeholder de Foodly

En `components/IndependentProjects.tsx` hay un panel de color con una "F" grande como placeholder
(no había una captura real disponible al construir el sitio). Si Hector provee una captura o mockup
real de Foodly, reemplazar ese bloque por una imagen (`next/image`) apuntando al archivo en `public/`.

---

## Estructura del proyecto

```
app/
  layout.tsx        — fuentes (Space Grotesk + Manrope), tema anti-flash, metadata SEO
  page.tsx          — ensambla todas las secciones
  globals.css       — variables de color para tema light/dark
components/
  Header.tsx        — nav + logo + toggle de tema
  Hero.tsx
  About.tsx
  IndependentProjects.tsx  — sección "Apps 369" (Foodly)
  ProfessionalWork.tsx     — NPSN, CACCF, GoTribe
  Skills.tsx
  Contact.tsx        — formulario (Formspree, ya configurado)
  Footer.tsx
  ThemeToggle.tsx     — switch light/dark con persistencia en localStorage
public/
  apps369-logo.png
  Hector_Waldman_CV.pdf   — el botón "Download CV" del hero apunta aquí
```

## Checklist final

- [ ] Paso 1 — `npm install` + `npm run build` sin errores
- [ ] Paso 2 — código en GitHub
- [ ] Paso 3 — desplegado en Vercel, URL `.vercel.app` funcionando
- [ ] Paso 4 — dominio `hectorwaldmann.site` conectado y con candado verde en Vercel
- [ ] Paso 5 (opcional) — imagen real de Foodly
