"use client";

import { useEffect } from "react";
import Script from "next/script";

const amber = "#C4820A";
const navy  = "#1a2744";
const bg    = "#FAFAF7";
const muted = "rgba(26,39,68,0.5)";

function Stars({ rating }: { rating: number }) {
  return (
    <div style={{ display: "flex", gap: 3, alignItems: "center" }}>
      {[1, 2, 3, 4, 5].map(i => {
        const fill = Math.min(1, Math.max(0, rating - (i - 1)));
        const id = `grad-${rating}-${i}`;
        return (
          <svg key={i} width="16" height="16" viewBox="0 0 20 20">
            <defs>
              <linearGradient id={id}>
                <stop offset={`${fill * 100}%`} stopColor={amber} />
                <stop offset={`${fill * 100}%`} stopColor="#d1d5db" />
              </linearGradient>
            </defs>
            <path fill={`url(#${id})`}
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            />
          </svg>
        );
      })}
    </div>
  );
}

export default function LearnPage() {
  useEffect(() => {
    let fired = false;
    const handleMessage = (event: MessageEvent) => {
      if (fired) return;
      try {
        const data = typeof event.data === "string" ? JSON.parse(event.data) : event.data;
        const isComplete =
          data?.type === "form_complete" || data?.type === "form_submitted" ||
          data?.event === "submitted" || data?.event === "complete" ||
          data?.status === "submitted" ||
          JSON.stringify(data).toLowerCase().includes("submit") ||
          JSON.stringify(data).toLowerCase().includes("complete");
        if (isComplete) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const fbq = (window as any).fbq;
          if (typeof fbq === "function") { fbq("track", "Lead"); fired = true; }
        }
      } catch { /* ignore */ }
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <>
      <style>{`
        *{box-sizing:border-box;margin:0;padding:0;}
        body{background:${bg};font-family:'Inter',system-ui,sans-serif;-webkit-font-smoothing:antialiased;}
        @keyframes bounceY{0%,100%{transform:translateY(0);}50%{transform:translateY(-8px);}}
      `}</style>

      <div style={{ minHeight: "100vh", background: bg }}>

        {/* ── HERO ──────────────────────────────────────────────── */}
        <section style={{ padding: "36px 20px 20px", textAlign: "center", maxWidth: 620, margin: "0 auto" }}>

          <div style={{ display: "inline-flex", marginBottom: 14 }}>
            <span style={{
              background: "rgba(196,130,10,0.08)", color: "#9a6500",
              fontSize: 10, fontWeight: 800, letterSpacing: "0.12em",
              textTransform: "uppercase", padding: "7px 16px", borderRadius: 999,
              border: "1px solid rgba(196,130,10,0.2)",
            }}>
              Attention Parents of College-Bound High Schoolers
            </span>
          </div>

          <h1 style={{
            fontFamily: "'Inter', system-ui, sans-serif",
            fontWeight: 900, lineHeight: 1.05, color: navy,
            fontSize: "clamp(30px, 8vw, 48px)",
            marginBottom: 14, letterSpacing: "-0.025em",
          }}>
            We Guarantee Your Child a <span style={{ color: amber }}>34+ ACT Score</span> or We Keep Working <span style={{ color: amber }}>For Free</span>
          </h1>

          <p style={{
            fontSize: "clamp(14px, 3.5vw, 16px)", fontWeight: 700,
            color: navy, lineHeight: 1.5, marginBottom: 18,
          }}>
            Fill out the form below to book your FREE Strategy Call.
          </p>

          <svg style={{ display: "block", margin: "0 auto", animation: "bounceY 1.4s ease-in-out infinite" }}
            width="24" height="24" fill="none" viewBox="0 0 24 24" stroke={amber} strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </section>

        {/* ── FORM ──────────────────────────────────────────────── */}
        <section style={{ padding: "12px 16px 56px" }}>
          <div style={{ maxWidth: 580, margin: "0 auto" }}>
            <iframe
              src="https://my.roasform.com/f/63e80b-8f3987-51eefc"
              style={{
                width: "100%", height: 540, border: "none", borderRadius: 14,
                boxShadow: "0 6px 32px rgba(26,39,68,0.09)",
              }}
              title="Solstice Prep Strategy Call Form"
            />
          </div>
        </section>

        {/* ── STATS ─────────────────────────────────────────────── */}
        <section style={{ padding: "56px 24px", textAlign: "center", borderTop: "1px solid rgba(26,39,68,.07)" }}>
          <div style={{ maxWidth: 360, margin: "0 auto", display: "flex", flexDirection: "column", gap: 36 }}>
            {[
              { num: "35+", label: "Minimum tutor ACT score" },
              { num: "94%", label: "Of students improved their score" },
              { num: "4+",  label: "Average composite score increase" },
            ].map(s => (
              <div key={s.num}>
                <p style={{
                  fontSize: "clamp(54px, 15vw, 72px)", fontWeight: 900, color: amber,
                  lineHeight: 1, marginBottom: 8, letterSpacing: "-0.02em",
                  fontFamily: "'Inter', system-ui, sans-serif",
                }}>{s.num}</p>
                <p style={{ fontSize: 15, color: muted, fontWeight: 500 }}>{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── TESTIMONIALS ──────────────────────────────────────── */}
        <section style={{ background: navy, padding: "56px 20px" }}>
          <p style={{
            textAlign: "center", color: "rgba(255,255,255,.35)", fontSize: 11,
            fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 36,
          }}>
            ✦ &nbsp;What Parents Are Saying&nbsp; ✦
          </p>
          <div style={{ maxWidth: 640, margin: "0 auto", display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              {
                rating: 5,
                q: "My son went from a 26 to a 34 in just 8 weeks. The tutor knew exactly where he was losing points and fixed it fast.",
                name: "Sarah M.", detail: "Parent of junior, Chicago IL",
              },
              {
                rating: 5,
                q: "Worth every penny. My daughter had plateaued for months with another service. Solstice built her a real plan and she hit her target on the next test.",
                name: "James K.", detail: "Parent of senior, Houston TX",
              },
              {
                rating: 4.7,
                q: "Great experience overall. The custom blueprint was more thorough than I expected and communication was excellent. Would have liked slightly more flexibility in scheduling.",
                name: "Rachel T.", detail: "Parent of sophomore, Atlanta GA",
              },
            ].map(t => (
              <div key={t.name} style={{
                background: "rgba(255,255,255,.05)",
                border: "1px solid rgba(255,255,255,.09)",
                borderRadius: 14, padding: "22px 20px 18px",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                  <Stars rating={t.rating} />
                  <span style={{ color: "rgba(255,255,255,.3)", fontSize: 12 }}>{t.rating.toFixed(1)}</span>
                </div>
                <p style={{ color: "rgba(255,255,255,.82)", fontSize: 15, lineHeight: 1.65, marginBottom: 14 }}>
                  &ldquo;{t.q}&rdquo;
                </p>
                <p style={{ color: amber, fontSize: 13, fontWeight: 700 }}>{t.name}</p>
                <p style={{ color: "rgba(255,255,255,.28)", fontSize: 12, marginTop: 3 }}>{t.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── FOOTER ────────────────────────────────────────────── */}
        <footer style={{ background: "#0f1623", padding: "28px 20px", textAlign: "center" }}>
          <p style={{ color: "rgba(255,255,255,.28)", fontSize: 13, marginBottom: 6 }}>
            © 2025 Solstice Prep. All rights reserved.&nbsp;|&nbsp;
            <a href="mailto:info@solsticeprep.com" style={{ color: "rgba(255,255,255,.28)" }}>info@solsticeprep.com</a>
          </p>
          <p style={{ color: "rgba(255,255,255,.13)", fontSize: 11, maxWidth: 520, margin: "0 auto", lineHeight: 1.6 }}>
            The Solstice Score Commitment requires 100% session attendance and completion of all assigned practice exams. Solstice Prep reserves the right to determine eligibility based on documented program compliance.
          </p>
        </footer>

      </div>

      <Script
        id="meta-pixel-learn"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1581402943648702');
            fbq('track', 'PageView');
          `,
        }}
      />
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img height="1" width="1" style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=1581402943648702&ev=PageView&noscript=1" alt=""
        />
      </noscript>
    </>
  );
}
