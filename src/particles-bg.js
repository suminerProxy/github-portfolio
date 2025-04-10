
import { tsParticles } from "tsparticles-engine"
import { loadSlim } from "tsparticles-slim"

export const initParticles = async () => {
  await loadSlim(tsParticles)
  tsParticles.load("particles-bg", {
    fullScreen: { enable: false },
    background: { color: "transparent" },
    particles: {
      number: { value: 40 },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: { value: 0.5 },
      size: { value: 3 },
      move: { enable: true, speed: 1 },
    },
  })
}
