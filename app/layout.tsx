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
  title: "AKSHAYA INFRA",
  description: "Premium Bitumen & Emulsion Solutions for Roads Infrastructure",
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

