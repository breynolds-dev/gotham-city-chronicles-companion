import { DIE_COLOR, ENTITY_TYPE, Dashboard } from "@gotham-city-companion/common";
import { skills } from "@gotham-city-companion/skills";
import { dashboards } from "@gotham-city-companion/artwork";

const name = "Clayface";

export const clayface: Dashboard = {
  entityId: "f4eb7d76-38c4-445a-b178-ccdfeab9bdc2",
  entityType: ENTITY_TYPE.DASHBOARD,
  id: "Basil Karlo",
  name,
  subtext: "Detective Comics",
  description: [
    "Few would have guessed that Clayface would become an ally to Batman and other heroes of Gotham City.  After a struggle with amnesia Basil Karlo awoke from the spell, became aware of his criminal past, and decided to aid Batwoman.  After Karlo proved himself worthy of redemption, Batman and Batwoman offered him to join their ranks and become a hero, but Basil faced a dilemma.  In his human form, he was slowly dying, while in the form of Clayface he was going insane.  This made Clayface an unstable yet powerful ally.",
  ],
  artwork: dashboards.batgirl,
  size: "Variable",
  weight: "Variable",
  totalEnergy: 11,
  recoveryValues: {
    active: 2,
    resting: 6,
  },
  sizeIndex: 2,
  menaceIndex: 1,
  automaticDefense: {
    dieColor: DIE_COLOR.YELLOW,
    reroll: false,
  },
  traits: [
    skills.moralCode( { name } ),
  ],
  skills: [
    skills.regeneration( { isHero: true, level: 1, name } ),
    skills.sacrifice( { name, successesCount: 2 } ),
  ],
  batGadgets: 0,
  movement: {
    base: 2,
    encumbrance: [
      {
        level: 6,
        bonus: 1,
      },
      {
        level: 7,
        bonus: 0,
      },
    ],
    max: 4,
    skills: [
      skills.wallBreaker( { name, wallLevel: 1 } ),
    ],
  },
  melee: {
    dieColor: DIE_COLOR.RED,
    reroll: true,
    max: 5,
    skills: [
      skills.berserk( { name, whiteDice: 2 } ),
      skills.circularStrike( { additionalTargets: 2, name } ),
      skills.reach( { automaticSuccess: 1, name } ),
    ],
  },
  ranged: {
    dieColor: DIE_COLOR.YELLOW,
    reroll: false,
    max: 2,
    skills: [],
  },
  manipulation: {
    dieColor: DIE_COLOR.ORANGE,
    reroll: false,
    max: 5,
    skills: [
      skills.attraction( { distance: 1, name } ),
    ],
  },
  thought: {
    dieColor: DIE_COLOR.YELLOW,
    reroll: false,
    max: 4,
    skills: [],
  },
  defense: {
    dieColor: DIE_COLOR.ORANGE,
    reroll: false,
    max: 4,
    skills: [],
  },
  maxRerolls: 2,
};
