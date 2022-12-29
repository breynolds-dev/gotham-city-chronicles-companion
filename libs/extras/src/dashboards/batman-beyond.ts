import { dashboards } from "@gotham-city-chronicles-companion/artwork";
import {
  DIE_COLOR,
  ENTITY_TYPE,
  Dashboard
} from "@gotham-city-chronicles-companion/common";
import { skills } from "@gotham-city-chronicles-companion/skills";

const name = "Batman";

export const batmanBeyond: Dashboard = {
  entityId: "1a963594-bd69-40a1-9892-d9883548bd6e",
  entityType: ENTITY_TYPE.DASHBOARD,
  id: "Terrence 'Terry' McGuinnis",
  name,
  subtext: "Beyond",
  description: [
    "Twenty years after Batman's retirement, a young Terry McGuinnis discovers the true identity of the masked vigilance.  After learning of his father's murder, Terry turns to Bruce Wayne for help.  The aged, former crime fighter refuses, but Terry persists and makes an exceptionally bold mode.  Needing the proper equipment to avenge his father, he breaks into the Batcave and steals the Batsuit.  Though inexperienced, Terry proves himself to be a capable fighter.  Eventually, Terry is permitted to continue his mission, but only under Bruce's supervision and guidance.  After 20 years without a protector, Gotham City needs Batman more than ever."
  ],
  artwork: dashboards.batgirl,
  size: "5ft 10in / 1.78 m",
  weight: "170 lbs / 77 Kg",
  totalEnergy: 10,
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
  traits: [skills.moralCode({ name })],
  skills: [
    skills.pushingLimits({ name, wounds: 1 }),
    skills.sacrifice({ name, successesCount: 1 })
  ],
  batGadgets: 3,
  movement: {
    base: 2,
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
        level: 5,
        bonus: 0
      }
    ],
    max: 4,
    skills: [
      skills.elusive({ enemySizeToIgnore: 1, encumbranceLimit: 4, name }),
      skills.parkour({ jumpLevels: 2, wounds: 2, encumbranceLimit: 4, name }),
      skills.mobility({ terrainLevelsToIgnore: 2, encumbranceLimit: 4, name })
    ]
  },
  melee: {
    dieColor: DIE_COLOR.ORANGE,
    reroll: false,
    max: 3,
    skills: [
      skills.combo({ extraDice: 1, encumbranceLimit: 3, name }),
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
    max: 3,
    skills: []
  },
  thought: {
    dieColor: DIE_COLOR.ORANGE,
    reroll: true,
    max: 4,
    skills: [skills.investigation({ automaticSuccess: 1, name })]
  },
  defense: {
    dieColor: DIE_COLOR.ORANGE,
    reroll: false,
    max: 4,
    skills: []
  },
  maxRerolls: 4
};
