"use client";

import AnimateOnScroll from "@/components/ui/AnimateOnScroll/AnimateOnScroll";

const MAX_CARD_SUMMARY_WORDS = 50;

function truncateWords(text, maxWords) {
  const words = text.trim().split(/\s+/);
  if (words.length <= maxWords) return text;
  return `${words.slice(0, maxWords).join(" ")}...`;
}

export default function ProjectCard({ project, stagger = 0, cardIndex = 0, onOpen }) {
  const tiltClasses = [
    "-rotate-[0.9deg]",
    "rotate-[0.7deg]",
    "-rotate-[0.5deg]",
    "rotate-[1deg]",
  ];
  const cardSummary = truncateWords(project.summary, MAX_CARD_SUMMARY_WORDS);

  return (
    <AnimateOnScroll stagger={stagger} as="article">
      <button
        type="button"
        onClick={(event) => onOpen(project, event.currentTarget.getBoundingClientRect())}
        className={`group mx-auto w-full max-w-[270px] rounded-[2px] border border-[#d7cfbf] bg-[#f7f3ea] px-3 pt-3 pb-6 text-left shadow-xl transition duration-300 ease-out hover:-translate-y-1 hover:scale-[1.01] hover:rotate-0 hover:border-[#c9bfae] hover:bg-[#fbf8f0] hover:shadow-2xl ${tiltClasses[cardIndex % tiltClasses.length]}`}
      >
        <div className="relative aspect-[4/5] rounded-[1px] border border-[#d5ccbb] bg-[#fefcf7] p-3 shadow-[0_6px_18px_rgba(0,0,0,0.08)]">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-base font-semibold text-[#1f1a14]">
              {project.title}
            </h3>
            <span
              className="mt-1 inline-block text-sm text-[#4b4033] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            >
              ↗
            </span>
          </div>
          <p
            className="mt-3 text-sm leading-relaxed text-[#3a3229] line-clamp-5"
          >
            {cardSummary}
          </p>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#fefcf7] to-transparent" />
        </div>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <li
              key={item}
              className="rounded-full border border-[#cfc6b5] bg-[#ece6d8] px-3 py-1 text-xs text-[#4b4033]"
            >
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-center text-xs uppercase tracking-[0.14em] text-[#6a5d4d]">
          Click to view details
        </p>
      </button>
    </AnimateOnScroll>
  );
}
