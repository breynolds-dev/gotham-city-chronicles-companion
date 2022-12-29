import { dashboards } from "@gotham-city-chronicles-companion/artwork";
import {
  DIE_COLOR,
  ENTITY_TYPE,
  Dashboard
} from "@gotham-city-chronicles-companion/common";
import { skills } from "@gotham-city-chronicles-companion/skills";

const name = "Red Robin";

export const redRobin: Dashboard = {
  entityId: "18b8b020-b7f0-4909-8d23-f7af31802f7d",
  entityType: ENTITY_TYPE.DASHBOARD,
  id: "Timothy Drake",
  name,
  subtext: undefined,
  description: [
    "Once the sidekick of Batman, Tim Drake eventually left this role behind and forced his own identity as Red Robin.  With his keen martial arts skills and bo staff, he is an extremely agile and feared warrior.  Like previous Robins, he is an adopted son, but unlike them he is less damaged and violent and even has a healthy relation with the crime fighter known a Spoiler.  Though a great hand-to-hand fighter, it is perhaps his computer skills that make him a true asset to the Bat-Family.  Simply put, Tim Drake is one of the greatest hackers in all of Gotham City - an indispensible skill in the world of crime fighting."
  ],
  artwork: dashboards.redRobin,
  size: "5ft 6in / 1.68 m",
  weight: "131 lbs / 59 Kg",
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
  traits: [skills.moralCode({ name })],
  skills: [
    skills.tactician({ freeMovementPoints: 1, name, targetIsModel: true })
  ],
  batGadgets: 4,
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
      skills.parkour({ jumpLevels: 1, wounds: 1, encumbranceLimit: 3, name })
    ]
  },
  melee: {
    dieColor: DIE_COLOR.ORANGE,
    reroll: false,
    max: 5,
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
    skills: [skills.munitionsSpecialist({ automaticSuccess: 1, name })]
  },
  thought: {
    dieColor: DIE_COLOR.RED,
    reroll: false,
    max: 4,
    skills: [skills.hacking({ automaticSuccess: 1, name })]
  },
  defense: {
    dieColor: DIE_COLOR.ORANGE,
    reroll: false,
    max: 4,
    skills: [skills.sacrifice({ name, successesCount: 2 })]
  },
  maxRerolls: 4
};
