import { particlesCursor } from "https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js";

const pc = particlesCursor({
  el: document.getElementById("app"),
  gpgpuSize: 512,
  colors: [0x1d9ae8, 0x1d9ae8], // Changed pink color to #00fffc and blue color
  color: 0x1d9ae8,
  coordScale: 0.15,
});
