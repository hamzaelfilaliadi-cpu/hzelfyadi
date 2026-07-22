import { motion } from "framer-motion";
import { useI18n, WHATSAPP_URL } from "@/lib/i18n";
import p1Asset from "@/assets/portfolio-1.jpg.asset.json";
import p2Asset from "@/assets/portfolio-2.jpg.asset.json";
import p3Asset from "@/assets/portfolio-3.jpg.asset.json";
import p4Asset from "@/assets/portfolio-4.jpg.asset.json";
import p5Asset from "@/assets/portfolio-5.jpg.asset.json";
import p6Asset from "@/assets/portfolio-6.jpg.asset.json";
import a1Asset from "@/assets/avatar-1.jpg.asset.json";
import a2Asset from "@/assets/avatar-2.jpg.asset.json";
import a3Asset from "@/assets/avatar-3.jpg.asset.json";
import a4Asset from "@/assets/avatar-4.jpg.asset.json";
import pr1Asset from "@/assets/process-1.jpg.asset.json";
import pr2Asset from "@/assets/process-2.jpg.asset.json";
import pr3Asset from "@/assets/process-3.jpg.asset.json";
import pr4Asset from "@/assets/process-4.jpg.asset.json";
import pr5Asset from "@/assets/process-5.jpg.asset.json";
import pr6Asset from "@/assets/process-6.jpg.asset.json";
const p1 = p1Asset as { url: string };
const p2 = p2Asset as { url: string };
const p3 = p3Asset as { url: string };
const p4 = p4Asset as { url: string };
const p5 = p5Asset as { url: string };
const p6 = p6Asset as { url: string };
const a1 = a1Asset as { url: string };
const a2 = a2Asset as { url: string };
const a3 = a3Asset as { url: string };
const a4 = a4Asset as { url: string };
const processImgs = [pr1Asset, pr2Asset, pr3Asset, pr4Asset, pr5Asset, pr6Asset] as { url: string }[];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
        className="mb-14 max-w-2xl"
      >
        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-secondary)]">
          {eyebrow}
        </div>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">{title}</h2>
      </motion.div>
      {children}
    </section>
  );
}

