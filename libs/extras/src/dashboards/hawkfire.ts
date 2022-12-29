import { dashboards } from "@gotham-city-chronicles-companion/artwork";
import {
  DIE_COLOR,
  ENTITY_TYPE,
  Dashboard
} from "@gotham-city-chronicles-companion/common";
import { skills } from "@gotham-city-chronicles-companion/skills";

const name = "Hawkfire";

export const hawkfire: Dashboard = {
  entityId: "6c407656-b1e0-4d88-8111-cef13acb14d1",
  entityType: ENTITY_TYPE.DASHBOARD,
  id: "Mary Elizabeth 'Bette' Kane",
  name,
  subtext: undefined,
  description: [
    "Bette Kane was the partner of the first Batwoman.  Her heroic efforts were partially motivated by her admiration and love of Dick Grayson.  When the new Batwoman arrived on the scene, Bette was surprised to discover she was actually her cousin Kate-a formidable fighter.  Inspired by Kate's example, Bette decided to reinvent herself.  She took on the name Hawkfire and combined a pyrotechnic arsenal with her comprehensive martial arts skills."
  ],
  artwork: dashboards.batgirl,
  size: "5ft 6in / 1.68 m",
  weight: "119 lbs / 54 Kg",
  totalEnergy: 10,
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
  traits: [skills.moralCode({ name }), skills.fly({ name })],
  skills: [skills.flame({ name, tokenCount: 1 })],
  batGadgets: 2,
  movement: {
    base: 4,
    encumbrance: [
      {
        level: 3,
        bonus: 3
      },
      {
        level: 4,
        bonus: 2
      },
      {
        level: 5,
        bonus: 1
      }
    ],
    max: 4,
    skills: []
  },
  melee: {
    dieColor: DIE_COLOR.ORANGE,
    reroll: true,
    max: 4,
    skills: [
      skills.martialArts({ automaticSuccess: 1, encumbranceLimit: 3, name })
    ]
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
    max: 3,
    skills: [skills.munitionsSpecialist({ automaticSuccess: 1, name })]
  },
  thought: {
    dieColor: DIE_COLOR.ORANGE,
    reroll: false,
    max: 5,
    skills: [skills.investigation({ automaticSuccess: 1, name })]
  },
  defense: {
    dieColor: DIE_COLOR.ORANGE,
    reroll: true,
    max: 3,
    skills: [
      skills.untouchable({ automaticDefense: 1, encumbranceLimit: 4, name })
    ]
  },
  maxRerolls: 3
};
