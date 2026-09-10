
import React from "react";
import "./About.css";

const aboutPoints = [
  {
    title: "THE BELIEF",
    description:
      "AAYDS® was built on a simple belief: disability support should be personal, consistent, and meaningful.",
    image:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "THE GAP",
    description:
      "Our foundation comes from real-world experience in the disability sector, where gaps in support systems often leave participants without the care they truly need.",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "THE MISSION",
    description:
      "We exist to bridge that gap by delivering structured, reliable, and compassionate support that empowers individuals to live independently and confidently.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "THE PEOPLE",
    description:
      "At the heart of AAYDS® are genuine relationships. We carefully connect participants with compassionate support workers who listen, understand, and provide care built around each person's individual needs.",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "THE FUTURE",
    description:
      "We believe every person deserves the opportunity to build confidence, make their own choices, and live a life that feels meaningful, connected, and truly their own.",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80",
  },
];

const About = () => {
  return (
    <section className="about-section">

      {/* CENTER HEADING */}
      <div className="about-header">
        <span className="about-label">ABOUT AAYDS®</span>

        <h2>
          Disability support should be personal,
          <br />
          consistent, and meaningful.
        </h2>
      </div>

      {/* EXPANDING ACCORDION */}
      <div className="about-accordion">
        {aboutPoints.map((point, index) => (
          <div
            className="about-card"
            key={index}
            style={{ backgroundImage: `url(${point.image})` }}
          >
            <div className="about-card-overlay"></div>

            <div className="about-card-content">
              <span className="about-card-number">
                0{index + 1}
              </span>

              <div className="about-card-info">
                <h3>{point.title}</h3>
                <p>{point.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default About;

