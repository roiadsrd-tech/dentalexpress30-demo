import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, MapPin, Phone, Clock, ChevronDown, MessageCircle, Menu, X } from 'lucide-react';
import { TechnicalSchematic, BespokeServiceIcon } from './components/BrandVisuals';

const DATA = {
  "handle": "dentalexpress30",
  "businessName": "Dental Express",
  "legalOrFullTitle": "Dental Express - Servicios Odontológicos",
  "tagline": "Servicios odontológicos integrales",
  "industry": "clinics-health",
  "followersEstimate": "",
  "hasWebsite": false,
  "leadScore": 50,
  "dossier": {
    "verifiedFacts": [
      {
        "label": "Nombre en Perfil",
        "value": "Dental Express",
        "source": "instagram_bio"
      },
      {
        "label": "Especialidades Declaradas",
        "value": "Servicios odontológicos",
        "source": "instagram_bio"
      },
      {
        "label": "Sectores / Ubicaciones Detectadas",
        "value": "No especificado",
        "source": "instagram_locations"
      },
      {
        "label": "Materiales o Detalles Técnicos Detectados",
        "value": "No especificado",
        "source": "instagram_captions"
      }
    ],
    "detectedLocations": [],
    "detectedMaterials": [],
    "detectedProjectsFromCaptions": [],
    "missingFields": [
      "Dirección exacta de oficina",
      "Correo electrónico",
      "Horario de atención",
      "Teléfono directo",
      "WhatsApp de contacto",
      "Sitio web oficial"
    ]
  },
  "specialist": {
    "name": "Dirección Clínica · Dental Express",
    "role": "Servicios Odontológicos",
    "bioParagraph1": "Dental Express es una entidad dedicada a la prestación de servicios de salud bucal. Enfocados en la atención al paciente, buscan ofrecer soluciones odontológicas integrales para mejorar la salud y estética dental.",
    "bioParagraph2": "La práctica se centra en la atención profesional y el cuidado de la salud oral, manteniendo estándares de servicio clínico para la comunidad.",
    "quote": "Comprometidos con tu salud bucal.",
    "credentials": [
      "Servicios Odontológicos",
      "Atención Clínica",
      "República Dominicana"
    ]
  },
  "stats": [],
  "contact": {
    "address": "República Dominicana",
    "sector": "",
    "city": "Santo Domingo, República Dominicana",
    "email": "",
    "phoneDisplay": "",
    "secondaryPhone": "",
    "whatsappNumber": "",
    "whatsappPrefill": "Hola, vi el perfil de Dental Express y me gustaría consultar sobre sus servicios odontológicos.",
    "instagramUrl": "https://www.instagram.com/dentalexpress30/",
    "facebookUrl": "",
    "hours": "",
    "mapQuery": "Santo Domingo Republica Dominicana"
  },
  "hero": {
    "kicker": "Salud Bucal · Odontología",
    "headlinePart1": "Tu sonrisa en manos",
    "headlineAccent": "profesionales",
    "headlinePart2": "",
    "subtitle": "Servicios odontológicos integrales orientados a la salud y bienestar de tu sonrisa en República Dominicana.",
    "primaryCta": "Contactar clínica",
    "secondaryCta": "Explorar servicios",
    "locationStamp": "SANTO DOMINGO, R.D.",
    "heroSlides": []
  },
  "manifesto": {
    "kicker": "filosofía clínica",
    "quotePart1": "La salud bucal es el pilar de",
    "quoteItalic": "tu bienestar",
    "body": "Abordamos cada caso con un enfoque clínico riguroso, priorizando la salud del paciente y la excelencia en cada procedimiento realizado.",
    "ctaText": "Explorar servicios",
    "ctaServiceSlug": "servicios-odontologicos",
    "photo": ""
  },
  "dataSheet": {
    "projectName": "Dental Express",
    "location": "República Dominicana",
    "area": "Clínica Dental",
    "typology": [
      "Odontología General",
      "Salud Bucal"
    ],
    "scope": "Atención Clínica",
    "materials": [
      "Instrumental médico",
      "Materiales dentales"
    ]
  },
  "services": [
    {
      "slug": "servicios-odontologicos",
      "number": "01",
      "title": "Servicios Odontológicos",
      "kicker": "atención clínica",
      "heroTitlePart1": "CUIDADO INTEGRAL DE",
      "heroTitleItalic": "tu sonrisa",
      "patientQuote": "Busco una atención profesional para mi salud dental.",
      "description": "Servicios enfocados en el diagnóstico, prevención y tratamiento de afecciones bucodentales.",
      "challengeTitle": "El enfoque en",
      "challengeItalic": "la salud",
      "challengeParagraph1": "Resolvemos necesidades de salud oral mediante procedimientos clínicos estandarizados.",
      "challengeParagraph2": "Nuestro equipo se dedica a brindar una atención personalizada y segura para cada paciente.",
      "features": [
        {
          "title": "Diagnóstico",
          "desc": "Evaluación profesional de la salud oral."
        },
        {
          "title": "Prevención",
          "desc": "Tratamientos orientados al mantenimiento dental."
        },
        {
          "title": "Tratamiento",
          "desc": "Procedimientos clínicos para restaurar la salud."
        }
      ],
      "deliverable": "Salud bucal óptima",
      "imageCategory": "servicios-odontologicos",
      "photos": []
    }
  ],
  "cases": [],
  "process": [
    {
      "step": "01",
      "title": "Evaluación",
      "desc": "Diagnóstico inicial del paciente."
    },
    {
      "step": "02",
      "title": "Plan de Tratamiento",
      "desc": "Definición de los pasos a seguir."
    },
    {
      "step": "03",
      "title": "Ejecución",
      "desc": "Realización del procedimiento clínico."
    }
  ],
  "testimonials": [],
  "faqs": [
    {
      "q": "¿Qué servicios ofrecen?",
      "a": "Ofrecemos servicios odontológicos integrales para el cuidado de su salud bucal."
    }
  ],
  "humanQuestions": [
    {
      "id": "whatsapp_number",
      "field": "contact.whatsappNumber",
      "label": "WhatsApp directo (no estaba público en la bio)",
      "question": "En el perfil de Instagram no aparece un link directo a WhatsApp. Si lo tienes, escríbelo aquí (si lo dejas vacío, los botones abrirán su Instagram oficial)."
    }
  ],
  "brand": {
    "aestheticName": "Surgical Cyan & Digital Smile Monolith",
    "themeMode": "light",
    "pairingId": "spacegrotesk-dmsans",
    "fontDisplay": "Space Grotesk",
    "fontSans": "DM Sans",
    "fontMono": "JetBrains Mono",
    "googleFontsUrl": "https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300..700;1,9..40,400&family=JetBrains+Mono:wght@400;500&family=Space+Grotesk:wght@400;500;600;700&display=swap",
    "heroArchetype": "technical-dossier-grid",
    "logoAnalysis": {
      "dominantBgHex": "#FFFFFF",
      "primaryMarkHex": "#0EA5E9",
      "secondaryAccentHex": "#0284C7",
      "geometryStyle": "technical-emblem",
      "strokeWeight": "1.5px",
      "cornerRadius": "12px",
      "motifDescription": "Emblema limpio y tecnológico con trazos curvos anatómicos en azul cian clínico y tipografía sans-serif de precisión sobre fondo blanco puro.",
      "iconDesignRule": "Trazo lineal vectorial de 1.5px en tono cian radiante con esquinas suavizadas de 4px, combinando precisión técnica odontológica con estética quirúrgica minimalista."
    },
    "palette": {
      "themeMode": "light",
      "bgPrimary": "#F8FAFC",
      "bgSecondary": "#FFFFFF",
      "bgContrast": "#0F4C5C",
      "bgWarm": "#F8FAFC",
      "bgDark": "#0F4C5C",
      "textPrimary": "#0F172A",
      "textDark": "#0F172A",
      "textMuted": "#64748B",
      "textLight": "#FFFFFF",
      "textOnContrast": "#FFFFFF",
      "accent": "#0EA5E9",
      "accentHover": "#0284C7",
      "accentSoft": "#E0F2FE",
      "goldAccent": "#38BDF8",
      "borderHairline": "rgba(20, 22, 25, 0.11)"
    },
    "customVisualConcept": {
      "schematicType": "dental-3d-anatomy",
      "title": "Mapeo Biomecánico y Diseño de Sonrisa 3D",
      "subtitle": "Esquema digital de alta precisión para diagnóstico oclusal, estética dental y cirugía guiada",
      "annotations": [
        "Escaneo Intraoral 3D HD",
        "Eje de Simetría Facial & Oclusal",
        "Análisis de Margen Gingival",
        "Tolerancia Micrométrica < 0.01mm"
      ]
    },
    "sectionRhythm": [
      "Hero en retícula técnica con insignias flotantes de pacientes atendidos, métricas de experiencia y llamada a la acción en cian quirúrgico.",
      "Banda continua de marcas e institutos de salud afiliados sobre fondo gris neutro minimalista.",
      "Módulo interactivo de diagnóstico visual con el diagrama de mapeo biomecánico 3D y especificaciones de tratamientos integrales.",
      "Galería editorial de casos clínicos antes/después con tarjetas flotantes de micro-detalles y testimonios vericados.",
      "Panel de cierre en contraste azul marino profundo (bgContrast) para agenda de citas directas y ubicación de sucursales."
    ],
    "inspirationRefs": [
      "/inspiration/clinics-health/h7.jpg",
      "/inspiration/clinics-health/h8.jpg",
      "/inspiration/clinics-health/h9.jpg",
      "/inspiration/clinics-health/h10.jpg"
    ]
  },
  "templateId": "health-minimal",
  "photoCatalog": [],
  "websiteUrl": "",
  "blueprint": {
    "architectureMode": "single-page",
    "architectureReason": "El estudio concentra su oferta en una disciplina principal. Se estructura como una experiencia editorial continua sin subpáginas vacías.",
    "heroMode": "typographic",
    "heroCandidates": [],
    "discardedPhotosCount": 0,
    "discardedPhotos": [],
    "activeSections": [
      {
        "id": "hero",
        "title": "Portada Editorial (Hero)",
        "included": true,
        "why": "Usa composición tipográfica arquitectónica porque no hay fotografías de alta resolución aptas para portada."
      },
      {
        "id": "services",
        "title": "Índice de Servicios Reales (1)",
        "included": true,
        "why": "1 categorías deducidas directamente de su biografía, highlights y portafolio fotográfico."
      },
      {
        "id": "about",
        "title": "Manifiesto y Perfil del Estudio",
        "included": true,
        "why": "Presenta el enfoque del estudio sin contadores numéricos inventados."
      },
      {
        "id": "process",
        "title": "Metodología de Trabajo",
        "included": true,
        "why": "Explica los pasos reales de trabajo desde el levantamiento hasta la entrega."
      },
      {
        "id": "faq",
        "title": "Preguntas Frecuentes",
        "included": true,
        "why": "Resuelve dudas operativas reales antes de pasar a WhatsApp."
      },
      {
        "id": "contact",
        "title": "Contacto Directo & Pie Editorial",
        "included": true,
        "why": "Enlace directo al Instagram oficial de la marca (pendiente confirmar número de WhatsApp)."
      }
    ],
    "omittedSections": [
      {
        "id": "projects",
        "title": "Obras y Proyectos Reales (0)",
        "included": false,
        "why": "Se omite porque no hay suficientes fotografías de proyectos terminados."
      },
      {
        "id": "testimonials",
        "title": "Testimonios de Clientes",
        "included": false,
        "why": "Omitido automáticamente: no se inventan reseñas falsas cuando no existen testimonios públicos verificables."
      }
    ]
  }
};
const MEDIA = {
  "heroMain": "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1400&q=85&fm=webp",
  "heroDetail": "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=85&fm=webp",
  "specialist": "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1200&q=85&fm=webp",
  "services": [
    "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1200&q=85&fm=webp",
    "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1200&q=85&fm=webp",
    "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=85&fm=webp",
    "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=85&fm=webp"
  ],
  "beforeImg": "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1200&q=80&fm=webp",
  "afterImg": "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=85&fm=webp",
  "gallery": [
    "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1100&q=85&fm=webp",
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1100&q=85&fm=webp",
    "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1100&q=85&fm=webp"
  ]
};
const IS_HEALTH = true;

