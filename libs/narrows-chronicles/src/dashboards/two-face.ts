import { dashboards } from "@gotham-city-chronicles-companion/artwork";
import {
  DIE_COLOR,
  ENTITY_TYPE,
  Dashboard
} from "@gotham-city-chronicles-companion/common";
import { skills } from "@gotham-city-chronicles-companion/skills";

const name = "Two-Face";

export const twoFace: Dashboard = {
  entityId: "72ed1c1b-fbd0-4e5d-b2f2-349480a3e30d",
  entityType: ENTITY_TYPE.DASHBOARD,
  id: "Harvey Dent",
  name,
  subtext: undefined,
  description: [
    "Within the legal world, Harvey Dent was a rising star.  During a wildly successful early career, he made a significant dent in the criminal underworld, but his efforts attracted the attention of some particularly brutal criminals. After waiting for the right moment to strike, they launched an acid attack on the promising prosecutor.  With half his face disfigured, a monstrous identity emerged and Harvey was henceforth afflicted with a split personality.  The man who once defended the letter of the law turned to crime, attracting a following of thugs and made a new name for himself:  Two-face."
  ],
  artwork: dashboards.twoFace,
  size: "6ft / 1.83 m",
  weight: "181 lbs / 82.5 Kg",
  totalEnergy: 11,
  recoveryValues: {
    active: 2,
    resting: 5
  },
  sizeIndex: 1,
  menaceIndex: 1,
  automaticDefense: {
    dieColor: DIE_COLOR.YELLOW,
    reroll: true
  },
  traits: [],
  skills: [
    skills.nervesOfSteel({ menaceIndex: 1, name }),
    skills.pushingLimits({ wounds: 1, name })
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
        level: 5,
        bonus: 0
      }
    ],
    max: 4,
    skills: [
      skills.parkour({ jumpLevels: 1, wounds: 1, encumbranceLimit: 3, name })
    ]
  },
  melee: {
    dieColor: DIE_COLOR.ORANGE,
    reroll: false,
    max: 3,
    skills: []
  },
  ranged: {
    dieColor: DIE_COLOR.RED,
    reroll: false,
    max: 3,
    skills: [
      skills.marksman({ automaticSuccess: 1, encumbranceLimit: 4, name }),
      skills.retaliation({
        dieColor: DIE_COLOR.RED,
        distance: 2,
        encumbranceLimit: 5,
        name
      })
    ]
  },
  manipulation: {
    dieColor: DIE_COLOR.ORANGE,
    reroll: false,
    max: 4,
    skills: []
  },
  thought: {
    dieColor: DIE_COLOR.ORANGE,
    reroll: true,
    max: 3,
    skills: [skills.investigation({ automaticSuccess: 1, name })]
  },
  defense: {
    dieColor: DIE_COLOR.ORANGE,
    reroll: false,
    max: 5,
    skills: []
  },
  maxRerolls: 4
};
