"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll/AnimateOnScroll";
import ScrambleText from "@/components/ui/ScrambleText/ScrambleText";
import ScrollCue from "@/components/ui/ScrollCue/ScrollCue";

const textShadow = "0 1px 3px rgba(0,0,0,0.8)";
const textShadowSoft = "0 1px 2px rgba(0,0,0,0.6)";
const MAX_CARD_SUMMARY_WORDS = 50;

function truncateWords(text, maxWords) {
  const words = text.trim().split(/\s+/);
  if (words.length <= maxWords) return text;
  return `${words.slice(0, maxWords).join(" ")}...`;
}

const PLANNING_PROJECTS = [
  {
    id: "planning-1",
    title: "AI Study Assistant",
    summary: "Early design phase for a tool that helps students plan and review topics.",
    tech: ["Next.js", "Python", "OpenAI API"],
  },
  {
    id: "planning-2",
    title: "Scuba Logbook App",
    summary: "Concepting a dive tracking app with location, conditions, and photo notes.",
    tech: ["React", "Node.js", "PostgreSQL"],
  },
];

const IN_PROGRESS_PROJECTS = [
  {
    id: "progress-0",
    title: "Personal Website (Dec 2025 - Present)",
    summary:
      "Building my personal website with Next.js, React, and Tailwind CSS.",
    story:
      "This started as a simple portfolio and gradually turned into a playground for interaction design. I wanted each section to feel personal, so I spent time iterating on transitions, layout rhythm, and storytelling rather than simply listing my work. Instead of treating the site as a static collection of projects, I approached it as an experience where movement and structure guide the viewer through my journey. Along the way, I experimented with different animations, interaction patterns, and visual pacing to create something that feels both intuitive and engaging. The process taught me how subtle design decisions, like timing, spacing, and responsiveness, can dramatically change how a user perceives and navigates a website.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    details: [
      "Developing page-level sections for About, Projects, and Hobbies with shared design patterns.",
      "Improving UX through reveal animations, clearer content hierarchy, and responsive layouts.",
      "Continuously updating project content, routing, and metadata as new work is completed.",
    ],
    resources: [
      { label: "Live Site", href: "/", type: "Demo" },
      {
        label: "GitHub Repository",
        href: "https://github.com/Cobby914/Personal_Website",
        type: "Repository",
      },
    ],
  },
  {
    id: "progress-1",
    title: "Canvas -> Notion Sync (Feb 2026 - Present)",
    summary:
      "Building an automation tool that syncs Canvas assignments into Notion with deduping, task generation, and scheduled GitHub Actions runs.",
    story:
      "Realizing I was missing a tool to help me track everything I needed to accomplish throughout the week, I started organizing my tasks in Notion. While moving my personal to-do list was simple, I quickly realized that manually transferring assignments and exams from Canvas into Notion was tedious and time consuming. To streamline this process, I decided to build a Python script that automatically syncs my Canvas assignments with my Notion workspace. The script pulls assignment data from the Canvas API and creates structured entries in my Notion database, allowing me to manage my academic tasks alongside my other responsibilities in a single place. What began as a small convenience project ultimately became a practical automation tool that saves time and keeps my workflow organized.",
    tech: ["Python", "Canvas API", "Notion API", "GitHub Actions"],
    details: [
      "Fetches upcoming Canvas assignments and syncs them to Notion while preventing duplicate entries.",
      "Generates task tracker items with automatic priority and effort scoring based on due dates and points.",
      "Runs automatically through GitHub Actions with secure environment-based credentials.",
    ],
    resources: [
      {
        label: "GitHub Repository",
        href: "https://github.com/Cobby914/CanvasNotionSync",
        type: "Repository",
      },
      {
        label: "Project README",
        href: "https://github.com/Cobby914/CanvasNotionSync#readme",
        type: "Document",
      },
    ],
  },
];

