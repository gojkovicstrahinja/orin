"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  ArrowUp,
  Plus,
  Minus,
  Code2,
  Layers,
  Workflow,
} from "lucide-react";
import StarMark from "@/components/star-mark";
const services = [
  {
    number: "01",
    title: (
      <>
        Websites with
        <br />a point of view.
      </>
    ),
    category: "WEB DESIGN & DEVELOPMENT",
    text: "A considered digital presence, made for your brand. We bring strategy, visual identity, and responsive development together in one seamless experience.",
    tags: "Brand websites / E-commerce / Landing pages",
    style: "design-panel",
  },
  {
    number: "02",
    title: (
      <>
        Complex problems.
        <br />
        Clear solutions.
      </>
    ),
    category: "CUSTOM SOFTWARE",
    text: "The right tool changes how you work. From customer portals to internal platforms, we build software around your workflows, your people, and your goals.",
    tags: "Web applications / Integrations / Automation",
    style: "software-panel",
  },
  {
    number: "03",
    title: (
      <>
        Built to last.
        <br />
        Ready for what’s next.
      </>
    ),
    category: "SUPPORT & EVOLUTION",
    text: "Launch is a beginning. We keep your digital products fast, dependable, and useful with ongoing improvements and thoughtful technical support.",
    tags: "Maintenance / Performance / Ongoing development",
    style: "support-panel",
  },
];
const process = [
  [
    "Discover",
    "First, the right questions.",
    "We get to know your business, your audience, and what success means to you. Together, we define the scope, priorities, and a clear direction.",
  ],
  [
    "Design",
    "Give the idea its shape.",
    "We turn the brief into a visual system and interactive designs. You see how the experience will look and feel before development begins.",
  ],
  [
    "Develop",
    "Make every detail work.",
    "We build your website or application with careful attention to usability, performance, and maintainability. You stay involved through regular previews.",
  ],
  [
    "Launch & evolve",
    "A confident beginning.",
    "We test across screens, prepare your content, and guide the launch. Then we help you maintain and improve the experience as your business grows.",
  ],
];
export default function StudioPage() {
  const [step, setStep] = useState(0);
  const emailDialog = useRef<HTMLDialogElement>(null);
  const [copyStatus, setCopyStatus] = useState("");
  function openEmail() {
    setCopyStatus("");
    emailDialog.current?.showModal();
  }
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText("info@orin.it.com");
      setCopyStatus("Email address copied.");
    } catch {
      setCopyStatus("Select and copy this address: info@orin.it.com");
    }
  }
  return (
    <div className="studio-world">
      <section id="studio" className="studio-intro page-width">
        <div className="section-meta">
          <span>BACK ON EARTH. DOWN TO BUSINESS.</span>
          <span>ORIN — DIGITAL STUDIO</span>
        </div>
        <div className="intro-heading">
          <h2>
            Extraordinary ideas.
            <br />
            <span>Grounded in purpose.</span>
          </h2>
          <p>
            We’re Orin, an independent studio bringing thoughtful web design and
            custom programming together. We make digital experiences that feel
            right — and work beautifully.
          </p>
        </div>
        <div className="technology-banner">
          <div className="technology-image" />
          <span className="technology-caption">
            AT THE INTERSECTION OF DESIGN & TECHNOLOGY
          </span>
          <div className="technology-wordmark" aria-hidden="true">
            ORIN<span>IDEAS INTO EXPERIENCES.</span>
          </div>
          <div className="technology-bottom">
            <span>DESIGN / DEVELOP / CONNECT</span>
            <span>HUMAN IDEAS. DIGITAL POSSIBILITIES.</span>
          </div>
        </div>
        <div className="capability-strip">
          <span>
            <Layers size={15} /> Thoughtful interfaces
          </span>
          <span>
            <Code2 size={15} /> Design + engineering
          </span>
          <span>
            <Workflow size={15} /> Connected systems
          </span>
          <span>
            From idea to launch <ArrowUpRight size={15} />
          </span>
        </div>
      </section>
      <section id="services" className="services-section page-width">
        <div className="section-meta">
          <span>01 / WHAT WE DO</span>
          <span>THOUGHTFUL BY DESIGN</span>
        </div>
        <div className="section-heading">
          <h2>
            Less ordinary.
            <br />
            <span>More you.</span>
          </h2>
          <p>
            No two businesses are the same.
            <br />
            Your digital experience shouldn’t be either.
          </p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article
              className={`service-panel ${service.style}`}
              key={service.number}
            >
              <div className="panel-top">
                <span>{service.number}</span>
                <ArrowUpRight size={22} />
              </div>
              <p className="eyebrow">{service.category}</p>
              <h3>{service.title}</h3>
              <div className="panel-art" aria-hidden="true">
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
              </div>
              <div className="service-bottom">
                <p>{service.text}</p>
                <small>{service.tags}</small>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section id="work" className="work-section page-width">
        <div className="section-meta">
          <span>02 / POSSIBILITIES IN PRACTICE</span>
          <span>DESIGN EXPLORATIONS</span>
        </div>
        <div className="section-heading">
          <h2>
            Different challenges.
            <br />
            <span>The same care.</span>
          </h2>
          <p>
            A glimpse of what we can create.
            <br />
            Concept studies, made to explore what’s possible.
          </p>
        </div>
        <div className="work-grid">
          <a href="#contact" className="work-card">
            <div className="work-visual tech-concept">
              <div className="mock-nav">
                <b>
                  nexus<StarMark className="nexus-symbol" />
                </b>
                <span>DESIGNED TO CONNECT ↗</span>
              </div>
              <div className="tech-title">
                Ideas.
                <br />
                <em>Connected.</em>
              </div>
              <div className="mock-bottom">
                ONE PLATFORM. NEW POSSIBILITIES.<span>EXPLORE ↗</span>
              </div>
            </div>
            <div className="work-label">
              <div>
                <h3>Nexus — a connected digital experience</h3>
                <p>Technology / Product website / Concept</p>
              </div>
              <ArrowUpRight size={22} />
            </div>
          </a>
          <a href="#contact" className="work-card">
            <div className="work-visual software-concept">
              <div className="dashboard">
                <div className="dashboard-sidebar">
                  <b>o / flow</b>
                  <span className="selected">◈ Overview</span>
                  <span>▤ Projects</span>
                  <span>◎ Activity</span>
                  <span>↗ Reports</span>
                  <small>YOUR WORK, CONNECTED.</small>
                </div>
                <div className="dashboard-main">
                  <div className="dashboard-greeting">
                    Workspace overview <span>↗</span>
                  </div>
                  <p>A little clarity goes a long way.</p>
                  <div className="dashboard-stats">
                    <div>
                      <small>Active projects</small>
                      <strong>
                        12<span>↗</span>
                      </strong>
                    </div>
                    <div>
                      <small>Tasks completed</small>
                      <strong>
                        84<span>+18%</span>
                      </strong>
                    </div>
                  </div>
                  <div className="chart-label">
                    Project activity <span>This month ⌄</span>
                  </div>
                  <div className="chart">
                    {[25, 36, 30, 53, 42, 62, 56, 72, 66, 87, 78, 96].map(
                      (height, i) => (
                        <i key={i} style={{ height: `${height}%` }} />
                      ),
                    )}
                  </div>
                  <div className="dashboard-task">
                    <span>●</span> Website launch <small>In progress</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="work-label">
              <div>
                <h3>Flow — everything in its place</h3>
                <p>Business platform / Web application / Concept</p>
              </div>
              <ArrowUpRight size={22} />
            </div>
          </a>
        </div>
      </section>
      <section id="about" className="about-section page-width">
        <div className="about-photo">
          <span>
            A SMALL STUDIO.
            <br />A WIDER PERSPECTIVE.
          </span>
          <div className="studio-photo-caption">
            <Code2 size={18} />
            <span>
              CREATIVE THINKING.
              <br />
              TECHNICAL PRECISION.
            </span>
          </div>
        </div>
        <div className="about-copy">
          <p className="eyebrow">03 / THE STUDIO</p>
          <h2>
            Good design is felt.
            <br />
            <span>
              Good engineering
              <br />
              makes it possible.
            </span>
          </h2>
          <p>
            We believe the best digital work lives where creativity meets
            clarity. A memorable first impression matters. So does everything
            that happens after it.
          </p>
          <p>
            At Orin, design and development are part of the same conversation.
            You work directly with the people shaping your project, from the
            early questions to the final details.
          </p>
          <div className="about-values">
            <span>Considered, never complicated.</span>
            <span>Personal, from start to finish.</span>
            <span>Built around what matters to you.</span>
          </div>
        </div>
      </section>
      <section id="process" className="process-section page-width">
        <div className="section-meta">
          <span>04 / HOW WE WORK</span>
          <span>A SHARED JOURNEY</span>
        </div>
        <div className="process-layout">
          <div>
            <h2>
              Clear steps.
              <br />
              <span>Open conversation.</span>
            </h2>
            <p className="process-intro">
              You bring the ambition. We bring the design and technical thinking
              to move it forward, one considered step at a time.
            </p>
            <a href="#contact" className="text-link">
              Tell us about your idea <ArrowUpRight size={17} />
            </a>
          </div>
          <div className="process-steps">
            {process.map(([title, subtitle, copy], index) => (
              <div
                className={`process-step ${step === index ? "expanded" : ""}`}
                key={title}
              >
                <button
                  aria-expanded={step === index}
                  aria-controls={`step-${index}`}
                  onClick={() => setStep(step === index ? -1 : index)}
                >
                  <span className="step-number">0{index + 1}</span>
                  <h3>{title}</h3>
                  {step === index ? <Minus size={18} /> : <Plus size={18} />}
                </button>
                <div id={`step-${index}`} hidden={step !== index}>
                  <h4>{subtitle}</h4>
                  <p>{copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="contact" className="contact-section">
        <div className="page-width">
          <div className="section-meta">
            <span>05 / YOUR NEXT CHAPTER</span>
            <span>LET’S MAKE IT HAPPEN</span>
          </div>
          <div className="contact-layout">
            <div>
              <h2>
                Have something
                <br />
                <em>in mind?</em>
              </h2>
              <p>
                A new website. A better way of working.
                <br />
                An idea you’re ready to explore.
                <br />
                We’d love to hear it.
              </p>
              <a className="contact-email" href="mailto:info@orin.it.com"
                onClick={(event) => { event.preventDefault(); openEmail(); }}>
                info@orin.it.com <ArrowUpRight size={25} />
              </a>
            </div>
            <form action="https://formsubmit.co/info@orin.it.com" method="POST">
              <input type="hidden" name="_subject" value="New project inquiry — Orin" />
              <input type="hidden" name="_template" value="table" />
              <div className="form-row">
                <label>
                  Your name
                  <input
                    name="name"
                    placeholder="Alex Smith"
                    autoComplete="name"
                    required
                  />
                </label>
                <label>
                  Email address
                  <input
                    type="email"
                    name="email"
                    placeholder="alex@company.com"
                    autoComplete="email"
                    required
                  />
                </label>
              </div>
              <label>
                What can we help with?
                <select name="service" defaultValue="Web design & development">
                  <option>Web design & development</option>
                  <option>Custom software</option>
                  <option>E-commerce</option>
                  <option>Support & improvements</option>
                  <option>Let’s figure it out together</option>
                </select>
              </label>
              <label>
                A little about your project
                <textarea
                  name="message"
                  placeholder="The idea, the challenge, the possibilities…"
                  rows={3}
                  required
                />
              </label>
              <div className="form-submit">
                <small>Send your project details directly to our inbox.</small>
                <button type="submit" className="pill-link">
                  Start a conversation <ArrowUpRight size={16} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <dialog ref={emailDialog} className="email-dialog" aria-labelledby="email-dialog-title">
        <button type="button" className="email-dialog-close" aria-label="Close email options"
          onClick={() => emailDialog.current?.close()}>×</button>
        <h2 id="email-dialog-title">Let’s start a conversation.</h2>
        <p>Choose your email service. Review and send your message there.</p>
        <div className="email-options">
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=info%40orin.it.com"
            target="_blank" rel="noopener noreferrer">Open Gmail <ArrowUpRight size={16} /></a>
          <a href="https://outlook.live.com/mail/0/deeplink/compose?to=info%40orin.it.com"
            target="_blank" rel="noopener noreferrer">Open Outlook <ArrowUpRight size={16} /></a>
          <a href="mailto:info@orin.it.com">Open email app <ArrowUpRight size={16} /></a>
        </div>
        <p className="email-address">info@orin.it.com</p>
        <button type="button" className="email-copy" onClick={copyEmail}>Copy email address</button>
        <p role="status">{copyStatus}</p>
      </dialog>
      <footer className="page-width">
        <div className="footer-top">
          <a href="#top" className="wordmark" aria-label="Orin home">
            <Image
              src="/logo.png"
              alt="Orin"
              width={129}
              height={48}
              className="wordmark-logo"
            />
          </a>
          <p>Thoughtful design. Purposeful code.</p>
          <a href="#top" className="back-top">
            BACK TO TOP <ArrowUp size={15} />
          </a>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Orin</span>
          <span>INDEPENDENT STUDIO. OPEN TO THE WORLD.</span>
          <a href="/credits.txt">Image credits</a>
        </div>
      </footer>
    </div>
  );
}
