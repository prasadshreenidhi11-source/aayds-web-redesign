import React from "react";
import "./WhoWeSupport.css";

const supportItems = [
  {
    number: "01",
    title: "Participants needing daily living support",
    description:
      "Practical support with everyday activities to help you live safely, confidently, and as independently as possible.",
  },
  {
    number: "02",
    title: "Individuals requiring personal care or in-home assistance",
    description:
      "Respectful and personalised assistance with personal care and everyday needs, delivered in the comfort of your home.",
  },
  {
    number: "03",
    title: "Participants exploring Supported Independent Living (SIL)",
    description:
      "Support designed to help you build independence, develop daily living skills, and feel confident in your home environment.",
  },
  {
    number: "04",
    title: "People needing structured, reliable NDIS support in Moreton Bay",
    description:
      "Consistent local support from a trusted team that understands your needs, goals, and NDIS plan.",
  },
  {
    number: "05",
    title: "Those aiming to improve independence and community participation",
    description:
      "Encouragement and practical support to help you participate in your community, build confidence, and achieve your personal goals.",
  },
];

const WhoWeSupport = () => {
  return (
    <section className="who-we-support">

      {/* ================= HEADER ================= */}

      <div className="who-support-header">

        <span className="who-support-label">
          WHO WE SUPPORT
        </span>

        <h2>
          Support Designed Around You
        </h2>

        <p>
          Wherever you are in your NDIS journey, our team is here to help you
          find the right support and start moving forward.
        </p>

      </div>


      {/* ================= SUPPORT CARDS ================= */}

      <div className="support-cards">

        {supportItems.map((item) => (
          <div className="support-card" key={item.number}>

            {/* NORMAL SIDE */}

            <div className="support-card-front">

              <span className="support-number">
                {item.number}
              </span>

              <h3>
                {item.title}
              </h3>

            </div>


            {/* HOVER SIDE */}

            <div className="support-card-hover">

              <span className="support-number">
                {item.number}
              </span>

              <h3>
                {item.title}
              </h3>

              <p>
                {item.description}
              </p>

            </div>

          </div>
        ))}

      </div>


      {/* ================= CTA ================= */}

      <div className="support-cta">

        <a href="tel:+611300593206">
          Start Your Journey →
        </a>

      </div>

    </section>
  );
};

export default WhoWeSupport;