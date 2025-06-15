
import React, { useState, useEffect, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

const ParticlesComponent = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: { enable: false },
      particles: {
        number: { value: 50, density: { enable: true, value_area: 1200 } },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: { value: 0.6, random: true, anim: { enable: true, speed: 0.8, opacity_min: 0.1, sync: false } },
        size: { value: 2.5, random: true },
        move: { enable: true, speed: 1, direction: "bottom", random: true, straight: false, out_mode: "out" },
      },
      interactivity: { events: { onHover: { enable: false }, onClick: { enable: false } } },
      retina_detect: true,
    }),
    [],
  );

  if (init) {
    return <Particles id="tsparticles" options={options} className="absolute inset-0 z-20" />;
  }
  return null;
};

export default ParticlesComponent;
