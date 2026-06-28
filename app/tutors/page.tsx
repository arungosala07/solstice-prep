"use client";

export default function TutorsPage() {
  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body {
          background: #F8F9FA;
          font-family: 'Inter', system-ui, sans-serif;
          color: #1a2744;
          -webkit-font-smoothing: antialiased;
        }
      `}</style>

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />

      <div style={{ minHeight: "100vh", background: "#F8F9FA", fontFamily: "Inter, system-ui, sans-serif" }}>

        {/* BADGE */}
        <div style={{ padding: "48px 20px 0", textAlign: "center" }}>
          <span style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            border: "1.5px solid rgba(26,39,68,.22)", color: "#1a2744",
            fontSize: 11, fontWeight: 700, letterSpacing: "0.13em",
            textTransform: "uppercase", padding: "9px 20px",
            borderRadius: 999, background: "#fff",
          }}>
            ✦&nbsp; Now Recruiting Elite Tutors
          </span>
        </div>

        {/* HERO */}
        <section style={{ padding: "36px 24px 40px", textAlign: "center", maxWidth: 720, margin: "0 auto" }}>
          <h1 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: 900, lineHeight: 1.1, color: "#1a2744",
            fontSize: "clamp(34px, 7vw, 60px)", marginBottom: 20,
          }}>
            You Crushed the ACT.<br />Now Help Others Do the Same.
          </h1>
          <p style={{
            fontSize: "clamp(15px, 3vw, 17px)", color: "rgba(26,39,68,.5)",
            fontWeight: 500, lineHeight: 1.6, maxWidth: 500, margin: "0 auto",
          }}>
            Apply to join Solstice Prep&apos;s elite network of top 1% ACT tutors. Remote, flexible, $20&ndash;$40/hr.
          </p>
        </section>

        {/* FORM */}
        <section style={{ padding: "0 24px 72px" }}>
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            <iframe
              src="https://my.roasform.com/f/33b492-b4c4d3-c36e88"
              style={{ width: "100%", height: 700, border: "none", borderRadius: 8 }}
              title="Solstice Prep Tutor Application"
            />
          </div>
        </section>

        <p style={{ textAlign: "center", fontSize: 13, color: "rgba(26,39,68,.35)", padding: "0 24px 48px" }}>
          We review every application and typically respond within 48 hours.
        </p>

        {/* FOOTER */}
        <footer style={{
          background: "#111827", padding: "28px 24px", textAlign: "center",
          borderTop: "1px solid rgba(255,255,255,.06)",
        }}>
          <p style={{ color: "rgba(255,255,255,.3)", fontSize: 13, marginBottom: 4 }}>
            © 2025 Solstice Prep. All rights reserved.
          </p>
          <p style={{ color: "rgba(255,255,255,.3)", fontSize: 13 }}>
            <a href="mailto:info@solsticeprep.com" style={{ color: "rgba(255,255,255,.3)" }}>
              info@solsticeprep.com
            </a>
          </p>
        </footer>

      </div>
    </>
  );
}
