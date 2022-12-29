import { dashboards } from "@gotham-city-chronicles-companion/artwork";
import {
  DIE_COLOR,
  ENTITY_TYPE,
  Dashboard
} from "@gotham-city-chronicles-companion/common";
import { skills } from "@gotham-city-chronicles-companion/skills";

const name = "Batman";

export const batmanRebirth: Dashboard = {
  entityId: "ce4aa489-7d96-46c6-b0a9-3dcfa8d19339",
  entityType: ENTITY_TYPE.DASHBOARD,
  id: "Bruce Wayne",
  name,
  subtext: "Rebirth",
  description: [
    "In the Rebirth era of Batman comics, the Dark Knight has been updated once again to be as modern and current as possible.  Though he still often fights alone, he frequently enlists the help of others.  As the head of the Bat-Family, he oversees the training of young heroes such as The Signal, Gotham Girl, and his own son, Damien, who has taken on the role of Robin.  And, in these recent storylines, Batman is even engaged to Catwoman!  But, that's not to say that all is bright and sunny for the Dark Knight.  His enemy Bane has come to realize it's better to turn Batman's allies into enemies and to break his mind rather than his body.  To face this threat, Batman must employ unconventional methods and form uneasy alliances with criminals."
  ],
  artwork: dashboards.batgirl,
  size: "6ft 2in / 1.87 m",
  weight: "210 lbs / 95.25 Kg",
  totalEnergy: 11,
  recoveryValues: {
    active: 2,
    resting: 6
  },
  sizeIndex: 1,
  menaceIndex: 1,
  automaticDefense: {
    dieColor: DIE_COLOR.ORANGE,
    reroll: true
  },
  traits: [skills.moralCode({ name })],
  skills: [
    skills.pushingLimits({ wounds: 2, name }),
    skills.sacrifice({ name, successesCount: 2 })
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
      skills.parkour({ jumpLevels: 1, wounds: 1, encumbranceLimit: 3, name }),
      skills.mobility({ terrainLevelsToIgnore: 1, encumbranceLimit: 3, name })
    ]
  },
  melee: {
    dieColor: DIE_COLOR.RED,
    reroll: false,
    max: 3,
    skills: [
      skills.combo({ extraDice: 1, encumbranceLimit: 4, name }),
      skills.martialArts({ automaticSuccess: 1, encumbranceLimit: 4, name })
    ]
  },
  ranged: {
    dieColor: DIE_COLOR.ORANGE,
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
    dieColor: DIE_COLOR.RED,
    reroll: false,
    max: 3,
    skills: [
      skills.hacking({ automaticSuccess: 1, name }),
      skills.investigation({ automaticSuccess: 2, name })
    ]
  },
  defense: {
    dieColor: DIE_COLOR.YELLOW,
    reroll: true,
    max: 5,
    skills: []
  },
  maxRerolls: 4
};
