import {
  BASE_PRICE,
  shellOptions,
  coreOptions,
  powerOptions,
  storageOptions,
  finishOptions,
} from "./catalog";

const groups = {
  shell: shellOptions,
  core: coreOptions,
  power: powerOptions,
  storage: storageOptions,
  finish: finishOptions,
};

export function getOption(group, value) {
  return groups[group].find((item) => item.value === value);
}

export function calculatePrice(config) {
  return Object.entries(groups).reduce((total, [group, options]) => {
    const match = options.find((item) => item.value === config[group]);
    return total + (match?.price ?? 0);
  }, BASE_PRICE);
}

export function validateConfiguration(config) {
  if (config.core === "Quantum" && config.power === "Eco") {
    return "Quantum Core needs at least Boost Mode. Eco Mode cannot support it.";
  }

  if (config.storage === "4TB" && config.shell === "Midnight") {
    return "4 TB storage requires Nebula or Aurora shell for extra cooling.";
  }

  if (config.finish === "Crystal" && config.power === "Hyper") {
    return "Crystal Finish is not available with Hyper Mode because of heat limits.";
  }

  return "";
}
