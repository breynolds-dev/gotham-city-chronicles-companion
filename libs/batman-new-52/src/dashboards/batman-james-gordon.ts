import { dashboards } from "@gotham-city-chronicles-companion/artwork";
import {
  DIE_COLOR,
  ENTITY_TYPE,
  Dashboard
} from "@gotham-city-chronicles-companion/common";
import { skills } from "@gotham-city-chronicles-companion/skills";

const name = "Batman";

export const batmanJamesGordon: Dashboard = {
  entityId: "ea01278d-34bb-4891-b1e7-cc449bff596d",
  entityType: ENTITY_TYPE.DASHBOARD,
  id: "James Gordon",
  name,
  subtext: "James Gordon",
  description: [
    "After Batman's mysterious disappearance, former police commissioner James Gordon stepped in to replace him.  Though highly skilled in his own right, Gordon did not quite possess the same strength or talents of the Dark Knight.  To Truly embody this role, he required something capable of withstanding the power and fury of Gotham City's fiercest criminals.  It was only by stepping into a high-powered, bullet-resistant super-suit called 'Rookie' that Gordon was able to level the playing field."
  ],
  artwork: dashboards.batgirl,
  size: "5ft 9in / 1.75 m",
  weight: "168 lbs / 76 Kg",
  totalEnergy: 10,
  recoveryValues: {
    active: 2,
    resting: 5
  },
  sizeIndex: 1,
  menaceIndex: 1,
  automaticDefense: {
    dieColor: DIE_COLOR.ORANGE,
    reroll: false
  },
  traits: [skills.moralCode({ name })],
  skills: [
    skills.nervesOfSteel({ name, menaceIndex: 2 }),
    skills.pushingLimits({ name, wounds: 1 })
  ],
  batGadgets: 2,
  movement: {
    base: 2,
    encumbrance: [
      {
        level: 4,
        bonus: 1
      },
      {
        level: 5,
        bonus: 0
      }
    ],
    max: 4,
    skills: [
      skills.elusive({ enemySizeToIgnore: 1, encumbranceLimit: 3, name }),
      skills.parkour({ jumpLevels: 1, wounds: 1, encumbranceLimit: 3, name }),
      skills.mobility({ terrainLevelsToIgnore: 1, encumbranceLimit: 3, name })
    ]
  },
  melee: {
    dieColor: DIE_COLOR.ORANGE,
    reroll: false,
    max: 4,
    skills: [
      skills.martialArts({ automaticSuccess: 1, encumbranceLimit: 4, name })
    ]
  },
  ranged: {
    dieColor: DIE_COLOR.ORANGE,
    reroll: false,
    max: 4,
    skills: []
  },
  manipulation: {
    dieColor: DIE_COLOR.ORANGE,
    reroll: false,
    max: 4,
    skills: []
  },
  thought: {
    dieColor: DIE_COLOR.ORANGE,
    reroll: false,
    max: 4,
    skills: [skills.investigation({ automaticSuccess: 2, name })]
  },
  defense: {
    dieColor: DIE_COLOR.ORANGE,
    reroll: false,
    max: 4,
    skills: []
  },
  maxRerolls: 4
};
