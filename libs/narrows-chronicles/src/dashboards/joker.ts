import { dashboards } from "@gotham-city-chronicles-companion/artwork";
import {
  DIE_COLOR,
  ENTITY_TYPE,
  Dashboard
} from "@gotham-city-chronicles-companion/common";
import { skills } from "@gotham-city-chronicles-companion/skills";

const name = "The Joker";

export const joker: Dashboard = {
  entityId: "bbf19684-3cf5-46bf-bd08-a83bc4bb12d4",
  entityType: ENTITY_TYPE.DASHBOARD,
  id: "Unknown",
  name,
  subtext: undefined,
  description: [
    "The Joker is the perfect antagonist.  Though there are many contenders, no other villain in Gotham City is capable of mixing violence and pageantry with such finesse.  Batman's every virtue becomes a weakness for the Clown Prince of Crime to exploit and over the years, he's found every flaw in the Dark Knight's armor.  Where Batman stands as a beacon of hope, sacrificing his own happiness and well-being for the good of Gotham City, the Joker is a homicidal maniac who will glady destroy the world with a smile on his face."
  ],
  artwork: dashboards.joker,
  size: "6ft 5in / 1.95 m",
  weight: "192 lbs / 87 Kg",
  totalEnergy: 11,
  recoveryValues: {
    active: 2,
    resting: 5
  },
  sizeIndex: 1,
  menaceIndex: 1,
  automaticDefense: {
    dieColor: DIE_COLOR.YELLOW,
    reroll: false
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
    skills: [skills.parkour({ jumpLevels: 1, wounds: 1, name })]
  },
  melee: {
    dieColor: DIE_COLOR.RED,
    reroll: false,
    max: 3,
    skills: [
      skills.combo({ extraDice: 1, encumbranceLimit: 4, name }),
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
    dieColor: DIE_COLOR.ORANGE,
    reroll: false,
    max: 4,
    skills: [
      skills.lockPicking({ automaticSuccess: 1, name }),
      skills.munitionsSpecialist({ automaticSuccess: 1, name })
    ]
  },
  thought: {
    dieColor: DIE_COLOR.ORANGE,
    reroll: true,
    max: 3,
    skills: []
  },
  defense: {
    dieColor: DIE_COLOR.ORANGE,
    reroll: false,
    max: 5,
    skills: []
  },
  maxRerolls: 5
};
