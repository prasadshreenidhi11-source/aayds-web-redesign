
import React from "react";
import "./OurPeople.css";

const OurPeople = () => {
  return (
    <section className="our-people-section">

      {/* NORMAL HEADING */}
      <div className="our-people-heading">

        <span className="our-people-label">
          OUR PEOPLE
        </span>

        <h2>
          Local people. Real support.
        </h2>

      </div>


      {/* LARGE IMAGE */}
      <div className="our-people-image">

        <img
          src="/our-people.jpg"
          alt="Our People"
        />

        {/* HOVER CONTENT */}
        <div className="our-people-hover">

          <p>
            Local, experienced, and compassionate, our Moreton Bay support
            workers are carefully selected and trained to deliver consistent,
            respectful care.
          </p>

        </div>

      </div>


      {/* BUTTON */}
      <div className="our-people-button-wrapper">

        <a
          href="#contact"
          className="our-people-button"
        >
          Meet Our People
        </a>

      </div>

    </section>
  );
};

export default OurPeople;

