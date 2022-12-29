import { dashboards } from "@gotham-city-chronicles-companion/artwork";
import {
  DIE_COLOR,
  ENTITY_TYPE,
  Dashboard
} from "@gotham-city-chronicles-companion/common";
import { skills } from "@gotham-city-chronicles-companion/skills";

const name = "The Penguin";

export const penguin: Dashboard = {
  entityId: "ca1129a7-498c-4946-b025-5413a56d519b",
  entityType: ENTITY_TYPE.DASHBOARD,
  id: "Oswald Chesterfield Cobblepot",
  name,
  subtext: undefined,
  description: [
    "Mocked at a young age for his bird-like features, Oswald Cobblepot turned his resentment into a relentless desire for power.  Now he's known as The Penguin, a criminal mastermind, and one of the most ruthless gangsters in Gotham City.  From his bar, the Iceberg Lounge, he meddles in all kinds of illicit crimes and overseeing a large portion of the city's seedy business and criminal activity.  The Penguin can often be found armed with his faithful and deadly umbrella and accompanied by his henchmen."
  ],
  artwork: dashboards.penguin,
  size: "5ft 1in / 1.57 m",
  weight: "174 lbs / 79 Kg",
  totalEnergy: 9,
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
  skills: [
    skills.henchmanCommand({ henchmanCount: 2, name }),
    skills.support({ freeRerolls: 1, name })
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
    skills: []
  },
  melee: {
    dieColor: DIE_COLOR.YELLOW,
    reroll: true,
    max: 4,
    skills: [skills.sneakAttack({ automaticSuccess: 1, name })]
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
    max: 5,
    skills: [skills.lockPicking({ automaticSuccess: 1, name })]
  },
  thought: {
    dieColor: DIE_COLOR.ORANGE,
    reroll: true,
    max: 6,
    skills: [skills.investigation({ automaticSuccess: 1, name })]
  },
  defense: {
    dieColor: DIE_COLOR.ORANGE,
    reroll: false,
    max: 4,
    skills: [skills.protectedSkill({ alliesCount: 2, name })]
  },
  maxRerolls: 4
};