const FINISHED_PROJECTS = [
  {
    id: "finished-1",
    title: "Tumor Classification from Scans (Oct 2025 - Dec 2025)",
    summary:
      "Built and tuned a residual neural network pipeline with strong performance and Grad-CAM based model interpretation.",
    story:
      "Wanting to build a project centered around a real-world medical challenge, Margret, Leo, and I began developing a tumor classification network. Using Kaggle’s tumor imaging dataset, we trained several machine learning models to identify and classify tumors based on their features. Rather than committing to a single approach, we experimented with multiple architectures and compared their performance to determine which model best interpreted the tumor data. Through this process, we explored model training, evaluation metrics, and the challenges of working with medical datasets. The project gave us hands-on experience with building and refining machine learning models while tackling a problem with meaningful real-world implications.",
    details: [
      "Trained a residual neural network pipeline to classify tumors from medical scans.",
      "Trained a convolutional neural network pipeline to classify tumors from medical scans.",
      "Used Grad-CAM to interpret the model's predictions and improve the model's performance.",
    ],
    tech: ["Python", "PyTorch", "Scikit-learn", "Pandas", "Matplotlib", "Grad-CAM"],
    resources: [
      {
        label: "GitHub Repository",
        href: "https://github.com/margoglvz/cs184a-tumors-classification/tree/main",
        type: "Repository",
      },
      {
        label: "Final Report (PDF)",
        href: "/resources/Tumor_Classification_Report.pdf",
        type: "Report",
      },
    ],
  },
  {
    id: "finished-2",
    title: "Genome Sequencing Pipeline (Oct 2025 - Dec 2025)",
    summary:
      "Built a missense-variant pathogenicity classifier by curating Humsavar + dbNSFP 5.3a data and benchmarking multiple ML models.",
    story:
      "To tackle a real-world genomics problem, Keyon, Lex, and I built a classifier to predict whether missense variants are benign or pathogenic. I led dataset curation by parsing Humsavar labels, standardizing classes, excluding uncertain-significance rows, and streaming dbNSFP 5.3a joins by rsID to keep processing memory-safe at chromosome scale. Our final curated dataset contained 10,941 high-quality variants with clinically relevant predictors (SIFT, PolyPhen-2 HDIV, CADD, and REVEL). We benchmarked Naive Bayes, Decision Tree, Random Forest, and XGBoost, and selected XGBoost as the strongest model with ~94% accuracy and strong pathogenic-class recall after class weighting.",
    details: [
      "Curated 10,941 high-quality variants by standardizing Humsavar labels and merging dbNSFP 5.3a annotations with rsID-based streaming joins.",
      "Selected mechanistically meaningful features (SIFT, PolyPhen-2 HDIV, CADD, REVEL) and enforced strict quality checks to remove incomplete genomic records.",
      "Benchmarked Naive Bayes, Decision Trees, Random Forests, and XGBoost; final weighted XGBoost reached about 94.29% accuracy with improved pathogenic recall.",
    ],
    tech: ["Python", "DuckDB", "Pandas", "Seaborn", "PyTorch"],
    resources: [
      {
        label: "GitHub Repository",
        href: "https://github.com/Kyan42/cs178-project",
        type: "Repository",
      },
      {
        label: "Final Report (PDF)",
        href: "/resources/Genome_Project_Report.pdf",
        type: "Report",
      },
    ],
  },
  {
    id: "finished-3",
    title: "Reel In Platform (Oct 2024 - May 2025)",
    summary:
      "Built a student project discovery platform with reusable UI modules and API routes used by 50+ students.",
    story:
      "Inspired by my team’s own struggle to find projects to join, we decided to build a platform where students could easily discover and participate in ongoing projects. As one of the newer developers on the team, I worked under the guidance of our lead developer, Ethan, learning the project’s architecture and contributing to features across the platform. Through this experience, I gained valuable insight into collaborative development and the process of building a product designed to connect students with opportunities to learn and create.",
    details: [
      "Built a student project discovery platform with reusable UI modules and API routes used by 50+ students.",
      "Implemented a system where project owners could manage their projects and applications.",
    ],
    tech: ["JavaScript", "TypeScript", "React", "CSS", "PostgreSQL"],
    resources: [
      {
        label: "GitHub Repository",
        href: "https://github.com/ethanscm/APIHikingSociety",
        type: "Repository",
      },
    ],
  },
  {
    id: "finished-4",
    title: "Smart Stick (Oct 2025 - Dec 2025)",
    summary:
      "Built an assistive smart cane prototype focused on object and elevation detection with cloud-connected capabilities.",
    story: "Smart Stick began as an exploration into how embedded systems could be used to improve accessibility. Keyon and I’s goal was to design a smart cane capable of detecting obstacles and elevation changes to assist visually impaired users in navigating their environment more safely. Through this project, we experimented with sensor integration, real-time feedback systems, and cloud connectivity using the ESP32. Building the prototype required us to think carefully about reliability, responsiveness, and how technology can provide intuitive guidance in real-world scenarios.",
    tech: ["C", "PlatformIO", "Arduino", "ESP32", "AWS"],
    details: [
      "Implemented sensor-driven obstacle and elevation detection for safer navigation.",
      "Designed feedback mechanisms for accessibility-focused guidance and alerts.",
      "Integrated wireless data handling through ESP32 for cloud-connected functionality.",
    ],
    resources: [
      {
        label: "GitHub Repository",
        href: "https://github.com/Cobby914/Smart-Stick",
        type: "Repository",
      },
      {
        label: "IoT Project Proposal (PDF)",
        href: "/resources/Smart_Stick_IoT_Proposal.pdf",
        type: "Report",
      },
      {
        label: "Demo Video",
        href: "/resources/Smart_Stick_Demo.mp4",
        type: "Video",
      },
    ],
  },
];

