import { useEffect, useState } from "react";
import brandIcon from "../assets/icongraphic-transparent.png";
import installation1 from "../assets/installation-1.webp";
import installation2 from "../assets/installation-2.png";
import installation3 from "../assets/installation-3.png";
import Chatbot from "./components/Chatbot";

const services = [
  {
    icon: "❄",
    title: "Air conditioning installation",
    description:
      "Wall-mounted, split and ducted systems sized correctly for your home, office or commercial space.",
  },
  {
    icon: "↻",
    title: "Replacement & upgrades",
    description:
      "Swap old, inefficient units for modern systems that cool better, run cleaner and cost less to operate.",
  },
  {
    icon: "✦",
    title: "Maintenance & servicing",
    description:
      "Routine servicing, filter changes and performance checks to help your system stay efficient all year.",
  },
  {
    icon: "⚙",
    title: "Repairs & breakdowns",
    description:
      "Fast fault-finding and practical repairs when your system stops cooling, leaks or makes unusual noise.",
  },
  {
    icon: "◌",
    title: "Ventilation & airflow",
    description:
      "Improve circulation, comfort and indoor air quality with better airflow and balanced room distribution.",
  },
  {
    icon: "!",
    title: "Emergency callouts",
    description:
      "Priority support for no-cool and no-heat situations when you need a quicker response.",
    variant: "alert",
  },
];

const trustPoints = [
  {
    label: "Domestic installs",
    text: "Tailored air conditioning for houses, flats and new extensions.",
  },
  {
    label: "Commercial projects",
    text: "Systems for shops, offices, hospitality spaces and workspaces.",
  },
  {
    label: "Fast response",
    text: "Clear quotes, quick site visits and responsive emergency support.",
  },
];

const steps = [
  {
    label: "Step 1",
    title: "Book a survey",
    text: "Tell us about the property, the rooms you want to cool and any access constraints.",
  },
  {
    label: "Step 2",
    title: "Receive your quote",
    text: "We recommend the right system and send a clear quote with practical options.",
  },
  {
    label: "Step 3",
    title: "Professional installation",
    text: "Our team installs, tests and commissions the system with minimal disruption.",
  },
];

const reviews = [
  {
    stars: 5,
    name: "Sarah M.",
    text: "Quick survey, clear quote and a neat installation. Everything was left tidy.",
  },
  {
    stars: 5,
    name: "James T.",
    text: "They replaced our old unit and the difference in cooling is night and day.",
  },
  {
    stars: 4,
    name: "Aisha K.",
    text: "Really good communication and a fast response when we needed a breakdown visit.",
  },
  {
    stars: 5,
    name: "Daniel P.",
    text: "Professional team, clean finish and a proper handover with useful advice.",
  },
];

function useReveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll("[data-reveal]");
    if (!("IntersectionObserver" in window)) {
      nodes.forEach((node) => node.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
}

function WaveArt() {
  const paths = [
    "M24 115C52 103 84 94 117 90C171 83 233 92 292 104C364 119 413 134 476 134C560 134 611 112 656 89",
    "M24 152C63 138 96 129 130 127C181 122 233 139 294 151C368 167 415 178 474 177C551 176 611 160 656 141",
    "M24 190C67 181 106 176 147 178C199 181 245 197 300 206C373 218 423 219 478 209C543 197 599 172 656 150",
  ];

  return (
    <svg className="hero-wave" viewBox="0 0 680 260" aria-hidden="true">
      {paths.map((d, index) => (
        <path
          key={d}
          d={d}
          className={`hero-wave__path hero-wave__path--${index + 1}`}
        />
      ))}
    </svg>
  );
}

function IconInstagram() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" fill="none" />
      <circle cx="12" cy="12" r="4.2" fill="none" />
      <circle cx="17.1" cy="6.8" r="1.2" />
      <circle cx="12" cy="12" r="1.9" />
    </svg>
  );
}

function IconFacebook() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14 8.2h2.1V5.5H14c-2.4 0-4 1.6-4 4.1V12H7.5v2.8H10V21h2.9v-6.2h2.3L15.8 12h-2.9v-2c0-.7.4-1.8 1.1-1.8Z" />
    </svg>
  );
}

