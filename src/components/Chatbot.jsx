import { useEffect, useMemo, useRef, useState } from "react";

const quickActionsByStep = {
  start: ["Report a fault", "Book a quote", "Emergency help"],
  issue: ["No cooling", "Strange noise", "Leak or drip", "Won't turn on"],
  fittedByUs: ["Yes", "No", "Not sure"],
  urgency: ["Urgent", "Standard"],
  contact: ["Send details"],
  complete: ["Start again"],
};

const starterMessages = [
  {
    id: 1,
    role: "bot",
    text:
      "Hi, I’m the Farooqa Air helper. Tell me what’s wrong and I’ll ask the right follow-up questions.",
  },
];

function IconChat() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.8 18.3 3.2 21l1-3.8A8.8 8.8 0 1 1 12 21.8a8.9 8.9 0 0 1-5.2-1.7ZM8 10.8h8v1.8H8Zm0-3.2h6.2v1.8H8Zm0 6.4h5.2v1.8H8Z" />
    </svg>
  );
}

function IconClose() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18.5 6.9 13.4 12l5.1 5.1-1.5 1.5-5.1-5.1-5.1 5.1-1.5-1.5 5.1-5.1-5.1-5.1 1.5-1.5 5.1 5.1 5.1-5.1z" />
    </svg>
  );
}

function IconSend() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m4 20 16-8L4 4l2.1 6L14 12l-7.9 2z" />
    </svg>
  );
}

function normalise(value) {
  return value.trim().toLowerCase();
}

function isYes(value) {
  const text = normalise(value);
  return ["yes", "yeah", "yep", "y", "true"].includes(text);
}

function isNo(value) {
  const text = normalise(value);
  return ["no", "nope", "n", "false"].includes(text);
}

function isUrgent(value) {
  const text = normalise(value);
  return text.includes("urgent") || text.includes("emergency") || text.includes("breakdown");
}

function makeSummary(state) {
  const issue = state.issue || "the unit is not working properly";
  const location = state.location || "your property";
  const propertySummary = state.propertySummary || "the job";
  const contactDetails = state.contactDetails || "your contact details";
  const fitted = state.fittedByUs === "yes" ? "was fitted by us" : state.fittedByUs === "no" ? "was not fitted by us" : "may not have been fitted by us";

  if (state.urgency === "urgent") {
    return [
      `Thanks, that sounds like an urgent callout for ${location}.`,
      `You mentioned ${issue}, and the unit ${fitted}.`,
      "We can usually have someone out within 24 hours for urgent attendance, and we’ll treat it as a priority booking.",
      `Once you send your postcode or address, phone number and email, one of our human team members will contact you shortly.`,
    ];
  }

  if (state.propertySummary && !state.issue) {
    return [
      `Thanks, we can help with a quote for ${propertySummary}.`,
      `The property is in ${location}, which helps us plan the right setup and access.`,
      "Tell us a little about the room count and the type of system you want, and we’ll match the right option to the space.",
      "We can usually have someone out within 2 days for a survey or quote visit, depending on availability.",
    ];
  }

  if (state.contactDetails) {
    return [
      `Thanks, we’ve received your details for ${location}.`,
      `One of our human team members will contact you shortly using ${contactDetails}.`,
      "If the issue is urgent, we’ll prioritise it and aim to get someone out within 24 hours.",
    ];
  }

  return [
    `Thanks, we’ve got the details for ${location}.`,
    `It sounds like ${issue}, and the unit ${fitted}.`,
    state.fittedByUs === "yes"
      ? "Because we fitted it, we may already have the system details on file and can move a little quicker."
      : "If we did not fit it, we may ask for a photo or model number before the visit so we can arrive prepared.",
    "We can usually have someone out within 2 days to take a look and confirm the next step.",
    "If you have any photos of the indoor and outdoor units, those can help us speed things up.",
  ];
}

function getIntroForStep(step) {
  switch (step) {
    case "issue":
      return "What seems wrong with the system?";
    case "location":
      return "Where are you located? A postcode or area is perfect.";
    case "fittedByUs":
      return "Was the unit fitted by us?";
    case "urgency":
      return "Is this an emergency or a standard visit?";
    case "contact":
      return "Please share your postcode or address, plus phone number and email, so a human team member can contact you shortly.";
    case "complete":
      return "That’s enough for now. If you want to start again, I can take a fresh set of details.";
    case "quote":
      return "Great. Tell me a little about the property and I’ll help shape the quote.";
    default:
      return "Choose what you need and I’ll guide you through it.";
  }
}

