import { dashboards } from "@gotham-city-chronicles-companion/artwork";
import {
  DIE_COLOR,
  ENTITY_TYPE,
  Dashboard
} from "@gotham-city-chronicles-companion/common";
import { skills } from "@gotham-city-chronicles-companion/skills";

const name = "Harley Quinn";

export const harleyQuinnSuicideSquad: Dashboard = {
  entityId: "de3a02c3-c8a8-435a-9d06-3ce8bf62f491",
  entityType: ENTITY_TYPE.DASHBOARD,
  id: "Dr. Harleen Quinzel",
  name,
  subtext: "Suicide Squad",
  description: [
    "Harleen Quinzel, a promising psychiatrist, went to Arkham Asylum to study the most disturbed criminal minds.  As it happened, she fell in love with The Joker.  The deranged villain user her to make his escape, but after a passionate and toxic relationship the two parted ways.  Since then, Harley put her talents to use in high stakes heists and occasionally, as a member of the Suicide Squad.  Her weapon of choice is a huge mallet, but she is known to use baseball bats, handguns, and automatic rifles.  As lethal as these weapons can be, none are more dangerous than her unpredictability."
  ],
  artwork: dashboards.harleyQuinnSuicideSquad,
  size: "5ft 7in / 1.70 m",
  weight: "115 lbs / 52.16 Kg",
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
  traits: [],
  skills: [
    skills.nervesOfSteel({ menaceIndex: 1, name }),
    skills.imaginaryFriend({ thoughtDifficulty: 1, name })
  ],
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
        level: 5,
        bonus: 0
      }
    ],
    max: 4,
    skills: [
      skills.elusive({ enemySizeToIgnore: 1, encumbranceLimit: 3, name }),
      skills.mobility({ terrainLevelsToIgnore: 1, encumbranceLimit: 4, name }),
      skills.parkour({ jumpLevels: 2, wounds: 2, encumbranceLimit: 4, name })
    ]
  },
  melee: {
    dieColor: DIE_COLOR.ORANGE,
    reroll: true,
    max: 4,
    skills: [
      skills.martialArts({ automaticSuccess: 1, encumbranceLimit: 4, name })
    ]
  },
  ranged: {
    dieColor: DIE_COLOR.YELLOW,
    reroll: false,
    max: 4,
    skills: []
  },
  manipulation: {
    dieColor: DIE_COLOR.ORANGE,
    reroll: false,
    max: 4,
    skills: [skills.munitionsSpecialist({ automaticSuccess: 1, name })]
  },
  thought: {
    dieColor: DIE_COLOR.ORANGE,
    reroll: false,
    max: 4,
    skills: []
  },
  defense: {
    dieColor: DIE_COLOR.YELLOW,
    reroll: true,
    max: 4,
    skills: []
  },
  maxRerolls: 5
};
