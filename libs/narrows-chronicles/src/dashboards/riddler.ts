import { dashboards } from "@gotham-city-chronicles-companion/artwork";
import {
  DIE_COLOR,
  ENTITY_TYPE,
  Dashboard
} from "@gotham-city-chronicles-companion/common";
import { skills } from "@gotham-city-chronicles-companion/skills";

const name = "The Riddler";

export const riddler: Dashboard = {
  entityId: "c628a62f-38f7-45cd-8fa6-9c8b7a18980d",
  entityType: ENTITY_TYPE.DASHBOARD,
  id: "Edward Nigma",
  name,
  subtext: undefined,
  description: [
    "Who is Edward Nigma?  What do the clues scattered about every crime scene mean?  And what about his cane?  Is it a crutch or a weapon?  Is he really the intellectual he claims to be, or is he merely another madman like The Joker or Two-Face?  Did he really uncover Batman's secret identity?  If so, why won't he trade this information?  Can he really make amends and become a hero, or is it just another ruse?  Maybe you can answer these questions, but can you answer them in time?"
  ],
  artwork: dashboards.riddler,
  size: "6ft 1in / 1.85 m",
  weight: "183 lbs / 83 Kg",
  totalEnergy: 9,
  recoveryValues: {
    active: 2,
    resting: 5
  },
  sizeIndex: 1,
  menaceIndex: 1,
  automaticDefense: undefined,
  traits: [],
  skills: [
    skills.eliteCommand({ eliteCount: 2, name }),
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
    reroll: false,
    max: 4,
    skills: []
  },
  ranged: {
    dieColor: DIE_COLOR.ORANGE,
    reroll: false,
    max: 4,
    skills: []
  },
  manipulation: {
    dieColor: DIE_COLOR.YELLOW,
    reroll: true,
    max: 5,
    skills: [
      skills.munitionsSpecialist({ automaticSuccess: 1, name }),
      skills.lockPicking({ automaticSuccess: 2, name })
    ]
  },
  thought: {
    dieColor: DIE_COLOR.RED,
    reroll: false,
    max: 5,
    skills: [
      skills.hacking({ automaticSuccess: 2, name }),
      skills.investigation({ automaticSuccess: 1, name })
    ]
  },
  defense: {
    dieColor: DIE_COLOR.YELLOW,
    reroll: true,
    max: 4,
    skills: []
  },
  maxRerolls: 4
};