function getBotReply(step, userInput, state) {
  const text = normalise(userInput);

  if (step === "start") {
    if (text.includes("quote")) {
      return {
        nextStep: "quote",
        updates: { step: "quote" },
        message:
          "Perfect. We can help with a quote. Tell me the property type and the rooms you want to cool.",
      };
    }

    if (text.includes("emergency")) {
      return {
        nextStep: "issue",
        updates: { step: "urgent" },
        message: "Understood. What’s wrong with the system?",
      };
    }

    return {
      nextStep: "issue",
      updates: {},
      message: "What seems wrong with the system?",
    };
  }

  if (step === "quote") {
    return {
      nextStep: "location",
      updates: { propertySummary: userInput },
      message: "Thanks. Where is the property located?",
    };
  }

  if (step === "issue") {
    return {
      nextStep: "location",
      updates: { issue: userInput },
      message: "Thanks. Where is the property located?",
    };
  }

  if (step === "location") {
    return {
      nextStep: "fittedByUs",
      updates: { location: userInput },
      message: "Was the unit fitted by us?",
    };
  }

  if (step === "fittedByUs") {
    const fittedByUs = isYes(userInput) ? "yes" : isNo(userInput) ? "no" : "not_sure";
    return {
      nextStep: "urgency",
      updates: { fittedByUs },
      message: "Is this an emergency or a standard visit?",
    };
  }

  if (step === "urgency") {
    const urgency = isUrgent(userInput) ? "urgent" : "standard";
    return {
      nextStep: "contact",
      updates: { urgency },
      message:
        urgency === "urgent"
          ? "Understood. Please send your postcode or address, phone number and email, and one of our human team members will contact you shortly. For urgent jobs, we can usually have someone out within 24 hours."
          : "Please send your postcode or address, phone number and email, and one of our human team members will contact you shortly.",
    };
  }

  if (step === "contact") {
    return {
      nextStep: "complete",
      updates: { contactDetails: userInput },
      message: makeSummary({ ...state, contactDetails: userInput }).join(" "),
    };
  }

  if (step === "complete") {
    return {
      nextStep: "start",
      updates: {
        issue: "",
        location: "",
        fittedByUs: "",
        urgency: "",
        propertySummary: "",
        contactDetails: "",
      },
      message: "Fresh start. What would you like help with first?",
    };
  }

  return {
    nextStep: "issue",
    updates: {},
    message: "Tell me what’s wrong and I’ll guide you through the next steps.",
  };
}

export default function Chatbot({ embedded = false, defaultOpen = false } = {}) {
  const [open, setOpen] = useState(defaultOpen);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState(starterMessages);
  const [step, setStep] = useState("start");
  const [context, setContext] = useState({
    issue: "",
    location: "",
    fittedByUs: "",
    urgency: "",
    propertySummary: "",
    contactDetails: "",
  });
  const endRef = useRef(null);
  const replyTimerRef = useRef(null);

  const title = useMemo(() => (open ? "Close chat" : "Open chat"), [open]);
  const quickActions = quickActionsByStep[step] || quickActionsByStep.start;

  useEffect(() => {
    if (endRef.current) {
      endRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [messages, open]);

  useEffect(() => {
    return () => {
      if (replyTimerRef.current) {
        window.clearTimeout(replyTimerRef.current);
      }
    };
  }, []);

  function addBotMessage(message) {
    setMessages((current) => [
      ...current,
      {
        id: Date.now() + 1,
        role: "bot",
        text: message,
      },
    ]);
  }

  function handleFlow(value) {
    const nextValue = value.trim();
    if (!nextValue) return;

    setMessages((current) => [
      ...current,
      {
        id: Date.now(),
        role: "user",
        text: nextValue,
      },
    ]);
    setInput("");

    if (replyTimerRef.current) {
      window.clearTimeout(replyTimerRef.current);
    }

    replyTimerRef.current = window.setTimeout(() => {
      const reply = getBotReply(step, nextValue, context);
      if (reply.updates && Object.keys(reply.updates).length) {
        setContext((current) => ({ ...current, ...reply.updates }));
      }
      setStep(reply.nextStep);
      addBotMessage(reply.message);
    }, 260);
  }

  function handleSubmit(event) {
    event.preventDefault();
    handleFlow(input);
  }

  function handleQuickAction(action) {
    if (action === "Start again") {
      setMessages(starterMessages);
      setContext({
        issue: "",
        location: "",
        fittedByUs: "",
        urgency: "",
        propertySummary: "",
        contactDetails: "",
      });
      setStep("start");
      setInput("");
      return;
    }

    handleFlow(action);
  }

  return (
    <aside
      className={`chatbot ${embedded ? "chatbot--embedded" : ""} ${open ? "is-open" : ""}`}
      aria-label="Chatbot"
    >
      {!embedded ? (
        <div className="chatbot__launcher-wrap">
          <span className="chatbot__hint" aria-hidden="true">
            Here to help
          </span>
          <button
            className="chatbot__launcher"
            type="button"
            onClick={() => setOpen((current) => !current)}
            aria-expanded={open}
            aria-controls="chatbot-panel"
            aria-label={title}
          >
            {open ? <IconClose /> : <IconChat />}
          </button>
        </div>
      ) : null}

      <section
        className="chatbot__panel"
        id="chatbot-panel"
        aria-hidden={!embedded && !open}
      >
        <header className="chatbot__header">
          <div>
            <span className="chatbot__eyebrow">Live helper</span>
            <strong>Farooqa Air assistant</strong>
          </div>
          <button
            className="chatbot__header-close"
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close chatbot"
          >
            <IconClose />
          </button>
        </header>

        <div className="chatbot__body">
          <p className="chatbot__intro">{getIntroForStep(step)}</p>

          <div className="chatbot__quick" aria-label="Quick prompts">
            {quickActions.map((prompt) => (
              <button
                key={prompt}
                className="chatbot__quick-btn"
                type="button"
                onClick={() => handleQuickAction(prompt)}
              >
                {prompt}
              </button>
            ))}
          </div>

          <div className="chatbot__messages" aria-live="polite" aria-relevant="additions text">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`chatbot__message chatbot__message--${message.role}`}
              >
                {message.text}
              </div>
            ))}
            <div ref={endRef} />
          </div>
        </div>

        <form className="chatbot__form" onSubmit={handleSubmit}>
          <input
            className="chatbot__input"
            type="text"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder={
              step === "fittedByUs"
                ? "Yes, no or not sure"
                : step === "urgency"
                  ? "Urgent or standard?"
                  : step === "contact"
                    ? "Postcode, phone and email"
                  : "Type your reply..."
            }
            aria-label="Type a message"
          />
          <button className="chatbot__send" type="submit" aria-label="Send message">
            <IconSend />
          </button>
        </form>
      </section>
    </aside>
  );
}
