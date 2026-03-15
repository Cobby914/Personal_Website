"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function ProjectDetailsModal({ project, originRect, onClose }) {
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

    animateTransitionFx(
      originRect,
      finalRect,
      OPEN_DURATION_MS + 80,
      "cubic-bezier(0.22, 1, 0.36, 1)"
    );
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
