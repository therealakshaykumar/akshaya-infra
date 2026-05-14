"use client";

import { LazyMotion, domMax } from "framer-motion";
import { useEffect } from "react";

export function FramerProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    console.log(
      "%c Developed by Akshay Kumar M | https://therealakshay.vercel.app/ %c",
      "background: #0F2A55; color: #fff; padding: 5px 10px; border-radius: 5px; font-weight: bold;",
      "background: transparent; color: inherit;"
    );
  }, []);

  return (
    <LazyMotion features={domMax} strict>
      {children}
    </LazyMotion>
  );
}

