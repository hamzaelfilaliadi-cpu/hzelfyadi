import { motion } from "framer-motion";
import { useI18n, WHATSAPP_URL } from "@/lib/i18n";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Nav() {
  const { t } = useI18n();
  const links = [
    { href: "#services", key: "nav.services" as const },
    { href: "#why", key: "nav.why" as const },
    { href: "#process", key: "nav.process" as const },
    { href: "#portfolio", key: "nav.portfolio" as const },
    { href: "#testimonials", key: "nav.testimonials" as const },
  ];
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-x-0 top-4 z-40 mx-auto flex max-w-6xl items-center justify-between gap-4 px-4"
    >
      <div className="glass flex w-full items-center justify-between rounded-full px-4 py-2.5 shadow-lg shadow-black/5">
        <a href="#top" className="flex items-center gap-2 text-sm font-bold tracking-tight">
          <span className="text-gradient text-base">HZELFY ADI</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-foreground">
              {t(l.key)}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <LanguageSwitcher />
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-primary px-4 py-1.5 text-xs font-medium text-primary-foreground shadow-md shadow-primary/30 transition-transform hover:scale-105 sm:inline-block"
          >
            {t("nav.cta")}
          </a>
        </div>
      </div>
    </motion.header>
  );
}