export function Services() {
  const { t } = useI18n();
  const items = [
    { icon: "◆", title: t("services.web.title"), desc: t("services.web.desc") },
    { icon: "◇", title: t("services.ads.title"), desc: t("services.ads.desc") },
    { icon: "✦", title: t("services.growth.title"), desc: t("services.growth.desc") },
  ];
  return (
    <Section id="services" eyebrow={t("services.eyebrow")} title={t("services.title")}>
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            whileHover={{ y: -6 }}
            className="glass group relative overflow-hidden rounded-3xl p-8 shadow-lg shadow-black/5"
          >
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/10 blur-2xl transition-opacity group-hover:opacity-100" />
            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-2xl text-[color:var(--brand-primary)]">
                {it.icon}
              </div>
              <h3 className="mt-6 text-xl font-semibold">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-[color:var(--brand-primary)] transition-transform group-hover:translate-x-1"
              >
                {t("services.learn")} →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

export function WhyUs() {
  const { t } = useI18n();
  const items = [
    t("why.1"), t("why.2"), t("why.3"), t("why.4"),
    t("why.5"), t("why.6"), t("why.7"), t("why.8"),
  ];
  return (
    <Section id="why" eyebrow={t("why.eyebrow")} title={t("why.title")}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((label, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="glass rounded-2xl p-5"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[color:var(--brand-accent)]/15 text-[color:var(--brand-accent)]">
              ✓
            </div>
            <div className="mt-4 text-sm font-semibold">{label}</div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

export function Process() {
  const { t } = useI18n();
  const steps = [
    t("process.1"), t("process.2"), t("process.3"),
    t("process.4"), t("process.5"), t("process.6"),
  ];
  return (
    <Section id="process" eyebrow={t("process.eyebrow")} title={t("process.title")}>
      <div className="relative">
        <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-border to-transparent md:block" />
        <div className="flex flex-col gap-16 md:gap-24">
          {steps.map((s, i) => {
            const fromLeft = i % 2 === 0;
            return (
              <div
                key={s}
                className={`relative grid items-center gap-8 md:grid-cols-2 md:gap-12 ${
                  fromLeft ? "" : "md:[&>*:first-child]:order-2"
                }`}
              >
                <motion.div
                  initial={{ opacity: 0, x: fromLeft ? -80 : 80, rotate: fromLeft ? -4 : 4 }}
                  whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  whileHover={{ y: -6, rotate: fromLeft ? -1 : 1 }}
                  className="glass relative aspect-[4/3] overflow-hidden rounded-3xl p-4 shadow-xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--brand-primary)]/10 via-transparent to-[color:var(--brand-secondary)]/10" />
                  <img
                    src={processImgs[i].url}
                    alt={s}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="relative h-full w-full object-contain"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: fromLeft ? 80 : -80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                  className={`flex flex-col ${fromLeft ? "md:items-start md:text-left" : "md:items-end md:text-right"} items-start text-left`}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-lg font-bold text-primary-foreground shadow-lg shadow-primary/30">
                      0{i + 1}
                    </div>
                    <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-secondary)]">
                      Step {i + 1}
                    </div>
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold sm:text-3xl">{s}</h3>
                  <div className="mt-3 h-px w-16 bg-gradient-to-r from-[color:var(--brand-primary)] to-[color:var(--brand-secondary)]" />
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

export function Portfolio() {
  const { t } = useI18n();
  const projects: { image: string; label: string; tag: string }[] = [
    { image: p1.url, label: "Fashion Store", tag: "E-commerce" },
    { image: p2.url, label: "Gourmet Restaurant", tag: "Hospitality" },
    { image: p3.url, label: "SaaS Platform", tag: "Startup" },
    { image: p4.url, label: "Real Estate", tag: "Properties" },
    { image: p5.url, label: "Creative Agency", tag: "Branding" },
    { image: p6.url, label: "Fitness Club", tag: "Sport" },
  ];
  return (
    <Section id="portfolio" eyebrow={t("portfolio.eyebrow")} title={t("portfolio.title")}>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            whileHover={{ y: -6, rotateX: 4, rotateY: -4 }}
            style={{ transformPerspective: 900 }}
            className="glass group relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl"
          >
            <img
              src={p.image}
              alt={`${p.label} website preview`}
              loading="lazy"
              width={1024}
              height={1024}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="relative flex h-full flex-col justify-end p-6 text-white">
              <div className="text-xs uppercase tracking-widest text-white/70">
                {p.tag} · 0{i + 1}
              </div>
              <div className="text-xl font-semibold">{p.label}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

export function Testimonials() {
  const { t } = useI18n();
  const items = [
    { name: "Amine B.", biz: "Boutique Casablanca", avatar: a1.url, rating: 5, review: "Site livré rapidement, design premium. Notre chiffre d'affaires a doublé en 3 mois." },
    { name: "Sofia R.", biz: "Studio Barcelona", avatar: a2.url, rating: 5, review: "Equipo increíble. Nos ayudaron a lanzar campañas que realmente convierten." },
    { name: "James O.", biz: "Growth Startup", avatar: a3.url, rating: 5, review: "Truly premium execution. Our new site loads instantly and looks world-class." },
    { name: "Youssef T.", biz: "Restaurant Rabat", avatar: a4.url, rating: 5, review: "Support professionnel du début à la fin, je recommande à 100%." },
  ];
  return (
    <Section id="testimonials" eyebrow={t("testimonials.eyebrow")} title={t("testimonials.title")}>
      <div className="grid gap-6 md:grid-cols-2">
        {items.map((it, i) => (
          <motion.div
            key={it.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass rounded-3xl p-8 shadow-lg"
          >
            <div className="flex items-center gap-4">
              <img
                src={it.avatar}
                alt={it.name}
                loading="lazy"
                width={512}
                height={512}
                className="h-12 w-12 rounded-full object-cover ring-2 ring-white/10"
              />
              <div>
                <div className="font-semibold">{it.name}</div>
                <div className="text-xs text-muted-foreground">{it.biz}</div>
              </div>
              <div className="ml-auto text-[color:var(--brand-accent)]">
                {"★".repeat(it.rating)}
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">"{it.review}"</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

export function Stats() {
  const { t } = useI18n();
  const items = [
    { v: "100+", l: t("stats.projects") },
    { v: "98%", l: t("stats.satisfaction") },
    { v: "24/7", l: t("stats.support") },
    { v: "5+", l: t("stats.years") },
  ];
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="glass grid grid-cols-2 gap-6 rounded-3xl p-10 shadow-xl md:grid-cols-4">
        {items.map((it, i) => (
          <motion.div
            key={it.l}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="text-center"
          >
            <div className="text-4xl font-bold sm:text-5xl">
              <span className="text-gradient">{it.v}</span>
            </div>
            <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{it.l}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function CTA() {
  const { t } = useI18n();
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[color:var(--brand-primary)] via-[color:oklch(0.5_0.2_260)] to-[color:var(--brand-secondary)] p-12 text-center shadow-2xl md:p-20"
      >
        <div className="pointer-events-none absolute inset-0 opacity-30 mix-blend-overlay [background:radial-gradient(circle_at_20%_20%,white,transparent_40%),radial-gradient(circle_at_80%_60%,white,transparent_40%)]" />
        <h2 className="relative text-3xl font-bold tracking-tight text-white sm:text-5xl">
          {t("cta.title")}
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-white/80">{t("cta.sub")}</p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-[color:var(--brand-primary)] shadow-xl transition-transform hover:scale-105"
        >
          {t("cta.button")} →
        </a>
      </motion.div>
    </section>
  );
}

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border/60 py-12">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-3">
        <div>
          <div className="text-gradient text-lg font-bold">HZELFY ADI</div>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">{t("footer.tagline")}</p>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            {t("footer.quick")}
          </div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#services" className="hover:text-[color:var(--brand-primary)]">{t("nav.services")}</a></li>
            <li><a href="#why" className="hover:text-[color:var(--brand-primary)]">{t("nav.why")}</a></li>
            <li><a href="#process" className="hover:text-[color:var(--brand-primary)]">{t("nav.process")}</a></li>
            <li><a href="#portfolio" className="hover:text-[color:var(--brand-primary)]">{t("nav.portfolio")}</a></li>
          </ul>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            {t("footer.services")}
          </div>
          <ul className="mt-4 space-y-2 text-sm">
            <li>{t("services.web.title")}</li>
            <li>{t("services.ads.title")}</li>
            <li>{t("services.growth.title")}</li>
          </ul>
          <div className="mt-6 flex gap-3">
            {["in", "X", "ig", "fb"].map((s) => (
              <a
                key={s}
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s}
                className="glass flex h-9 w-9 items-center justify-center rounded-full text-xs font-semibold"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-6xl px-6 text-xs text-muted-foreground">
        © {year} HZELFY ADI. {t("footer.rights")}
      </div>
    </footer>
  );
}