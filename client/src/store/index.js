import { proxy } from "valtio";

const state = proxy({
  intro: true,
  color: "#9C27B0",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./threejs.png",
  fullDecal: "./threejs.png",
});

export default state;
