import { dashboards } from "@gotham-city-chronicles-companion/artwork";
import {
  DIE_COLOR,
  ENTITY_TYPE,
  Dashboard
} from "@gotham-city-chronicles-companion/common";
import { skills } from "@gotham-city-chronicles-companion/skills";

const name = "Julia Pennyworth";

export const juliaPennyworth: Dashboard = {
  entityId: "219da026-cd90-449e-9741-1aada5035be3",
  entityType: ENTITY_TYPE.DASHBOARD,
  id: "Julia Pennyworth",
  name,
  subtext: undefined,
  description: [
    "With Alfred seemingly devoted to Bruce Wayne 24 hours a day, it begs the question: when did he find time to start a family?  After all, let's not forget that Alfred lived a storied life before entering the service of Bruce Wayne.  Perhaps it is appropriate, then, that his daughter, Julia, upheld the family tradition to serve.  But in Julia's case it is not a wealthy family that she services, but rather, her country.  As a member of the British SAS, Julia is a formidable soldier, and once she discovered the true nature of her father's employment, she became a very useful member of the Bat-Family."
  ],
  artwork: dashboards.juliaPennyworth,
  size: "5ft 8in / 1.73 m",
  weight: "129 lbs / 58.5 Kg",
  totalEnergy: 10,
  recoveryValues: {
    active: 3,
    resting: 5
  },
  sizeIndex: 1,
  menaceIndex: 1,
  automaticDefense: undefined,
  traits: [],
  skills: [skills.nervesOfSteel({ menaceIndex: 1, name })],
  batGadgets: 0,
  movement: {
    base: 3,
    encumbrance: [
      {
        level: 3,
        bonus: 2
      },
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
      skills.mobility({ terrainLevelsToIgnore: 1, encumbranceLimit: 4, name })
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
    reroll: true,
    max: 4,
    skills: []
  },
  manipulation: {
    dieColor: DIE_COLOR.RED,
    reroll: false,
    max: 3,
    skills: [skills.munitionsSpecialist({ automaticSuccess: 2, name })]
  },
  thought: {
    dieColor: DIE_COLOR.ORANGE,
    reroll: false,
    max: 4,
    skills: [skills.hacking({ automaticSuccess: 1, name })]
  },
  defense: {
    dieColor: DIE_COLOR.ORANGE,
    reroll: false,
    max: 4,
    skills: []
  },
  maxRerolls: 4
};
