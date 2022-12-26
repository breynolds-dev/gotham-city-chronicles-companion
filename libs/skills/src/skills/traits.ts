import {
  checkEncumbranceLimit,
  ENTITY_TYPE,
  Skill
} from "@gotham-city-chronicles-companion/common";

export const fly = ({
  encumbranceLimit,
  name
}: {
  encumbranceLimit?: number;
  name: string;
}): Skill => ({
  entityId: "01b5fc60-85c2-456a-af0e-ec3200f6391a",
  entityType: ENTITY_TYPE.SKILL,
  name: "Fly",
  description: [
    "You move by flying, ignoring hindering and difficult terrain and extra costs and effects of special moves.",
    checkEncumbranceLimit(encumbranceLimit)
  ].filter(Boolean),
  when: ["During a movement action."],
  requirements: [`${name} performs the action.`],
  effects: [
    `${name} must respect this exceptions:`,
    [
      "During the Calculate the Move Cost step, the cost is always equal to 1 move point. The type of move, the hindering index, and difficult terrain are ignored in the cost calculation.",
      `During the Apply the Effects of the Destination Area step, ${name} ignores wounds suffered by falls`
    ]
  ]
});

export const gasImmunity = ({
  encumbranceLimit,
  name
}: {
  encumbranceLimit?: number;
  name: string;
}): Skill => ({
  entityId: "a1489138-b1d3-48f3-ac1b-1b4347070c21",
  entityType: ENTITY_TYPE.SKILL,
  name: "Gas Immunity",
  description: [
    "You ignore wounds caused by gas tokens.",
    checkEncumbranceLimit(encumbranceLimit)
  ].filter(Boolean),
  when: ["During the allocation of wounds caused by a gas token."],
  requirements: [`${name} suffers wounds.`],
  effects: [
    `${name} ignores all wounds caused by a gas token or a toxic gas token.`
  ]
});

export const harmless = ({
  encumbranceLimit,
  name
}: {
  encumbranceLimit?: number;
  name: string;
}): Skill => ({
  entityId: "20d95054-967e-4af0-a69e-55334f2fb1a2",
  entityType: ENTITY_TYPE.SKILL,
  name: "Harmless",
  description: [
    "You have a weak constitution.  During an attack, wounds you inflict are reduced to 0.",
    checkEncumbranceLimit(encumbranceLimit)
  ].filter(Boolean),
  when: ["During the Determine the Number of Wounds step of a defense."],
  requirements: [`${name} is the attacker`],
  effects: [
    `${name} reduces the total number of wounds that they inflict on the target to zero.`
  ]
});

export const moralCode = ({
  encumbranceLimit,
  name
}: {
  encumbranceLimit?: number;
  name: string;
}): Skill => ({
  entityId: "099a24a3-859e-498a-9e14-fc7abe8a04d0",
  entityType: ENTITY_TYPE.SKILL,
  name: "Moral Code",
  description: [
    "You cannot use lethal items.",
    checkEncumbranceLimit(encumbranceLimit)
  ].filter(Boolean),
  when: ["All the time."],
  requirements: [`When the item card carried by ${name} indicates`],
  effects: [`${name} cannot benefit from the bonuses of this item card.`]
});

export const reducedMobility = ({
  encumbranceLimit,
  name
}: {
  encumbranceLimit?: number;
  name: string;
}): Skill => ({
  entityId: "af99e5ba-ac13-499d-973c-d97f79244406",
  entityType: ENTITY_TYPE.SKILL,
  name: "Reduced Mobility",
  description: [
    "You have limited mobility.  You cannot perform special moves (climb, jump, fall).",
    checkEncumbranceLimit(encumbranceLimit)
  ].filter(Boolean),
  when: ["During the Choose Move Type step of a movement"],
  requirements: [`${name} performs the action.`],
  effects: [`${name} cannot choose to perform a special move`]
});
