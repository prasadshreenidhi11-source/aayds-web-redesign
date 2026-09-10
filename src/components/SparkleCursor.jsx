
import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import gsap from "gsap";

const SparkleCursor = ({
  distance = 40,
  glow = true,
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    const resize = () => {
      const dpr = Math.min(
        window.devicePixelRatio || 1,
        2
      );

      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(
        dpr,
        0,
        0,
        dpr,
        0,
        0
      );
    };

    resize();

    window.addEventListener(
      "resize",
      resize
    );

    // -------------------------
    // CREATE STAR IMAGE
    // -------------------------

    const svg = `
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path
          fill="#ffffff"
          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
        />
      </svg>
    `;

    const image = new Image();

    const blob = new Blob(
      [svg],
      {
        type: "image/svg+xml",
      }
    );

    const imageUrl =
      URL.createObjectURL(blob);

    let imageLoaded = false;

    image.onload = () => {
      imageLoaded = true;
    };

    image.src = imageUrl;

    // -------------------------
    // PARTICLES
    // -------------------------

    let particles = [];
    let glows = [];

    let lastX = null;
    let lastY = null;

    let distanceCounter = 0;

    // -------------------------
    // MOUSE MOVE
    // -------------------------

    const handleMouseMove = (event) => {
      const x = event.clientX;
      const y = event.clientY;

      if (
        lastX !== null &&
        lastY !== null
      ) {
        const moved = Math.hypot(
          x - lastX,
          y - lastY
        );

        distanceCounter += moved;
      }

      lastX = x;
      lastY = y;

      // -------------------------
      // GLOW
      // -------------------------

      if (glow) {
        const glowParticle = {
          id: Math.random(),
          x,
          y,
          size: 25,
          scale: 1,
        };

        glows.push(glowParticle);

        gsap.to(
          glowParticle,
          {
            scale: 0,
            duration: 0.4,
            ease: "power2.out",

            onComplete: () => {
              glows =
                glows.filter(
                  (item) =>
                    item.id !==
                    glowParticle.id
                );
            },
          }
        );
      }

      // -------------------------
      // SPARKLE
      // -------------------------

      if (
        distanceCounter >= distance
      ) {
        distanceCounter = 0;

        const particle = {
          id:
            Date.now() +
            Math.random(),

          x,
          y,

          size:
            gsap.utils.random(
              16,
              32
            ),

          rotation:
            gsap.utils.random(
              0,
              360
            ),

          scale: 1,

          opacity: 1,

          direction:
            Math.random() > 0.5
              ? 1
              : -1,
        };

        particles.push(
          particle
        );

        gsap.to(
          particle,
          {
            y:
              y +
              gsap.utils.random(
                50,
                180
              ),

            rotation:
              particle.rotation +
              gsap.utils.random(
                -180,
                180
              ),

            scale: 0,

            opacity: 0,

            duration:
              gsap.utils.random(
                0.8,
                1.8
              ),

            ease: "power1.out",

            onComplete: () => {
              particles =
                particles.filter(
                  (item) =>
                    item.id !==
                    particle.id
                );
            },
          }
        );
      }
    };

    // -------------------------
    // RENDER
    // -------------------------

    const render = () => {
      ctx.clearRect(
        0,
        0,
        width,
        height
      );

      // Draw glows
      glows.forEach(
        (item) => {
          const radius =
            item.size *
            item.scale;

          const gradient =
            ctx.createRadialGradient(
              item.x,
              item.y,
              0,
              item.x,
              item.y,
              radius
            );

          gradient.addColorStop(
            0,
            "rgba(180, 150, 255, 0.45)"
          );

          gradient.addColorStop(
            1,
            "rgba(180, 150, 255, 0)"
          );

          ctx.fillStyle =
            gradient;

          ctx.beginPath();

          ctx.arc(
            item.x,
            item.y,
            radius,
            0,
            Math.PI * 2
          );

          ctx.fill();
        }
      );

      // Draw sparkles
      particles.forEach(
        (particle) => {
          if (!imageLoaded) return;

          ctx.save();

          ctx.globalAlpha =
            particle.opacity;

          ctx.translate(
            particle.x,
            particle.y
          );

          ctx.rotate(
            particle.rotation *
              (Math.PI / 180)
          );

          ctx.drawImage(
            image,
            -particle.size / 2,
            -particle.size / 2,
            particle.size,
            particle.size
          );

          ctx.restore();
        }
      );
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove,
      {
        passive: true,
      }
    );

    gsap.ticker.add(render);

    // -------------------------
    // CLEANUP
    // -------------------------

    return () => {
      window.removeEventListener(
        "resize",
        resize
      );

      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      gsap.ticker.remove(render);

      URL.revokeObjectURL(
        imageUrl
      );

      particles = [];
      glows = [];
    };
  }, [distance, glow]);

  return createPortal(
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 999999,
      }}
    />,
    document.body
  );
};

export default SparkleCursor;

