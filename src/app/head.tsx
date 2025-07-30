// app/head.tsx
"use client";  // 🚨 Esto lo convierte en cliente y te permite event handlers

import React from "react";

export default function Head() {
  return (
    <>
      {/* Preload + onLoad para no bloquear el render */}
      <link
        rel="preload"
        href="/_next/static/css/5fb014a6473e18b3.css"  // reemplaza con tu hash real
        as="style"
        onLoad={(e) => {
          // cuando termine de cargar, cambia rel a stylesheet
          (e.target as HTMLLinkElement).rel = "stylesheet";
        }}
      />
      {/* Fallback para usuarios sin JS */}
      <noscript>
        <link
          rel="stylesheet"
          href="/_next/static/css/5fb014a6473e18b3.css"
        />
      </noscript>
    </>
  );
}
