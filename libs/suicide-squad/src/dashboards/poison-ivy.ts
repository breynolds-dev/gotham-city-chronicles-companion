import { dashboards } from "@gotham-city-chronicles-companion/artwork";
import {
  DIE_COLOR,
  ENTITY_TYPE,
  Dashboard
} from "@gotham-city-chronicles-companion/common";
import { skills } from "@gotham-city-chronicles-companion/skills";

const name = "Poison Ivy";

export const poisonIvy: Dashboard = {
  entityId: "dc47e2a7-dc37-439b-9249-7401bcb466df",
  entityType: ENTITY_TYPE.DASHBOARD,
  id: "Pamela Lillian Isley",
  name,
  subtext: undefined,
  description: ["Classified"],
  artwork: dashboards.poisonIvy,
  size: "Classified",
  weight: "Classified",
  totalEnergy: 9,
  recoveryValues: {
    active: 2,
    resting: 5
  },
  sizeIndex: 1,
  menaceIndex: 1,
  automaticDefense: {
    dieColor: DIE_COLOR.WHITE,
    reroll: false
  },
  traits: [skills.harmless({ name })],
  skills: [
    skills.poison({ automaticWounds: 4, name }),
    skills.support({ freeRerolls: 1, name }),
    skills.eliteCommand({ eliteCount: 2, name }),
    skills.luck({ rerollCount: 1, name })
  ],
  batGadgets: 0,
  movement: {
    base: 2,
    encumbrance: [
      {
        level: 3,
        bonus: 1
      },
      {
        level: 4,
        bonus: 0
      }
    ],
    max: 4,
    skills: []
  },
  melee: {
    dieColor: DIE_COLOR.BLACK,
    reroll: true,
    max: 3,
    skills: [skills.reach({ automaticSuccess: 1, name })]
  },
  ranged: {
    dieColor: DIE_COLOR.YELLOW,
    reroll: false,
    max: 3,
    skills: []
  },
  manipulation: {
    dieColor: DIE_COLOR.ORANGE,
    reroll: false,
    max: 5,
    skills: [skills.attraction({ distance: 1, name })]
  },
  thought: {
    dieColor: DIE_COLOR.RED,
    reroll: false,
    max: 5,
    skills: []
  },
  defense: {
    dieColor: DIE_COLOR.YELLOW,
    reroll: false,
    max: 4,
    skills: [skills.protectedSkill({ alliesCount: 2, name })]
  },
  maxRerolls: 4
};
