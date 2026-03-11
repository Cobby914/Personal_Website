"use client";

import { useState } from "react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll/AnimateOnScroll";

// Experience timeline - ascending order (oldest first)
// summary: brief info shown by default | details: expanded insight on hover/click
const TIMELINE_ENTRIES = [
  {
    id: "0",
    date: "Sep 2023",
    title: "Arriving to UCI",
    summary: "ZOT ZOT ZOT!",
    details: "Arriving into a new environment, I was able to meet new people and learn new things. Meeting my fellow friends and peers, I begin to build a strong network of people who I can rely on and learn from. These are the people who I hope to be one day.",
    location: "UC Irvine · Irvine, CA",
  },
  {
    id: "1",
    date: "Aug 2024",
    title: "Software Engineer Intern",
    summary: "Built mortgage lending tools and dashboards at M.K Lending.",
    details: "Landing my first internship, I was able to learn from the best and build tools that helped the company grow. Working with a team, I was tasked to help develop a loan-lookup REST API using TypeScript and Node.js. Continuing my internship with this company, I then built a rate-sheet ingestion pipeline with Python, pandas, and PostgresSQL. Finally, I implemented a dashboard tracking employee loans using React and TypeScript as my last project. This was a great experience for me to learn and develop my skills as a developer.",
    location: "M.K Lending · Brea, CA",
  },
  {
    id: "2",
    date: "Sep 2024",
    title: "Software Engineer",
    summary: "Full-stack volunteer tracking dashboard for Collete's Children Home.",
    details: "Wanting to engage more with the communities at UCI, I joined Commit the Change. This club works to create websites for non-profit organizations. Joining the CHC team, I was tasked to build a full-stack volunteer tracking dashboard using React, Chakra UI, and Node.js. This dashboard was going to be used by managers to track and manage volunteers for the organizations. This was a great experience for me to learn and develop my skills as a developer while also allowing me to find another community at UCI.",
    location: "Commit the Change · Irvine, CA",
  },
  {
    id: "3",
    date: "May 2025",
    title: "Teacher",
    summary: "Teaching intro to programming in Python and Java.",
    details:
      "Wanting to give back to organization that taught me my fundamental programming skills in highschool. I applied to be a teacher, teaching the next generation of programmers. I began to teach middle schoolers the introduction to programming in both Python and Java, preparing them for the future and competitions. This was a great opportunity to strengthen my fundamentals while also helping the next generation of programmers.",
    location: "STEMPiA Computer Institute · Los Angeles, CA",
  },
  {
    id: "4",
    date: "May 2025",
    title: "Director Of Education",
    summary: "Creating curriculum for new members at Commit the Change.",
    details:
      "Enjoying the experience of teaching others, I applied and became the Director of Education for Commit the Change. This role allowed me to create a curriculum for new members to learn and grow their skills. Through this expereince I gave back to the community that truly helped me grow as a developer. Now I get to see the impact I have on the next generation of programmers.",
    location: "Commit the Change · Irvine, CA",
  },
  {
    id: "5",
    date: "Sep 2025",
    title: "Software Engineer",
    summary: "Full-stack platform for Celebrating Life CHC.",
    details:
      "Coming back as a developer for CTC, I joined CLC team. We are building a full-stack platform with React and Node.js for Celebrating Life CHC to serve 100+ local patients. This was a great opportunity to work with a new team and experience what a senior developer does. Through this experience, I was able to learn and develop my skills as a developer while also helping a local organization grow.",
    location: "Commit the Change · Irvine, CA",
  },
  {
    id: "6",
    date: "Dec 2025",
    title: "Technical Lead",
    summary: "Spearheading full-stack development at TENA.",
    details:
      "Wanting to develop my skills even further, I reached out to company named TENA. I was tasked to spearhead full-stack development using React and Node.js, managing the technical roadmap for developers. I then orchestrated Agile sprint cycles and task delegation while also architecting a PostgreSQL JSONB schema for dynamic user configs, meeting all the requirements of the product. Through this experience, I developed my leadership skills and received a deeper understanding of industry standards.",
    location: "TENA · Los Angeles, CA",
  },
  {
    id: "7",
    date: "Dec 2025",
    title: "Research Assistant",
    summary: "Multi-modal perception research at UC Irvine.",
    details:
      "Wanting to explore AI on a deeper level, I joined a research team focused on multi-modal perception using camera and radar data. Through this experience, I began working with state-of-the-art deep learning architectures in PyTorch, studying how sensor calibration and spatial feature alignment can improve object detection accuracy. I also spent time reading academic papers, evaluating model designs, and helping shape experiments to better understand what makes these systems reliable. This opportunity allowed me to strengthen my technical foundation in AI while learning how research is used to solve complex real-world problems.",
    location: "UC Irvine · Irvine, CA",
  },
  {
    id: "8",
    date: "Jan 2026",
    title: "Software Engineer Intern",
    summary: "Building and scaling pet-tech solutions at FiPet.",
    details:
      "Excited to work in a fast-paced startup environment, I joined FiPet as a Software Engineering Intern to help build and scale pet-tech solutions. In this role, I worked across the stack to design, develop, and improve product features while collaborating closely with the founders on both technical decisions and product direction. I was responsible for taking small-to-medium engineering tasks from idea to production, which gave me valuable experience in ownership, iteration, and building reliable systems. Through this experience, I continued to grow as a developer while learning how engineering directly supports product growth in an early-stage company.",
    location: "FiPet · San Francisco Bay Area",
  },
  {
    id: "9",
    date: "Today",
    title: "Today",
    summary: "WOW I'M ALMOST DONE WITH SCHOOL!",
    details: "I continue to develop my skills and look out for new opportunities. I'm looking to continue to build impactful projects and further my skills as a developer.",
    location: "SOMEWHERE IN THE WORLD",
  },
];

