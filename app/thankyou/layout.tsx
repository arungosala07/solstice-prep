import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Confirm Your Call | Solstice Prep",
  robots: { index: false, follow: false },
};

export default function ThankYouLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
