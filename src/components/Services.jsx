import React from "react";
import "./Services.css";

const services = [
  {
    title: "Palliative Care",
    description:
      "Compassionate and personalised support focused on comfort, dignity and quality of life.",
    image:
      "https://images.unsplash.com/photo-1576765608866-5b51046452be?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Personal Care",
    description:
      "Helping participants with everyday personal activities while promoting independence.",
    image:
      "https://images.unsplash.com/photo-1559234938-b60fff04894d?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Community Nursing",
    description:
      "Professional nursing support delivered in the comfort and privacy of your home.",
    image:
      "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Domestic Assistance",
    description:
      "Practical help around the home to keep your living environment safe and comfortable.",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Community Participation",
    description:
      "Support to get involved in social activities, community events and everyday experiences.",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Supported Independent Living",
    description:
      "Flexible support designed to help participants build confidence and live more independently.",
    image:
      "https://images.unsplash.com/photo-1560185008-b033106af5c3?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Transport Assistance",
    description:
      "Reliable support with transport so you can attend appointments, activities and community events.",
    image:
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Respite Care",
    description:
      "Flexible short-term support that gives participants and their carers valuable time to recharge.",
    image:
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=900&q=80",
  },
];

function ServiceCard({ service, index }) {
  return (
    <div className="service-card">

      <div className="service-image">
        <img
          src={service.image}
          alt={service.title}
        />
      </div>

      <div className="service-content">

        <div className="service-number">
          0{index + 1}
        </div>

        <h3>{service.title}</h3>

        <p>{service.description}</p>

      </div>

    </div>
  );
}

function Services() {
  const firstFour = services.slice(0, 4);
  const secondFour = services.slice(4, 8);

  return (
    <section className="services-section">

      <div className="services-heading">
        <span>WHAT WE OFFER</span>

        <h2>
          Our Core <strong>NDIS Services</strong>
        </h2>

        <p>
          Every service is delivered in your home and tailored to a schedule
          that works for you and your family.
        </p>
      </div>

      {/* FIRST 4 — MOVES RIGHT */}
      <div className="services-wrapper">
        <div className="services-track services-track-right">

          {[...firstFour, ...firstFour].map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              index={index % 4}
            />
          ))}

        </div>
      </div>


      {/* SECOND 4 — MOVES LEFT */}
      <div className="services-wrapper second-row">
        <div className="services-track services-track-left">

          {[...secondFour, ...secondFour].map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              index={(index % 4) + 4}
            />
          ))}

        </div>
      </div>

    </section>
  );
}

export default Services;