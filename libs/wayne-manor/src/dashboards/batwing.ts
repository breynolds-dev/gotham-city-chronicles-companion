import { dashboards } from "@gotham-city-chronicles-companion/artwork";
import {
  DIE_COLOR,
  ENTITY_TYPE,
  Dashboard
} from "@gotham-city-chronicles-companion/common";
import { skills } from "@gotham-city-chronicles-companion/skills";

const name = "Batwing";

export const batwing: Dashboard = {
  entityId: "f71206af-f154-4f95-9119-14242e4d0527",
  entityType: ENTITY_TYPE.DASHBOARD,
  id: "Lucas 'Luke' Fox",
  name,
  subtext: undefined,
  description: [
    "Wishing to have an agent in Africa, Batman recruited Congolese cop David Zavimbe.  Equipped with a flying armored suit, David became the hero known as Batwing.  After only a few short years, though, he decided to go back to civilian life and returned the armor to Batman.  The role of Batwing then passed to Luke Fox, a technology expert who was able to update the armor himself.  He also improved the computers and vehicles used by the 'Bat-Family'.  Although Batwing was devoted to Batman, he also developed a strong friendship with Batwoman and Azrael - both of whom, like him, preferred to deal out merciless justice."
  ],
  artwork: dashboards.batwing,
  size: "5ft 9in / 1.75 m",
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
  traits: [skills.moralCode({ name }), skills.fly({ name })],
  skills: [],
  batGadgets: 3,
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
    max: 3,
    skills: []
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
    dieColor: DIE_COLOR.YELLOW,
    reroll: true,
    max: 4,
    skills: []
  },
  manipulation: {
    dieColor: DIE_COLOR.RED,
    reroll: false,
    max: 3,
    skills: [skills.munitionsSpecialist({ automaticSuccess: 1, name })]
  },
  thought: {
    dieColor: DIE_COLOR.RED,
    reroll: false,
    max: 3,
    skills: [skills.hacking({ automaticSuccess: 1, name })]
  },
  defense: {
    dieColor: DIE_COLOR.YELLOW,
    reroll: true,
    max: 4,
    skills: [skills.sacrifice({ name, successesCount: 3 })]
  },
  maxRerolls: 4
};
