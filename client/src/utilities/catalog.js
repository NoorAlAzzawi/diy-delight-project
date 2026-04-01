export const shellOptions = [
  {
    value: "Midnight",
    label: "Midnight",
    price: 0,
    accent: "#6d5efc",
    glow: "#b49cff",
  },
  {
    value: "Nebula",
    label: "Nebula",
    price: 150,
    accent: "#ff4fd8",
    glow: "#ffd0fb",
  },
  {
    value: "Aurora",
    label: "Aurora",
    price: 220,
    accent: "#10b981",
    glow: "#b8ffe5",
  },
];

export const coreOptions = [
  { value: "Pulse", label: "Pulse Core", price: 120 },
  { value: "Quantum", label: "Quantum Core", price: 320 },
  { value: "Nova", label: "Nova Core", price: 240 },
];

export const powerOptions = [
  { value: "Eco", label: "Eco Mode", price: 20 },
  { value: "Boost", label: "Boost Mode", price: 80 },
  { value: "Hyper", label: "Hyper Mode", price: 140 },
];

export const storageOptions = [
  { value: "256GB", label: "256 GB", price: 40 },
  { value: "1TB", label: "1 TB", price: 120 },
  { value: "4TB", label: "4 TB", price: 260 },
];

export const finishOptions = [
  { value: "Matte", label: "Matte Finish", price: 0 },
  { value: "Chrome", label: "Chrome Finish", price: 90 },
  { value: "Crystal", label: "Crystal Finish", price: 130 },
];

export const BASE_PRICE = 699;

export const defaultConfiguration = {
  name: "My BoltBucket Build",
  shell: "Midnight",
  core: "Pulse",
  power: "Eco",
  storage: "256GB",
  finish: "Matte",
};
