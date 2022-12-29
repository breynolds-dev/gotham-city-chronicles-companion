import { dashboards } from "@gotham-city-chronicles-companion/artwork";
import {
  DIE_COLOR,
  ENTITY_TYPE,
  Dashboard
} from "@gotham-city-chronicles-companion/common";
import { skills } from "@gotham-city-chronicles-companion/skills";

const name = "Bruce Wayne";

export const bruceWayne: Dashboard = {
  entityId: "3dd048a3-fe43-441d-9514-52f812e9ef7f",
  entityType: ENTITY_TYPE.DASHBOARD,
  id: "Bruce Wayne",
  name,
  subtext: undefined,
  description: [
    "The moment his parents were murdered before his eyes, young Bruce became both an orphan and a billionaire.  Years later, as Batman, he waged a legendary war on crime, but the Wayne legacy also needed his attention.  Ever since, he maintained a rigid dichotomy.  To the public, he is Bruce Wayne: charming philanthropist, but to the criminal underworld, he is the Dark Knight: terrifying emblem of justice.  Some days he funds urban renewal projects.  Other days, he battles psychotic crime lords obsessed with power and pageantry.  Whichever role he plays, Bruce Wayne must wear one mask...or the other."
  ],
  artwork: dashboards.bruceWayne,
  size: "5ft 11in / 1.80 m",
  weight: "135 lbs / 61.23 Kg",
  totalEnergy: 11,
  recoveryValues: {
    active: 2,
    resting: 5
  },
  sizeIndex: 1,
  menaceIndex: 1,
  automaticDefense: undefined,
  traits: [skills.moralCode({ name })],
  skills: [skills.support({ freeRerolls: 1, name })],
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
      skills.elusive({ enemySizeToIgnore: 1, encumbranceLimit: 3, name }),
      skills.parkour({ jumpLevels: 1, wounds: 1, encumbranceLimit: 4, name }),
      skills.mobility({ terrainLevelsToIgnore: 2, encumbranceLimit: 3, name })
    ]
  },
  melee: {
    dieColor: DIE_COLOR.RED,
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
    reroll: true,
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
    dieColor: DIE_COLOR.ORANGE,
    reroll: false,
    max: 5,
    skills: [skills.sacrifice({ successesCount: 2, encumbranceLimit: 4, name })]
  },
  maxRerolls: 4
};
