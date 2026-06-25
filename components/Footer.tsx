import { SunIcon } from "./icons/SunIcon";

const navLinks = [
  { label: "Why Custom", href: "#why-custom" },
  { label: "Our Tutors", href: "#tutors" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "The Solstice Commitment", href: "#commitment" },
  { label: "Book a Consultation", href: "#booking" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1C1C1E] pt-16 pb-8 px-5">
      <div className="max-w-6xl mx-auto">
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 pb-12 border-b border-white/10">
          {/* Logo + tagline */}
          <div className="flex-1 max-w-sm">
            <a href="#" className="flex items-center gap-2.5 mb-4">
              <SunIcon className="w-7 h-7 text-[#F5A623]" />
              <span
                className="font-serif text-xl font-bold text-white"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Solstice Prep
              </span>
            </a>
            <p className="font-sans text-white/45 text-sm leading-relaxed">
              Elite ACT prep. Custom blueprints, top 1% mentors, committed to
              your individual target score.
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-col sm:flex-row flex-wrap gap-x-8 gap-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-sans text-sm text-white/45 hover:text-[#F5A623] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <p className="font-sans text-white/30 text-xs">
            © Solstice Prep. All rights reserved.
          </p>
          <p className="font-sans text-white/25 text-xs">
            <a href="#" className="hover:text-white/50 transition-colors underline underline-offset-2">
              Terms &amp; Conditions Apply
            </a>{" "}
            — Personalized Solstice Score Commitment
          </p>
        </div>
      </div>
    </footer>
  );
}
