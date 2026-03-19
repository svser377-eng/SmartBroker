/**
 * SmartBroker – Views Layer
 * Funciones puras que reciben datos y retornan HTML como string.
 * No tocan el DOM directamente; sólo generan markup.
 */

export const Views = {

  /* ─── HEADER ─── */
  renderHeader(brand, nav) {
    return `
    <header class="header" id="header" role="banner">
      <div class="header__inner container">
        <!-- LOGO -->
        <a href="#inicio" class="header__logo" aria-label="${brand.name} – Inicio">
          ${brand.logo.image ? `
            <img src="${brand.logo.image}" alt="${brand.name}" class="header__logo-img" />
          ` : `
          <span class="logo-mark">
            <svg viewBox="0 0 36 36" fill="none" aria-hidden="true">
              <circle cx="18" cy="18" r="17" stroke="var(--accent)" stroke-width="1.8"/>
              <circle cx="18" cy="18" r="11" stroke="var(--accent)" stroke-width="1.8"/>
              <circle cx="18" cy="18" r="5"  stroke="var(--accent)" stroke-width="1.8"/>
              <circle cx="18" cy="18" r="2"  fill="var(--accent)"/>
              <path d="M18 1 A17 17 0 0 1 35 18" stroke="var(--accent)" stroke-width="3" stroke-linecap="round"/>
              <path d="M18 7 A11 11 0 0 1 29 18" stroke="var(--accent)" stroke-width="2.5" stroke-linecap="round"/>
            </svg>
          </span>
          <span class="logo-text">${brand.logo.text}</span>
          `}
        </a>

        <!-- DESKTOP NAV -->
        <nav class="header__nav" aria-label="Navegación principal">
          <ul role="list">
            ${nav.map(item => `
              <li><a href="${item.href}" class="nav-link">${item.label}</a></li>
            `).join("")}
          </ul>
          <a href="#contacto" class="btn btn--sm btn--primary">Solicitar asesoría</a>
        </nav>

        <!-- HAMBURGER -->
        <button class="header__hamburger" id="hamburger" aria-label="Abrir menú" aria-expanded="false" aria-controls="mobile-menu">
          <span></span><span></span><span></span>
        </button>
      </div>

      <!-- MOBILE MENU -->
      <div class="mobile-menu" id="mobile-menu" aria-hidden="true" role="dialog" aria-label="Menú móvil">
        <ul role="list">
          ${nav.map(item => `
            <li><a href="${item.href}" class="mobile-link">${item.label}</a></li>
          `).join("")}
        </ul>
        <a href="#contacto" class="btn btn--primary mobile-cta">Solicitar asesoría</a>
      </div>
    </header>`;
  },

  /* ─── HERO ─── */
  renderHero(hero) {
    return `
    <section class="hero" id="inicio" aria-labelledby="hero-heading">
      <!-- Decorative background shapes -->
      <div class="hero__bg" aria-hidden="true">
        <div class="hero__orb hero__orb--1"></div>
        <div class="hero__orb hero__orb--2"></div>
        <div class="hero__grid"></div>
      </div>

      <div class="container hero__inner">
        <div class="hero__content reveal">
          <span class="eyebrow">${hero.eyebrow}</span>
          <h1 id="hero-heading">${hero.headline}</h1>
          <p class="hero__subtext">${hero.subtext}</p>
          <div class="hero__actions">
            <a href="${hero.cta.href}" class="btn btn--primary btn--lg">
              ${hero.cta.label}
              <svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </a>
            <a href="${hero.ctaAlt.href}" class="btn btn--ghost btn--lg">${hero.ctaAlt.label}</a>
          </div>

          <!-- Stats -->
          <div class="hero__stats" role="list">
            ${hero.stats.map(s => `
              <div class="hero__stat" role="listitem">
                <strong>${s.value}</strong>
                <span>${s.label}</span>
              </div>
            `).join("")}
          </div>
        </div>

        <!-- Hero illustration -->
        <div class="hero__visual reveal reveal--right" aria-hidden="true">
          <div class="hero__card-stack">
            <div class="hero__card hero__card--back"></div>
            <div class="hero__card hero__card--mid"></div>
            <div class="hero__card hero__card--front">
              <div class="hc-icon">
                <svg viewBox="0 0 48 48" fill="none"><path d="M24 42s-17-10.5-17-22a12 12 0 0124 0 12 12 0 0124 0C41 31.5 24 42 24 42z" stroke="var(--accent)" stroke-width="2.5"/><path d="M17 24h6l3-5 4 10 3-5h5" stroke="var(--accent)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </div>
              <p class="hc-label">Plan Activo</p>
              <p class="hc-value">Familia Completa</p>
              <div class="hc-bar"><div class="hc-bar__fill"></div></div>
              <div class="hc-meta">
                <span>Cobertura</span>
                <strong>98%</strong>
              </div>
            </div>
            <!-- Floating badge -->
            <div class="hero__badge hero__badge--1">
              <svg viewBox="0 0 20 20" fill="none"><path d="M10 2l2 6h6l-5 3.5 2 6-5-3.5-5 3.5 2-6L2 8h6z" fill="var(--accent)"/></svg>
              <span>Certificados</span>
            </div>
            <div class="hero__badge hero__badge--2">
              <span class="badge-num">+5K</span>
              <span>Clientes</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="scroll-indicator" aria-hidden="true">
        <div class="scroll-indicator__dot"></div>
      </div>
    </section>`;
  },

  /* ─── SERVICES ─── */
  renderServices(services) {
    return `
    <section class="services section" id="servicios" aria-labelledby="services-heading">
      <div class="container">
        <div class="section-header reveal">
          <span class="eyebrow">Nuestros servicios</span>
          <h2 id="services-heading">Soluciones para cada<br>etapa de tu vida</h2>
          <p class="section-desc">Cada póliza es diseñada a medida, con asesoría personalizada y acceso a las mejores aseguradoras del mercado.</p>
        </div>

        <div class="services__grid">
          ${services.map((s, i) => `
            <article class="service-card reveal reveal--up" style="--delay:${i * 80}ms" id="${s.id}" aria-labelledby="svc-${s.id}">
              <div class="service-card__icon" aria-hidden="true">${s.icon}</div>
              <h3 id="svc-${s.id}">${s.title}</h3>
              <p>${s.desc}</p>
              <ul class="service-card__features" role="list">
                ${s.features.map(f => `<li>${f}</li>`).join("")}
              </ul>
              <a href="#contacto" class="service-card__cta" aria-label="Cotizar ${s.title}">
                Cotizar ahora
                <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </a>
            </article>
          `).join("")}
        </div>
      </div>
    </section>`;
  },

  /* ─── ABOUT ─── */
  renderAbout(about) {
    return `
    <section class="about section" id="nosotros" aria-labelledby="about-heading">
      <div class="container about__inner">
        <!-- Visual side -->
        <div class="about__visual reveal" aria-hidden="true">
          <div class="about__img-wrap">
            <div class="about__img-placeholder">
              <div class="ap-inner">
                <svg viewBox="0 0 80 80" fill="none"><rect width="80" height="80" rx="16" fill="var(--accent)" opacity=".12"/><path d="M40 20c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zM20 60c0-11 9-20 20-20s20 9 20 20" stroke="var(--accent)" stroke-width="3" stroke-linecap="round"/></svg>
                <p>Foto del equipo</p>
              </div>
            </div>
            <div class="about__accent-card">
              <strong>15+</strong>
              <span>Años protegiendo<br>lo que importa</span>
            </div>
          </div>
        </div>

        <!-- Content side -->
        <div class="about__content reveal reveal--right">
          <span class="eyebrow">${about.eyebrow}</span>
          <h2 id="about-heading">${about.headline}</h2>
          ${about.body.map(p => `<p>${p}</p>`).join("")}

          <div class="about__values" role="list">
            ${about.values.map(v => `
              <div class="value-item reveal--up" role="listitem">
                <div class="value-item__icon" aria-hidden="true">${v.icon}</div>
                <div>
                  <strong>${v.title}</strong>
                  <p>${v.desc}</p>
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      </div>
    </section>`;
  },

  /* ─── TESTIMONIALS ─── */
  renderTestimonials(testimonials) {
    const stars = (n) => Array.from({length: n}, () =>
      `<svg viewBox="0 0 14 14" fill="currentColor" aria-hidden="true"><path d="M7 1l1.6 4H13l-3.5 2.5 1.3 4.3L7 9.5l-3.8 2.3 1.3-4.3L1 5h4.4z"/></svg>`
    ).join("");

    return `
    <section class="testimonials section" id="testimonios" aria-labelledby="testimonials-heading">
      <div class="container">
        <div class="section-header reveal">
          <span class="eyebrow">Testimonios</span>
          <h2 id="testimonials-heading">Lo que dicen<br>nuestros clientes</h2>
        </div>

        <div class="testimonials__track-wrap" role="region" aria-label="Carrusel de testimonios">
          <div class="testimonials__track" id="testimonials-track">
            ${testimonials.map(t => `
              <article class="testimonial-card" aria-label="Testimonio de ${t.name}">
                <div class="testimonial-card__stars" aria-label="${t.rating} de 5 estrellas">
                  ${stars(t.rating)}
                </div>
                <blockquote>"${t.text}"</blockquote>
                <div class="testimonial-card__author">
                  <div class="author-avatar" aria-hidden="true">${t.avatar}</div>
                  <div>
                    <strong>${t.name}</strong>
                    <span>${t.role}</span>
                  </div>
                </div>
              </article>
            `).join("")}
          </div>
        </div>

        <!-- Controls -->
        <div class="testimonials__controls" aria-label="Controles del carrusel">
          <button class="tc-btn" id="tc-prev" aria-label="Testimonio anterior">
            <svg viewBox="0 0 20 20" fill="none"><path d="M12 4l-6 6 6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
          </button>
          <div class="tc-dots" id="tc-dots" role="tablist" aria-label="Seleccionar testimonio">
            ${testimonials.map((_, i) => `
              <button class="tc-dot ${i === 0 ? 'active' : ''}" 
                role="tab" 
                aria-selected="${i === 0}" 
                aria-label="Testimonio ${i + 1}"
                data-index="${i}"></button>
            `).join("")}
          </div>
          <button class="tc-btn" id="tc-next" aria-label="Testimonio siguiente">
            <svg viewBox="0 0 20 20" fill="none"><path d="M8 4l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
          </button>
        </div>
      </div>
    </section>`;
  },

  /* ─── CONTACT ─── */
  renderContact(contact) {
    return `
    <section class="contact section" id="contacto" aria-labelledby="contact-heading">
      <div class="container contact__inner">
        <!-- Info -->
        <div class="contact__info reveal">
          <span class="eyebrow">Contáctanos</span>
          <h2 id="contact-heading">${contact.headline}</h2>
          <p>${contact.subtext}</p>

          <ul class="contact__details" role="list">
            ${contact.info.map(item => `
              <li>
                <span class="ci-icon" aria-hidden="true">${item.icon}</span>
                <div>
                  <strong>${item.label}</strong>
                  <span>${item.value}</span>
                </div>
              </li>
            `).join("")}
          </ul>

          <div class="contact__social" role="list" aria-label="Redes sociales">
            ${contact.social.map(s => `
              <a href="${s.href}" class="social-btn" role="listitem" aria-label="${s.name}" rel="noopener noreferrer">
                ${s.icon}
              </a>
            `).join("")}
          </div>
        </div>

        <!-- Form -->
        <div class="contact__form-wrap reveal reveal--right">
          <form class="contact-form" id="contact-form" novalidate aria-label="Formulario de contacto">
            <div class="form-group">
              <label for="cf-name">Nombre completo *</label>
              <input type="text" id="cf-name" name="name" placeholder="Tu nombre" autocomplete="name" required aria-required="true"/>
              <span class="form-error" id="err-name" role="alert" aria-live="polite"></span>
            </div>
            <div class="form-group">
              <label for="cf-email">Correo electrónico *</label>
              <input type="email" id="cf-email" name="email" placeholder="tu@correo.com" autocomplete="email" required aria-required="true"/>
              <span class="form-error" id="err-email" role="alert" aria-live="polite"></span>
            </div>
            <div class="form-group">
              <label for="cf-phone">Teléfono</label>
              <input type="tel" id="cf-phone" name="phone" placeholder="+57 300 000 0000" autocomplete="tel"/>
              <span class="form-error" id="err-phone" role="alert" aria-live="polite"></span>
            </div>
            <div class="form-group">
              <label for="cf-service">Servicio de interés</label>
              <select id="cf-service" name="service">
                <option value="">Seleccionar…</option>
                <option value="vida">Seguro de Vida</option>
                <option value="salud">Seguro de Salud</option>
                <option value="vehicular">Seguro Vehicular</option>
                <option value="empresarial">Seguro Empresarial</option>
              </select>
            </div>
            <div class="form-group form-group--full">
              <label for="cf-message">Mensaje *</label>
              <textarea id="cf-message" name="message" rows="4" placeholder="Cuéntanos qué necesitas…" required aria-required="true"></textarea>
              <span class="form-error" id="err-message" role="alert" aria-live="polite"></span>
            </div>
            <button type="submit" class="btn btn--primary btn--lg btn--block" id="form-submit">
              <span id="btn-text">Enviar mensaje</span>
              <span id="btn-loading" hidden aria-hidden="true">
                <svg viewBox="0 0 20 20" fill="none" class="spin"><circle cx="10" cy="10" r="8" stroke="currentColor" stroke-width="2" opacity=".3"/><path d="M10 2a8 8 0 018 8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
                Enviando…
              </span>
            </button>
            <div id="form-success" class="form-success" hidden role="status" aria-live="polite">
              ✅ ¡Mensaje enviado! Te contactaremos pronto.
            </div>
          </form>
        </div>
      </div>
    </section>`;
  },

  /* ─── FOOTER ─── */
  renderFooter(brand, sitemap, contact) {
    const year = new Date().getFullYear();
    return `
    <footer class="footer" role="contentinfo">
      <div class="container footer__inner">
        <!-- Brand column -->
        <div class="footer__brand">
          <a href="#inicio" class="header__logo" aria-label="${brand.name}">
            ${brand.logo.image ? `
              <img src="${brand.logo.image}" alt="${brand.name}" class="footer__logo-img" />
            ` : `
            <span class="logo-mark">
              <svg viewBox="0 0 36 36" fill="none" aria-hidden="true">
                <circle cx="18" cy="18" r="17" stroke="var(--accent)" stroke-width="1.8"/>
                <circle cx="18" cy="18" r="11" stroke="var(--accent)" stroke-width="1.8"/>
                <circle cx="18" cy="18" r="5"  stroke="var(--accent)" stroke-width="1.8"/>
                <circle cx="18" cy="18" r="2"  fill="var(--accent)"/>
                <path d="M18 1 A17 17 0 0 1 35 18" stroke="var(--accent)" stroke-width="3" stroke-linecap="round"/>
                <path d="M18 7 A11 11 0 0 1 29 18" stroke="var(--accent)" stroke-width="2.5" stroke-linecap="round"/>
              </svg>
            </span>
            `}
            <span class="logo-text">${brand.logo.text}</span>
          </a>
          <p>${brand.description} · ${brand.tagline}</p>
          <div class="footer__social" aria-label="Redes sociales">
            ${contact.social.map(s => `
              <a href="${s.href}" class="social-btn social-btn--sm" aria-label="${s.name}" rel="noopener noreferrer">${s.icon}</a>
            `).join("")}
          </div>
        </div>

        <!-- Nav columns -->
        <nav class="footer__nav" aria-label="Mapa del sitio">
          <div class="footer__col">
            <h4>Navegación</h4>
            <ul role="list">
              ${sitemap.primary.map(l => `<li><a href="${l.href}">${l.label}</a></li>`).join("")}
            </ul>
          </div>
          <div class="footer__col">
            <h4>Servicios</h4>
            <ul role="list">
              ${sitemap.services.map(l => `<li><a href="${l.href}">${l.label}</a></li>`).join("")}
            </ul>
          </div>
          <div class="footer__col">
            <h4>Legal</h4>
            <ul role="list">
              ${sitemap.legal.map(l => `<li><a href="${l.href}">${l.label}</a></li>`).join("")}
            </ul>
          </div>
        </nav>
      </div>

      <!-- Bottom bar -->
      <div class="footer__bottom">
        <div class="container">
          <p>© ${year} ${brand.name}. Todos los derechos reservados. Vigilado por Superintendencia de Compañías, Valores y Seguros (SCVS).</p>
          <p class="footer__reg"> Agencia Asesora Productora de Seguros · RUC 1792783933001</p>
        </div>
      </div>
    </footer>`;
  },

  /* ─── SITEMAP PAGE (standalone visual) ─── */
  renderSitemap(brand, sitemap) {
    return `
    <section class="sitemap-visual section" id="sitemap" aria-labelledby="sitemap-heading">
      <div class="container">
        <div class="section-header reveal">
          <span class="eyebrow">Mapa del sitio</span>
          <h2 id="sitemap-heading">Navegación de ${brand.name}</h2>
        </div>
        <div class="sitemap__tree reveal">
          <div class="smt-root">
            <div class="smt-node smt-node--root">${brand.name}</div>
          </div>
          <div class="smt-branches">
            ${sitemap.primary.map(page => `
              <div class="smt-branch">
                <div class="smt-node smt-node--primary">
                  <a href="${page.href}">${page.label}</a>
                  <small>${page.desc}</small>
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      </div>
    </section>`;
  },

};

export default Views;
