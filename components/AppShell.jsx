// components/AppShell.jsx
"use client";

import Navbar from "./Navbar";

export default function AppShell({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