export default function App() {
  const [activeService, setActiveService] = useState(0);
  const [sliderPos, setSliderPos] = useState(52);
  const [openFaq, setOpenFaq] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const waNumber = DATA.contact?.whatsappNumber || '';
  const waUrl = waNumber
    ? `https://wa.me/${waNumber}?text=${encodeURIComponent(DATA.contact?.whatsappPrefill || '')}`
    : (DATA.contact?.instagramUrl || '#');

  const handleSliderMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const pct = Math.max(8, Math.min(92, ((clientX - rect.left) / rect.width) * 100));
    setSliderPos(pct);
  };

  return (
    <div>
      {/* NAVBAR FIJO EDITORIAL */}
      <header className="site-navbar">
        <div className="container nav-inner">
          <a href="#" className="brand-mark" style={{ display: 'flex', alignItems: 'center', gap: '14px', flexDirection: 'row' }}>
            
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span className="brand-name">{DATA.businessName}</span>
              <span className="brand-sub">{DATA.tagline}</span>
            </div>
          </a>

          <nav className="nav-links">
            <a href="#especialidades">Especialidades</a>
            <a href="#casos">Resultados</a>
            <a href="#especialista">{(DATA.specialist?.name || DATA.businessName || '').split(' ').slice(0, 2).join(' ')}</a>
            <a href="#ubicacion">Ubicación</a>
          </nav>

          <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-brand nav-cta-btn" style={{ padding: '12px 24px', fontSize: '0.92rem' }}>
            Agendar Cita <ArrowUpRight size={17} />
          </a>

          <button
            type="button"
            className="mobile-menu-btn"
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <a href="#especialidades" onClick={() => setMobileMenuOpen(false)}>Especialidades</a>
          <a href="#casos" onClick={() => setMobileMenuOpen(false)}>Resultados</a>
          <a href="#especialista" onClick={() => setMobileMenuOpen(false)}>{(DATA.specialist?.name || DATA.businessName || '').split(' ').slice(0, 2).join(' ')}</a>
          <a href="#ubicacion" onClick={() => setMobileMenuOpen(false)}>Ubicación</a>
          <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-brand" style={{ width: '100%', marginTop: '6px' }} onClick={() => setMobileMenuOpen(false)}>
            Agendar Cita <ArrowUpRight size={17} />
          </a>
        </div>
      )}

      {/* 1. HERO EDITORIAL ASIMÉTRICO */}
      <section className="hero-section">
        <div className="container hero-grid">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="hero-title">
              {DATA.hero?.headlinePart1 || DATA.businessName}{' '}
              <span className="hero-title-accent">{DATA.hero?.headlineAccent || ''}</span>{' '}
              {DATA.hero?.headlinePart2 || ''}
            </h1>

            <p className="hero-subtitle">{DATA.hero?.subtitle || DATA.tagline}</p>

            <div className="hero-actions">
              <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-brand">
                {DATA.hero?.primaryCta || 'Agendar Cita'} <ArrowUpRight size={19} />
              </a>
              <a href="#especialidades" className="btn-outline-editorial">
                {DATA.hero?.secondaryCta || 'Especialidades'}
              </a>
            </div>

            <div className="hero-meta-row">
              <div>
                <div className="hero-stat-num">{DATA.hero?.highlightStatNumber || DATA.stats?.[0]?.num || ''}</div>
                <div className="hero-stat-label">{DATA.hero?.highlightStatLabel || DATA.stats?.[0]?.label || ''}</div>
              </div>
              <div style={{ borderLeft: '1px solid rgba(15,23,42,0.12)', paddingLeft: '28px' }}>
                <div style={{ fontWeight: 700, color: 'var(--text-dark)', fontSize: '1.02rem' }}>
                  {DATA.specialist?.name || DATA.businessName}
                </div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                  {DATA.contact?.sector || DATA.contact?.city || 'Santo Domingo'}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="hero-stage"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="hero-main-frame">
              <img src={MEDIA.heroMain} alt={DATA.businessName} />
            </div>
            <div className="hero-floating-photo">
              <img src={MEDIA.heroDetail} alt={DATA.tagline} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. FRANJA DE RESPALDO / SEGUROS MÉDICOS RD */}
      {(IS_HEALTH || (DATA.authorityStrip?.items || []).length > 0) && (
      <section className="authority-strip">
        <div className="container">
          <div className="authority-label">{DATA.authorityStrip?.title || (IS_HEALTH ? 'Aceptamos Seguros Médicos Nacionales e Internacionales' : 'Respaldo & Especialidades')}</div>
          <div className="marquee-track-wrap">
            <div className="marquee-track">
              {IS_HEALTH ? (
                [...Array(2)].map((_, idx) => (
                  <React.Fragment key={idx}>
                    <img src="/logos-seguros/Logohumano2016.webp" alt="ARS Humano" className="insurance-logo" />
                    <img src="/logos-seguros/Mapfre_Logo_2026-s1280.png" alt="Mapfre Salud" className="insurance-logo" />
                    <img src="/logos-seguros/ars_seguros_banreservas.d729df7.png" alt="Seguros Reservas" className="insurance-logo" />
                    <img src="/logos-seguros/logo-seguros-universal.svg" alt="Seguros Universal" className="insurance-logo" />
                    <img src="/logos-seguros/logo2022.webp" alt="SeNaSa" className="insurance-logo" />
                    <img src="/logos-seguros/Worldwide Medical.png" alt="Worldwide Medical" className="insurance-logo" />
                    <img src="/logos-seguros/logos-bmi-ecuador-02.png" alt="BMI" className="insurance-logo" />
                  </React.Fragment>
                ))
              ) : (
                [...(DATA.authorityStrip?.items || []), ...(DATA.authorityStrip?.items || [])].map((item, i) => (
                  <span key={i} style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 600, color: 'var(--text-dark)' }}>
                    {item}
                  </span>
                ))
              )}
            </div>
          </div>
        </div>
      </section>
      )}

      {/* 3. ÍNDICE EDITORIAL NUMERADO INTERACTIVO (CERO TARJETAS) */}
      <section id="especialidades" className="editorial-services-section">
        <div className="container">
          <div style={{ maxWidth: '680px' }}>
            <h2 style={{ fontSize: 'clamp(2.4rem, 4.4vw, 3.8rem)', color: 'var(--text-light)' }}>
              Especialidades diseñadas alrededor de lo que deseas lograr.
            </h2>
          </div>

          <div className="services-layout">
            <div>
              {(DATA.services || []).map((srv, idx) => {
                const isActive = activeService === idx;
                return (
                  <div
                    key={idx}
                    className={`service-row-item ${isActive ? 'active' : ''}`}
                    onMouseEnter={() => setActiveService(idx)}
                    onClick={() => setActiveService(idx)}
                  >
                    <div className="service-row-header">
                      <span className="service-num">{srv.number}</span>
                      <h3 className="service-title">{srv.title}</h3>
                      <ArrowUpRight size={22} color={isActive ? 'var(--accent)' : 'rgba(255,255,255,0.4)'} />
                    </div>

                    {isActive && (
                      <motion.div
                        className="service-expand"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div className="service-quote">“{srv.patientQuote || srv.description}”</div>
                        <p className="service-desc">{srv.description}</p>
                        <div className="service-meta-bar">
                          <span>Protocolo: <strong style={{ color: '#FFFFFF' }}>{srv.deliverable || 'Atención Especializada'}</strong></span>
                          <span>•</span>
                          <span>Tiempo: <strong style={{ color: '#FFFFFF' }}>{srv.duration || 'Previa Cita'}</strong></span>
                        </div>
                        <div style={{ marginTop: '10px' }}>
                          <a
                            href={waNumber ? `https://wa.me/${waNumber}?text=${encodeURIComponent('Hola, me interesa información sobre ' + srv.title)}` : (DATA.contact?.instagramUrl || '#')}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: 'var(--accent)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-ui)' }}
                          >
                            Consultar sobre {srv.title} por WhatsApp <ArrowUpRight size={16} />
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="service-visual-stage">
              <img
                src={MEDIA.services[activeService % MEDIA.services.length]}
                alt={(DATA.services || [])[activeService]?.title || DATA.businessName}
              />
              <div className="service-visual-caption">
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 600 }}>
                  {(DATA.services || [])[activeService]?.title}
                </div>
                <div style={{ fontSize: '0.95rem', opacity: 0.85, marginTop: '4px' }}>
                  {(DATA.services || [])[activeService]?.deliverable}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TRANSFORMACIÓN REAL & CASOS DESTACADOS */}
      <section id="casos" className="transformation-section">
        <div className="container trans-grid">
          <div>
            <div
              className="ba-slider-container"
              onMouseMove={handleSliderMove}
              onTouchMove={handleSliderMove}
            >
              <img src={MEDIA.afterImg} alt="Resultado final" className="ba-img" />
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  bottom: 0,
                  width: `${sliderPos}%`,
                  overflow: 'hidden'
                }}
              >
                <img
                  src={MEDIA.beforeImg}
                  alt="Estado inicial"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(0.75) brightness(0.92)' }}
                />
              </div>
              <div className="ba-divider" style={{ left: `${sliderPos}%` }}>
                <div className="ba-handle">↔</div>
              </div>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '14px', textAlign: 'center' }}>
              Desliza horizontalmente sobre la imagen para comparar el antes y el acabado estético.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: 'clamp(2.3rem, 4vw, 3.5rem)', color: 'var(--text-dark)', marginBottom: '20px' }}>
              Resultados que hablan por su proporción y naturalidad.
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.12rem' }}>
              Cada caso en {DATA.businessName} se planifica de forma individualizada, respetando la armonía y estructura propia de cada persona.
            </p>

            <div className="cases-editorial-list">
              {(DATA.cases || []).map((c, idx) => (
                <div key={idx} className="case-strip">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '6px' }}>
                    <h3 style={{ fontSize: '1.45rem', color: 'var(--text-dark)' }}>{c.title}</h3>
                    <span style={{ fontFamily: 'var(--font-ui)', fontSize: '0.86rem', color: 'var(--accent)', fontWeight: 600 }}>
                      {c.time}
                    </span>
                  </div>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem' }}>
                    <strong style={{ color: 'var(--text-dark)' }}>Diagnóstico:</strong> {c.challenge}{' '}
                    <strong style={{ color: 'var(--text-dark)' }}>Resultado:</strong> {c.solution}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. EL ESPECIALISTA / DIRECCIÓN CLÍNICA */}
      <section id="especialista" className="specialist-section">
        <div className="container specialist-grid">
          <div className="specialist-portrait">
            <img src={MEDIA.specialist} alt={DATA.specialist?.name || DATA.businessName} />
          </div>

          <div>
            <h2 style={{ fontSize: 'clamp(2.5rem, 4.4vw, 3.9rem)', color: 'var(--text-dark)', marginBottom: '12px' }}>
              {DATA.specialist?.name || DATA.businessName}
            </h2>
            <div style={{ fontFamily: 'var(--font-ui)', fontSize: '1.08rem', color: 'var(--accent)', fontWeight: 600, marginBottom: '28px' }}>
              {DATA.specialist?.role || ''}
            </div>

            <p style={{ color: 'var(--text-dark)', fontSize: '1.16rem', marginBottom: '20px', lineHeight: 1.68 }}>
              {DATA.specialist?.bioParagraph1 || ''}
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.08rem', lineHeight: 1.68 }}>
              {DATA.specialist?.bioParagraph2 || ''}
            </p>

            <div className="credentials-row">
              {(DATA.specialist?.credentials || []).map((cred, idx) => (
                <div key={idx} className="credential-item">
                  {cred}
                </div>
              ))}
            </div>

            <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-brand">
              Agendar Consulta con {(DATA.specialist?.name || DATA.businessName || '').split(' ').slice(0, 2).join(' ')} <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* 6. MOSAICO DE INSTALACIONES & PROCESO EN 4 ETAPAS */}
      <section className="experience-section">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '24px', marginBottom: '48px' }}>
            <h2 style={{ fontSize: 'clamp(2.3rem, 4vw, 3.5rem)', color: 'var(--text-dark)', maxWidth: '640px' }}>
              Un espacio pensado para tu calma desde que cruzas la puerta.
            </h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '420px' }}>
              Ubicados en {DATA.contact?.address || DATA.contact?.city || 'Santo Domingo'}, combinamos tecnología de última generación con un ambiente privado y relajado.
            </p>
          </div>

          <div className="mosaic-gallery">
            <div className="mosaic-item tall">
              <img src={MEDIA.gallery[0]} alt="Instalaciones principales" />
            </div>
            <div className="mosaic-item">
              <img src={MEDIA.gallery[1]} alt="Equipamiento especializado" />
            </div>
            <div className="mosaic-item">
              <img src={MEDIA.gallery[2]} alt="Detalle clínico" />
            </div>
          </div>

          <div style={{ margin: '48px 0' }}>
            <TechnicalSchematic />
          </div>

          <div className="process-horizontal">
            {(DATA.process || []).map((p, idx) => (
              <div key={idx}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <div className="process-col-num" style={{ marginBottom: 0 }}>{p.step}</div>
                  <BespokeServiceIcon index={idx} size={38} />
                </div>
                <h3 style={{ fontSize: '1.35rem', color: 'var(--text-dark)', marginBottom: '10px', fontFamily: 'var(--font-ui)', fontWeight: 700 }}>
                  {p.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem' }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. UBICACIÓN EN SANTO DOMINGO + FAQ + CONTACTO */}
      <section id="ubicacion" className="location-faq-section">
        <div className="container">
          <div className="location-split">
            <div>
              <h2 style={{ fontSize: 'clamp(2.4rem, 4.2vw, 3.6rem)', color: '#FFFFFF', marginBottom: '24px' }}>
                Visítanos en Santo Domingo o agenda tu evaluación hoy.
              </h2>

              <div style={{ display: 'grid', gap: '22px', margin: '36px 0' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <MapPin size={22} color="var(--accent)" style={{ flexShrink: 0, marginTop: '4px' }} />
                  <div>
                    <div style={{ fontWeight: 700, color: '#FFFFFF' }}>Dirección en Santo Domingo</div>
                    <div style={{ color: 'rgba(248,250,252,0.8)' }}>{DATA.contact?.address || DATA.contact?.city || 'Santo Domingo, RD'}</div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <Phone size={22} color="var(--accent)" style={{ flexShrink: 0, marginTop: '4px' }} />
                  <div>
                    <div style={{ fontWeight: 700, color: '#FFFFFF' }}>Líneas Directas & WhatsApp</div>
                    <div style={{ color: 'rgba(248,250,252,0.8)' }}>
                      {DATA.contact?.phoneDisplay || '@' + DATA.handle} {DATA.contact?.secondaryPhone ? ` / ${DATA.contact.secondaryPhone}` : ''}
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <Clock size={22} color="var(--accent)" style={{ flexShrink: 0, marginTop: '4px' }} />
                  <div>
                    <div style={{ fontWeight: 700, color: '#FFFFFF' }}>Horario de Atención</div>
                    <div style={{ color: 'rgba(248,250,252,0.8)' }}>{DATA.contact?.hours || 'Lunes a Sábado — Previa Cita'}</div>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-brand">
                  Escribir por WhatsApp Ahora <ArrowUpRight size={18} />
                </a>
                <a
                  href={DATA.contact?.instagramUrl || `https://www.instagram.com/${DATA.handle}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-editorial"
                  style={{ color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.28)' }}
                >
                  Ver Instagram @{DATA.handle}
                </a>
              </div>

              <div className="map-frame" style={{ marginTop: '40px' }}>
                <iframe
                  title="Ubicación en Santo Domingo"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(DATA.contact?.mapQuery || DATA.contact?.address || 'Santo Domingo')}&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                />
              </div>
            </div>

            <div>
              <h3 style={{ fontSize: '2rem', color: '#FFFFFF', marginBottom: '28px' }}>
                Preguntas Frecuentes
              </h3>
              <div>
                {(DATA.faqs || []).map((f, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div key={idx} className="faq-item-row" onClick={() => setOpenFaq(isOpen ? -1 : idx)}>
                      <div className="faq-question">
                        <span>{f.q}</span>
                        <ChevronDown
                          size={20}
                          style={{
                            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.25s ease',
                            color: 'var(--accent)'
                          }}
                        />
                      </div>
                      {isOpen && <div className="faq-answer">{f.a}</div>}
                    </div>
                  );
                })}
              </div>

              {/* Testimonios integrados sin tarjetas pesadas */}
              <div style={{ marginTop: '56px', paddingTop: '40px', borderTop: '1px solid rgba(255,255,255,0.14)' }}>
                <div style={{ fontFamily: 'var(--font-ui)', fontSize: '0.85rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '20px' }}>
                  LO QUE DICEN NUESTROS PACIENTES EN SANTO DOMINGO
                </div>
                {(DATA.testimonials || []).slice(0, 2).map((t, idx) => (
                  <blockquote key={idx} style={{ marginBottom: '24px' }}>
                    <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontStyle: 'italic', color: '#FFFFFF', lineHeight: 1.4 }}>
                      “{t.quote}”
                    </p>
                    <footer style={{ fontSize: '0.9rem', color: 'rgba(248,250,252,0.7)', marginTop: '6px' }}>
                      — {t.name} ({t.context})
                    </footer>
                  </blockquote>
                ))}
              </div>
            </div>
          </div>

          <footer style={{ paddingTop: '42px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', fontSize: '0.9rem', color: 'rgba(248,250,252,0.6)' }}>
            <div>© {new Date().getFullYear()} {DATA.businessName}. Todos los derechos reservados.</div>
            <div>{DATA.contact.address} • {DATA.contact.city}</div>
          </footer>
        </div>
      </section>

      {/* BOTÓN FLOTANTE DE WHATSAPP */}
      <a href={waUrl} target="_blank" rel="noopener noreferrer" className="whatsapp-float">
        <MessageCircle size={20} /> Agendar por WhatsApp
      </a>
    </div>
  );
}
