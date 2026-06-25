"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 1, suffix: "%", prefix: "Top ", label: "Every mentor verified" },
  { value: 500, suffix: "+", prefix: "", label: "Custom blueprints built" },
  { value: 94, suffix: "%", prefix: "", label: "Reach their target score" },
  { value: 100, suffix: "%", prefix: "", label: "1-on-1, custom-matched" },
];

function AnimatedNumber({
  value,
  prefix,
  suffix,
  animate,
}: {
  value: number;
  prefix: string;
  suffix: string;
  animate: boolean;
}) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!animate) return;
    const duration = 1800;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current = Math.min(current + increment, value);
      setDisplay(Math.floor(current));
      if (current >= value) clearInterval(timer);
    }, duration / steps);
    return () => clearInterval(timer);
  }, [animate, value]);

  return (
    <span>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

export default function StatsBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-[#1C1C1E] py-20 px-5" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="text-center"
            >
              <div
                className="font-serif text-5xl md:text-6xl font-bold mb-3"
                style={{
                  fontFamily: "var(--font-playfair)",
                  background: "linear-gradient(135deg, #F5A623, #FF6B35)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                <AnimatedNumber
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  animate={inView}
                />
              </div>
              <p className="font-sans text-white/50 text-sm tracking-wide">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
