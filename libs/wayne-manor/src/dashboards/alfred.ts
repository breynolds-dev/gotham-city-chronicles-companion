import { dashboards } from "@gotham-city-chronicles-companion/artwork";
import {
  DIE_COLOR,
  ENTITY_TYPE,
  Dashboard
} from "@gotham-city-chronicles-companion/common";
import { skills } from "@gotham-city-chronicles-companion/skills";

const name = "Alfred";

export const alfred: Dashboard = {
  entityId: "e6a871ff-dd99-47c3-be07-77d263f0e307",
  entityType: ENTITY_TYPE.DASHBOARD,
  id: "Alfred Pennyworth",
  name,
  subtext: undefined,
  description: [
    "Though he is best known as an elderly English butler, at one point in his life Alfred was a man of action.  Not wishing to become a servant like so many others in his family, he enrolled in the army and came to work for the Secret Services.  He even became an actor for a stretch, but the death of his father brought him back to work for the Wayne family.  After the murder of Thomas and Martha Wayne, Alfred became young Bruce's tutor and closest friend.  Now, not only does Alfred maintain the manor, but he also aids Batman in his crusade against crime - managing logistics, sewing wounds, and launching reconnaissance missions."
  ],
  artwork: dashboards.alfred,
  size: "6ft / 1.83 m",
  weight: "160 lbs / 72.5 Kg",
  totalEnergy: 10,
  recoveryValues: {
    active: 2,
    resting: 5
  },
  sizeIndex: 1,
  menaceIndex: 1,
  automaticDefense: undefined,
  traits: [],
  skills: [
    skills.luck({ name, rerollCount: 2 }),
    skills.tactician({ freeMovementPoints: 2, name, targetIsModel: true })
  ],
  batGadgets: 0,
  movement: {
    base: 2,
    encumbrance: [
      {
        level: 3,
        bonus: 1
      },
      {
        level: 4,
        bonus: 0
      }
    ],
    max: 4,
    skills: []
  },
  melee: {
    dieColor: DIE_COLOR.WHITE,
    reroll: false,
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
    reroll: true,
    max: 3,
    skills: []
  },
  defense: {
    dieColor: DIE_COLOR.ORANGE,
    reroll: false,
    max: 5,
    skills: [
      skills.impenetrableDefense({
        automaticDefense: 1,
        encumbranceLimit: 4,
        name
      }),
      skills.sacrifice({ successesCount: 4, name }),
      skills.untouchable({ automaticDefense: 1, encumbranceLimit: 4, name })
    ]
  },
  maxRerolls: 4
};
