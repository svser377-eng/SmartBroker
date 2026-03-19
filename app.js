/**
 * SmartBroker – App Entry Point
 * Orquesta Model → View → Controller.
 * Este es el único archivo que los une.
 */

import AppModel      from "./models.js";
import Views         from "./views.js";
import Controllers   from "./controllers.js";

const App = {
  /**
   * Bootstrap: renderiza la UI y arranca los controllers.
   */
  init() {
    const { brand, nav, hero, services, about, testimonials, contact, sitemap } = AppModel;

    // ── Inyección de CSS variables de marca ──
    this._applyBrandColors(brand.colors);

    // ── Renderizado de secciones ──
    const root = document.getElementById("app");
    if (!root) { console.error("Missing #app mount point"); return; }

    root.innerHTML = [
      Views.renderHeader(brand, nav),
      '<main id="main-content">',
        Views.renderHero(hero),
        Views.renderServices(services),
        Views.renderAbout(about),
        Views.renderTestimonials(testimonials),
        Views.renderContact(contact),
        Views.renderSitemap(brand, sitemap),
      '</main>',
      Views.renderFooter(brand, sitemap, contact),
    ].join("");

    // ── Arrancar controladores ──
    Controllers.init();

    // ── Accesibilidad: skip-link focus ──
    document.getElementById("skip-link")?.addEventListener("click", (e) => {
      e.preventDefault();
      document.getElementById("main-content")?.focus();
    });
  },

  /**
   * Aplica los colores de marca como custom properties en :root.
   * Para cambiar la paleta, edita brand.colors en models.js.
   */
  _applyBrandColors(colors) {
    const root = document.documentElement;
    root.style.setProperty("--primary",       colors.primary);
    root.style.setProperty("--accent",        colors.accent);
    root.style.setProperty("--accent-alt",    colors.accentAlt);
    root.style.setProperty("--accent-light",  colors.accentLight);
    root.style.setProperty("--light",         colors.light);
    root.style.setProperty("--color-text",    colors.text);
    root.style.setProperty("--color-muted",   colors.muted);
  },
};

/* ── DOMContentLoaded ── */
document.addEventListener("DOMContentLoaded", () => {
  try {
    console.log("App: inicializando...");
    App.init();
  } catch (error) {
    console.error("App init falló:", error);
  }
});
