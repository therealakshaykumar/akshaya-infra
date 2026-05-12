import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import { FramerProvider } from "./components/FramerProvider";
import { SmoothScroll } from "./components/SmoothScroll";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Akshaya Infra | Premium Bitumen & Emulsion Solutions",
    template: "%s | Akshaya Infra",
  },
  description: "Leading bulk bitumen supplier serving Class 1 government contractors and road construction companies across India.",
  keywords: ["Bitumen", "VG-30", "VG-40", "RS-1 Emulsion", "Road Construction", "India Infrastructure", "Akshaya Infra"],
  authors: [{ name: "Akshaya Infra" }],
  creator: "Akshaya Infra",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://akshayainfra.com",
    title: "Akshaya Infra | Premium Bitumen & Emulsion Solutions",
    description: "Serving Class 1 government contractors and road construction companies across India with reliable and high-quality bitumen.",
    siteName: "Akshaya Infra",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akshaya Infra | Premium Bitumen & Emulsion Solutions",
    description: "Serving Class 1 government contractors and road construction companies across India with reliable and high-quality bitumen.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased ${ubuntu.className}`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <SmoothScroll>
          <FramerProvider>
            {children}
          </FramerProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}

