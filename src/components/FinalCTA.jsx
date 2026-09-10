
import React from "react";
import "./FinalCTA.css";

const FinalCTA = () => {
  return (
    <section className="final-cta-section">
      <div className="final-cta-container">

        {/* LEFT CONTENT */}
        <div className="final-cta-content">
          <span className="final-cta-label">
            READY TO TAKE THE NEXT STEP?
          </span>

          <h2>
            Your goals.
            <br />
            Your choice.
            <br />
            <span>Your life.</span>
          </h2>

          <p>
            The right support can make everyday life feel more confident,
            connected, and independent. Let’s build a support plan around you
            — your needs, your goals, and the life you want to live.
          </p>

          <div className="final-cta-buttons">
            <a href="#contact" className="final-cta-primary">
              Start a Conversation
              <span>→</span>
            </a>

            <a href="tel:1300593206" className="final-cta-secondary">
              Call 1300 593 206
            </a>
          </div>

          <div className="final-cta-trust">
            <span>✓</span>
            Personalised support.
            <span>✓</span>
            Genuine people.
            <span>✓</span>
            A team that listens.
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="final-cta-image">
          <img
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=85"
            alt="Support worker and participant connecting together"
          />

          <div className="final-cta-image-card">
            <strong>Support that starts with you.</strong>
            <span>Moreton Bay & surrounding areas</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FinalCTA;

