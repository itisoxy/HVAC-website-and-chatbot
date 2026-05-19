# Generative Web Development: HVAC Website & FAQ Chatbot

A generative web development project for **Farooqa Air**, an HVAC and air conditioning service business. This project combines an AI-assisted website build with a rule-based FAQ and lead-intake chatbot designed to capture enquiries, answer common customer questions, and route urgent service requests.

The project is designed as a portfolio-ready example of how a local service business can use a modern website and chatbot experience to improve customer communication, generate leads, and support faster enquiry handling.

---

## Project Overview

This project presents a complete service-business website for an HVAC company. It includes a conversion-focused landing page, service sections, customer trust content, quote request forms, reviews, installation visuals, and a built-in chatbot.

The chatbot acts as a digital service assistant. It helps customers report faults, request quotes, ask for emergency support, and provide the key information a human team would need before following up.

This makes the project useful as both a business website and a practical example of generative web development applied to a real-world service business.

---

## What This Project Demonstrates

- AI-assisted website planning and development
- Service-business landing page structure
- Lead capture and enquiry flow design
- FAQ and customer intake chatbot logic
- React component-based development
- Front-end chatbot state management
- Customer journey mapping for a local service business
- Portfolio-ready product thinking for AI and web roles

---

## Key Features

### Service Business Website

- Modern responsive landing page for an HVAC company
- Hero section with installation imagery and quote call-to-actions
- Clear service positioning for domestic and commercial customers
- Service cards for:
  - Air conditioning installation
  - Replacement and upgrades
  - Maintenance and servicing
  - Repairs and breakdowns
  - Ventilation and airflow
  - Emergency callouts
- Trust points for:
  - Domestic installs
  - Commercial projects
  - Fast response
- Step-by-step customer process:
  - Book a survey
  - Receive a quote
  - Professional installation
- Customer review section
- Contact section with quote request form
- Social/contact buttons styled for WhatsApp, Instagram, and Facebook
- Portfolio section linking the main website and chatbot demo

---

## FAQ & Intake Chatbot

The chatbot is designed to support common HVAC customer enquiries and reduce the amount of manual back-and-forth before a human follow-up.

### Chatbot Capabilities

- Floating chatbot on the main website
- Separate standalone chatbot demo page at `/chatbot.html`
- Quick action buttons for common enquiries
- Handles customer intents such as:
  - Report a fault
  - Book a quote
  - Emergency help
  - No cooling
  - Strange noise
  - Leak or drip
  - Unit will not turn on
- Asks the customer where they are located
- Checks whether the unit was fitted by the company
- Separates urgent callouts from standard visits
- Collects contact details for follow-up
- Provides a summary response based on the customer’s answers
- Guides the customer towards human handover

---

## Chatbot Flow

The chatbot follows a simple rule-based conversation flow:

1. Customer chooses an enquiry type or types their issue.
2. Chatbot asks what is wrong with the system.
3. Chatbot asks for the customer’s location or postcode.
4. Chatbot asks whether the unit was fitted by the company.
5. Chatbot asks whether the job is urgent or standard.
6. Chatbot collects contact details.
7. Chatbot produces a summary and confirms that a human team member will follow up.

This creates a practical customer intake flow that could later be connected to a backend, CRM, email notification system, or AI assistant.

---

## Tech Stack

- **React**
- **Vite**
- **JavaScript**
- **CSS**
- **HTML**

---

## Project Structure

```bash
HVAC-website-and-chatbot/
├── assets/
│   ├── icongraphic-transparent.png
│   ├── installation-1.webp
│   ├── installation-2.png
│   └── installation-3.png
├── src/
│   ├── components/
│   │   └── Chatbot.jsx
│   ├── App.jsx
│   ├── chatbot.jsx
│   └── styles.css
├── chatbot.html
├── index.html
├── package.json
└── README.md
