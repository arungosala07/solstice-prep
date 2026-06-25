"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function ScoreDeltaVisual() {
  return (
    <div className="flex items-center gap-3 mt-5 bg-[#FAFAF7] rounded-xl p-4">
      <div className="text-center">
        <div className="text-2xl font-serif font-bold text-charcoal" style={{ fontFamily: "var(--font-playfair)" }}>28</div>
        <div className="text-xs text-charcoal/40 font-sans mt-0.5">Baseline</div>
      </div>
      <div className="flex-1 flex items-center gap-1">
        <div className="flex-1 h-0.5 bg-gradient-to-r from-charcoal/20 to-[#F5A623]" />
        <div
          className="px-2.5 py-1 rounded-full text-white text-xs font-bold"
          style={{ background: "linear-gradient(135deg, #F5A623, #FF6B35)" }}
        >
          +6
        </div>
        <div className="flex-1 h-0.5 bg-gradient-to-r from-[#F5A623] to-charcoal/20" />
      </div>
      <div className="text-center">
        <div className="text-2xl font-serif font-bold text-[#F5A623]" style={{ fontFamily: "var(--font-playfair)" }}>34</div>
        <div className="text-xs text-charcoal/40 font-sans mt-0.5">Target</div>
      </div>
    </div>
  );
}

function TimelineVisual() {
  const weeks = ["Week 1", "Week 4", "Week 8", "Test Day"];
  return (
    <div className="mt-5 bg-[#FAFAF7] rounded-xl p-4">
      <div className="flex items-center justify-between">
        {weeks.map((w, i) => (
          <div key={w} className="flex flex-col items-center gap-2 flex-1">
            <div
              className="w-2.5 h-2.5 rounded-full"
              style={{ background: i === weeks.length - 1 ? "linear-gradient(135deg, #F5A623, #FF6B35)" : "#1C1C1E20" }}
            />
            {i < weeks.length - 1 && (
              <div className="sr-only" />
            )}
          </div>
        ))}
      </div>
      <div className="relative flex mb-2">
        <div className="absolute top-[-14px] left-[5%] right-[5%] h-px bg-gradient-to-r from-charcoal/20 via-[#F5A623]/60 to-[#FF6B35]" />
      </div>
      <div className="flex items-center justify-between mt-1">
        {weeks.map((w, i) => (
          <div key={w} className="text-center flex-1">
            <span className={`text-[10px] font-sans font-medium ${i === weeks.length - 1 ? "text-[#F5A623]" : "text-charcoal/40"}`}>
              {w}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SubjectTagsVisual() {
  const subjects = [
    { name: "English", status: "Bottleneck" },
    { name: "Math", status: "On Track" },
    { name: "Reading", status: "Bottleneck" },
    { name: "Science", status: "On Track" },
  ];
  return (
    <div className="mt-5 bg-[#FAFAF7] rounded-xl p-4 grid grid-cols-2 gap-2">
      {subjects.map((s) => (
        <div
          key={s.name}
          className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold"
          style={{
            background: s.status === "Bottleneck" ? "#F5A62315" : "#22c55e15",
            color: s.status === "Bottleneck" ? "#E08A05" : "#16a34a",
            border: `1px solid ${s.status === "Bottleneck" ? "#F5A62330" : "#22c55e30"}`,
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
            style={{ background: s.status === "Bottleneck" ? "#F5A623" : "#22c55e" }}
          />
          <div>
            <div>{s.name}</div>
            <div className="font-normal opacity-70">{s.status}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

const cards = [
  {
    badge: "01",
    title: "The Target Metrics",
    description:
      "We calculate the exact point delta between your current baseline and the score thresholds for your target colleges — so every session has a number to hit.",
    visual: <ScoreDeltaVisual />,
  },
  {
    badge: "02",
    title: "The Timeline Calibration",
    description:
      "We map high-yield weekly milestones across your exact test runway — pacing content and practice tests so you peak on test day, not before it.",
    visual: <TimelineVisual />,
  },
  {
    badge: "03",
    title: "The Weakness Deep-Dive",
    description:
      "We isolate the precise section bottlenecks holding your score back — English, Math, Reading, or Science — and match you to a specialist who owns that exact content.",
    visual: <SubjectTagsVisual />,
  },
];

export default function BespokeBlueprint() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-[#FAFAF7] py-24 px-5" id="why-custom">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-[#F5A623]/10 text-[#F5A623] text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6 border border-[#F5A623]/20"
          >
            The Blueprint
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-bold text-charcoal mb-5"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Your Bespoke ACT Blueprint
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="text-charcoal/60 text-lg max-w-3xl mx-auto font-sans leading-relaxed"
          >
            We don&apos;t sell generic hourly blocks. We analyze your diagnostic
            profile, your target score, and your exact timeline — then architect
            a custom 1-on-1 expert program engineered for peak score
            performance. Your blueprint is built for you, and only you.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.13, duration: 0.65, ease: "easeOut" }}
              whileHover={{ y: -5, transition: { duration: 0.25 } }}
              className="bg-white rounded-2xl p-7 flex flex-col"
              style={{ boxShadow: "0 4px 30px rgba(0,0,0,0.07)" }}
            >
              <div
                className="inline-flex w-10 h-10 items-center justify-center rounded-full text-white text-sm font-bold mb-5 flex-shrink-0"
                style={{
                  background: "linear-gradient(135deg, #F5A623, #FF6B35)",
                  boxShadow: "0 3px 15px rgba(245,166,35,0.3)",
                }}
              >
                {card.badge}
              </div>
              <h3
                className="font-serif text-xl font-bold text-charcoal mb-3"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {card.title}
              </h3>
              <p className="font-sans text-charcoal/60 text-sm leading-relaxed">
                {card.description}
              </p>
              {card.visual}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
