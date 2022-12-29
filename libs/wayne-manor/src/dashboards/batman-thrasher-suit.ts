import { dashboards } from "@gotham-city-chronicles-companion/artwork";
import {
  DIE_COLOR,
  ENTITY_TYPE,
  Dashboard
} from "@gotham-city-chronicles-companion/common";
import { skills } from "@gotham-city-chronicles-companion/skills";

const name = "Batman";

export const batmanThrasherSuit: Dashboard = {
  entityId: "70324bb3-ffb7-4f7a-a612-6e835f196d1c",
  entityType: ENTITY_TYPE.DASHBOARD,
  id: "Bruce Wayne",
  name,
  subtext: "Thrasher Suit",
  description: [
    "Usually, fighting street thugs requires armor that is light weight and flexible, but Batman comes prepared for anything.  Lacking super-strength and invulnerability, he created special armored suits to level the playing field against certain foes.  And sometimes, it is not even Bruce Wayne who wears the armor.  Jean-Paul Valley, aka Azrael, once strapped on a suit of armor during his stint as Batman.  And the latest of these armored Batmen was none other than Jim Gordon.  To compensate for the disappearance of the Dark Knight, he agreed to don an armored suit designed by the government to patrol the streets of Gotham City."
  ],
  artwork: dashboards.batmanThrasherSuit,
  size: "NC",
  weight: "NC",
  totalEnergy: 11,
  recoveryValues: {
    active: 1,
    resting: 7
  },
  sizeIndex: 2,
  menaceIndex: 1,
  automaticDefense: {
    dieColor: DIE_COLOR.RED,
    reroll: true
  },
  traits: [skills.moralCode({ name })],
  skills: [skills.nervesOfSteel({ name, menaceIndex: 3 })],
  batGadgets: 0,
  movement: {
    base: 2,
    encumbrance: [
      {
        level: 5,
        bonus: 1
      },
      {
        level: 9,
        bonus: 0
      }
    ],
    max: 3,
    skills: [
      skills.parkour({ jumpLevels: 1, wounds: 1, encumbranceLimit: 3, name }),
      skills.mobility({ terrainLevelsToIgnore: 1, encumbranceLimit: 3, name })
    ]
  },
  melee: {
    dieColor: DIE_COLOR.BLACK,
    reroll: false,
    max: 5,
    skills: [
      skills.circularStrike({ additionalTargets: 2, encumbranceLimit: 2, name })
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
    max: 4,
    skills: []
  },
  thought: {
    dieColor: DIE_COLOR.RED,
    reroll: false,
    max: 3,
    skills: [
      skills.hacking({ automaticSuccess: 1, name }),
      skills.investigation({ automaticSuccess: 2, name })
    ]
  },
  defense: {
    dieColor: DIE_COLOR.WHITE,
    reroll: false,
    max: 6,
    skills: []
  },
  maxRerolls: 4
};
