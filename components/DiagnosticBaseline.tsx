"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    num: "1",
    title: "Take the Official ACT Baseline",
    description:
      "Complete an official ACT practice exam under realistic, timed conditions. We give you exact directions so the baseline reflects your true starting point.",
  },
  {
    num: "2",
    title: "Our Strategic Audit",
    description:
      "On your strategy call we dissect the data — isolating the exact section bottlenecks behind your score, not just the headline composite.",
  },
  {
    num: "3",
    title: "Architecting Your Solstice Commitment",
    description:
      "We translate that data into a custom hourly scope and an individualized target score — then pair you with the top 1% specialist built for your exact bottlenecks.",
  },
];

const scoreReport = [
  { subject: "English", score: 26, status: "Bottleneck" },
  { subject: "Math", score: 29, status: "On Track" },
  { subject: "Reading", score: 27, status: "Bottleneck" },
  { subject: "Science", score: 30, status: "On Track" },
];

export default function DiagnosticBaseline() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-[#F5F5F0] py-24 px-5">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-[#1C1C1E]/5 text-[#1C1C1E]/60 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6"
          >
            Phase 1
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-bold text-charcoal mb-5"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Phase 1: Your Diagnostic Baseline
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="text-charcoal/60 text-lg max-w-3xl mx-auto font-sans leading-relaxed"
          >
            We don&apos;t use deflated, third-party practice tests to scare students
            into signing up. Your blueprint is built on the truth — so we rely
            exclusively on official ACT practice data to establish your real
            baseline.
          </motion.p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Steps */}
          <div className="flex flex-col gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.15, duration: 0.65 }}
                className="flex gap-5"
              >
                <div className="flex-shrink-0">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                    style={{
                      background: "linear-gradient(135deg, #F5A623, #FF6B35)",
                      boxShadow: "0 3px 15px rgba(245,166,35,0.3)",
                    }}
                  >
                    {step.num}
                  </div>
                </div>
                <div>
                  <h3
                    className="font-serif font-bold text-lg text-charcoal mb-2"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {step.title}
                  </h3>
                  <p className="font-sans text-charcoal/60 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Score Report Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.35, duration: 0.7 }}
          >
            <div
              className="bg-white rounded-3xl overflow-hidden"
              style={{ boxShadow: "0 8px 50px rgba(0,0,0,0.1)" }}
            >
              {/* Card header */}
              <div
                className="px-7 py-5"
                style={{
                  background: "linear-gradient(135deg, #1C1C1E 0%, #2C2C2E 100%)",
                }}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-sans text-white/50 text-xs tracking-widest uppercase">
                    Official ACT Practice
                  </span>
                  <span
                    className="text-[10px] font-semibold px-2.5 py-1 rounded-full"
                    style={{
                      background: "rgba(245,166,35,0.15)",
                      color: "#F5A623",
                      border: "1px solid rgba(245,166,35,0.25)",
                    }}
                  >
                    Diagnostic Baseline
                  </span>
                </div>
                <div className="flex items-baseline gap-3 mt-3">
                  <div
                    className="font-serif text-6xl font-bold"
                    style={{
                      fontFamily: "var(--font-playfair)",
                      background: "linear-gradient(135deg, #F5A623, #FF6B35)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    28
                  </div>
                  <div>
                    <div className="text-white/80 font-sans text-sm font-semibold">
                      Composite Score
                    </div>
                    <div className="text-white/30 font-sans text-xs">
                      out of 36
                    </div>
                  </div>
                </div>
              </div>

              {/* Subject scores */}
              <div className="px-7 py-6 flex flex-col gap-4">
                {scoreReport.map((row) => (
                  <div key={row.subject} className="flex items-center gap-4">
                    <div className="w-20 font-sans text-sm font-medium text-charcoal/70">
                      {row.subject}
                    </div>
                    <div className="flex-1 h-2 rounded-full bg-[#F5F5F0] overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${(row.score / 36) * 100}%` } : {}}
                        transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
                        className="h-full rounded-full"
                        style={{
                          background:
                            row.status === "Bottleneck"
                              ? "linear-gradient(90deg, #F5A623, #FF6B35)"
                              : "linear-gradient(90deg, #22c55e, #16a34a)",
                        }}
                      />
                    </div>
                    <div className="w-8 font-sans text-sm font-bold text-charcoal">
                      {row.score}
                    </div>
                    <div
                      className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                      style={{
                        background:
                          row.status === "Bottleneck"
                            ? "rgba(245,166,35,0.12)"
                            : "rgba(34,197,94,0.12)",
                        color:
                          row.status === "Bottleneck" ? "#E08A05" : "#16a34a",
                        border: `1px solid ${row.status === "Bottleneck" ? "rgba(245,166,35,0.25)" : "rgba(34,197,94,0.25)"}`,
                      }}
                    >
                      {row.status}
                    </div>
                  </div>
                ))}
              </div>

              <div className="px-7 pb-5">
                <p className="font-sans text-charcoal/30 text-xs text-center">
                  Official ACT Practice · Diagnostic Baseline · Illustrative sample report.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
