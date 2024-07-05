"use client";
import React from "react";
import { Providers } from "./providers";
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

