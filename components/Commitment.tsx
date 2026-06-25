"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    icon: "◎",
    title: "Individualized, not arbitrary",
    description:
      "Your target is set from your real diagnostic data, not a marketing number.",
  },
  {
    icon: "⊕",
    title: "Expert-matched",
    description:
      "Paired with a top 1% scorer specialized in your exact bottlenecks.",
  },
  {
    icon: "◈",
    title: "Relentlessly managed",
    description:
      "Weekly progress checkpoints, metric tracking, and roadmap adjustments through test day.",
  },
];

export default function Commitment() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="relative py-24 px-5 overflow-hidden"
      id="commitment"
      style={{ background: "#1C1C1E" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(245,166,35,0.18) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10" ref={ref}>
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <div
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border text-xs font-bold tracking-[0.2em] uppercase"
            style={{
              borderColor: "rgba(245,166,35,0.4)",
              color: "#F5A623",
              background: "rgba(245,166,35,0.08)",
            }}
          >
            ✦ Solstice Score Commitment · Solstice Prep ✦
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-6"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          The Solstice Score Commitment
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.15 }}
          className="font-sans text-white/50 text-center text-base mb-8"
        >
          Not a gimmick. A data-driven promise built around your goal.
        </motion.p>

        {/* Divider */}
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#F5A623] to-transparent mx-auto mb-10" />

        {/* Body copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.2 }}
          className="font-sans text-white/65 text-base md:text-lg leading-relaxed text-center max-w-3xl mx-auto mb-14"
        >
          We don&apos;t sell generic point increases or cookie-cutter hour packs.
          Every student starts with a diagnostic audit of their baseline,
          timeline, and target colleges. From that data, we set an
          individualized Target Score Threshold — and we commit our entire
          program to relentlessly working toward it. You&apos;re matched 1-on-1
          with a verified top 1% mentor who specializes in your weakest
          sections, and we adjust the roadmap every week until test day.
        </motion.p>

        {/* Feature points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.12, duration: 0.6 }}
              className="text-center p-6 rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(245,166,35,0.15)",
              }}
            >
              <div
                className="text-2xl mb-4"
                style={{ color: "#F5A623" }}
              >
                {f.icon}
              </div>
              <h4
                className="font-serif font-bold text-white text-base mb-2"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {f.title}
              </h4>
              <p className="font-sans text-white/50 text-sm leading-relaxed">
                {f.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="flex flex-col items-center gap-5"
        >
          <a
            href="#booking"
            className="inline-flex items-center bg-[#F5A623] text-white font-semibold px-8 py-4 rounded-full text-sm transition-all duration-300 hover:-translate-y-0.5"
            style={{ boxShadow: "0 6px 30px rgba(245,166,35,0.45)" }}
          >
            Get Your Target Score Assessment
          </a>
          <p className="font-sans text-white/30 text-xs max-w-2xl text-center leading-relaxed">
            The Solstice Score Commitment reflects Solstice Prep&apos;s commitment to
            working toward each student&apos;s individualized goal. It requires 100%
            session attendance and completion of all assigned practice exams and
            homework. The commitment applies only to enrolled students who meet
            these conditions and complete the full scope of their blueprint.
            Score progress is measured against the diagnostic baseline
            established at the start of the program. Solstice Prep reserves the
            right to determine eligibility based on documented program
            compliance.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
