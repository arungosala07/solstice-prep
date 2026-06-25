"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    icon: "◎",
    title: "Diagnostic",
    description:
      "A full official ACT practice test establishes your real baseline and pinpoints your individual target score — every session has a number to hit.",
  },
  {
    number: "02",
    icon: "⊕",
    title: "Accountability Built In",
    description:
      "Tracked diagnostics, homework, and weekly milestones keep both you and your mentor on target — nothing slips.",
  },
  {
    number: "03",
    icon: "◈",
    title: "Targeted Plan",
    description:
      "A custom study roadmap built around your exact gaps and timeline — high-yield work scheduled to peak you on test day.",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-[#FAFAF7] py-24 px-5" id="how-it-works">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-[#1C1C1E]/5 text-[#1C1C1E]/60 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6"
          >
            The Method
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-bold text-charcoal mb-5"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Scores by Design, Not by Accident.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="text-charcoal/60 text-lg max-w-xl mx-auto font-sans"
          >
            Your blueprint is built in three deliberate stages.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-14 left-1/6 right-1/6 h-px bg-gradient-to-r from-transparent via-[#F5A623]/30 to-transparent" />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.15, duration: 0.65, ease: "easeOut" }}
              className="relative"
            >
              {/* Step Number Badge */}
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-sans font-bold text-sm"
                    style={{
                      background: "linear-gradient(135deg, #F5A623, #FF6B35)",
                      boxShadow: "0 4px 20px rgba(245,166,35,0.35)",
                    }}
                  >
                    {step.number}
                  </div>
                </div>
                <div className="pt-1">
                  <h3
                    className="font-serif text-xl font-bold text-charcoal mb-3"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {step.title}
                  </h3>
                  <p className="font-sans text-charcoal/60 leading-relaxed text-[15px]">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
