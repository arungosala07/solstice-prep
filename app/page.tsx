import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Tutors from "@/components/Tutors";
import HowItWorks from "@/components/HowItWorks";
import StatsBar from "@/components/StatsBar";
import BespokeBlueprint from "@/components/BespokeBlueprint";
import Commitment from "@/components/Commitment";
import DiagnosticBaseline from "@/components/DiagnosticBaseline";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#FAFAF7]">
      <Navbar />
      <Hero />
      <Tutors />
      <HowItWorks />
      <StatsBar />
      <BespokeBlueprint />
      <Commitment />
      <DiagnosticBaseline />
      <Booking />
      <Footer />
    </main>
  );
}
