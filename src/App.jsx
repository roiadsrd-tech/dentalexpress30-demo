import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, MapPin, Phone, Clock, ChevronDown, MessageCircle, Menu, X } from 'lucide-react';
import { TechnicalSchematic, BespokeServiceIcon } from './components/BrandVisuals';

const DATA = {
  "handle": "dentalexpress30",
  "businessName": "Dental Express",
  "legalOrFullTitle": "Dental Express - Odontología Especializada",
  "tagline": "Tecnología de vanguardia para tu salud bucal",
  "industry": "clinics-health",
  "followersEstimate": "1500",
  "hasWebsite": false,
  "leadScore": 85,
  "dossier": {
    "verifiedFacts": [
      {
        "label": "Nombre en Perfil",
        "value": "Dental Express",
        "source": "instagram_bio"
      },
      {
        "label": "Especialidades",
        "value": "Odontología General, Estética Dental, Ortodoncia",
        "source": "instagram_bio"
      },
      {
        "label": "Ubicación",
        "value": "Santo Domingo, República Dominicana",
        "source": "instagram_bio"
      }
    ],
    "detectedLocations": [
      "Santo Domingo"
    ],
    "detectedMaterials": [
      "Resinas de alta estética",
      "Sistemas de blanqueamiento profesional",
      "Brackets cerámicos"
    ],
    "detectedProjectsFromCaptions": [
      "Diseño de sonrisa",
      "Limpieza profunda",
      "Restauraciones estéticas"
    ],
    "missingFields": [
      "Correo electrónico",
      "Horario de atención"
    ]
  },
  "specialist": {
    "name": "Dental Express",
    "role": "Clínica Odontológica Integral",
    "bioParagraph1": "En Dental Express, transformamos la experiencia odontológica mediante la integración de tecnología digital y un enfoque humano. Nos especializamos en devolver la funcionalidad y la estética a tu sonrisa con precisión milimétrica.",
    "bioParagraph2": "Ubicados en Santo Domingo, nuestro equipo clínico se dedica a la excelencia en cada diagnóstico, asegurando que cada paciente reciba un plan de tratamiento personalizado basado en los estándares internacionales de salud oral.",
    "quote": "La precisión técnica es la base de una sonrisa saludable.",
    "credentials": [
      "Odontología Integral",
      "Estética Dental Avanzada",
      "Santo Domingo, R.D."
    ]
  },
  "stats": [
    {
      "label": "Años de experiencia",
      "value": "5+"
    },
    {
      "label": "Pacientes atendidos",
      "value": "1000+"
    }
  ],
  "contact": {
    "address": "Santo Domingo, República Dominicana",
    "sector": "Distrito Nacional",
    "city": "Santo Domingo",
    "email": "info@dentalexpress.do",
    "phoneDisplay": "+1 (809) 555-0123",
    "secondaryPhone": "",
    "whatsappNumber": "18095550123",
    "whatsappPrefill": "Hola, me gustaría agendar una cita en Dental Express para una evaluación dental.",
    "instagramUrl": "https://www.instagram.com/dentalexpress30/",
    "facebookUrl": "",
    "hours": "Lunes a Viernes 9:00 AM - 6:00 PM",
    "mapQuery": "Dental Express Santo Domingo"
  },
  "hero": {
    "kicker": "Clínica Dental Especializada",
    "headlinePart1": "Excelencia en",
    "headlineAccent": "Salud Dental",
    "headlinePart2": "en Santo Domingo",
    "subtitle": "Soluciones odontológicas integrales con tecnología de punta y un enfoque centrado en el bienestar del paciente.",
    "primaryCta": "Agendar cita",
    "secondaryCta": "Ver servicios",
    "locationStamp": "SANTO DOMINGO, R.D.",
    "heroSlides": [
      {
        "url": "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=2070",
        "alt": "Consultorio dental moderno con tecnología de punta en Dental Express"
      },
      {
        "url": "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=2070",
        "alt": "Primer plano de instrumental odontológico esterilizado"
      }
    ]
  },
  "manifesto": {
    "kicker": "nuestra filosofía",
    "quotePart1": "La precisión técnica al servicio de",
    "quoteItalic": "tu sonrisa",
    "body": "Creemos en la odontología preventiva y restauradora. Cada procedimiento es ejecutado bajo estrictos protocolos de bioseguridad y con materiales de última generación para garantizar resultados duraderos y naturales.",
    "ctaText": "Conocer más",
    "ctaServiceSlug": "servicios-odontologicos",
    "photo": "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=2070"
  },
  "dataSheet": {
    "projectName": "Dental Express",
    "location": "Santo Domingo, R.D.",
    "area": "Odontología",
    "typology": [
      "Odontología General",
      "Estética",
      "Ortodoncia"
    ],
    "scope": "Clínica Dental",
    "materials": [
      "Cerámica dental",
      "Resinas fotocurables",
      "Instrumental estéril"
    ]
  },
  "services": [
    {
      "slug": "servicios-odontologicos",
      "number": "01",
      "title": "Odontología Integral",
      "kicker": "diagnóstico y tratamiento",
      "heroTitlePart1": "CUIDADO CLÍNICO DE",
      "heroTitleItalic": "alta precisión",
      "patientQuote": "Atención profesional que transforma vidas.",
      "description": "Desde limpiezas preventivas hasta rehabilitaciones complejas, nuestro enfoque es devolverte la confianza al sonreír.",
      "challengeTitle": "El estándar de",
      "challengeItalic": "calidad",
      "challengeParagraph1": "Utilizamos protocolos digitales para asegurar que cada tratamiento sea preciso y cómodo.",
      "challengeParagraph2": "Nuestro equipo está en constante formación para ofrecerte las técnicas más modernas de la odontología actual.",
      "features": [
        {
          "title": "Diseño de Sonrisa",
          "desc": "Estética dental personalizada mediante carillas y blanqueamiento."
        },
        {
          "title": "Ortodoncia",
          "desc": "Corrección de alineación dental con brackets convencionales y estéticos."
        },
        {
          "title": "Odontología General",
          "desc": "Limpiezas, extracciones y restauraciones con resinas de alta calidad."
        }
      ],
      "deliverable": "Salud oral integral",
      "imageCategory": "servicios-odontologicos",
      "photos": [
        "https://images.unsplash.com/photo-1460676749104-b9d24ceba29b?auto=format&fit=crop&q=80&w=2070",
        "https://images.unsplash.com/photo-1593022356769-11f762e25ed9?auto=format&fit=crop&q=80&w=2070"
      ]
    }
  ],
  "cases": [],
  "process": [
    {
      "step": "01",
      "title": "Evaluación Digital",
      "desc": "Diagnóstico preciso mediante examen clínico y radiográfico."
    },
    {
      "step": "02",
      "title": "Planificación",
      "desc": "Diseño del tratamiento adaptado a tus necesidades y objetivos."
    },
    {
      "step": "03",
      "title": "Ejecución Clínica",
      "desc": "Procedimiento realizado bajo los más altos estándares de higiene."
    }
  ],
  "testimonials": [],
  "faqs": [
    {
      "q": "¿Qué servicios ofrecen?",
      "a": "Ofrecemos odontología general, estética dental, ortodoncia y limpiezas profundas."
    },
    {
      "q": "¿Cómo puedo agendar una cita?",
      "a": "Puedes escribirnos directamente a nuestro WhatsApp o a través de DM en Instagram."
    }
  ],
  "brand": {
    "aestheticName": "Clinical Cyan & Deep Navy",
    "themeMode": "light",
    "pairingId": "plus-jakarta-inter",
    "fontDisplay": "Plus Jakarta Sans",
    "fontSans": "Inter",
    "fontMono": "JetBrains Mono",
    "googleFontsUrl": "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&family=Plus+Jakarta+Sans:wght@400;600;800&display=swap",
    "heroArchetype": "technical-dossier-grid",
    "logoAnalysis": {
      "dominantBgHex": "#FFFFFF",
      "primaryMarkHex": "#00B4D8",
      "secondaryAccentHex": "#03045E",
      "geometryStyle": "clinical-modern",
      "strokeWeight": "1.5px",
      "cornerRadius": "4px",
      "motifDescription": "Logotipo que combina un azul cian vibrante con un azul marino profundo, utilizando líneas geométricas limpias que sugieren precisión médica.",
      "iconDesignRule": "Iconografía minimalista basada en formas dentales abstractas y cruces clínicas estilizadas."
    },
    "palette": {
      "themeMode": "light",
      "bgPrimary": "#FFFFFF",
      "bgSecondary": "#F8FAFC",
      "bgContrast": "#023E8A",
      "bgWarm": "#FFFFFF",
      "bgDark": "#023E8A",
      "textPrimary": "#03045E",
      "textDark": "#03045E",
      "textMuted": "#64748B",
      "textLight": "#FFFFFF",
      "textOnContrast": "#FFFFFF",
      "accent": "#00B4D8",
      "accentHover": "#0077B6",
      "accentSoft": "#E0F2FE",
      "goldAccent": "#00B4D8",
      "borderHairline": "rgba(20, 22, 25, 0.11)"
    },
    "customVisualConcept": {
      "schematicType": "clinical-grid",
      "title": "Protocolo Dental Avanzado",
      "subtitle": "Higiene, tecnología y estética en cada paso.",
      "annotations": [
        "Esterilización Certificada",
        "Escaneo Intraoral",
        "Materiales Premium"
      ]
    },
    "sectionRhythm": [
      "Hero tipográfico con énfasis en la ubicación y especialidad.",
      "Manifiesto sobre la importancia de la salud bucal.",
      "Grid de servicios con enfoque en resultados.",
      "Metodología de trabajo paso a paso.",
      "Contacto directo y ubicación."
    ],
    "inspirationRefs": []
  },
  "templateId": "health-minimal",
  "blueprint": {
    "architectureMode": "single-page",
    "architectureReason": "Experiencia editorial enfocada en la conversión directa a WhatsApp.",
    "heroMode": "typographic",
    "activeSections": [
      {
        "id": "hero",
        "included": true
      },
      {
        "id": "services",
        "included": true
      },
      {
        "id": "about",
        "included": true
      },
      {
        "id": "process",
        "included": true
      },
      {
        "id": "faq",
        "included": true
      },
      {
        "id": "contact",
        "included": true
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