const textShadowSoft = "0 1px 2px rgba(0,0,0,0.6)";

function TimelineCard({ entry, isRight, index }) {
  const [isPinned, setIsPinned] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const isExpanded = isPinned || isHovered;

  return (
    <AnimateOnScroll stagger={index * 80} as="div">
      <div className="relative flex min-h-[140px] items-center py-6 md:min-h-[160px] md:py-8">
        {/* Left content (odd index) */}
        <div className="flex w-1/2 flex-col pr-6 text-right md:pr-12">
          {!isRight && (
            <TimelineCardContent
              entry={entry}
              isExpanded={isExpanded}
              onToggle={() => setIsPinned((p) => !p)}
              onHoverChange={setIsHovered}
              align="right"
            />
          )}
        </div>

        {/* Center: Timeline dot */}
        <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center md:h-16 md:w-16 lg:h-20 lg:w-20">
          <div className="h-4 w-4 rounded-full border-2 border-white/50 bg-white/20 md:h-5 md:w-5 lg:h-6 lg:w-6" />
        </div>

        {/* Right content (even index) */}
        <div className="flex w-1/2 flex-col pl-6 text-left md:pl-12">
          {isRight && (
            <TimelineCardContent
              entry={entry}
              isExpanded={isExpanded}
              onToggle={() => setIsPinned((p) => !p)}
              onHoverChange={setIsHovered}
              align="left"
            />
          )}
        </div>
      </div>
    </AnimateOnScroll>
  );
}

function TimelineCardContent({ entry, isExpanded, onToggle, onHoverChange, align }) {
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

        {/* Expanded details */}
        <div
          className={`grid transition-all duration-300 ease-out ${
            isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="mt-3 border-t border-white/10 pt-3">
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

        {/* Hover-only expand hint (when not clicked) */}
        {!isExpanded && (
          <p className="mt-2 text-xs text-white/40 transition-opacity group-hover:opacity-100 md:opacity-0">
            Hover or click for more
          </p>
        )}
      </div>
    </button>
  );
}

export default function ExperienceTimeline() {
  return (
    <div className="relative">
      {/* Vertical line - centered */}
      <div
        className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-white/25"
        aria-hidden
      />

      <div className="space-y-0">
        {TIMELINE_ENTRIES.map((entry, i) => (
          <TimelineCard
            key={entry.id}
            entry={entry}
            isRight={i % 2 === 0}
            index={i}
          />
        ))}
      </div>
    </div>
  );
}
