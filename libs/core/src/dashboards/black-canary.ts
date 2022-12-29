import { dashboards } from "@gotham-city-chronicles-companion/artwork";
import {
  DIE_COLOR,
  ENTITY_TYPE,
  Dashboard
} from "@gotham-city-chronicles-companion/common";
import { skills } from "@gotham-city-chronicles-companion/skills";

const name = "Black Canary";

export const blackCanary: Dashboard = {
  entityId: "e6a871ff-dd99-47c3-be07-77d263f0e307",
  entityType: ENTITY_TYPE.DASHBOARD,
  id: "Barbara Gordon",
  name,
  subtext: "Barbara Gordon",
  description: [
    "Is the the biological or adopted daughter of Commissioner Gordon?  Many rumors have circulated about her, but her phenomenal memory, keen intellect and taste for danger are undisputed.  It is this last trait that led her to join Batman and Robin's crusade against crime as Batgirl.  For a time, she developed a close relationship with Dick Grayson, the first Robin.  During her youth, Barbara fought crime and quickly became an important asset to the 'Bat-Family'."
  ],
  artwork: dashboards.batgirl,
  size: "5ft 11in / 1.80 m",
  weight: "135 lbs / 61.23 Kg",
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
  skills: [skills.support({ freeRerolls: 1, name })],
  batGadgets: 3,
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
      skills.parkour({ jumpLevels: 1, wounds: 1, encumbranceLimit: 3, name }),
      skills.mobility({ terrainLevelsToIgnore: 1, encumbranceLimit: 3, name })
    ]
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
    dieColor: DIE_COLOR.ORANGE,
    reroll: false,
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
    dieColor: DIE_COLOR.ORANGE,
    reroll: true,
    max: 4,
    skills: [
      skills.hacking({ automaticSuccess: 1, name }),
      skills.investigation({ automaticSuccess: 2, name })
    ]
  },
  defense: {
    dieColor: DIE_COLOR.ORANGE,
    reroll: false,
    max: 4,
    skills: [
      skills.untouchable({ automaticDefense: 1, encumbranceLimit: 4, name })
    ]
  },
  maxRerolls: 4
};
