import { motion } from "framer-motion";

export default function ProfilePortrait({ compact = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={`relative mx-auto ${compact ? "max-w-sm" : "max-w-md"}`}
    >
      <div className="absolute -inset-4 rounded-[2rem] bg-civic/20 blur-3xl" />
      <div className="relative overflow-hidden rounded-2xl border border-white/12 bg-white/[0.06] p-3 shadow-executive">
        <img
          src="/renan-gagliano-platform/renan-profile.jpg"
          alt="Renan Gagliano"
          className="aspect-[4/5] w-full rounded-xl object-cover object-center"
          loading={compact ? "lazy" : "eager"}
          decoding="async"
        />
      </div>
      <div className="absolute -bottom-5 left-6 right-6 rounded-lg border border-white/10 bg-graphite/88 p-4 text-center shadow-executive backdrop-blur-xl">
        <p className="text-sm font-bold text-white">Renan Gagliano</p>
        <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-civic">ICT Operations Manager</p>
      </div>
    </motion.div>
  );
}
