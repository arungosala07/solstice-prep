"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function LearnPage() {
  useEffect(() => {
    let fired = false;
    const handleMessage = (event: MessageEvent) => {
      console.log("[ROASForm postMessage]", event.origin, event.data);
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

  const blue = "#2563EB";
  const navy = "#0f1f3d";
  const bg = "#EEF2F7";
  const muted = "rgba(15,31,61,0.5)";

  return (
    <>
      <style>{`
        *{box-sizing:border-box;margin:0;padding:0;}
        body{background:${bg};font-family:'Inter',system-ui,sans-serif;-webkit-font-smoothing:antialiased;}
        @keyframes bounceY{0%,100%{transform:translateY(0);}50%{transform:translateY(-8px);}}
        @keyframes marqueeLeft{0%{transform:translateX(0);}100%{transform:translateX(-50%);}}
      `}</style>

      <div style={{ minHeight: "100vh", background: bg }}>

        {/* ── HERO ──────────────────────────────────────────────────── */}
        <section style={{ padding: "48px 20px 32px", textAlign: "center", maxWidth: 640, margin: "0 auto" }}>

          {/* Badge */}
          <div style={{ display: "inline-flex", marginBottom: 24 }}>
            <span style={{
              background: "rgba(37,99,235,0.1)", color: blue,
              fontSize: 11, fontWeight: 700, letterSpacing: "0.12em",
              textTransform: "uppercase", padding: "8px 18px",
              borderRadius: 999,
            }}>
              Attention Parents of College-Bound High Schoolers
            </span>
          </div>

          {/* Headline — Inter black, inline accent */}
          <h1 style={{
            fontFamily: "'Inter', system-ui, sans-serif",
            fontWeight: 900, lineHeight: 1.08, color: navy,
            fontSize: "clamp(30px, 8vw, 52px)",
            marginBottom: 20, letterSpacing: "-0.02em",
          }}>
            We Guarantee Your Child a{" "}
            <span style={{ color: blue }}>34+ ACT Score</span>{" "}
            or We Work{" "}
            <span style={{ color: blue }}>For Free</span>
          </h1>

          {/* Subtext — bold, dark */}
          <p style={{
            fontSize: "clamp(15px, 4vw, 17px)", fontWeight: 700,
            color: navy, lineHeight: 1.5, marginBottom: 28,
          }}>
            Fill out the form below to book your FREE Strategy Call.
          </p>

          {/* Arrow */}
          <svg style={{ display: "block", margin: "0 auto", animation: "bounceY 1.4s ease-in-out infinite" }}
            width="28" height="28" fill="none" viewBox="0 0 24 24" stroke={blue} strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </section>

        {/* ── FORM ──────────────────────────────────────────────────── */}
        <section style={{ padding: "0 16px 56px" }}>
          <div style={{ maxWidth: 640, margin: "0 auto" }}>
            <iframe
              src="https://my.roasform.com/f/63e80b-8f3987-51eefc"
              style={{ width: "100%", height: 600, border: "none", borderRadius: 12,
                boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}
              title="Solstice Prep Strategy Call Form"
            />
          </div>
        </section>

        {/* ── STATS ─────────────────────────────────────────────────── */}
        <section style={{ padding: "48px 20px", textAlign: "center" }}>
          <div style={{ maxWidth: 400, margin: "0 auto", display: "flex", flexDirection: "column", gap: 32 }}>
            {[
              { num: "35+",  label: "Minimum tutor ACT score" },
              { num: "94%",  label: "Of students improved their score" },
              { num: "4+",   label: "Average composite score increase" },
            ].map(s => (
              <div key={s.num}>
                <p style={{ fontSize: "clamp(52px,14vw,72px)", fontWeight: 900, color: blue,
                  lineHeight: 1, marginBottom: 6, letterSpacing: "-0.02em" }}>{s.num}</p>
                <p style={{ fontSize: 15, color: muted, fontWeight: 500 }}>{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── TESTIMONIALS ──────────────────────────────────────────── */}
        <section style={{ background: navy, padding: "48px 20px" }}>
          <p style={{ textAlign: "center", color: "rgba(255,255,255,.4)", fontSize: 11,
            fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 32 }}>
            ★ What Parents Are Saying ★
          </p>
          <div style={{ maxWidth: 640, margin: "0 auto", display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { q: "My son went from a 26 to a 34 in just 8 weeks. The custom blueprint was unlike anything we'd tried before.", name: "Sarah M." },
              { q: "Solstice Prep gave us a real plan. My daughter hit her target score on her second attempt.", name: "James K." },
              { q: "We tried two other companies before Solstice Prep. The difference was night and day. Worth every penny.", name: "David L." },
            ].map(t => (
              <div key={t.name} style={{ background: "rgba(255,255,255,.06)",
                border: "1px solid rgba(255,255,255,.1)", borderRadius: 12, padding: "20px 20px 16px" }}>
                <div style={{ display: "flex", gap: 2, marginBottom: 10 }}>
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="14" height="14" fill="#F5A623" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p style={{ color: "rgba(255,255,255,.85)", fontSize: 15, lineHeight: 1.6, marginBottom: 12 }}>
                  &ldquo;{t.q}&rdquo;
                </p>
                <p style={{ color: blue, fontSize: 13, fontWeight: 700 }}>— {t.name}</p>
                <p style={{ color: "rgba(255,255,255,.3)", fontSize: 12, marginTop: 2 }}>Parent</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── FOOTER ────────────────────────────────────────────────── */}
        <footer style={{ background: "#0a1628", padding: "24px 20px", textAlign: "center" }}>
          <p style={{ color: "rgba(255,255,255,.3)", fontSize: 13, marginBottom: 6 }}>
            © 2025 Solstice Prep. All rights reserved.&nbsp;|&nbsp;
            <a href="mailto:info@solsticeprep.com" style={{ color: "rgba(255,255,255,.3)" }}>info@solsticeprep.com</a>
          </p>
          <p style={{ color: "rgba(255,255,255,.15)", fontSize: 11, maxWidth: 520, margin: "0 auto", lineHeight: 1.6 }}>
            The Solstice Score Commitment requires 100% session attendance and completion of all assigned practice exams. Solstice Prep reserves the right to determine eligibility based on documented program compliance.
          </p>
        </footer>

      </div>

      {/* Meta Pixel for /learn */}
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
          src="https://www.facebook.com/tr?id=1581402943648702&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>
    </>
  );
}
