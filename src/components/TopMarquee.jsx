import React from "react";
import "./TopMarquee.css";

const TopMarquee = () => {
  return (
    <div className="top-marquee">
      <div className="top-marquee-track">
        <span>Moreton Bay Local</span>
        <b>✦</b>
        <span>24/7 On Call</span>
        <b>✦</b>
        <span>Personalised Support Plans</span>
        <b>✦</b>
        <span>NDIS Registered</span>
        <b>✦</b>
        <span>Family Owned & Operated</span>
        <b>✦</b>

        {/* Duplicate for smooth continuous scrolling */}
        <span>Moreton Bay Local</span>
        <b>✦</b>
        <span>24/7 On Call</span>
        <b>✦</b>
        <span>Personalised Support Plans</span>
        <b>✦</b>
        <span>NDIS Registered</span>
        <b>✦</b>
        <span>Family Owned & Operated</span>
        <b>✦</b>
      </div>
    </div>
  );
};

export default TopMarquee;