
import About from "./About"
import Services from "./Services";
import WhyChoose from "./WhyChoose";
import OurPeople from "./OurPeople";
import HowItWorks from "./HowItWorks"
import Gallery from "./Gallery";
import WhoWeSupport from  "./WhoWeSupport"
import FinalCTA from "./FinalCTA";
import SparkleCursor from "./SparkleCursor";

import React from "react";

import "./Home.css";


const Home = () => {
  return (
    <div className="home-page">
        <SparkleCursor distance={40} glow={true} />

      {/* ================= HERO ================= */}

      <section className="hero-section">

        {/* HERO CONTENT */}
        <div className="hero-content">

          <div className="location-badge">
            📍 NDIS Support — Moreton Bay
          </div>

          <h1>
            Personalised Disability
            <br />
            Support,{" "}
            <span>Delivered Right</span>
          </h1>

          <p>
            At AAYDS®, we deliver personalised NDIS disability support
            services across Moreton Bay, helping participants live safely,
            independently, and with confidence.
          </p>

          <p>
            From Supported Independent Living (SIL) to personal care,
            community participation, and daily support services, our team
            provides structured and reliable support aligned with your NDIS
            goals.
          </p>

          <div className="hero-buttons">

            <button className="primary-btn">
              Call 1300 593 206
            </button>

            <button className="secondary-btn">
              Request a Callback →
            </button>

          </div>

        </div>


        {/* BLUE STATS CONTAINER */}

        <div className="stats-card">

          <div className="stats-row">

            <div>
              <strong>2020</strong>
              <small>Founded</small>
            </div>

            <div>
              <strong>100%</strong>
              <small>NDIS Registered</small>
            </div>

            <div>
              <strong>8+</strong>
              <small>Services</small>
            </div>

            <div>
              <strong>Moreton Bay</strong>
              <small>Local Team</small>
            </div>

          </div>

          <div className="stats-divider"></div>

          <div className="stats-description">

            <div className="heart-icon">
              ♡
            </div>

           

          </div>

        </div>

      </section>


      {/* ================= MARQUEE ================= */}

      <section className="marquee-wrapper">

        <div className="marquee-track">

          <div className="marquee-content">

            <span>Moreton Bay Local</span>
            <i>✦</i>

            <span>24/7 On Call</span>
            <i>✦</i>

            <span>Personalised Support Plans</span>
            <i>✦</i>

            <span>NDIS Registered</span>
            <i>✦</i>

            <span>Family Owned & Operated</span>
            <i>✦</i>

            <span>Moreton Bay Local</span>
            <i>✦</i>

          </div>

          {/* DUPLICATE FOR SEAMLESS LOOP */}

          <div className="marquee-content">

            <span>Moreton Bay Local</span>
            <i>✦</i>

            <span>24/7 On Call</span>
            <i>✦</i>

            <span>Personalised Support Plans</span>
            <i>✦</i>

            <span>NDIS Registered</span>
            <i>✦</i>

            <span>Family Owned & Operated</span>
            <i>✦</i>

            <span>Moreton Bay Local</span>
            <i>✦</i>

          </div>

        </div>

      </section>


      {/* ================= SERVICES ================= */}
      <About/>

      <Services />

      <WhyChoose />

      <OurPeople />
      <HowItWorks/>
        <Gallery/>
      <WhoWeSupport/>
    
      <FinalCTA/>
    
   

     

    </div>
  );
};

export default Home;