function ProjectCard({ project, stagger = 0, cardIndex = 0, onOpen }) {
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

function ProjectStatusSection({ id, title, description, projects, onOpenProject }) {
  return (
    <section id={id} className="relative w-full px-6 py-20 sm:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <AnimateOnScroll>
          <h2
            className="mb-4 text-center text-2xl font-bold text-white sm:text-3xl"
            style={{ textShadow }}
          >
            {title}
          </h2>
          <p
            className="mx-auto mb-10 max-w-3xl text-center text-base text-white/85 sm:text-lg"
            style={{ textShadow: textShadowSoft }}
          >
            {description}
          </p>
        </AnimateOnScroll>
        <div className="grid justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              stagger={i * 90}
              cardIndex={i}
              onOpen={onOpenProject}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectDetailsModal({ project, originRect, onClose }) {
  const OPEN_DURATION_MS = 280;
  const CLOSE_DURATION_MS = 360;
  const RESOURCE_CLOSE_MS = 320;
  const [isClosing, setIsClosing] = useState(false);
  const [activeResource, setActiveResource] = useState(null);
  const [isResourceMaximized, setIsResourceMaximized] = useState(false);
  const [isResourceClosing, setIsResourceClosing] = useState(false);
  const [isResourceOpening, setIsResourceOpening] = useState(false);
  const activeResourceRef = useRef(null);
  const overlayRef = useRef(null);
  const panelRef = useRef(null);
  const transitionFxRef = useRef(null);
  const closeTimerRef = useRef(null);
  const resourceCloseTimerRef = useRef(null);

  const animateTransitionFx = (startRect, endRect, duration, easing) => {
    const fx = transitionFxRef.current;
    if (!fx || !startRect || !endRect) return;

    fx.style.display = "block";

    const animation = fx.animate(
      [
        {
          left: `${startRect.left}px`,
          top: `${startRect.top}px`,
          width: `${startRect.width}px`,
          height: `${startRect.height}px`,
          opacity: 0.46,
          backgroundPosition: "0% 0%, 100% 0%",
        },
        {
          opacity: 0.28,
          backgroundPosition: "0% 100%, 100% 100%",
          offset: 0.62,
        },
        {
          left: `${endRect.left}px`,
          top: `${endRect.top}px`,
          width: `${endRect.width}px`,
          height: `${endRect.height}px`,
          opacity: 0,
          backgroundPosition: "0% 0%, 100% 0%",
        },
      ],
      {
        duration,
        easing,
        fill: "forwards",
      }
    );

    animation.onfinish = () => {
      fx.style.display = "none";
    };
  };

  const animateFromOrigin = () => {
    const panel = panelRef.current;
    if (!panel) return;

    if (!originRect) {
      panel.animate(
        [
          { opacity: 0, transform: "translate(0px, 0px) scale(0.96, 0.96)" },
          { opacity: 1, transform: "translate(0px, 0px) scale(1, 1)" },
        ],
        {
          duration: OPEN_DURATION_MS,
          easing: "cubic-bezier(0.22, 1, 0.36, 1)",
          fill: "both",
        }
      );
      return;
    }

    const finalRect = panel.getBoundingClientRect();
    const dx = originRect.left - finalRect.left;
    const dy = originRect.top - finalRect.top;
    const sx = Math.max(0.2, originRect.width / finalRect.width);
    const sy = Math.max(0.2, originRect.height / finalRect.height);

    panel.animate(
      [
        {
          opacity: 0.25,
          transform: `translate(${dx}px, ${dy}px) scale(${sx}, ${sy})`,
        },
        {
          opacity: 1,
          transform: "translate(0px, 0px) scale(1, 1)",
        },
      ],
      {
        duration: OPEN_DURATION_MS,
        easing: "cubic-bezier(0.22, 1, 0.36, 1)",
        fill: "both",
      }
    );

    if (originRect) {
      animateTransitionFx(
        originRect,
        finalRect,
        OPEN_DURATION_MS + 80,
        "cubic-bezier(0.22, 1, 0.36, 1)"
      );
    }
  };

  const animateToOrigin = () => {
    const panel = panelRef.current;
    if (!panel) return;

    if (!originRect) {
      panel.animate(
        [
          { opacity: 1, transform: "translate(0px, 0px) scale(1, 1)" },
          { opacity: 0, transform: "translate(0px, 0px) scale(1, 1)" },
        ],
        { duration: CLOSE_DURATION_MS, easing: "ease-in", fill: "forwards" }
      );
      return;
    }

    const finalRect = panel.getBoundingClientRect();
    const dx = originRect.left - finalRect.left;
    const dy = originRect.top - finalRect.top;
    const sx = Math.max(0.2, originRect.width / finalRect.width);
    const sy = Math.max(0.2, originRect.height / finalRect.height);

    panel.animate(
      [
        { opacity: 1, transform: "translate(0px, 0px) scale(1, 1)" },
        {
          opacity: 0.25,
          transform: `translate(${dx}px, ${dy}px) scale(${sx}, ${sy})`,
        },
      ],
      {
        duration: CLOSE_DURATION_MS,
        easing: "cubic-bezier(0.4, 0, 1, 1)",
        fill: "forwards",
      }
    );

    animateTransitionFx(
      finalRect,
      originRect,
      CLOSE_DURATION_MS,
      "cubic-bezier(0.4, 0, 1, 1)"
    );
  };

  const animateBackdropIn = () => {
    overlayRef.current?.animate(
      [{ opacity: 0 }, { opacity: 1 }],
      { duration: OPEN_DURATION_MS - 60, easing: "ease-out", fill: "both" }
    );
  };

  const animateBackdropOut = () => {
    overlayRef.current?.animate(
      [{ opacity: 1 }, { opacity: 0 }],
      { duration: CLOSE_DURATION_MS, easing: "ease-in", fill: "forwards" }
    );
  };

  const handleRequestClose = () => {
    if (!project || isClosing) return;
    setIsClosing(true);

    animateToOrigin();
    animateBackdropOut();

    closeTimerRef.current = window.setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, CLOSE_DURATION_MS);
  };

  const requestCloseResource = () => {
    if (!activeResourceRef.current || isResourceClosing) return;
    setIsResourceClosing(true);
    setIsResourceMaximized(false);

    if (resourceCloseTimerRef.current) {
      window.clearTimeout(resourceCloseTimerRef.current);
    }

    resourceCloseTimerRef.current = window.setTimeout(() => {
      setActiveResource(null);
      setIsResourceClosing(false);
      resourceCloseTimerRef.current = null;
    }, RESOURCE_CLOSE_MS);
  };

  useEffect(() => {
    activeResourceRef.current = activeResource;
  }, [activeResource]);

  useEffect(() => {
    if (!activeResource || !isResourceOpening) return undefined;
    const frameId = window.requestAnimationFrame(() => {
      setIsResourceOpening(false);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeResource, isResourceOpening]);

  useEffect(() => {
    setActiveResource(null);
    setIsResourceMaximized(false);
    setIsResourceClosing(false);
    setIsResourceOpening(false);
    if (resourceCloseTimerRef.current) {
      window.clearTimeout(resourceCloseTimerRef.current);
      resourceCloseTimerRef.current = null;
    }
  }, [project?.id]);

  useEffect(() => {
    if (!project) {
      setIsClosing(false);
      return undefined;
    }

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        if (activeResourceRef.current) {
          requestCloseResource();
          return;
        }
        handleRequestClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    animateBackdropIn();
    animateFromOrigin();

    return () => {
      if (closeTimerRef.current) {
        window.clearTimeout(closeTimerRef.current);
        closeTimerRef.current = null;
      }
      if (resourceCloseTimerRef.current) {
        window.clearTimeout(resourceCloseTimerRef.current);
        resourceCloseTimerRef.current = null;
      }
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <>
      <div
        ref={overlayRef}
        className="fixed inset-0 z-[90] flex items-center justify-center bg-black/75 px-4 py-8 backdrop-blur-sm"
        onClick={handleRequestClose}
        role="presentation"
      >
      <div
        ref={transitionFxRef}
        aria-hidden="true"
        className="pointer-events-none fixed z-[91] hidden rounded-2xl border border-white/35 opacity-0"
        style={{
          left: 0,
          top: 0,
          width: 0,
          height: 0,
          backgroundImage:
            "linear-gradient(120deg, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0.04) 30%, rgba(255,255,255,0) 65%), repeating-linear-gradient(0deg, rgba(255,255,255,0.26) 0px, rgba(255,255,255,0.26) 1px, rgba(255,255,255,0) 1px, rgba(255,255,255,0) 10px)",
          backgroundSize: "140% 140%, 100% 100%",
          mixBlendMode: "screen",
        }}
      />
      <div
        ref={panelRef}
        className="relative max-h-[85vh] w-full max-w-3xl overflow-y-auto rounded-md border border-[#d7cfbf] bg-[#f5f1e8] p-6 text-[#1f1a14] shadow-2xl sm:p-8"
        style={{ willChange: "transform, opacity" }}
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title} details`}
      >
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-2xl font-bold sm:text-3xl">
            {project.title}
          </h3>
          <button
            type="button"
            onClick={handleRequestClose}
            className="rounded-md border border-[#c8bfae] px-3 py-1 text-sm text-[#2a241d] transition hover:bg-black/5"
          >
            Close
          </button>
        </div>

        <p
          className="mt-4 text-sm leading-relaxed text-[#3a3229] sm:text-base"
        >
          {project.summary}
        </p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <li
              key={`${project.id}-modal-${item}`}
              className="rounded-full border border-[#cfc6b5] bg-[#ece6d8] px-3 py-1 text-xs text-[#4b4033]"
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-6 border-t border-[#d9d1c2] pt-5">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6a5d4d]">
            Details
          </p>
          {project.details?.length ? (
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-[#3a3229]">
              {project.details.map((detail) => (
                <li key={`${project.id}-${detail}`}>- {detail}</li>
              ))}
            </ul>
          ) : (
            <p className="mt-3 text-sm text-[#5d5142]">
              More project notes and context will be added soon.
            </p>
          )}
        </div>

        {project.story && (
          <div className="mt-6 border-t border-[#d9d1c2] pt-5">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6a5d4d]">
              Story
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[#3a3229]">
              {project.story}
            </p>
          </div>
        )}

        <div className="mt-6 border-t border-[#d9d1c2] pt-5">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6a5d4d]">
            Resources
          </p>
          {project.resources?.length ? (
            <div className="mt-3 flex flex-wrap gap-2">
              {project.resources.map((resource) => {
                const isExternal = resource.href.startsWith("http");
                const isViewableLocalResource =
                  resource.href.startsWith("/") &&
                  (resource.type === "Report" || resource.type === "Video");
                const className =
                  "inline-flex items-center gap-2 rounded-md border border-[#c8bfae] bg-[#ece6d8] px-3 py-1.5 text-xs text-[#3f3529] transition hover:bg-[#e3dbc9]";

                if (isExternal) {
                  return (
                    <a
                      key={`${project.id}-${resource.label}`}
                      href={resource.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={className}
                    >
                      <span>{resource.type}:</span>
                      <span>{resource.label}</span>
                    </a>
                  );
                }

                if (isViewableLocalResource) {
                  const isActive = activeResource?.href === resource.href;
                  return (
                    <button
                      key={`${project.id}-${resource.label}`}
                      type="button"
                      onClick={() => {
                        if (resourceCloseTimerRef.current) {
                          window.clearTimeout(resourceCloseTimerRef.current);
                          resourceCloseTimerRef.current = null;
                        }
                        setIsResourceClosing(false);
                        setIsResourceOpening(!activeResourceRef.current);
                        setActiveResource(resource);
                      }}
                      className={`${className} ${isActive ? "border-[#9f9078] bg-[#e3dbc9]" : ""}`}
                    >
                      <span>{resource.type}:</span>
                      <span>{resource.label}</span>
                    </button>
                  );
                }

                return (
                  <Link key={`${project.id}-${resource.label}`} href={resource.href} className={className}>
                    <span>{resource.type}:</span>
                    <span>{resource.label}</span>
                  </Link>
                );
              })}
            </div>
          ) : (
            <p className="mt-3 text-sm text-[#5d5142]">
              No documents or videos added yet.
            </p>
          )}
        </div>

      </div>
      </div>
      {activeResource && (
        <div
          className={`fixed inset-0 z-[95] flex items-center justify-center px-4 py-8 backdrop-blur-sm transition-opacity duration-300 ${
            isResourceClosing || isResourceOpening ? "bg-black/0 opacity-0" : "bg-black/75 opacity-100"
          }`}
          onClick={requestCloseResource}
          role="presentation"
        >
          <div
            className={`relative w-full rounded-md border border-[#d7cfbf] bg-[#f5f1e8] p-4 text-[#1f1a14] shadow-2xl transition-all duration-300 sm:p-5 ${
              isResourceClosing || isResourceOpening ? "scale-[0.985] opacity-0" : "scale-100 opacity-100"
            } ${
              isResourceMaximized ? "h-[96vh] max-w-[96vw]" : "h-[88vh] max-w-5xl"
            }`}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-3 flex items-center justify-between gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6a5d4d]">
                {activeResource.type}: {activeResource.label}
              </p>
              <div className="flex items-center gap-2">
                {activeResource.type === "Report" && (
                  <button
                    type="button"
                    onClick={() => setIsResourceMaximized((previous) => !previous)}
                    className="rounded-md border border-[#c8bfae] px-2.5 py-1 text-xs text-[#2a241d] transition hover:bg-black/5"
                  >
                    {isResourceMaximized ? "Restore" : "Maximize"}
                  </button>
                )}
                <button
                  type="button"
                  onClick={requestCloseResource}
                  className="rounded-md border border-[#c8bfae] px-2.5 py-1 text-xs text-[#2a241d] transition hover:bg-black/5"
                >
                  Close
                </button>
              </div>
            </div>

            {activeResource.type === "Video" ? (
              <video
                className={`w-full rounded-md border border-[#cfc6b5] bg-black ${
                  isResourceMaximized ? "h-[calc(96vh-64px)]" : "h-[calc(88vh-64px)]"
                }`}
                controls
                controlsList="nodownload noplaybackrate"
                onContextMenu={(event) => event.preventDefault()}
              >
                <source src={activeResource.href} />
                Your browser does not support video playback.
              </video>
            ) : (
              <iframe
                title={activeResource.label}
                src={`${activeResource.href}#toolbar=0&navpanes=0`}
                className={`w-full rounded-md border border-[#cfc6b5] bg-white ${
                  isResourceMaximized ? "h-[calc(96vh-64px)]" : "h-[calc(88vh-64px)]"
                }`}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}

function GitHubRevealSection() {
  return (
    <section id="projects-github" className="relative w-full px-6 py-20 sm:px-8 md:py-24">
      <div className="mx-auto max-w-4xl">
        <AnimateOnScroll>
          <div className="rounded-2xl border border-white/20 bg-black/55 p-8 text-center text-white shadow-2xl backdrop-blur-md sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
              GitHub
            </p>
            <h2
              className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl"
              style={{ textShadow }}
            >
              Explore More Projects on GitHub
            </h2>
            <p
              className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base"
              style={{ textShadow: textShadowSoft }}
            >
              Browse repositories, active experiments, and code samples that are
              not fully documented on this page yet.
            </p>
            <div className="mt-7">
              <Link
                href="https://github.com/Cobby914"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/40 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Visit GitHub
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

export default function ProjectsPageContent() {
  const [activeProject, setActiveProject] = useState(null);
  const [modalOriginRect, setModalOriginRect] = useState(null);

  const handleOpenProject = (project, rect) => {
    setModalOriginRect(rect ? { left: rect.left, top: rect.top, width: rect.width, height: rect.height } : null);
    setActiveProject(project);
  };

  const handleCloseProjectModal = () => {
    setActiveProject(null);
    setModalOriginRect(null);
  };

  return (
    <>
      <section
        id="projects-landing"
        className="relative flex min-h-screen shrink-0 flex-col items-center justify-center px-6 py-24 text-center sm:px-8"
      >
        <div className="mx-auto max-w-4xl">
          <h1
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
            style={{
              textShadow:
                "0 2px 4px rgba(0,0,0,0.8), 0 4px 12px rgba(0,0,0,0.6), 0 0 40px rgba(0,0,0,0.4)",
            }}
          >
            <ScrambleText text="Projects" delay={2200} speed={40} />
          </h1>
          <p
            className="mx-auto mt-4 max-w-2xl text-lg text-white sm:text-xl md:text-2xl"
            style={{
              textShadow:
                "0 1px 3px rgba(0,0,0,0.9), 0 2px 8px rgba(0,0,0,0.7)",
            }}
          >
            <ScrambleText
              text="A roadmap of what I am planning, building, and shipping."
              delay={3100}
              speed={25}
            />
          </p>
        </div>
        <ScrollCue />
      </section>

      <ProjectStatusSection
        id="projects-planning"
        title="Planning"
        description="Ideas and concepts that are currently being researched and scoped."
        projects={PLANNING_PROJECTS}
        onOpenProject={handleOpenProject}
      />

      <ProjectStatusSection
        id="projects-in-progress"
        title="In Progress"
        description="Projects that are actively being built and tested."
        projects={IN_PROGRESS_PROJECTS}
        onOpenProject={handleOpenProject}
      />

      <ProjectStatusSection
        id="projects-finished"
        title="Finished"
        description="Completed work that is deployed, documented, or production-ready."
        projects={FINISHED_PROJECTS}
        onOpenProject={handleOpenProject}
      />

      <GitHubRevealSection />
      <ProjectDetailsModal
        project={activeProject}
        originRect={modalOriginRect}
        onClose={handleCloseProjectModal}
      />
    </>
  );
}
