"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const reassurances = [
  { icon: "◎", label: "Free 30-minute strategy consultation" },
  { icon: "◈", label: "No obligation" },
  { icon: "✦", label: "Custom quote provided" },
];

export default function Booking() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-[#FAFAF7] py-28 px-5" id="booking">
      <div className="max-w-3xl mx-auto text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-[#F5A623]/10 text-[#F5A623] text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-8 border border-[#F5A623]/20"
        >
          Free Consultation
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-6"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Book Your Free Strategy Consultation
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.2 }}
          className="font-sans text-charcoal/60 text-lg leading-relaxed mb-12"
        >
          In 30 minutes we&apos;ll review your timeline, pinpoint your bottlenecks,
          and map the exact expert match and target score for your blueprint. No
          pressure — just a clear plan.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-10"
        >
          <a
            href="https://api.leadconnectorhq.com/widget/bookings/parent-intro-with-solstice-prep"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#F5A623] text-white font-bold px-10 py-5 rounded-full text-base transition-all duration-300 hover:-translate-y-1"
            style={{
              boxShadow: "0 6px 40px rgba(245,166,35,0.45)",
              animation: "pulseGlow 2.5s ease-in-out infinite",
            }}
          >
            Book Your Free Consultation
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          {reassurances.map((r, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-charcoal/50 text-sm font-sans"
            >
              <span className="text-[#F5A623]">{r.icon}</span>
              {r.label}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
