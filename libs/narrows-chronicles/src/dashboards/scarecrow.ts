import { dashboards } from "@gotham-city-chronicles-companion/artwork";
import {
  DIE_COLOR,
  ENTITY_TYPE,
  Dashboard
} from "@gotham-city-chronicles-companion/common";
import { skills } from "@gotham-city-chronicles-companion/skills";

const name = "Scarecrow";

export const scarecrow: Dashboard = {
  entityId: "243d5d8c-eefe-4669-8024-ffbe780e0ce2",
  entityType: ENTITY_TYPE.DASHBOARD,
  id: "Dr. Jonathan Crane",
  name,
  subtext: undefined,
  description: [
    "The Scarecrow was once a Gotham City University professor named Dr. Jonathan Crane, Due to terrifying childhood trauma that left him mentally unstable.  Crane became obsessed with the emotion of fear.  When his cruel experiments on others was deemed too dangerous, Crane was fired.  To exact his revenge, he became the Scarecrow - a master of psychological warfare.  Using his specially-designed fear toxins, Scarecrow evokes the worst nightmares in his victims-especially his favorite victim, Batman!"
  ],
  artwork: dashboards.scarecrow,
  size: "6ft / 1.83 m",
  weight: "140 lbs / 63.5 Kg",
  totalEnergy: 9,
  recoveryValues: {
    active: 2,
    resting: 5
  },
  sizeIndex: 1,
  menaceIndex: 2,
  automaticDefense: undefined,
  traits: [skills.gasImmunity({ name })],
  skills: [
    skills.nervesOfSteel({ menaceIndex: 1, name }),
    skills.misfortune({ rerollCount: 1, name }),
    skills.henchmanCommand({ henchmanCount: 2, name })
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
    reroll: true,
    max: 4,
    skills: []
  },
  manipulation: {
    dieColor: DIE_COLOR.ORANGE,
    reroll: false,
    max: 4,
    skills: []
  },
  thought: {
    dieColor: DIE_COLOR.BLACK,
    reroll: true,
    max: 4,
    skills: [
      skills.hacking({ automaticSuccess: 1, name }),
      skills.investigation({ automaticSuccess: 1, name })
    ]
  },
  defense: {
    dieColor: DIE_COLOR.YELLOW,
    reroll: true,
    max: 4,
    skills: [skills.protectedSkill({ alliesCount: 2, name })]
  },
  maxRerolls: 4
};
