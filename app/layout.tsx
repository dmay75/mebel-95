import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mebel_95 — мебель для вашего дома",
  description: "Демонстрация будущего интернет-магазина мебели Mebel 95.",
  icons: { icon: "/assets/mebel95-logo.jpg" },
  openGraph: {
    title: "Mebel_95 — мебель для вашего дома",
    description: "Современная мебель для вашего дома.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Mebel_95" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mebel_95 — мебель для вашего дома",
    description: "Современная мебель для вашего дома.",
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