function IconWhatsApp() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3.2a8.8 8.8 0 0 0-7.6 13.2L3.2 21l4.8-1.2A8.8 8.8 0 1 0 12 3.2Zm4.9 12.4c-.2.6-1 1.2-1.6 1.3-.4.1-.9.1-1.4 0-.4-.1-.9-.2-1.6-.5-2.8-1.2-4.6-3.9-4.7-4.1-.1-.2-1.1-1.5-1.1-2.9 0-1.4.7-2.1 1-2.4.2-.3.6-.4.8-.4h.6c.2 0 .4 0 .6.4.2.5.7 1.8.8 2 .1.2.1.4 0 .6-.1.2-.2.4-.4.6l-.3.4c-.1.2-.2.3 0 .6.2.3.8 1.3 1.8 2.1 1.3 1.2 2.4 1.5 2.7 1.6.3.1.5.1.7-.1l1.1-1.3c.2-.2.4-.2.7-.1.3.1 1.9.9 2.2 1.1.2.1.4.2.4.4 0 .3 0 1.3-.3 1.9Z" />
    </svg>
  );
}

const heroSlides = [
  {
    kind: "photo",
    image: installation1,
    title: "Wall-mounted split installation",
    subtitle: "Domestic work",
    copy: "A clean, well-finished installation for a comfortable living space.",
  },
  {
    kind: "photo",
    image: installation2,
    title: "Careful system setup",
    subtitle: "Professional fitting",
    copy: "Tidy pipework, neat mountings and attention to detail from start to finish.",
  },
  {
    kind: "photo",
    image: installation3,
    title: "Precision finishing",
    subtitle: "Commissioning",
    copy: "Balanced airflow and a polished finish that shows proper commissioning.",
  },
];

function HeroBookingForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <form className="hero-booking" onSubmit={handleSubmit}>
      <div className="hero-booking__head">
        <span className="hero-booking__eyebrow">Request a quote</span>
        <span className="hero-booking__badge">Emergency callouts available</span>
      </div>

      <div className="hero-booking__grid">
        <label>
          <span>Name</span>
          <input type="text" name="name" placeholder="Your name" />
        </label>
        <label>
          <span>Phone</span>
          <input type="tel" name="phone" placeholder="Best contact number" />
        </label>
        <label>
          <span>Service needed</span>
          <select name="service" defaultValue="air-conditioning">
            <option value="air-conditioning">Air conditioning installation</option>
            <option value="replacement">Replacement / upgrade</option>
            <option value="maintenance">Maintenance / servicing</option>
            <option value="emergency">Emergency callout</option>
          </select>
        </label>
        <label>
          <span>Preferred visit date</span>
          <input type="date" name="date" />
        </label>
      </div>

      <button className="btn btn-primary hero-booking__submit" type="submit">
        Send request
      </button>

      <p className={`booking-status ${submitted ? "is-visible" : ""}`} aria-live="polite">
        {submitted ? "Thanks, your request is ready to be connected to a backend." : "Fast replies for quotes, installations and urgent callouts."}
      </p>
    </form>
  );
}

function HeroSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % heroSlides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="hero-slider" aria-label="Featured installations">
      <div className="hero-slider__frame">
        <div
          className="hero-slider__track"
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {heroSlides.map((slide) => (
            <article className={`hero-slide hero-slide--${slide.kind}`} key={slide.title}>
              <img src={slide.image} alt={slide.title} className="hero-slide__image" />
              <div className="hero-slide__scrim" aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

function App() {
  useReveal();
  const year = new Date().getFullYear();

  return (
    <>
      <div className="bg-orb orb-one" aria-hidden="true" />
      <div className="bg-orb orb-two" aria-hidden="true" />
      <div className="bg-orb orb-three" aria-hidden="true" />

      <header className="topbar">
        <a className="brand" href="#home" aria-label="Farooqa Air home">
          <img src={brandIcon} alt="" className="brand-mark" />
        </a>

        <nav className="nav" aria-label="Primary">
          <a href="#services">Services</a>
          <a href="#approach">Approach</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="topbar-actions">
          <a className="btn btn-ghost" href="#contact">
            Request a quote
          </a>
          <a className="btn btn-alert" href="#services">
            Emergency contact
          </a>
          <a className="btn btn-wa" href="#contact" aria-label="WhatsApp contact">
            <IconWhatsApp />
          </a>
        </div>
      </header>

      <main id="home">
        <section className="hero section">
          <div className="hero-copy" data-reveal>
            <span className="eyebrow">Air conditioning installation, servicing and repairs</span>
            <h1>Professional cooling systems for homes and businesses.</h1>
            <p className="lead">
              Farooqa Air installs, replaces and maintains air conditioning systems with
              neat workmanship, clear pricing and emergency support when you need it.
            </p>

            <div className="hero-actions">
              <a className="btn btn-primary" href="#services">
                Explore services
              </a>
              <a className="btn btn-secondary" href="#contact">
                Book an estimate
              </a>
            </div>

            <div className="hero-notes">
              <span>Domestic installs</span>
              <span>Commercial systems</span>
              <span>Emergency callouts</span>
            </div>
          </div>

          <div className="hero-visual" data-reveal>
            <div className="hero-visual-stack">
              <HeroSlider />

              <div className="floating-card floating-card--left">
                <span className="stat-label">What we do</span>
                <strong>Install, replace, service</strong>
                <p>Air conditioning work that is planned properly and finished neatly.</p>
              </div>

              <div className="floating-card floating-card--right">
                <span className="stat-label">Response</span>
                <strong>Quick quotes and callouts</strong>
                <p>Responsive support for homes, shops, offices and property managers.</p>
              </div>

              <div className="hero-ring hero-ring--one" aria-hidden="true" />
              <div className="hero-ring hero-ring--two" aria-hidden="true" />
            </div>

            <HeroBookingForm />
          </div>
        </section>

        <div className="wave-divider" aria-hidden="true">
          <WaveArt />
        </div>

        <section className="trustbar section" aria-label="Highlights">
          {trustPoints.map((point, index) => (
            <article
              className="trust-item"
              data-reveal
              style={{ transitionDelay: `${index * 80}ms` }}
              key={point.label}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{point.label}</strong>
              <p>{point.text}</p>
            </article>
          ))}
        </section>

        <section id="services" className="section" data-reveal>
          <div className="section-heading">
            <span className="eyebrow">Services</span>
            <h2>Everything you need to keep a property cool and comfortable.</h2>
            <p>
              We handle full installations, upgrades, servicing and repair work with a
              focus on neat finishes, honest advice and dependable results.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article
                className={`service-card ${service.variant ? `service-card--${service.variant}` : ""}`}
                key={service.title}
              >
                <div className={`service-icon ${service.variant ? `service-icon--${service.variant}` : ""}`}>
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="approach" className="section split" data-reveal>
          <div className="split-copy">
            <span className="eyebrow">Why choose us</span>
            <h2>Practical advice, tidy workmanship and support after the install.</h2>
            <p>
              We keep the process straightforward from the first survey through to final
              commissioning, so you know what’s being fitted, why it suits the space and
              how to look after it afterwards.
            </p>
            <ul className="checklist">
              <li>Site surveys and system recommendations tailored to your property</li>
              <li>Neat installations with minimal disruption to the space</li>
              <li>Clear quotes for domestic and commercial projects</li>
              <li>Maintenance and emergency support when things go wrong</li>
            </ul>
          </div>

          <div className="feature-panel">
            <div className="metric">
              <strong>Survey</strong>
              <span>We assess the property and recommend the right system</span>
            </div>
            <div className="metric">
              <strong>Install</strong>
              <span>Clean, tidy fitting with proper testing and handover</span>
            </div>
            <div className="metric">
              <strong>Aftercare</strong>
              <span>Servicing, maintenance and support after the job</span>
            </div>
          </div>
        </section>

        <div className="wave-divider wave-divider--right" aria-hidden="true">
          <WaveArt />
        </div>

        <section id="process" className="section" data-reveal>
          <div className="section-heading">
            <span className="eyebrow">Process</span>
            <h2>A straightforward process from survey to sign-off.</h2>
          </div>

          <div className="process-grid">
            {steps.map((step) => (
              <article className="process-card" key={step.title}>
                <span>{step.label}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section reviews-section" data-reveal>
          <div className="section-heading">
            <span className="eyebrow">Reviews</span>
            <h2>Trusted by homeowners and business owners alike.</h2>
            <p>
              A few recent comments from customers who wanted a tidy install, good
              communication and a straightforward experience from start to finish.
            </p>
          </div>

          <div className="review-grid" aria-label="Customer reviews">
            {reviews.map((review) => (
              <article className="review-card" key={review.name}>
                <div className="review-card__stars" aria-label={`${review.stars} stars`}>
                  {"★".repeat(review.stars)}
                  {review.stars < 5 ? "☆".repeat(5 - review.stars) : null}
                </div>
                <p>{review.text}</p>
                <strong>{review.name}</strong>
              </article>
            ))}
          </div>
        </section>

        <section className="section portfolio-strip" data-reveal>
          <div className="section-heading portfolio-strip__heading">
            <span className="eyebrow">Portfolio</span>
            <h2>Two connected pieces of work, presented clearly.</h2>
            <p>
              The main site shows the full air conditioning business experience. The
              chatbot demo shows the service intake flow on its own, so both parts are
              easy to understand in a portfolio setting.
            </p>
          </div>

          <div className="portfolio-grid">
            <article className="portfolio-card portfolio-card--main">
              <span className="portfolio-card__tag">Website</span>
              <h3>Farooqa Air business site</h3>
              <p>
                A polished HVAC landing page with services, process, reviews, contact
                forms and a floating chatbot on the live build.
              </p>
              <div className="portfolio-card__actions">
                <a className="btn btn-primary" href="/">
                  View site
                </a>
                <a className="btn btn-ghost" href="/#contact">
                  Contact section
                </a>
              </div>
            </article>

            <article className="portfolio-card portfolio-card--demo">
              <span className="portfolio-card__tag">Chatbot</span>
              <h3>Service intake assistant</h3>
              <p>
                A separate showcase page for the chatbot flow, where it asks about the
                fault, postcode, fitted-by-us status and urgency before handing over.
              </p>
              <div className="portfolio-card__actions">
                <a className="btn btn-primary" href="/chatbot.html">
                  Open demo
                </a>
                <a className="btn btn-ghost" href="/chatbot.html#demo">
                  Read overview
                </a>
              </div>
            </article>
          </div>
        </section>

        <section id="contact" className="section" data-reveal>
          <div className="cta-panel">
            <div className="cta-copy">
              <span className="eyebrow">Contact</span>
              <h2>Need a quote, installation or emergency callout?</h2>
              <p>
                Tell us about the property and the work you need. We’ll get back with a
                clear quote or arrange a visit for urgent breakdown support.
              </p>

              <div className="contact-chips" aria-label="Contact details">
                <span>Domestic and commercial work</span>
                <span>Quotes and site surveys</span>
                <span>Emergency support available</span>
              </div>

              <div className="contact-wave" aria-hidden="true">
                <WaveArt />
              </div>
            </div>

            <form className="contact-form">
              <label>
                <span>Name</span>
                <input type="text" placeholder="Your name" />
              </label>
              <label>
                <span>Phone or email</span>
                <input type="text" placeholder="Best contact method" />
              </label>
              <label>
                <span>Tell us what you need</span>
                <textarea
                  rows="4"
                  placeholder="Tell us about your property, the rooms you want to cool, and any issues you’re having"
                />
              </label>
              <button className="btn btn-primary" type="button">
                Request quote
              </button>
            </form>
          </div>
        </section>
      </main>

      <Chatbot />

      <footer className="footer">
        <div className="footer-brand">
          <span>Farooqa Air</span>
          <span>Air conditioning installation & maintenance</span>
        </div>

        <div className="footer-links">
          <a className="footer-link" href="/chatbot.html">
            View chatbot demo
          </a>
        </div>

        <div className="social-links" aria-label="Social media">
          <a className="social-link" href="#contact" aria-label="Instagram">
            <IconInstagram />
          </a>
          <a className="social-link" href="#contact" aria-label="Facebook">
            <IconFacebook />
          </a>
          <a className="social-link" href="#contact" aria-label="WhatsApp">
            <IconWhatsApp />
          </a>
        </div>

        <span>{year}</span>
      </footer>
    </>
  );
}

export default App;
