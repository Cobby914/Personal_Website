"use client";

import { useState } from "react";

export default function ContactMethods({ methods }) {
  const [copiedEmail, setCopiedEmail] = useState("");

  async function handleCopyEmail(email) {
    try {
      await navigator.clipboard.writeText(email);
      setCopiedEmail(email);
      setTimeout(() => {
        setCopiedEmail((current) => (current === email ? "" : current));
      }, 1500);
    } catch {
      // No-op: clipboard write can fail in restricted browser contexts.
    }
  }

  return (
    <div className="mt-8 grid gap-4 sm:grid-cols-2">
      {methods.map((item) => {
        if (item.type === "email") {
          const isCopied = copiedEmail === item.value;
          return (
            <button
              key={item.label}
              type="button"
              onClick={() => handleCopyEmail(item.value)}
              className="rounded-xl border border-white/20 bg-white/10 p-4 text-left shadow-lg transition duration-200 hover:-translate-y-1 hover:scale-[1.02] hover:border-white/40 hover:bg-white/15 hover:shadow-2xl"
            >
              <p className="text-sm font-semibold uppercase tracking-wide text-white/80">
                {item.label}
              </p>
              <p className="mt-1 break-all text-base font-medium text-white sm:text-lg">
                {item.value}
              </p>
              <p className="mt-2 text-xs font-medium text-white/75">
                {isCopied ? "Copied!" : "Click to copy"}
              </p>
            </button>
          );
        }

        return (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-white/20 bg-white/10 p-4 shadow-lg transition duration-200 hover:-translate-y-1 hover:scale-[1.02] hover:border-white/40 hover:bg-white/15 hover:shadow-2xl"
          >
            <p className="text-sm font-semibold uppercase tracking-wide text-white/80">
              {item.label}
            </p>
            <p className="mt-1 break-all text-base font-medium text-white sm:text-lg">
              {item.value}
            </p>
          </a>
        );
      })}
    </div>
  );
}
