import { dashboards } from "@gotham-city-chronicles-companion/artwork";
import {
  DIE_COLOR,
  ENTITY_TYPE,
  Dashboard
} from "@gotham-city-chronicles-companion/common";
import { skills } from "@gotham-city-chronicles-companion/skills";

const name = "Deadshot";

export const deadshot: Dashboard = {
  entityId: "9d0c8744-23ad-4710-aa9a-c242c550180a",
  entityType: ENTITY_TYPE.DASHBOARD,
  id: "Floyd Lawton",
  name,
  subtext: undefined,
  description: [
    "Deadshot (Floyd Lawton) introduced himself as a mashed hero ready to bring law and order to Gotham City.  He even seemed to replace Batman for a time!  But something bothered the Dark Knight.  He quickly realized that Deadshot was a gangster merely posing as a hero.  It wasn't long before Lawton was incarcerated and served hard time.  When he was finally freed, he had one goal: take revenge on Batman.  He upgraded his armor and attached a pair of machine guns to his forearms.  Whether it's working for the Suicide Squad or fulfilling his own independent contracts, nothing stops Deadshot from finishing a job."
  ],
  artwork: dashboards.deadshot,
  size: "6ft 1in / 1.85 m",
  weight: "193 lbs / 87.5 Kg",
  totalEnergy: 10,
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
    skills.nervesOfSteel({ menaceIndex: 2, name }),
    skills.pushingLimits({ wounds: 1, name }),
    skills.ambidexterity({ name, sizeLimit: 1 })
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
        level: 6,
        bonus: 0
      }
    ],
    max: 4,
    skills: []
  },
  melee: {
    dieColor: DIE_COLOR.ORANGE,
    reroll: false,
    max: 3,
    skills: []
  },
  ranged: {
    dieColor: DIE_COLOR.RED,
    reroll: false,
    max: 3,
    skills: [
      skills.marksman({ automaticSuccess: 1, encumbranceLimit: 5, name }),
      skills.retaliation({
        dieColor: DIE_COLOR.RED,
        distance: 2,
        encumbranceLimit: 3,
        name
      })
    ]
  },
  manipulation: {
    dieColor: DIE_COLOR.ORANGE,
    reroll: false,
    max: 4,
    skills: [skills.munitionsSpecialist({ automaticSuccess: 1, name })]
  },
  thought: {
    dieColor: DIE_COLOR.YELLOW,
    reroll: false,
    max: 4,
    skills: []
  },
  defense: {
    dieColor: DIE_COLOR.ORANGE,
    reroll: false,
    max: 4,
    skills: []
  },
  maxRerolls: 4
};
