import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The 12 Startup Challenge — Nomagogo",
  description: "Built in public. Full code. No excuses.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
