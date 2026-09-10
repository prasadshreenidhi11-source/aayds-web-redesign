import React from "react";
import "./HowItWorks.css";

const steps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We begin with a consultation to understand your needs, goals, and lifestyle.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "We align services with your NDIS goals, funding categories, and timelines.",
  },
  {
    number: "03",
    title: "Match",
    description:
      "We assign the right support team based on your personality and lifestyle.",
  },
  {
    number: "04",
    title: "Support",
    description:
      "Ongoing care with regular reviews and a consistent, trusted support team.",
  },
];

const HowItWorks = () => {
  return (
    <section className="how-it-works">

      {/* SECTION HEADING */}
      <div className="how-it-works-header">
        <span className="how-it-works-label">
          HOW IT WORKS
        </span>

        <h2>
          Simple Steps to Personalised Support
        </h2>

        <p>
          From your first conversation to ongoing care, we make the process
          simple, clear, and centred around you.
        </p>
      </div>

      {/* STEPS */}
      <div className="how-it-works-grid">
        {steps.map((step) => (
          <div className="how-step" key={step.number}>

            {/* NUMBER */}
            <span className="how-step-number">
              {step.number}
            </span>

            {/* HEADING */}
            <h3>
              {step.title}
            </h3>

            {/* DESCRIPTION */}
            <p>
              {step.description}
            </p>

          </div>
        ))}
      </div>

    </section>
  );
};

export default HowItWorks;