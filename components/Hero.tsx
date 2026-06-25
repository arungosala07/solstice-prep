"use client";

import { motion, Variants } from "framer-motion";
import { SunIcon } from "./icons/SunIcon";

const trustBadges = [
  { icon: "✦", label: "Verified 35+ Scorers" },
  { icon: "✦", label: "Top 1% Tutors" },
  { icon: "✦", label: "Solstice Score Commitment" },
  { icon: "✦", label: "100% Custom-Matched" },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export default function Hero() {
  return (
    <section
      className="relative min-h-screen bg-[#1C1C1E] flex flex-col items-center justify-center overflow-hidden pt-24 pb-20 px-5"
      id="hero"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(ellipse at center, #F5A623 0%, #FF6B35 40%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-[400px] h-[300px] rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(ellipse at center, #FF6B35 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      {/* Animated Sun Graphic */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 0.12, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-16 left-1/2 -translate-x-1/2 w-[600px] h-[600px] pointer-events-none"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="w-full h-full"
        >
          <SunLarge />
        </motion.div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-[#F5A623] text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-8"
        >
          <SunIcon className="w-4 h-4" />
          Premium ACT Tutoring
        </motion.div>

        {/* Headline */}
        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-8"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Custom ACT Blueprints.{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #F5A623, #FF6B35)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Top 1% Tutors.
          </span>{" "}
          A Tailored Path to Your Target Score, Guaranteed.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="font-sans text-lg md:text-xl text-white/65 max-w-3xl mx-auto leading-relaxed mb-10"
        >
          We don&apos;t sell hourly blocks. We calculate your individual target
          score from your diagnostic baseline, timeline, and goals — match you
          to a verified top 1% specialist — and commit to getting you there.
        </motion.p>

        {/* CTAs */}
        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <a
            href="#booking"
            className="inline-flex items-center bg-[#F5A623] text-white font-semibold px-7 py-3.5 rounded-full text-sm transition-all duration-300 hover:-translate-y-0.5"
            style={{
              boxShadow: "0 4px 25px rgba(245,166,35,0.45)",
            }}
          >
            Request Your Target Score Assessment
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center border border-white/40 text-white font-semibold px-7 py-3.5 rounded-full text-sm transition-all duration-300 hover:border-white/70 hover:bg-white/10"
          >
            Learn Our Method
          </a>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3"
        >
          {trustBadges.map((badge, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-white/50 text-xs font-medium tracking-wide"
            >
              <span className="text-[#F5A623] text-xs">{badge.icon}</span>
              {badge.label}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none bg-gradient-to-b from-transparent to-[#FAFAF7]" />
    </section>
  );
}

function SunLarge() {
  return (
    <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * 30 * Math.PI) / 180;
        const x1 = 200 + 120 * Math.cos(angle);
        const y1 = 200 + 120 * Math.sin(angle);
        const x2 = 200 + 190 * Math.cos(angle);
        const y2 = 200 + 190 * Math.sin(angle);
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
          />
        );
      })}
      <circle cx="200" cy="200" r="100" stroke="white" strokeWidth="3" fill="none" />
      <circle cx="200" cy="200" r="60" fill="white" opacity="0.5" />
    </svg>
  );
}
