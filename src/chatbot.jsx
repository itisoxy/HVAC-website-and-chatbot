import React from "react";
import ReactDOM from "react-dom/client";
import Chatbot from "./components/Chatbot";
import "./styles.css";
import { useEffect } from "react";

function useReveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll("[data-reveal]");
    nodes.forEach((node) => node.classList.add("is-visible"));
  }, []);
}

function ChatbotShowcase() {
  useReveal();

  return (
    <>
      <div className="bg-orb orb-one" aria-hidden="true" />
      <div className="bg-orb orb-two" aria-hidden="true" />
      <div className="bg-orb orb-three" aria-hidden="true" />

      <header className="topbar">
        <a className="brand" href="/" aria-label="Back to Farooqa Air site">
          <img src="/assets/icongraphic-transparent.png" alt="" className="brand-mark" />
        </a>

        <nav className="nav" aria-label="Chatbot showcase navigation">
          <a href="/">Website</a>
          <a href="#demo">Chatbot demo</a>
        </nav>

        <div className="topbar-actions">
          <a className="btn btn-ghost" href="/">
            Back to site
          </a>
          <a className="btn btn-wa" href="/#contact" aria-label="WhatsApp contact">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 3.2a8.8 8.8 0 0 0-7.6 13.2L3.2 21l4.8-1.2A8.8 8.8 0 1 0 12 3.2Zm4.9 12.4c-.2.6-1 1.2-1.6 1.3-.4.1-.9.1-1.4 0-.4-.1-.9-.2-1.6-.5-2.8-1.2-4.6-3.9-4.7-4.1-.1-.2-1.1-1.5-1.1-2.9 0-1.4.7-2.1 1-2.4.2-.3.6-.4.8-.4h.6c.2 0 .4 0 .6.4.2.5.7 1.8.8 2 .1.2.1.4 0 .6-.1.2-.2.4-.4.6l-.3.4c-.1.2-.2.3 0 .6.2.3.8 1.3 1.8 2.1 1.3 1.2 2.4 1.5 2.7 1.6.3.1.5.1.7-.1l1.1-1.3c.2-.2.4-.2.7-.1.3.1 1.9.9 2.2 1.1.2.1.4.2.4.4 0 .3 0 1.3-.3 1.9Z" />
            </svg>
          </a>
        </div>
      </header>

      <main className="section chatbot-showcase" id="demo">
        <div className="section-heading chatbot-showcase__intro" data-reveal>
          <span className="eyebrow">Chatbot demo</span>
          <h1>HVAC intake assistant for quotes, faults and emergency callouts.</h1>
          <p>
            This version of the chatbot is built to feel like a real office assistant.
            It asks what’s wrong, where you’re located, whether the unit was fitted by us,
            and whether the job is urgent before handing over to a human team member.
          </p>
        </div>

        <div className="chatbot-showcase__grid">
          <section className="chatbot-showcase__panel" data-reveal>
            <h2>What it captures</h2>
            <div className="chatbot-showcase__cards">
              <article className="chatbot-showcase__card">
                <strong>Problem</strong>
                <p>Asks what’s wrong, from no cooling to leaks, noise or breakdowns.</p>
              </article>
              <article className="chatbot-showcase__card">
                <strong>Location</strong>
                <p>Collects the postcode or address so the team knows where to attend.</p>
              </article>
              <article className="chatbot-showcase__card">
                <strong>Existing install</strong>
                <p>Checks whether the unit was fitted by Farooqa Air to speed up diagnosis.</p>
              </article>
              <article className="chatbot-showcase__card">
                <strong>Urgency</strong>
                <p>Separates emergency jobs from standard visits and sets the right timing.</p>
              </article>
            </div>
          </section>

          <section className="chatbot-showcase__demo" data-reveal>
            <Chatbot embedded defaultOpen />
          </section>
        </div>
      </main>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChatbotShowcase />
  </React.StrictMode>
);
