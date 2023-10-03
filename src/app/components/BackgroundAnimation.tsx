import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";

export default function BackgroundAnimation() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {},
    []
  );
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        color: "#da9c63",
        maxParticles: 20,
        background: {
          color: {
            value: "#122223",
          },
        },
        fpsLimit: 130,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: "push",
            },
            onHover: {
              enable: false,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.6,
            },
          },
        },
        particles: {
          color: {
            value: ["#da9c63", "#da9c63", "#122223"],
          },
          links: {
            color: ["#faebd7", "#03dac6", "#ff0266"], // Dodajte više boja za crte
            distance: 150,
            enable: true,
            opacity: 0.1,
            width: 10,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 120,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 4 },
          },
          connectParticles: false,
        },
        detectRetina: true,
      }}
    />
  );
}
