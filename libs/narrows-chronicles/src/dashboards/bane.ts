import { dashboards } from "@gotham-city-chronicles-companion/artwork";
import {
  DIE_COLOR,
  ENTITY_TYPE,
  Dashboard
} from "@gotham-city-chronicles-companion/common";
import { skills } from "@gotham-city-chronicles-companion/skills";

const name = "Bane";

export const bane: Dashboard = {
  entityId: "c2af228d-d0fb-4d96-8a04-33f8a9e87902",
  entityType: ENTITY_TYPE.DASHBOARD,
  id: "Unknown",
  name,
  subtext: undefined,
  description: ["Classified"],
  artwork: dashboards.bane,
  size: "Classified",
  weight: "Classified",
  totalEnergy: 11,
  recoveryValues: {
    active: 2,
    resting: 6
  },
  sizeIndex: 1,
  menaceIndex: 1,
  automaticDefense: {
    dieColor: DIE_COLOR.YELLOW,
    reroll: false
  },
  traits: [],
  skills: [
    skills.tactician({ freeMovementPoints: 1, name, targetIsModel: true }),
    skills.support({ freeRerolls: 1, name })
  ],
  batGadgets: 0,
  movement: {
    base: 2,
    encumbrance: [
      {
        level: 4,
        bonus: 1
      },
      {
        level: 6,
        bonus: 0
      }
    ],
    max: 4,
    skills: [
      skills.parkour({ jumpLevels: 1, wounds: 1, encumbranceLimit: 3, name })
    ]
  },
  melee: {
    dieColor: DIE_COLOR.RED,
    reroll: false,
    max: 3,
    skills: [
      skills.counterattack({
        dieColor: DIE_COLOR.RED,
        extraDice: 2,
        encumbranceLimit: 4,
        name
      }),
      skills.martialArts({ automaticSuccess: 1, encumbranceLimit: 4, name })
    ]
  },
  ranged: {
    dieColor: DIE_COLOR.ORANGE,
    reroll: false,
    max: 3,
    skills: []
  },
  manipulation: {
    dieColor: DIE_COLOR.ORANGE,
    reroll: false,
    max: 4,
    skills: [skills.munitionsSpecialist({ automaticSuccess: 1, name })]
  },
  thought: {
    dieColor: DIE_COLOR.RED,
    reroll: false,
    max: 3,
    skills: [skills.investigation({ automaticSuccess: 2, name })]
  },
  defense: {
    dieColor: DIE_COLOR.ORANGE,
    reroll: false,
    max: 4,
    skills: []
  },
  maxRerolls: 5
};
