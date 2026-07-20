import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";
import { useI18n, WHATSAPP_URL } from "@/lib/i18n";

function FloatingShapes() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 60, damping: 20 });
  const sy = useSpring(y, { stiffness: 60, damping: 20 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth - 0.5) * 40;
      const ny = (e.clientY / window.innerHeight - 0.5) * 40;
      x.set(nx);
      y.set(ny);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [x, y]);

  const t1x = useTransform(sx, (v) => v * 1.2);
  const t1y = useTransform(sy, (v) => v * 1.2);
  const t2x = useTransform(sx, (v) => v * -0.8);
  const t2y = useTransform(sy, (v) => v * -0.8);
  const t3x = useTransform(sx, (v) => v * 0.5);
  const t3y = useTransform(sy, (v) => v * 0.5);

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        style={{ x: t1x, y: t1y }}
        className="absolute -left-24 top-10 h-[420px] w-[420px] rounded-full opacity-60 blur-3xl"
      >
        <div className="h-full w-full rounded-full bg-[radial-gradient(circle_at_30%_30%,oklch(0.65_0.22_264),transparent_60%)]" />
      </motion.div>
      <motion.div
        style={{ x: t2x, y: t2y }}
        className="absolute right-[-80px] top-24 h-[380px] w-[380px] rounded-full opacity-60 blur-3xl"
      >
        <div className="h-full w-full rounded-full bg-[radial-gradient(circle_at_60%_40%,oklch(0.75_0.14_210),transparent_60%)]" />
      </motion.div>
      <motion.div
        style={{ x: t3x, y: t3y }}
        className="absolute bottom-[-120px] left-1/3 h-[360px] w-[360px] rounded-full opacity-50 blur-3xl"
      >
        <div className="h-full w-full rounded-full bg-[radial-gradient(circle_at_50%_50%,oklch(0.78_0.15_70),transparent_60%)]" />
      </motion.div>

      {/* 3D floating cards */}
      <motion.div
        style={{ x: t1x, y: t1y }}
        animate={{ rotate: [0, 6, 0], y: [0, -12, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="glass absolute left-6 top-40 hidden h-24 w-24 rotate-6 rounded-3xl shadow-2xl md:block"
      />
      <motion.div
        style={{ x: t2x, y: t2y }}
        animate={{ rotate: [0, -8, 0], y: [0, 16, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="glass absolute right-10 top-60 hidden h-32 w-32 -rotate-6 rounded-[2rem] shadow-2xl md:block"
      />
      <motion.div
        style={{ x: t3x, y: t3y }}
        animate={{ rotate: [0, 4, 0], y: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="glass absolute bottom-24 right-1/4 hidden h-20 w-20 rounded-2xl shadow-2xl md:block"
      />
    </div>
  );
}

export function Hero() {
  const { t } = useI18n();
  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-24 md:pt-52 md:pb-32">
      <FloatingShapes />
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass mx-auto inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--brand-accent)]" />
          {t("hero.badge")}
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
        >
          {t("hero.title.pre")}
          <span className="text-gradient">{t("hero.title.grad")}</span>
          {t("hero.title.post")}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg"
        >
          {t("hero.sub")}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-xl shadow-primary/30 transition-transform hover:scale-[1.03]"
          >
            {t("hero.getStarted")}
            <span aria-hidden>→</span>
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-foreground transition-transform hover:scale-[1.03]"
          >
            {t("hero.contact")}
          </a>
        </motion.div>
      </div>
    </section>
  );
}