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
            ${nav.map(item => item.dropdown ? `
              <li class="nav-item--dropdown">
                <a href="${item.href}" class="nav-link nav-link--dropdown" aria-haspopup="true">
                  ${item.label}
                  <svg class="nav-caret" viewBox="0 0 10 6" fill="none" aria-hidden="true"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
                </a>
                <div class="nav-submenu" role="menu">
                  ${item.dropdown.map(sub => `
                    <a href="${sub.href}" class="nav-submenu__item" role="menuitem">
                      <span class="nav-submenu__icon" aria-hidden="true">${sub.icon}</span>
                      <span class="nav-submenu__label">${sub.label}</span>
                    </a>
                  `).join("")}
                </div>
              </li>
            ` : `
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
          ${nav.map(item => item.dropdown ? `
            <li>
              <span class="mobile-link mobile-link--group">${item.label}</span>
              <ul class="mobile-submenu" role="list">
                ${item.dropdown.map(sub => `
                  <li><a href="${sub.href}" class="mobile-link mobile-link--sub">${sub.icon} ${sub.label}</a></li>
                `).join("")}
              </ul>
            </li>
          ` : `
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
      <!-- Photo background with overlay -->
      <div class="hero__bg" aria-hidden="true">
        <img src="assets/equipo-hero.jpg" alt="" class="hero__bg-img" loading="eager" fetchpriority="high" decoding="async">
        <div class="hero__overlay"></div>
      </div>

      <div class="container hero__inner hero__inner--full">
        <div class="hero__content reveal">
          <!-- SPIDER RADIAL MENU replacing the two buttons -->
          <div class="spider-menu-wrap" aria-label="Menú de servicios radial">
            <div class="spider-scene" id="spiderScene">
              <div class="spider-orbit-ring spider-orbit-ring--1"></div>
              <div class="spider-orbit-ring spider-orbit-ring--2"></div>
              <svg class="spider-svg" id="spiderSvg" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"></svg>
              <!-- CENTER BUTTON -->
            <button class="spider-center" id="spiderCenter" aria-label="Abrir menú de servicios" aria-expanded="false">
  <img class="spider-center__img" src="assets/sello-smartbroker.png" alt="SmartBroker" />
  <span class="spider-center__pulse"></span>
</button>
              <div class="spider-nodes" id="spiderNodes"></div>
            </div>
            <p class="spider-hint" id="spiderHint">Pasa el cursor o haz clic para explorar nuestros servicios</p>
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
              <a href="${s.href}" class="social-btn ${s.cls || ''}" role="listitem" aria-label="${s.name}" rel="noopener noreferrer">
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
              <input type="tel" id="cf-phone" name="phone" placeholder="+593 00 000 0000" autocomplete="tel"/>
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
            <span class="logo-text">${brand.logo.text}</span>
            `}
          </a>
          <p>${brand.description} · ${brand.tagline}</p>
          <div class="footer__social" aria-label="Redes sociales">
            ${contact.social.map(s => `
              <a href="${s.href}" class="social-btn social-btn--sm ${s.cls || ''}" aria-label="${s.name}" rel="noopener noreferrer">${s.icon}</a>
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
              ${sitemap.legal.map(l => l.label === "Tratamiento de datos"
                ? `<li><a href="#" class="modal-trigger" data-modal="data-policy" aria-haspopup="dialog">${l.label}</a></li>`
                : `<li><a href="${l.href}">${l.label}</a></li>`
              ).join("")}
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

  /* ─── MODAL: POLÍTICA DE TRATAMIENTO DE DATOS ─── */
  renderDataModal() {
    return `
    <div class="modal-backdrop" id="modal-data-policy" role="dialog" aria-modal="true" aria-labelledby="modal-title" aria-describedby="modal-body" hidden>
      <div class="modal">
        <!-- Header -->
        <div class="modal__header">
          <div class="modal__header-left">
            <div class="modal__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </div>
            <div>
              <div class="modal__title" id="modal-title">Política de Protección de Datos Personales</div>
              <div class="modal__subtitle">SMARTBROKER CIA LTDA. · RUC 1792783933001</div>
            </div>
          </div>
          <button class="modal__close" id="modal-close-top" aria-label="Cerrar política de datos">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
          </button>
        </div>

        <!-- Body -->
        <div class="modal__body" id="modal-body">

          <div class="modal-meta">
            <strong>Responsable del Tratamiento</strong>
            SMARTBROKER CIA LTDA. · Gaspar de Escalona N38-39 y Av. Juan José, Edificio Mayfair, 2do piso · yordonez@smartbroker.com.ec
          </div>

          <p class="modal-section-title">1. Antecedentes</p>
          <p>SMARTBROKER CIA LTDA. reconoce la importancia de la protección de los datos personales y manifiesta su compromiso de garantizar el tratamiento lícito, leal, transparente, limitado y seguro de los mismos, en cumplimiento de la Ley Orgánica de Protección de Datos Personales (LOPDP) y su normativa complementaria.</p>

          <p class="modal-section-title">2. Objeto</p>
          <p>Establecer los principios, reglas, responsabilidades, procedimientos y medidas técnicas y organizativas que regulan el tratamiento de datos personales efectuado por la Empresa, así como las condiciones para el ejercicio de los derechos de los titulares, aplicándose a todos los procesos descritos en el anexo de procesos de la Empresa.</p>

          <p class="modal-section-title">3. Responsable</p>
          <div class="modal-meta">
            <strong>Datos del Responsable</strong>
            Razón social: SMARTBROKER CIA LTDA. · RUC: 1792783933001<br>
            Dirección: Gaspar de Escalona N38-39 y Av. Juan José, Edificio Mayfair, 2do piso<br>
            Correo electrónico: yordonez@smartbroker.com.ec
          </div>

          <p class="modal-section-title">4. Delegado de Protección de Datos</p>
          <div class="modal-meta">
            <strong>Delegado DPO</strong>
            Luis Villarroel · Correo: info@abogadoslatam.com
          </div>
          <p>El Delegado funge como canal de comunicación entre los titulares y la Empresa, y supervisa el cumplimiento de la presente política y de la normativa aplicable.</p>

          <p class="modal-section-title">5. Marco Legal</p>
          <p>La presente política se basa en la LOPDP y su reglamentación aplicable, así como en las demás disposiciones legales relacionadas con la protección de datos personales, la privacidad, la seguridad de la información y la actividad aseguradora en Ecuador.</p>

          <div class="modal-divider"></div>

          <p class="modal-section-title">6. Definiciones</p>
          <ul>
            <li><strong>Datos personales:</strong> toda información concerniente a una persona natural identificada o identificable.</li>
            <li><strong>Datos sensibles:</strong> datos que afectan la intimidad o cuya utilización indebida puede generar discriminación, incluyendo datos de salud.</li>
            <li><strong>Titular:</strong> la persona natural cuyos datos personales son objeto de tratamiento.</li>
            <li><strong>Responsable del tratamiento:</strong> persona que decide sobre la finalidad y los medios del tratamiento.</li>
            <li><strong>Encargado del tratamiento:</strong> persona que realiza el tratamiento por cuenta del responsable.</li>
            <li><strong>Consentimiento:</strong> manifestación de voluntad libre, específica, informada e inequívoca mediante la cual el titular autoriza el tratamiento.</li>
          </ul>

          <p class="modal-section-title">7. Obtención de Datos</p>
          <p>La Empresa obtiene datos personales directamente del titular mediante formularios web, campañas en redes sociales, solicitudes de cotización, contratos, comunicaciones electrónicas, documentación aportada por el titular, o por medios físicos y digitales razonablemente idóneos.</p>
          <p>En tratamientos que requieran consentimiento, la Empresa lo recaba de forma libre, específica, informada y verificable, antes de iniciar el tratamiento.</p>

          <p class="modal-section-title">8. Categorías de Datos</p>
          <ul>
            <li><strong>a) Identificación:</strong> nombre y apellidos, cédula, número de identificación.</li>
            <li><strong>b) Contacto:</strong> dirección postal, correo electrónico, número de teléfono.</li>
            <li><strong>c) Financieros y contractuales:</strong> información bancaria, datos de facturación, datos contractuales.</li>
            <li><strong>d) Bien asegurado:</strong> matrícula, factura, características técnicas del bien.</li>
            <li><strong>e) Salud (sensibles):</strong> preexistencias, historias clínicas, certificados médicos, recetas y facturas médicas — únicamente en pólizas médicas y siniestros médicos.</li>
            <li><strong>f) Videovigilancia:</strong> grabaciones de video (sin audio) en áreas comunes y accesos.</li>
            <li><strong>g) Datos laborales:</strong> información de personal interno, freelancers y proveedores (identificación, contacto, contractuales y financieros).</li>
          </ul>

          <div class="modal-divider"></div>

          <p class="modal-section-title">9. Base Legal del Tratamiento</p>
          <ul>
            <li><strong>a) Consentimiento</strong> (Art. 7 núm. 1 LOPDP): para tratamientos con autorización expresa, especialmente datos sensibles y campañas de captación.</li>
            <li><strong>b) Obligaciones legales</strong> (Art. 7 núm. 2 LOPDP): materia laboral, tributaria y de seguridad social.</li>
            <li><strong>c) Ejecución contractual</strong> (Art. 7 núm. 5 LOPDP): gestión de cotizaciones, emisión y administración de pólizas y siniestros.</li>
            <li><strong>d) Interés legítimo</strong> (Art. 7 núm. 8 LOPDP): instalación y gestión de sistemas de videovigilancia para seguridad física.</li>
          </ul>

          <p class="modal-section-title">10. Finalidades</p>
          <ul>
            <li><strong>a) Marketing y Captación Digital:</strong> captar potenciales clientes y realizar acciones de seguimiento y remarketing.</li>
            <li><strong>b) Cotización de Seguros:</strong> elaborar cotizaciones, analizar riesgo y remitir propuestas comerciales.</li>
            <li><strong>c) Pólizas Médicas y Siniestros Médicos:</strong> gestionar información médica para emisión de pólizas de salud, con consentimiento expreso previo.</li>
            <li><strong>d) Pólizas No Médicas y Siniestros:</strong> emitir pólizas, gestionar siniestros, renovaciones y cumplir obligaciones contractuales.</li>
            <li><strong>e) Personal, Freelancers y Proveedores:</strong> administrar relaciones laborales y contractuales, procesar pagos y cumplir obligaciones legales.</li>
            <li><strong>f) Videovigilancia:</strong> garantizar seguridad física y control de accesos en las instalaciones.</li>
            <li><strong>g) Fines administrativos y normativos:</strong> conservación de registros para cumplimiento legal y regulatorio.</li>
          </ul>

          <div class="modal-divider"></div>

          <p class="modal-section-title">11. Plazos de Conservación</p>
          <ul>
            <li><strong>Marketing y captación:</strong> máximo 2 años desde la última interacción válida o hasta revocación del consentimiento.</li>
            <li><strong>Cotizaciones no convertidas:</strong> 3 años desde la prestación del servicio o última relación.</li>
            <li><strong>Pólizas médicas y siniestros (datos sensibles):</strong> 10 años desde la terminación de la relación contractual o cierre del caso.</li>
            <li><strong>Pólizas no médicas y siniestros:</strong> 7 años desde la terminación de la relación contractual.</li>
            <li><strong>Personal, freelancers y proveedores:</strong> 7 años desde la terminación de la relación laboral o comercial.</li>
            <li><strong>Videovigilancia:</strong> 7 días naturales desde la captura; se sobrescribe automáticamente salvo incidente o requerimiento legal.</li>
          </ul>

          <p class="modal-section-title">12. Transferencias</p>
          <p>La Empresa podrá realizar transferencias de datos únicamente cuando exista base legal y se garantice un nivel de protección adecuado:</p>
          <ul>
            <li>A aseguradoras, reaseguradoras y proveedores vinculados a la gestión de pólizas y siniestros, mediante contratos con cláusulas de protección de datos.</li>
            <li>Datos sensibles de salud únicamente con consentimiento expreso del titular.</li>
            <li>Por requerimiento de autoridad competente o imperativo legal.</li>
            <li>Transferencias internacionales sujetas a garantías adecuadas (cláusulas contractuales tipo u otros mecanismos válidos).</li>
          </ul>

          <div class="modal-divider"></div>

          <p class="modal-section-title">13. Derechos de los Titulares</p>
          <p>Los titulares podrán ejercer los derechos reconocidos en la LOPDP: acceso, rectificación, supresión (cancelación), oposición, y demás previstos por la normativa aplicable. La Empresa facilitará su ejercicio mediante procedimientos ágiles, transparentes y gratuitos.</p>

          <p class="modal-section-title">14. Procedimiento ARCO</p>
          <p>Para ejercer sus derechos ARCO (Acceso, Rectificación, Cancelación/Supresión y Oposición), los titulares deberán presentar solicitud al Delegado de Protección de Datos mediante comunicación escrita o electrónica a <strong>info@abogadoslatam.com</strong> o a <strong>yordonez@smartbroker.com.ec</strong>, aportando documentación que acredite su identidad.</p>

          <p class="modal-section-title">15. Seguridad</p>
          <p>La Empresa adopta medidas técnicas y organizativas para garantizar un nivel de seguridad adecuado:</p>
          <ul>
            <li>Protección perimetral de sistemas, antivirus actualizados y gestión de parches.</li>
            <li>Autenticación mediante credenciales y políticas de contraseñas.</li>
            <li>Control de accesos físicos y lógicos basados en roles y principio de mínimo privilegio.</li>
            <li>Encriptación de información sensible en tránsito y en reposo.</li>
            <li>Contratos con encargados del tratamiento con obligaciones de seguridad y confidencialidad.</li>
            <li>Planes de continuidad del negocio y respuesta ante incidentes.</li>
          </ul>

          <p class="modal-section-title">16. Cookies</p>
          <p>En los sitios web y formularios de la Empresa se podrán utilizar cookies y tecnologías similares para finalidades técnicas, analíticas y de marketing. La instalación de cookies no estrictamente necesarias requerirá consentimiento previo y explícito del titular.</p>

          <div class="modal-divider"></div>

          <p class="modal-section-title">17. Contacto</p>
          <div class="modal-meta">
            <strong>Datos de Contacto</strong>
            SMARTBROKER CIA LTDA. · Gaspar de Escalona N38-39 y Av. Juan José, Edificio Mayfair, 2do piso<br>
            Correo: yordonez@smartbroker.com.ec<br>
            Delegado DPO: Luis Villarroel · info@abogadoslatam.com
          </div>

          <p class="modal-section-title">18. Vigencia</p>
          <p>La presente Política entra en vigencia a partir de su aprobación por la Dirección de SMARTBROKER CIA LTDA. y permanecerá vigente hasta que sea modificada. La revisión se realizará, como mínimo, de forma anual o cuando las circunstancias lo ameriten.</p>

          <p style="margin-top: var(--sp-3); font-size:0.78rem; color: var(--color-muted); text-align:center;">Aprobada por la Dirección de SMARTBROKER CIA LTDA.</p>
        </div>

        <!-- Footer -->
        <div class="modal__footer">
          <p class="modal__footer-note">Al hacer clic en <strong>Aceptar</strong> confirmas que has leído y comprendido nuestra Política de Protección de Datos.</p>
          <div class="modal__footer-actions">
            <button class="btn btn--ghost modal-close-btn" id="modal-close-bottom" aria-label="Cerrar sin aceptar">Cerrar</button>
            <button class="btn btn--primary modal-accept-btn" id="modal-accept" aria-label="Aceptar política de datos">
              <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" style="width:16px;height:16px"><path d="M4 10l4 4 8-8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
              Aceptar
            </button>
          </div>
        </div>
      </div>
    </div>`;
  },

};

export default Views;
