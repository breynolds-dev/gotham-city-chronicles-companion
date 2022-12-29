import { dashboards } from "@gotham-city-chronicles-companion/artwork";
import {
  DIE_COLOR,
  ENTITY_TYPE,
  Dashboard
} from "@gotham-city-chronicles-companion/common";
import { skills } from "@gotham-city-chronicles-companion/skills";

const name = "Oracle";

export const oracle: Dashboard = {
  entityId: "5011dd89-cfd3-4ded-8d84-fa64b1bcc8e1",
  entityType: ENTITY_TYPE.DASHBOARD,
  id: "Barbara Gordon",
  name,
  subtext: undefined,
  description: [
    "Being the Commissioner's daughter placed Barbara Gordon in the Joker's cross hairs.  One fateful evening, he showed up at her house and with a single shot severed her spine.  Since then, Barbara was confined to a wheelchair, but rather than allow her disability to define her capabilities, she continued her martial arts training.  She also focused her keen technical expertise as a crime-fighting tool.  Soon after, she became an informant for the Suicide Squad and Justice League of America.  Under her new identity as Oracle, she quickly became an urban legend on the networks and someone to be feared among the criminal underworld."
  ],
  artwork: dashboards.oracle,
  size: "5ft 11in / 1.80 m",
  weight: "135 lbs / 61 Kg",
  totalEnergy: 9,
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
  traits: [skills.moralCode({ name }), skills.reducedMobility({ name })],
  skills: [
    skills.support({ freeRerolls: 1, name }),
    skills.tactician({ freeMovementPoints: 3, name, targetIsModel: true }),
    skills.henchmanCommand({ henchmanCount: 3, name })
  ],
  batGadgets: 0,
  movement: {
    base: 2,
    encumbrance: [
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
    max: 1,
    skills: []
  },
  ranged: {
    dieColor: DIE_COLOR.ORANGE,
    reroll: false,
    max: 4,
    skills: []
  },
  manipulation: {
    dieColor: DIE_COLOR.RED,
    reroll: false,
    max: 4,
    skills: [skills.munitionsSpecialist({ automaticSuccess: 2, name })]
  },
  thought: {
    dieColor: DIE_COLOR.ORANGE,
    reroll: true,
    max: 6,
    skills: [skills.hacking({ automaticSuccess: 2, name })]
  },
  defense: {
    dieColor: DIE_COLOR.YELLOW,
    reroll: false,
    max: 4,
    skills: [
      skills.protectedSkill({ alliesCount: 1, name }),
      skills.untouchable({ automaticDefense: 1, encumbranceLimit: 4, name })
    ]
  },
  maxRerolls: 4
};
