import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "fr" | "es" | "en";

type Dict = Record<string, string>;

const dictionaries: Record<Lang, Dict> = {
  fr: {
    "nav.services": "Services",
    "nav.why": "Pourquoi nous",
    "nav.process": "Processus",
    "nav.portfolio": "Portfolio",
    "nav.testimonials": "Témoignages",
    "nav.cta": "Démarrer",
    "hero.badge": "Agence digitale premium",
    "hero.title.pre": "Développez votre activité avec des ",
    "hero.title.grad": "sites modernes",
    "hero.title.post": " et un marketing digital intelligent",
    "hero.sub": "HZELFY ADI conçoit des sites web performants et des campagnes publicitaires qui transforment vos visiteurs en clients fidèles.",
    "hero.getStarted": "Commencer",
    "hero.contact": "Contacter sur WhatsApp",
    "services.eyebrow": "Nos services",
    "services.title": "Tout ce dont votre marque a besoin pour grandir",
    "services.web.title": "Développement de sites web",
    "services.web.desc": "Sites rapides, responsives et sur mesure, conçus pour convertir.",
    "services.ads.title": "Publicité digitale",
    "services.ads.desc": "Campagnes Meta, Google et TikTok pilotées par la donnée.",
    "services.growth.title": "Croissance & SEO",
    "services.growth.desc": "Stratégies de croissance mesurables et positionnement Google.",
    "services.learn": "En savoir plus",
    "why.eyebrow": "Pourquoi HZELFY ADI",
    "why.title": "Une équipe. Une exécution premium.",
    "why.1": "Technologie moderne",
    "why.2": "Livraison rapide",
    "why.3": "100% responsive mobile",
    "why.4": "Sites sécurisés",
    "why.5": "Optimisés SEO",
    "why.6": "Tarifs accessibles",
    "why.7": "Support professionnel",
    "why.8": "Stratégies de croissance",
    "process.eyebrow": "Processus",
    "process.title": "De l'idée au lancement",
    "process.1": "WhatsApp",
    "process.2": "Consultation gratuite",
    "process.3": "Planification",
    "process.4": "Design & développement",
    "process.5": "Tests",
    "process.6": "Lancement",
    "portfolio.eyebrow": "Portfolio",
    "portfolio.title": "Un aperçu de nos réalisations",
    "portfolio.item": "Projet",
    "testimonials.eyebrow": "Témoignages",
    "testimonials.title": "Ils nous font confiance",
    "stats.projects": "Projets livrés",
    "stats.satisfaction": "Satisfaction",
    "stats.support": "Support",
    "stats.years": "Ans d'expérience",
    "cta.title": "Prêt à faire grandir votre entreprise ?",
    "cta.sub": "Discutons de votre projet dès maintenant sur WhatsApp.",
    "cta.button": "Discuter sur WhatsApp",
    "footer.tagline": "Sites web modernes et marketing digital intelligent.",
    "footer.quick": "Liens rapides",
    "footer.services": "Services",
    "footer.rights": "Tous droits réservés.",
    "wa.tooltip": "Discuter avec HZELFY ADI",
  },
  es: {
    "nav.services": "Servicios",
    "nav.why": "Por qué nosotros",
    "nav.process": "Proceso",
    "nav.portfolio": "Portafolio",
    "nav.testimonials": "Testimonios",
    "nav.cta": "Empezar",
    "hero.badge": "Agencia digital premium",
    "hero.title.pre": "Haz crecer tu negocio con ",
    "hero.title.grad": "webs modernas",
    "hero.title.post": " y marketing digital inteligente",
    "hero.sub": "HZELFY ADI diseña sitios web de alto rendimiento y campañas publicitarias que convierten visitantes en clientes fieles.",
    "hero.getStarted": "Empezar",
    "hero.contact": "Contactar por WhatsApp",
    "services.eyebrow": "Nuestros servicios",
    "services.title": "Todo lo que tu marca necesita para crecer",
    "services.web.title": "Desarrollo web",
    "services.web.desc": "Sitios rápidos, responsive y a medida, diseñados para convertir.",
    "services.ads.title": "Publicidad digital",
    "services.ads.desc": "Campañas Meta, Google y TikTok basadas en datos.",
    "services.growth.title": "Crecimiento & SEO",
    "services.growth.desc": "Estrategias de crecimiento medibles y posicionamiento en Google.",
    "services.learn": "Saber más",
    "why.eyebrow": "Por qué HZELFY ADI",
    "why.title": "Un equipo. Ejecución premium.",
    "why.1": "Tecnología moderna",
    "why.2": "Entrega rápida",
    "why.3": "100% responsive móvil",
    "why.4": "Sitios seguros",
    "why.5": "Optimizados para SEO",
    "why.6": "Precios accesibles",
    "why.7": "Soporte profesional",
    "why.8": "Estrategias de crecimiento",
    "process.eyebrow": "Proceso",
    "process.title": "De la idea al lanzamiento",
    "process.1": "WhatsApp",
    "process.2": "Consultoría gratis",
    "process.3": "Planificación",
    "process.4": "Diseño y desarrollo",
    "process.5": "Pruebas",
    "process.6": "Lanzamiento",
    "portfolio.eyebrow": "Portafolio",
    "portfolio.title": "Una muestra de nuestro trabajo",
    "portfolio.item": "Proyecto",
    "testimonials.eyebrow": "Testimonios",
    "testimonials.title": "Confían en nosotros",
    "stats.projects": "Proyectos",
    "stats.satisfaction": "Satisfacción",
    "stats.support": "Soporte",
    "stats.years": "Años de experiencia",
    "cta.title": "¿Listo para hacer crecer tu negocio?",
    "cta.sub": "Hablemos de tu proyecto ahora mismo por WhatsApp.",
    "cta.button": "Chatear por WhatsApp",
    "footer.tagline": "Webs modernas y marketing digital inteligente.",
    "footer.quick": "Enlaces rápidos",
    "footer.services": "Servicios",
    "footer.rights": "Todos los derechos reservados.",
    "wa.tooltip": "Chatear con HZELFY ADI",
  },
  en: {
    "nav.services": "Services",
    "nav.why": "Why us",
    "nav.process": "Process",
    "nav.portfolio": "Portfolio",
    "nav.testimonials": "Testimonials",
    "nav.cta": "Get started",
    "hero.badge": "Premium digital agency",
    "hero.title.pre": "Build your business with ",
    "hero.title.grad": "modern websites",
    "hero.title.post": " and smart digital marketing",
    "hero.sub": "HZELFY ADI designs high-performing websites and ad campaigns that turn visitors into loyal customers.",
    "hero.getStarted": "Get started",
    "hero.contact": "Contact on WhatsApp",
    "services.eyebrow": "Our services",
    "services.title": "Everything your brand needs to grow",
    "services.web.title": "Website development",
    "services.web.desc": "Fast, responsive, custom-crafted websites built to convert.",
    "services.ads.title": "Digital advertising",
    "services.ads.desc": "Data-driven Meta, Google and TikTok campaigns.",
    "services.growth.title": "Growth & SEO",
    "services.growth.desc": "Measurable growth strategies and Google rankings.",
    "services.learn": "Learn more",
    "why.eyebrow": "Why HZELFY ADI",
    "why.title": "One team. Premium execution.",
    "why.1": "Modern technology",
    "why.2": "Fast delivery",
    "why.3": "Mobile responsive",
    "why.4": "Secure websites",
    "why.5": "SEO optimized",
    "why.6": "Affordable pricing",
    "why.7": "Professional support",
    "why.8": "Growth strategies",
    "process.eyebrow": "Process",
    "process.title": "From idea to launch",
    "process.1": "WhatsApp",
    "process.2": "Free consultation",
    "process.3": "Planning",
    "process.4": "Design & development",
    "process.5": "Testing",
    "process.6": "Launch",
    "portfolio.eyebrow": "Portfolio",
    "portfolio.title": "A glimpse of our work",
    "portfolio.item": "Project",
    "testimonials.eyebrow": "Testimonials",
    "testimonials.title": "Trusted by growing brands",
    "stats.projects": "Projects delivered",
    "stats.satisfaction": "Satisfaction",
    "stats.support": "Support",
    "stats.years": "Years of experience",
    "cta.title": "Ready to grow your business?",
    "cta.sub": "Let's talk about your project right now on WhatsApp.",
    "cta.button": "Chat on WhatsApp",
    "footer.tagline": "Modern websites and smart digital marketing.",
    "footer.quick": "Quick links",
    "footer.services": "Services",
    "footer.rights": "All rights reserved.",
    "wa.tooltip": "Chat with HZELFY ADI",
  },
};

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (k: keyof typeof dictionaries.fr) => string };
const I18nCtx = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fr");

  useEffect(() => {
    const saved = typeof window !== "undefined" ? (localStorage.getItem("hzelfy_lang") as Lang | null) : null;
    if (saved && ["fr", "es", "en"].includes(saved)) setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("hzelfy_lang", l);
  };

  const t = (k: keyof typeof dictionaries.fr) => dictionaries[lang][k] ?? String(k);

  return <I18nCtx.Provider value={{ lang, setLang, t }}>{children}</I18nCtx.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nCtx);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}

export const WHATSAPP_NUMBER = "212776628986";
export const WHATSAPP_URL =
  "https://wa.me/212776628986?text=" +
  encodeURIComponent(
    "Hello HZELFY ADI! I'm interested in your website development and digital advertising services. I would like to discuss my project."
  );