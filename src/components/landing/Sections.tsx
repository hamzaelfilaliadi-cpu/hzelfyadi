import { motion } from "framer-motion";
import { useRef, useState } from "react";
import {
  Rocket, ShieldCheck, Sparkles, Zap, Target, Trophy, Clock, HeartHandshake,
} from "lucide-react";
import { useI18n, WHATSAPP_URL } from "@/lib/i18n";
import p1Asset from "@/assets/portfolio-1.jpg.asset.json";
import p2Asset from "@/assets/portfolio-2.jpg.asset.json";
import p3Asset from "@/assets/portfolio-3.jpg.asset.json";
import p4Asset from "@/assets/portfolio-4.jpg.asset.json";
import p5Asset from "@/assets/portfolio-5.jpg.asset.json";
import p6Asset from "@/assets/portfolio-6.jpg.asset.json";
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
  const icons = [Rocket, ShieldCheck, Sparkles, Zap, Target, Trophy, Clock, HeartHandshake];
  const items = [
    t("why.1"), t("why.2"), t("why.3"), t("why.4"),
    t("why.5"), t("why.6"), t("why.7"), t("why.8"),
  ].map((label, i) => ({ label, Icon: icons[i] }));
  return (
    <Section id="why" eyebrow={t("why.eyebrow")} title={t("why.title")}>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ label, Icon }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: i * 0.06 }}
            whileHover={{ y: -8, rotateX: 4, rotateY: -4 }}
            style={{ transformPerspective: 900 }}
            className="group glass relative overflow-hidden rounded-3xl p-6"
          >
            <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-[color:var(--brand-primary)]/30 to-[color:var(--brand-secondary)]/20 blur-2xl opacity-60 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="pointer-events-none absolute right-3 top-3 text-4xl font-black tracking-tight text-white/5">
              0{i + 1}
            </div>
            <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[color:var(--brand-primary)] to-[color:var(--brand-secondary)] text-white shadow-lg shadow-primary/30">
              <Icon className="h-6 w-6" strokeWidth={2.2} />
            </div>
            <div className="relative mt-5 text-sm font-semibold leading-snug">{label}</div>
            <div className="mt-4 h-px w-10 bg-gradient-to-r from-[color:var(--brand-primary)] to-transparent transition-all duration-500 group-hover:w-20" />
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
  const [active, setActive] = useState(0);
  return (
    <Section id="process" eyebrow={t("process.eyebrow")} title={t("process.title")}>
      <div className="grid gap-10 md:grid-cols-2 md:gap-14">
        {/* Sticky image column */}
        <div className="relative md:sticky md:top-24 md:self-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotate: -3 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="glass relative aspect-square overflow-hidden rounded-[2rem] p-4 shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--brand-primary)]/15 via-transparent to-[color:var(--brand-secondary)]/15" />
            {processImgs.map((img, i) => (
              <motion.img
                key={i}
                src={img.url}
                alt={steps[i]}
                loading="lazy"
                width={1024}
                height={1024}
                initial={false}
                animate={{
                  opacity: i === active ? 1 : 0,
                  scale: i === active ? 1 : 1.05,
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute inset-4 h-[calc(100%-2rem)] w-[calc(100%-2rem)] object-contain"
              />
            ))}
            <div className="absolute bottom-4 left-4 flex gap-1.5">
              {steps.map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === active
                      ? "w-8 bg-gradient-to-r from-[color:var(--brand-primary)] to-[color:var(--brand-secondary)]"
                      : "w-1.5 bg-white/20"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Steps column — reveal one by one */}
        <ol className="relative flex flex-col gap-6">
          <div className="pointer-events-none absolute left-7 top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-transparent via-border to-transparent" />
          {steps.map((s, i) => (
            <ProcessStep
              key={s}
              index={i}
              label={s}
              isActive={active === i}
              onEnter={() => setActive(i)}
            />
          ))}
        </ol>
      </div>
    </Section>
  );
}

function ProcessStep({
  index,
  label,
  isActive,
  onEnter,
}: {
  index: number;
  label: string;
  isActive: boolean;
  onEnter: () => void;
}) {
  const ref = useRef<HTMLLIElement>(null);
  return (
    <motion.li
      ref={ref}
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, margin: "-45% 0px -45% 0px", amount: 0.6 }}
      onViewportEnter={onEnter}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.05 }}
      className={`glass relative flex items-start gap-5 rounded-2xl p-5 transition-all duration-500 ${
        isActive
          ? "shadow-xl ring-2 ring-[color:var(--brand-primary)]/50"
          : "opacity-70"
      }`}
    >
      <div
        className={`relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-lg font-bold shadow-lg transition-all duration-500 ${
          isActive
            ? "bg-gradient-to-br from-[color:var(--brand-primary)] to-[color:var(--brand-secondary)] text-white shadow-primary/40 scale-110"
            : "bg-primary/10 text-[color:var(--brand-primary)]"
        }`}
      >
        0{index + 1}
      </div>
      <div className="flex-1 pt-1">
        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-secondary)]">
          Step {index + 1}
        </div>
        <h3 className="mt-2 text-xl font-semibold sm:text-2xl">{label}</h3>
      </div>
    </motion.li>
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