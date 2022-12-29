import { dashboards } from "@gotham-city-chronicles-companion/artwork";
import {
  DIE_COLOR,
  ENTITY_TYPE,
  Dashboard
} from "@gotham-city-chronicles-companion/common";
import { skills } from "@gotham-city-chronicles-companion/skills";

const name = "Bane";

export const baneVenomInjected: Dashboard = {
  entityId: "e67ffda9-c2a1-4f02-a828-a2c87960369d",
  entityType: ENTITY_TYPE.DASHBOARD,
  id: "Unknown",
  name,
  subtext: "Venom Injected",
  description: ["Classified"],
  artwork: dashboards.baneVenomInjected,
  size: "Classified",
  weight: "Classified",
  totalEnergy: 11,
  recoveryValues: {
    active: 0,
    resting: 6
  },
  sizeIndex: 2,
  menaceIndex: 1,
  automaticDefense: {
    dieColor: DIE_COLOR.YELLOW,
    reroll: true
  },
  traits: [],
  skills: [],
  batGadgets: 0,
  movement: {
    base: 3,
    encumbrance: [
      {
        level: 5,
        bonus: 2
      },
      {
        level: 7,
        bonus: 1
      },
      {
        level: 9,
        bonus: 0
      }
    ],
    max: 4,
    skills: [
      skills.parkour({ jumpLevels: 2, wounds: 2, name }),
      skills.wallBreaker({ wallLevel: 2, name })
    ]
  },
  melee: {
    dieColor: DIE_COLOR.BLACK,
    reroll: true,
    max: 5,
    skills: [
      skills.counterattack({ dieColor: DIE_COLOR.BLACK, extraDice: 4, name }),
      skills.martialArts({ automaticSuccess: 2, name })
    ]
  },
  ranged: {
    dieColor: DIE_COLOR.YELLOW,
    reroll: false,
    max: 4,
    skills: []
  },
  manipulation: {
    dieColor: DIE_COLOR.YELLOW,
    reroll: false,
    max: 5,
    skills: []
  },
  thought: {
    dieColor: DIE_COLOR.YELLOW,
    reroll: false,
    max: 5,
    skills: []
  },
  defense: {
    dieColor: DIE_COLOR.ORANGE,
    reroll: false,
    max: 3,
    skills: []
  },
  maxRerolls: 4
};
