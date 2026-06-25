"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const tutors = [
  {
    initials: "SM",
    name: "Sophie Matheson",
    score: "36",
    university: "MIT",
    specialty: "Math Specialist",
    gradients: "from-amber-400 to-orange-400",
    color: "#F5A623",
  },
  {
    initials: "EL",
    name: "Ethan Larkin",
    score: "35",
    university: "Duke University",
    specialty: "English Specialist",
    gradients: "from-orange-400 to-rose-400",
    color: "#FF6B35",
  },
  {
    initials: "CR",
    name: "Claire Renaud",
    score: "36",
    university: "University of Chicago",
    specialty: "Reading Specialist",
    gradients: "from-yellow-400 to-amber-500",
    color: "#F5A623",
  },
  {
    initials: "JP",
    name: "James Park",
    score: "35",
    university: "Vanderbilt University",
    specialty: "Science Specialist",
    gradients: "from-amber-500 to-orange-500",
    color: "#FF6B35",
  },
];

function TutorCard({ tutor, index }: { tutor: (typeof tutors)[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.12, duration: 0.65, ease: "easeOut" }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="bg-white rounded-2xl p-7 flex flex-col items-center text-center group cursor-default"
      style={{
        boxShadow: "0 4px 30px rgba(0,0,0,0.07)",
      }}
    >
      {/* Avatar */}
      <div className="relative mb-5">
        <div
          className={`w-20 h-20 rounded-full bg-gradient-to-br ${tutor.gradients} flex items-center justify-center text-white font-serif font-bold text-2xl`}
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {tutor.initials}
        </div>
        {/* Score Badge */}
        <div
          className="absolute -bottom-2 -right-2 w-9 h-9 rounded-full bg-[#1C1C1E] flex items-center justify-center text-white text-xs font-bold shadow-md"
          style={{ border: `2px solid ${tutor.color}` }}
        >
          {tutor.score}
        </div>
      </div>

      <h3
        className="font-serif font-bold text-lg text-charcoal mb-1"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        {tutor.name}
      </h3>
      <p className="text-sm text-charcoal/50 font-sans mb-3">{tutor.university}</p>

      <div
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide"
        style={{
          background: `${tutor.color}18`,
          color: tutor.color,
          border: `1px solid ${tutor.color}30`,
        }}
      >
        <span
          className="w-1.5 h-1.5 rounded-full"
          style={{ background: tutor.color }}
        />
        {tutor.specialty}
      </div>
    </motion.div>
  );
}

export default function Tutors() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-[#F5F5F0] py-24 px-5" id="tutors">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-[#F5A623]/10 text-[#F5A623] text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6 border border-[#F5A623]/20"
          >
            Our Mentors
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-bold text-charcoal mb-5"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Meet Our Top 1% Mentors
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="text-charcoal/60 text-lg max-w-2xl mx-auto font-sans leading-relaxed"
          >
            Verified top scorers from the nation&apos;s best universities — each
            hand-selected for the section they teach. Real specialists, not
            generalists.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tutors.map((tutor, i) => (
            <TutorCard key={tutor.name} tutor={tutor} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
