"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowUpRight, Pause, Play } from "lucide-react";
import { mountStarScene } from "./star-scene";

const chapters = [
  {
    name: "Build",
    label: "01 / THE FOUNDATION",
    copy: "Distinctive web design. Thoughtful development. A digital home built around your business.",
  },
  {
    name: "Design",
    label: "02 / THE POSSIBILITIES",
    copy: "From the first impression to the smallest interaction. We turn ambitious ideas into intuitive experiences.",
  },
  {
    name: "Explore",
    label: "03 / THE NEXT CHAPTER",
    copy: "Custom applications, connected systems, and room to grow. Software that takes your business further.",
  },
];
export default function SpaceHero() {
  const section = useRef<HTMLElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLDivElement>(null);
  const progress = useRef(0);
  const motion = useRef(true);
  const pausePreference = useRef(false);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    const el = section.current!;
    const media = matchMedia("(prefers-reduced-motion: reduce)");
    motion.current = !media.matches && !pausePreference.current;
    let dispose: (() => void) | undefined;
    let cancelled = false;
    mountStarScene(canvas.current!, progress, motion)
      .then((cleanup) => {
        if (cancelled) cleanup();
        else dispose = cleanup;
      })
      .catch(() => {
        /* Keep the static CSS starfield if WebGL cannot initialize. */
      });
    const update = () => {
      const rect = el.getBoundingClientRect();
      const p = Math.max(
        0,
        Math.min(1, -rect.top / Math.max(1, el.offsetHeight - innerHeight)),
      );
      progress.current = p;
      setActive(Math.min(2, Math.floor(p * 3)));
      stage.current?.style.setProperty(
        "--exit",
        String(Math.max(0, (p - 0.82) / 0.18)),
      );
      stage.current?.style.setProperty("--progress", `${p * 100}%`);
      if (stage.current) stage.current.inert = p > 0.98;
    };
    const changeMotion = () => {
      motion.current = !media.matches && !pausePreference.current;
    };
    update();
    addEventListener("scroll", update, { passive: true });
    addEventListener("resize", update);
    media.addEventListener("change", changeMotion);
    return () => {
      cancelled = true;
      dispose?.();
      removeEventListener("scroll", update);
      removeEventListener("resize", update);
      media.removeEventListener("change", changeMotion);
    };
  }, []);
  function goToChapter(index: number) {
    const el = section.current!;
    window.scrollTo({
      top:
        el.offsetTop +
        (el.offsetHeight - innerHeight) * (index / 3 + (index ? 0.08 : 0)),
      behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    });
  }
  return (
    <section
      id="top"
      ref={section}
      className="space-journey"
      aria-label="Explore the Orin starfield"
    >
      <div className="space-stage" ref={stage}>
        <div ref={canvas} className="star-canvas" aria-hidden="true">
          <div className="star-fallback" />
        </div>
        <div className="space-shade" />
        <div className="hero-copy">
          <p className="eyebrow">INDEPENDENT WEB DESIGN & DEVELOPMENT STUDIO</p>
          <h1>
            A world of <em>possibility.</em>
          </h1>
          <div className="hero-star-window" aria-hidden="true" />
          <div className="hero-manifesto" aria-label="Build. Design. Explore.">
            <span /> BUILD <b>•</b> DESIGN <b>•</b> EXPLORE <span />
          </div>
          <div className="star-caption" key={active}>
            <span className="chapter-label">{chapters[active].label}</span>
            <p>{chapters[active].copy}</p>
          </div>
          <a href="#contact" className="pill-link">
            Let’s build something <ArrowUpRight size={16} />
          </a>
        </div>
        <div className="hero-side-note">
          IDEAS WITHOUT LIMITS.
          <br />
          CRAFT WITHOUT COMPROMISE.
        </div>
        <div className="journey-controls">
          <a href="#studio" className="scroll-note">
            <span className="circle">
              <ArrowDown size={17} />
            </span>
            <span>
              SCROLL TO EXPLORE
              <br />
              <small>A journey through the stars</small>
            </span>
          </a>
          <div className="chapter-tabs" aria-label="Choose a journey chapter">
            {chapters.map((chapter, i) => (
              <button
                key={chapter.name}
                onClick={() => goToChapter(i)}
                aria-pressed={active === i}
              >
                <span>0{i + 1}</span>
                {chapter.name}
                <i />
              </button>
            ))}
          </div>
          <button
            className="motion-button"
            onClick={() => {
              pausePreference.current = !paused;
              motion.current = paused && !matchMedia("(prefers-reduced-motion: reduce)").matches;
              setPaused(!paused);
            }}
            aria-pressed={paused}
            aria-label={
              paused ? "Resume star animation" : "Pause star animation"
            }
          >
            {paused ? <Play size={14} /> : <Pause size={14} />}
          </button>
        </div>
        <div className="journey-progress" />
        <div className="space-exit" />
      </div>
    </section>
  );
}
