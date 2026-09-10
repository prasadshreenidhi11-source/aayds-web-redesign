import React from "react";
import "./Gallery.css";

const galleryImages = [
  {
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80",
    caption:
      "Three AAYDS support workers at a Disability Events Community evening",
  },

  {
    image:
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=900&q=80",
    caption:
      "Participants and support workers gathered at an AAYDS community celebration",
  },

  {
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80",
    caption:
      "AAYDS team members and a participant in front of the company banner at an event",
  },

  {
    image:
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=900&q=80",
    caption:
      "An AAYDS-branded support vehicle parked outside a participant’s home",
  },

  {
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80",
    caption:
      "A participant and a support worker relaxing together under a carport",
  },

  {
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    caption:
      "A participant enjoying a sunny day at a local park",
  },

  {
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80",
    caption:
      "A participant wearing a birthday tiara, resting comfortably at home",
  },

  {
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80",
    caption:
      "A participant out walking with a mobility frame along the Redcliffe waterfront",
  },

  {
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=80",
    caption:
      "Two AAYDS team members with a staff recognition certificate",
  },

  {
    image:
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=900&q=80",
    caption:
      "The AAYDS team and participants beneath a balloon arch at a community event",
  },

  {
    image:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=900&q=80",
    caption:
      "A participant out for a walk along a shaded park path",
  },

  {
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=80",
    caption:
      "Two AAYDS team members holding their recognition certificates",
  },

  {
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=900&q=80",
    caption:
      "A support worker helping a participant with personal grooming at home",
  },

  {
    image:
      "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&w=900&q=80",
    caption:
      "A participant beside the AAYDS gardening and maintenance vehicle",
  },

  {
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80",
    caption:
      "An AAYDS team member with a certificate recognising their years of service",
  },
];

const Gallery = () => {
  // Split the photos into two rows
  const firstRow = galleryImages.slice(0, 8);
  const secondRow = galleryImages.slice(8);

  // Duplicate each row so the marquee loops smoothly
  const firstRowLoop = [...firstRow, ...firstRow];
  const secondRowLoop = [...secondRow, ...secondRow];

  return (
    <section className="gallery-section">

      {/* ================= HEADER ================= */}

      <div className="gallery-header">

        <span className="gallery-label">
          OUR COMMUNITY
        </span>

        <h2>
          Moments From Our Team
        </h2>

        <p>
          Real moments with the participants and support workers who make
          AAYDS what it is.
        </p>

      </div>


      {/* ================= FIRST ROW ================= */}

      <div className="gallery-marquee gallery-marquee-left">

        <div className="gallery-track">

          {firstRowLoop.map((item, index) => (
            <div
              className="gallery-card"
              key={`first-${index}`}
            >

              <img
                src={item.image}
                alt={item.caption}
              />

              <div className="gallery-caption">
                {item.caption}
              </div>

            </div>
          ))}

        </div>

      </div>


      {/* ================= SECOND ROW ================= */}

      <div className="gallery-marquee gallery-marquee-right">

        <div className="gallery-track">

          {secondRowLoop.map((item, index) => (
            <div
              className="gallery-card"
              key={`second-${index}`}
            >

              <img
                src={item.image}
                alt={item.caption}
              />

              <div className="gallery-caption">
                {item.caption}
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Gallery;