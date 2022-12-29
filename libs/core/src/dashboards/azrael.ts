import { dashboards } from "@gotham-city-chronicles-companion/artwork";
import {
  DIE_COLOR,
  ENTITY_TYPE,
  Dashboard
} from "@gotham-city-chronicles-companion/common";
import { skills } from "@gotham-city-chronicles-companion/skills";

const name = "Azrael";

export const azrael: Dashboard = {
  entityId: "cdfa4ef9-5bd4-4c0b-9229-5ade914e9012",
  entityType: ENTITY_TYPE.DASHBOARD,
  id: "Jean-Paul Valley",
  name,
  subtext: undefined,
  description: [
    "Jean-Paul Valley was just an ordinary student before the brutal murder of his father.  It was then, in the grips of grief, that he discovered his dark heritage.  Valley was the descendant of a long line of servants of the Order of Saint Dumas.  The Order called on him to succeed his father and carry out the Order's bloody deeds.  And serve he did-with an intricate and powerful suit of armor and a flaming sword.  Eventually, Jean-Paul broke free of his manipulators and for a brief stint took on the role of Batman.  His strange demeanor and brutal methods scared both enemies and allies alike."
  ],
  artwork: dashboards.azrael,
  size: "6ft 2in / 1.88m",
  weight: "209lbs / 95kg",
  totalEnergy: 11,
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
  traits: [],
  skills: [skills.pushingLimits({ wounds: 1, name })],
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
      skills.mobility({ terrainLevelsToIgnore: 1, encumbranceLimit: 3, name }),
      skills.parkour({ jumpLevels: 1, wounds: 1, encumbranceLimit: 3, name })
    ]
  },
  melee: {
    dieColor: DIE_COLOR.RED,
    reroll: false,
    max: 3,
    skills: [
      skills.combo({ extraDice: 1, encumbranceLimit: 4, name }),
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
    dieColor: DIE_COLOR.YELLOW,
    reroll: true,
    max: 3,
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
    max: 4,
    skills: []
  },
  maxRerolls: 5
};
