"use client";


const C = {
  navy:  "#1a2744",
  amber: "#F5A623",
  bg:    "#F8F9FA",
  dark:  "#111827",
  white: "#ffffff",
  muted: "rgba(26,39,68,0.5)",
};

export default function LearnPage() {
  return (
    <>
      <style>{`
        *{box-sizing:border-box;margin:0;padding:0;}
        body{background:${C.bg};font-family:var(--font-inter,system-ui,sans-serif);-webkit-font-smoothing:antialiased;}
        @keyframes bounce{0%,100%{transform:translateY(0);}50%{transform:translateY(-10px);}}
      `}</style>

      <div style={{ minHeight: "100vh", background: C.bg }}>

        {/* ══ HERO ══════════════════════════════════════════════════════════════ */}
        <section style={{ background: C.bg, padding: "56px 20px 36px", textAlign: "center" }}>
          <div style={{ display: "inline-flex", marginBottom: 28 }}>
            <span style={{
              border: "1.5px solid rgba(26,39,68,.22)", color: C.navy,
              fontSize: 11, fontWeight: 700, letterSpacing: "0.13em",
              textTransform: "uppercase", padding: "9px 20px", borderRadius: 999, background: C.white,
            }}>
              ATTENTION PARENTS OF COLLEGE-BOUND HIGH SCHOOLERS
            </span>
          </div>

          <h1 style={{ fontFamily: "var(--font-playfair,Georgia,serif)", color: C.navy, fontWeight: 900, lineHeight: 1.1 }}>
            <span style={{ display: "block", fontSize: "clamp(32px,6.5vw,56px)", marginBottom: 4 }}>We Guarantee Your Child a</span>
            <span style={{ display: "block", fontSize: "clamp(32px,6.5vw,56px)", marginBottom: 4 }}>34+ ACT Score or We Keep Working</span>
            <span style={{ display: "block", fontSize: "clamp(46px,9vw,76px)", color: C.amber }}>FOR FREE</span>
          </h1>

          <p style={{ color: C.muted, fontSize: "clamp(15px,3vw,18px)", fontWeight: 500, marginTop: 22, marginBottom: 30 }}>
            Fill out the form below to book your FREE Strategy Call.
          </p>

          <svg style={{ display: "block", margin: "0 auto", animation: "bounce 1.4s ease-in-out infinite" }}
            width="32" height="32" fill="none" viewBox="0 0 24 24" stroke={C.navy} strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </section>

        {/* ══ ROASFORM ═════════════════════════════════════════════════════════ */}
        <section style={{ background: C.bg, padding: "8px 20px 72px" }}>
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            <iframe
              src="https://my.roasform.com/f/63e80b-8f3987-51eefc"
              style={{ width: "100%", height: 900, border: "none", borderRadius: 8 }}
              title="Solstice Prep Strategy Call Form"
            />
          </div>
        </section>

        {/* ══ STATS ═════════════════════════════════════════════════════════════ */}
        <section style={{ background: C.bg, borderTop: "1px solid rgba(26,39,68,.08)", padding: "56px 20px" }}>
          <div style={{ maxWidth: 700, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24, textAlign: "center" }}>
            {[
              { num: "35+", label: "Minimum tutor ACT score" },
              { num: "94%", label: "Of students improved their score" },
              { num: "4+",  label: "Average composite score increase" },
            ].map(s => (
              <div key={s.num}>
                <p style={{ fontFamily: "var(--font-playfair,Georgia,serif)", fontSize: "clamp(38px,8vw,58px)", fontWeight: 900, color: C.navy, lineHeight: 1, marginBottom: 10 }}>{s.num}</p>
                <p style={{ fontSize: "clamp(12px,2.5vw,14px)", color: C.muted, lineHeight: 1.4 }}>{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ══ TESTIMONIALS ══════════════════════════════════════════════════════ */}
        <section style={{ background: C.navy, padding: "56px 20px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <p style={{ textAlign: "center", color: "rgba(255,255,255,.45)", fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 36 }}>
              ★ What Parents Are Saying ★
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 20 }}>
              {[
                { q: "My son went from a 26 to a 34 in just 8 weeks. The custom blueprint was unlike anything we'd tried before.", name: "Sarah M.", role: "Parent" },
                { q: "Solstice Prep gave us a real plan. My daughter hit her target score on her second attempt.", name: "James K.", role: "Parent" },
                { q: "We tried two other companies before Solstice Prep. The difference was night and day. Worth every penny.", name: "David L.", role: "Parent" },
              ].map(t => (
                <div key={t.name} style={{ background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.1)", borderRadius: 16, padding: "24px 24px 20px" }}>
                  <div style={{ display: "flex", gap: 2, marginBottom: 14 }}>
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="16" height="16" fill={C.amber} viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p style={{ color: "rgba(255,255,255,.8)", fontSize: 15, lineHeight: 1.65, marginBottom: 16 }}>&ldquo;{t.q}&rdquo;</p>
                  <p style={{ color: C.amber, fontSize: 13, fontWeight: 700 }}>— {t.name}</p>
                  <p style={{ color: "rgba(255,255,255,.3)", fontSize: 12, marginTop: 2 }}>{t.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ FOOTER ════════════════════════════════════════════════════════════ */}
        <footer style={{ background: C.dark, padding: "24px 20px", textAlign: "center", borderTop: "1px solid rgba(255,255,255,.06)" }}>
          <p style={{ color: "rgba(255,255,255,.35)", fontSize: 13, marginBottom: 8 }}>
            © 2025 Solstice Prep. All rights reserved.&nbsp;|&nbsp;
            <a href="mailto:info@solsticeprep.com" style={{ color: "rgba(255,255,255,.35)" }}>info@solsticeprep.com</a>
          </p>
          <p style={{ color: "rgba(255,255,255,.18)", fontSize: 11, maxWidth: 580, margin: "0 auto", lineHeight: 1.6 }}>
            The Solstice Score Commitment requires 100% session attendance and completion of all assigned practice exams. Solstice Prep reserves the right to determine eligibility based on documented program compliance.
          </p>
        </footer>

      </div>

    </>
  );
}
