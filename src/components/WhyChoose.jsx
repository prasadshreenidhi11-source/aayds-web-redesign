import React, { useState } from "react";
import "./WhyChoose.css";

const matching = {
  number: "01",
  icon: "✦",
  label: "MATCHING",
  title: "Personalised Support Matching",
  description:
    "We carefully match participants with support workers based on compatibility, personality, interests and individual needs.",
  image:
    "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&w=1800&q=85",
};

const benefits = [
  matching,

  {
    number: "02",
    icon: "◉",
    label: "LOCAL",
    title: "Local Moreton Bay Expertise",
    description:
      "Support from people who know your local community and understand the needs of participants across Moreton Bay.",
    image:
      "https://images.unsplash.com/photo-1504159506876-f8338247a14a?auto=format&fit=crop&w=1800&q=85",
  },
  {
    number: "03",
    icon: "♢",
    label: "NDIS",
    title: "NDIS-Aligned Delivery",
    description:
      "Our support is designed around your NDIS plan, personal goals and the outcomes that matter most to you.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1800&q=85",
  },
  {
    number: "04",
    icon: "♡",
    label: "RESPECT",
    title: "Respect & Dignity First",
    description:
      "We put your choices, independence and dignity first, creating support that respects who you are.",
    image:
      "https://images.unsplash.com/photo-1559234938-b60fff04894d?auto=format&fit=crop&w=1800&q=85",
  },
  {
    number: "05",
    icon: "↻",
    label: "CONSISTENCY",
    title: "Consistent Care",
    description:
      "Reliable and consistent support built around your routine, preferences and the people you trust.",
    image:
      "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=1800&q=85",
  },
];

function WhyChoose() {
  const [active, setActive] = useState(matching);

  return (
    <section className="why-choose" id="why-choose">
      <div className="why-container">

        {/* Heading */}
        <div className="why-heading">
          <span className="why-label">WHY CHOOSE AAYDS</span>

          <h2>
            Support That Puts <span>You First</span>
          </h2>

          <p>
            We don't believe in one-size-fits-all support. Every decision
            we make is centred around you, your goals and the people who
            matter most.
          </p>
        </div>

        {/* Main Feature */}
        <div className="why-feature">

          <img
            key={active.image}
            src={active.image}
            alt={active.title}
            className="feature-image"
          />

          <div className="feature-overlay"></div>

          <div className="feature-content">

            <span className="feature-label">
              {active.number} — {active.label}
            </span>

            <h3>{active.title}</h3>

            <p>{active.description}</p>

            <a href="#contact" className="feature-button">
              Discover Our Approach
              <span>→</span>
            </a>

          </div>
        </div>

        {/* Benefit Cards */}
        <div className="benefits-grid">

          {benefits.map((benefit) => (
            <div
              className={`benefit-card ${
                active.number === benefit.number ? "active" : ""
              }`}
              key={benefit.number}
              onMouseEnter={() => setActive(benefit)}
            >

              <div className="benefit-top">

                <div className="benefit-icon">
                  {benefit.icon}
                </div>

                <span className="benefit-number">
                  {benefit.number}
                </span>

              </div>

              <div className="benefit-content">

                <h3>{benefit.title}</h3>

                <p>{benefit.description}</p>

              </div>

              <div className="benefit-arrow">
                →
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default WhyChoose;