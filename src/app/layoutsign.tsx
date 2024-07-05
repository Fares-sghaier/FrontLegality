"use client";
import React from "react";
import ScrollToTop from "@/components/ScrollToTop";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
        <Providers>
          {children}
          <ScrollToTop />
        </Providers>
  );
}

import { Providers } from "./providers";
