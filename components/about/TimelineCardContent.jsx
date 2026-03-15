"use client";

import { textShadowSoft } from "@/components/about/aboutStyles";

export default function TimelineCardContent({
  entry,
  isExpanded,
  onToggle,
  onHoverChange,
  align,
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      onMouseEnter={() => onHoverChange(true)}
      onMouseLeave={() => onHoverChange(false)}
      className={`group w-full max-w-md text-left transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black ${align === "right" ? "text-right" : ""}`}
    >
      <div
        className={`overflow-hidden rounded-xl border border-white/10 bg-white/5 px-5 py-4 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-white/25 hover:bg-white/10 ${align === "right" ? "group-hover:translate-x-1" : "group-hover:-translate-x-1"}`}
      >
        <span
          className="text-sm font-semibold text-white/70 md:text-base"
          style={{ textShadow: textShadowSoft }}
        >
          {entry.date}
        </span>
        <h3
          className="mt-1.5 text-lg font-semibold text-white md:text-xl lg:text-2xl"
          style={{ textShadow: textShadowSoft }}
        >
          {entry.title}
        </h3>
        <p
          className="mt-2 line-clamp-2 text-sm leading-relaxed text-white/80 md:text-base"
          style={{ textShadow: textShadowSoft }}
        >
          {entry.summary}
        </p>

        <div
          className={`grid transition-all duration-300 ease-out ${
            isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="mt-3 border-t border-white/10 pt-3">
              {entry.image && (
                <div className="mb-3 aspect-video w-full overflow-hidden rounded-lg">
                  <img
                    src={entry.image}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
              )}
              <p
                className="text-sm leading-relaxed text-white/90 md:text-base"
                style={{ textShadow: textShadowSoft }}
              >
                {entry.details}
              </p>
              {entry.location && (
                <p
                  className="mt-2 text-sm text-white/60"
                  style={{ textShadow: textShadowSoft }}
                >
                  {entry.location}
                </p>
              )}
              <p className="mt-2 text-xs text-white/50">
                Click to pin open · Click again to collapse
              </p>
            </div>
          </div>
        </div>

        {!isExpanded && (
          <p className="mt-2 text-xs text-white/40 transition-opacity group-hover:opacity-100 md:opacity-0">
            Hover or click for more
          </p>
        )}
      </div>
    </button>
  );
}
