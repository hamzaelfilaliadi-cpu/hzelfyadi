import { motion } from "framer-motion";
import { useI18n, WHATSAPP_URL } from "@/lib/i18n";

export function WhatsAppButton() {
  const { t } = useI18n();
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("wa.tooltip")}
      className="group fixed bottom-6 right-6 z-50 flex items-center gap-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
    >
      <span className="glass pointer-events-none hidden rounded-full px-3 py-1.5 text-xs font-medium text-foreground opacity-0 shadow-lg transition-opacity group-hover:opacity-100 md:block">
        {t("wa.tooltip")}
      </span>
      <span className="relative flex h-14 w-14 items-center justify-center">
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-40" />
        <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/40 transition-transform group-hover:scale-110">
          <svg viewBox="0 0 32 32" className="h-7 w-7 fill-current" aria-hidden="true">
            <path d="M19.11 17.21c-.29-.14-1.7-.84-1.96-.94-.26-.1-.45-.14-.64.14-.19.29-.74.94-.91 1.13-.17.19-.34.22-.62.07-.29-.14-1.21-.45-2.31-1.42-.85-.76-1.43-1.7-1.6-1.98-.17-.29-.02-.44.12-.58.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.64-1.55-.88-2.12-.23-.55-.47-.48-.64-.49l-.55-.01c-.19 0-.5.07-.76.36-.26.29-1 1-1 2.43 0 1.44 1.02 2.82 1.17 3.02.14.19 2.02 3.08 4.89 4.32.68.29 1.21.47 1.63.6.68.22 1.3.19 1.79.12.55-.08 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.34zM16.01 5.33c-5.9 0-10.7 4.8-10.7 10.7 0 1.88.49 3.72 1.44 5.34L5 27.33l6.13-1.61a10.66 10.66 0 004.88 1.19h.01c5.9 0 10.7-4.8 10.7-10.7 0-2.86-1.11-5.55-3.13-7.57a10.65 10.65 0 00-7.58-3.13zm0 19.55h-.01a8.86 8.86 0 01-4.51-1.24l-.32-.19-3.63.95.97-3.54-.21-.33a8.85 8.85 0 01-1.36-4.72c0-4.9 3.99-8.88 8.89-8.88 2.37 0 4.6.92 6.28 2.6a8.83 8.83 0 012.6 6.29c0 4.9-3.99 8.88-8.7 8.88z" />
          </svg>
        </span>
      </span>
    </motion.a>
  );
}