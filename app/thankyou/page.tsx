"use client";

import { useState, useEffect, useRef, Suspense } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { SunIcon } from "@/components/icons/SunIcon";

// ─── CONFIG CONSTANTS — swap these before going live ────────────────────────
const CONFIRM_PHONE    = "+1XXXXXXXXXX";       // Arun's number for the confirm SMS
const CONFIRM_TEXT_BODY = "YES";               // Body of the confirm SMS
const PREP_FORM_URL    = "https://REPLACE_ME"; // Pre-call intake form URL
const RESCHEDULE_URL   = "https://REPLACE_ME"; // Booking / reschedule link
const SHOW_VIDEO       = false;                // Flip to true when founder video is ready

// ⚠️  META PIXEL — disabled by default.
// Enabling this may double-count against the Conversions API setup on this account.
// Requires server-side event deduplication (event_id matching) before being turned on.
// Pixel ID: 1581402943648702
const FIRE_PIXEL = false;
// ────────────────────────────────────────────────────────────────────────────

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: "easeOut" as const },
  }),
};

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } } }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const FAQ_ITEMS = [
  {
    q: "How long is the call?",
    a: "About 20 to 30 minutes. We keep it focused and we don't run long.",
  },
  {
    q: "Is this a sales call?",
    a: "Partly, and we'd rather just say so. We spend most of it understanding your student and building out a plan. If it looks like a fit, we'll walk you through what working together looks like. If it doesn't, we'll tell you that instead.",
  },
  {
    q: "Do we need to prepare anything?",
    a: "Just the prep form above, plus a recent score report if your student has taken the ACT or PSAT. If they haven't tested yet, that's completely fine.",
  },
  {
    q: "How does the tutoring actually work?",
    a: "One-on-one over Zoom, matched with a tutor chosen for your student's specific gaps. Every session is live and individual. We don't do group classes or recorded lessons.",
  },
  {
    q: "What changed with the ACT in 2026?",
    a: "The composite score is now English, Math, and Reading only. Science is optional and no longer counts toward the composite. That makes Math a full third of the score, which changes what's worth prioritizing. We'll walk through what that means for your student.",
  },
  {
    q: "How much does it cost?",
    a: "It depends on how many hours your student actually needs, which is what the call is for. We'll recommend a specific plan based on their starting point and target score rather than quoting a number that may not fit.",
  },
  {
    q: "What if we can't make our scheduled time?",
    a: `Just text us at ${CONFIRM_PHONE} and we'll move it. We'd much rather reschedule than have you miss it.`,
  },
];

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="divide-y divide-charcoal/10">
      {FAQ_ITEMS.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
            aria-controls={`faq-answer-${i}`}
            className="w-full flex items-center justify-between py-5 text-left gap-4 group"
          >
            <span className="font-sans font-semibold text-charcoal text-[15px] leading-snug group-hover:text-amber-600 transition-colors">
              {item.q}
            </span>
            <span
              className={`flex-shrink-0 w-6 h-6 rounded-full border border-charcoal/20 flex items-center justify-center text-charcoal/50 transition-transform duration-300 ${openIndex === i ? "rotate-45" : ""}`}
            >
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M5 1v8M1 5h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </span>
          </button>
          <div
            id={`faq-answer-${i}`}
            role="region"
            className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? "max-h-96 pb-5" : "max-h-0"}`}
          >
            <p className="font-sans text-charcoal/65 text-[15px] leading-relaxed">{item.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function ThankYouContent() {
  const searchParams = useSearchParams();
  const rawName = searchParams.get("name") ?? "";
  const name = rawName.replace(/[^a-zA-Z\s'-]/g, "").trim().slice(0, 60);

  const confirmHref = `sms:${CONFIRM_PHONE}?body=${encodeURIComponent(CONFIRM_TEXT_BODY)}`;

  // Meta Pixel — fires once on mount, only if FIRE_PIXEL is true
  useEffect(() => {
    if (!FIRE_PIXEL) return;
    // ⚠️  Deduplication required before enabling. See constant above.
    // if (typeof window !== "undefined" && typeof (window as any).fbq === "function") {
    //   (window as any).fbq("track", "Schedule");
    // }
  }, []);

  return (
    <div className="min-h-screen bg-cream font-sans">

      {/* ── HERO ────────────────────────────────────────────────────────────── */}
      <section className="bg-charcoal pt-16 pb-14 px-5 text-center">
        {/* Logo */}
        <motion.div
          custom={0} initial="hidden" animate="visible" variants={fadeUp}
          className="flex items-center justify-center gap-2.5 mb-10"
        >
          <SunIcon className="w-8 h-8 text-amber-500" />
          <span className="font-serif text-xl font-bold text-white" style={{ fontFamily: "var(--font-playfair)" }}>
            Solstice Prep
          </span>
        </motion.div>

        {/* Badge */}
        <motion.div custom={1} initial="hidden" animate="visible" variants={fadeUp} className="mb-5">
          <span className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            Your call is not yet confirmed
          </span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          custom={2} initial="hidden" animate="visible" variants={fadeUp}
          className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          You&apos;re almost in —<br className="sm:hidden" /> 3 quick steps
        </motion.h1>

        {/* Subhead */}
        <motion.p
          custom={3} initial="hidden" animate="visible" variants={fadeUp}
          className="font-sans text-white/60 text-base sm:text-lg max-w-md mx-auto leading-relaxed"
        >
          {name
            ? `Thanks, ${name} — follow the steps below to lock in your call.`
            : "Follow the steps below to lock in your strategy call."}
        </motion.p>
      </section>

      {/* ── VIDEO SLOT (controlled by SHOW_VIDEO) ───────────────────────── */}
      {SHOW_VIDEO && (
        <section className="max-w-2xl mx-auto px-5 -mt-6 mb-2">
          <div className="relative w-full rounded-2xl overflow-hidden bg-charcoal/10" style={{ paddingBottom: "56.25%" }}>
            {/* Founder confirmation video goes here later */}
          </div>
        </section>
      )}

      {/* ── 3 STEPS ─────────────────────────────────────────────────────────── */}
      <section className="max-w-2xl mx-auto px-5 py-14">
        <div className="flex flex-col gap-8">

          {/* Step 1 */}
          <Section>
            <div className="bg-white rounded-2xl p-7 shadow-sm border border-charcoal/6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-full bg-amber-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">1</div>
                <h2 className="font-serif font-bold text-charcoal text-xl leading-tight" style={{ fontFamily: "var(--font-playfair)" }}>
                  Tap below and reply YES to confirm
                </h2>
              </div>
              <a
                href={confirmHref}
                className="flex items-center justify-center gap-2 w-full bg-amber-500 text-white font-bold text-base rounded-xl py-4 px-6 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 mb-4"
                style={{ boxShadow: "0 4px 20px rgba(245,166,35,0.35)" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                </svg>
                Confirm via Text
              </a>
              <p className="text-charcoal/50 text-sm text-center">Takes 5 seconds and locks in your spot.</p>
            </div>
          </Section>

          {/* Step 2 */}
          <Section>
            <div className="bg-white rounded-2xl p-7 shadow-sm border border-charcoal/6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-full bg-charcoal/10 flex items-center justify-center text-charcoal font-bold text-sm flex-shrink-0">2</div>
                <h2 className="font-serif font-bold text-charcoal text-xl leading-tight" style={{ fontFamily: "var(--font-playfair)" }}>
                  Accept the calendar invite
                </h2>
              </div>
              <p className="text-charcoal/65 text-[15px] leading-relaxed mb-5">
                We just emailed you a calendar invite. Some email apps hide invites from new senders, so open it and tap <strong className="text-charcoal font-semibold">&ldquo;I know the sender&rdquo;</strong> — otherwise the call won&apos;t show up on your calendar and it&apos;s easy to miss.
              </p>

              {/* Mock calendar warning — visually inert illustration */}
              <div className="rounded-xl bg-gray-100 border border-gray-200 p-4 select-none" aria-hidden="true">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-gray-300 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-gray-800 text-xs font-semibold leading-snug mb-0.5">Unknown sender: not added to Calendar yet</p>
                    <p className="text-gray-500 text-xs leading-relaxed">
                      It looks like you&apos;ve never been in contact with this sender, so this event hasn&apos;t been added to your calendar.
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 pl-11">
                  <span className="text-[11px] font-semibold text-blue-400 border border-blue-200 rounded px-2 py-1 bg-white cursor-default opacity-60">
                    I know the sender
                  </span>
                  <span className="text-[11px] font-semibold text-gray-400 border border-gray-200 rounded px-2 py-1 bg-white cursor-default opacity-60">
                    Report spam
                  </span>
                </div>
                <p className="text-gray-400 text-[10px] text-center mt-3 italic">— this is what to look for in your email —</p>
              </div>
            </div>
          </Section>

          {/* Step 3 */}
          <Section>
            <div className="bg-white rounded-2xl p-7 shadow-sm border border-charcoal/6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-full bg-charcoal/10 flex items-center justify-center text-charcoal font-bold text-sm flex-shrink-0">3</div>
                <h2 className="font-serif font-bold text-charcoal text-xl leading-tight" style={{ fontFamily: "var(--font-playfair)" }}>
                  Fill out a quick prep form
                </h2>
              </div>
              <p className="text-charcoal/65 text-[15px] leading-relaxed mb-5">
                Takes 5 minutes and lets us skip the small talk and get straight to a plan for your child.
              </p>
              <a
                href={PREP_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full border-2 border-charcoal/15 text-charcoal font-bold text-base rounded-xl py-4 px-6 transition-all duration-200 hover:border-amber-500 hover:text-amber-600 active:scale-95"
              >
                Start Prep Form →
              </a>
            </div>
          </Section>
        </div>
      </section>

      {/* ── DECISION MAKER PANEL ────────────────────────────────────────────── */}
      <Section className="px-5 mb-14">
        <div className="max-w-2xl mx-auto bg-charcoal rounded-2xl p-8 md:p-10">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-amber-500 text-xl">✦</span>
            <h2 className="font-serif font-bold text-white text-xl md:text-2xl leading-tight" style={{ fontFamily: "var(--font-playfair)" }}>
              Please have everyone involved in the decision on the call
            </h2>
          </div>
          <p className="text-white/65 text-[15px] leading-relaxed mb-7">
            If there&apos;s another parent or guardian who&apos;ll be part of this decision, please have them on the call with you. We cover a lot in 20 minutes — where your child is now, what&apos;s realistic for their target score, and exactly how we&apos;d get them there.
            <br /><br />
            It&apos;s much easier to hear it directly than to have it relayed secondhand, and it means you can get your questions answered in one sitting instead of booking a second call.
          </p>

          {/* Checklist */}
          <ul className="flex flex-col gap-3">
            {[
              "Both parents or guardians, if both are involved in the decision",
              "Your student is welcome but not required",
              "A recent ACT or PSAT score report, if you have one",
              "Your target test date and any schools you're aiming for",
              "20 quiet minutes and a stable connection",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                    <path d="M1.5 4.5L3.5 6.5L7.5 2.5" stroke="#F5A623" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="text-white/75 text-[14px] leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* ── WHAT HAPPENS ON THE CALL ────────────────────────────────────────── */}
      <Section className="px-5 mb-14">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif font-bold text-charcoal text-2xl mb-8 text-center" style={{ fontFamily: "var(--font-playfair)" }}>
            What happens on the call
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                n: "01",
                title: "We look at where your student is now",
                body: "Current scores, timeline, and which sections are actually costing them points.",
              },
              {
                n: "02",
                title: "We build the plan",
                body: "A specific, section-by-section plan for the score they're going for.",
              },
              {
                n: "03",
                title: "We tell you if we're a fit",
                body: "If we're the right fit we'll talk about working together. If we're not, we'll say so.",
              },
            ].map((item) => (
              <div key={item.n} className="bg-white rounded-2xl p-6 border border-charcoal/6 shadow-sm">
                <div className="text-amber-500 font-bold text-xs tracking-widest mb-3">{item.n}</div>
                <h3 className="font-serif font-bold text-charcoal text-[16px] leading-snug mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
                  {item.title}
                </h3>
                <p className="text-charcoal/55 text-[13px] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── FAQ ─────────────────────────────────────────────────────────────── */}
      <Section className="px-5 mb-16">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif font-bold text-charcoal text-2xl mb-8 text-center" style={{ fontFamily: "var(--font-playfair)" }}>
            Questions parents usually ask
          </h2>
          <div className="bg-white rounded-2xl border border-charcoal/6 shadow-sm px-7 py-2">
            <FAQAccordion />
          </div>
        </div>
      </Section>

      {/* ── STICKY CONFIRM BUTTON (mobile) ──────────────────────────────────── */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-cream/90 backdrop-blur border-t border-charcoal/8 sm:hidden z-40">
        <a
          href={confirmHref}
          className="flex items-center justify-center gap-2 w-full bg-amber-500 text-white font-bold text-base rounded-xl py-4 px-6"
          style={{ boxShadow: "0 4px 20px rgba(245,166,35,0.4)" }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
          </svg>
          Confirm via Text
        </a>
      </div>

      {/* ── FOOTER ──────────────────────────────────────────────────────────── */}
      <footer className="bg-charcoal py-8 px-5 text-center pb-28 sm:pb-8">
        <div className="flex items-center justify-center gap-2 mb-3">
          <SunIcon className="w-5 h-5 text-amber-500" />
          <span className="font-serif text-sm font-bold text-white/70" style={{ fontFamily: "var(--font-playfair)" }}>Solstice Prep</span>
        </div>
        <p className="text-white/30 text-xs">© 2026 Solstice Prep. All rights reserved.</p>
        <p className="text-white/20 text-xs mt-1">
          Need to reschedule?{" "}
          <a href={RESCHEDULE_URL} className="underline hover:text-white/40 transition-colors">
            Click here
          </a>{" "}
          or text {CONFIRM_PHONE}.
        </p>
      </footer>

    </div>
  );
}

// Wrap in Suspense because useSearchParams requires it in Next.js App Router
export default function ThankYouPage() {
  return (
    <Suspense>
      <ThankYouContent />
    </Suspense>
  );
}
