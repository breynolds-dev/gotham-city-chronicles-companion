import {
  checkEncumbranceLimit,
  ENTITY_TYPE,
  Skill
} from "@gotham-city-chronicles-companion/common";

export const bodyGuard = ({
  automaticSuccess,
  encumbranceLimit,
  name
}: {
  automaticSuccess: number;
  encumbranceLimit?: number;
  name: string;
}): Skill => ({
  entityId: "c122e214-df2b-45e7-a979-4b727392639f",
  entityType: ENTITY_TYPE.SKILL,
  name: "Bodyguard",
  artwork: "skill-placeholder.png",
  description: [
    `Increase by ${automaticSuccess} automatic successes the defense of allied miniatures in your area. No other miniature can be using the bodyguard skill against the attack.`,
    checkEncumbranceLimit(encumbranceLimit)
  ].filter(Boolean),
  when: ["During the Calculate the Number of Successes step of a defense."],
  requirements: [
    `${name} is neither the defender nor the attacker.`,
    `${name} is located in the same area as the defender.`,
    "The defender is an allied miniature.",
    "No other miniature is using the bodyguard skill against this attack."
  ],
  effects: [
    `the defender adds the ${automaticSuccess} automatic successes to their defense result.`
  ]
});

export const impenetrableDefense = ({
  automaticDefense,
  encumbranceLimit,
  name
}: {
  automaticDefense: number;
  encumbranceLimit?: number;
  name: string;
}): Skill => ({
  entityId: "aa3b462a-a64a-4581-8956-546fd9c8b8bc",
  entityType: ENTITY_TYPE.SKILL,
  name: "Impenetrable Defense",
  artwork: "skill-placeholder.png",
  description: [
    `Add ${automaticDefense} automatic defense successes against melee attacks`,
    checkEncumbranceLimit(encumbranceLimit)
  ].filter(Boolean),
  when: [
    "During the Calculate the Number of Successes step of a defense against a melee attack."
  ],
  requirements: [`${name} is the target of the attack.`],
  effects: [
    `${name} adds ${automaticDefense} automatic successes to the number of successes of their defense.`
  ]
});

export const protectedSkill = ({
  alliesCount,
  encumbranceLimit,
  name
}: {
  alliesCount: number;
  encumbranceLimit?: number;
  name: string;
}): Skill => ({
  entityId: "1cc681ae-cb50-46d9-9838-9e3e60b5bb02",
  entityType: ENTITY_TYPE.SKILL,
  name: "Protected",
  artwork: "skill-placeholder.png",
  description: [
    `If you are accompanied by at least ${alliesCount} allied miniatures without this skill, you cannot be declared the target of an attack.`,
    checkEncumbranceLimit(encumbranceLimit)
  ].filter(Boolean),
  when: ["during the Declare the Target step of an attack"],
  requirements: [
    `${name} is not the attacker.`,
    `${name} has [X] or more allied miniatures, who do not have the protected skill, in their area.`
  ],
  effects: [`${name} cannot be declared the target of an attack.`]
});

export const untouchable = ({
  automaticDefense,
  encumbranceLimit,
  name
}: {
  automaticDefense: number;
  encumbranceLimit?: number;
  name: string;
}): Skill => ({
  entityId: "1d435761-42f4-4d1e-8dd0-27ffca6618ab",
  entityType: ENTITY_TYPE.SKILL,
  name: "Untouchable",
  artwork: "skill-placeholder.png",
  description: [
    `Add ${automaticDefense} automatic defense successes against ranged attacks.`,
    checkEncumbranceLimit(encumbranceLimit)
  ].filter(Boolean),
  when: [
    "During the Calculate the Number of Successes step of a defense against a ranged attack"
  ],
  requirements: [`${name} is the target of the ranged attack.`],
  effects: [
    `${name} adds ${automaticDefense} automatic successes to the number of successes of their defense.`
  ]
});
