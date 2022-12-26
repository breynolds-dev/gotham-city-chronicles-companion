import {
  checkEncumbranceLimit,
  DIE_COLOR,
  ENTITY_TYPE,
  Skill
} from "@gotham-city-chronicles-companion/common";

export const berserk = ({
  whiteDice,
  encumbranceLimit,
  name
}: {
  encumbranceLimit?: number;
  name: string;
  whiteDice: number;
}): Skill => ({
  entityId: "480faa03-9ceb-4eb7-9670-776696ce54cf",
  entityType: ENTITY_TYPE.SKILL,
  name: "Berserk",
  artwork: "skill-placeholder.png",
  description: [
    `Increase the strength of your melee attacks by adding ${whiteDice} white dice to each of them. If you are a hero, you must have at least half your energy cubes in your wound zone. If you are a character, you must have lost at least half your life points.`,
    checkEncumbranceLimit(encumbranceLimit)
  ],
  when: ["During the Create the Dice Pool step of a melee attack."],
  requirements: [
    `${name} is the attacker.`,
    `If ${name} is a hero, they must have at least half of their energy cubes (rounded up) in their wound zone.`,
    `If ${name} is a character, they must have lost at least half of their life points (rounded up).`
  ],
  effects: [
    `${name} adds ${whiteDice} white dice to their melee attack dice pool for each attack.`
  ]
});

export const burst = ({
  burstCount,
  encumbranceLimit,
  name
}: {
  burstCount: number;
  encumbranceLimit?: number;
  name: string;
}): Skill => ({
  entityId: "3a69f948-2e6b-4a68-8d25-c5cc1257ffd7",
  entityType: ENTITY_TYPE.SKILL,
  name: "Burst",
  artwork: "skill-placeholder.png",
  description: [
    `After having neutralized an enemy with a ranged attack, you can use your remaining successes on ${burstCount} other miniatures you have LOS to.`,
    checkEncumbranceLimit(encumbranceLimit)
  ],
  when: ["During the Defending and Wounds step of a ranged attack."],
  requirements: [
    `${name} is the attacker.`,
    "The attack is not a free action but can be a deferred attack.",
    "There are remaining successes. They are equal to the number of successes not converted into wounds and/or not cancelled by defense.",
    `${name} has performed less than ${burstCount} deferred attacks for this same initial attack.`
  ],
  effects: [
    `${name} immediately performs a free action of ranged attack called a deferred attack.`,
    "A deferred attack works in the same way as a ranged attack with the following exceptions:",
    [
      `After the Declare the Target step, ${name} moves directly on to the Calculate the Number of Successes step.`,
      "During the Calculate the Number of Successes step, the number of successes is considered as equal to the remaining successes from the previous attack."
    ]
  ]
});

export const circularStrike = ({
  additionalTargets,
  encumbranceLimit,
  name
}: {
  additionalTargets: number;
  encumbranceLimit?: number;
  name: string;
}): Skill => ({
  entityId: "7419e66d-1483-45ce-8943-82dd493b58f0",
  entityType: ENTITY_TYPE.SKILL,
  name: "Circular Strike",
  artwork: "skill-placeholder.png",
  description: [
    `After having neutralized an enemy with a melee attack, you can use your remaining successes on ${additionalTargets} other miniatures`,
    checkEncumbranceLimit(encumbranceLimit)
  ],
  when: ["During the Defending and Wounds step of a melee attack."],
  requirements: [
    `${name} is the attacker.`,
    "The attack is not a free action but can be a deferred attack.",
    "There are remaining successes. Those remaining successes are equal to the number of successes not converted into wounds and/or not cancelled by defense.",
    `${name} has performed less than ${additionalTargets} deferred attacks for this same initial attack.`
  ],
  effects: [
    `${name} immediately performs a free action of melee attack called a deferred attack.`,
    "A deferred attack works in the same way as a melee attack with the following exceptions:",
    [
      `After the Declare the Target step, ${name} moves directly on to the Calculate the Number of Successes step.`,
      "During the Calculate the Number of Successes step, the number of successes is considered as equal to the remaining successes from the previous attack."
    ]
  ]
});

export const combo = ({
  extraDice,
  encumbranceLimit,
  name
}: {
  encumbranceLimit?: number;
  extraDice: number;
  name: string;
}): Skill => ({
  entityId: "70715998-758a-42dc-859d-70b465bcbbcc",
  entityType: ENTITY_TYPE.SKILL,
  name: "Combo",
  artwork: "skill-placeholder.png",
  description: [
    `When you neutralize a miniature during a melee attack, you gain a free melee attack of ${extraDice} dice corresponding to your characteristic, without any weapon bonuses, against another miniature.`,
    checkEncumbranceLimit(encumbranceLimit)
  ],
  when: ["During the End the Melee Attack step"],
  requirements: [
    `${name} is the attacker.`,
    "The target of the initial attack is neutralized.",
    "The attack in progress is not a free action."
  ],
  effects: [
    `${name} immediately performs a free action of melee attack called a combo.`,
    "A combo works in the same way as a melee attack with the following exceptions:",
    [
      `${name} ignores the Spend Energy Cubes step.`,
      `during the Create the Dice Pool step, ${name} takes ${extraDice} dice indicated by their melee attack characteristic.`,
      `${name} ignores the Add the Weapon Bonuses step.`
    ]
  ]
});

export const counterattack = ({
  dieColor,
  extraDice,
  encumbranceLimit,
  name
}: {
  dieColor: DIE_COLOR;
  encumbranceLimit?: number;
  extraDice: number;
  name: string;
}): Skill => ({
  entityId: "66afdd5f-dc32-4db5-9d41-6e60b26136d0",
  entityType: ENTITY_TYPE.SKILL,
  name: "Counterattack",
  artwork: "skill-placeholder.png",
  description: [
    `After a melee attack has been resolved against you, you can perform a free melee attack upon the attacker with ${extraDice} ${dieColor} dice, without any weapon bonuses.`,
    checkEncumbranceLimit(encumbranceLimit)
  ],
  when: ["During the End the Melee Attack step"],
  requirements: [
    `${name} is the target of the initial melee attack.`,
    "The initial melee attack is not already a counterattack.",
    `${name} must be able to target the initial attacker with a melee attack.`
  ],
  effects: [
    `${name} immediately performs a free melee attack called a counterattack.`,
    "The counterattack works in the same way as a melee attack with the following exceptions:",
    [
      `During the Declare the Target step, ${name} targets the initial attacker.`,
      `During the Create the Dice Pool step, ${name} takes ${extraDice} ${dieColor} dice to create their dice pool.`,
      "Heroes ignore the Spend Energy Cubes and Add the Weapon Bonuses steps. "
    ]
  ]
});

export const electricity = ({
  automaticWounds,
  encumbranceLimit,
  name
}: {
  automaticWounds: number;
  encumbranceLimit?: number;
  name: string;
}): Skill => ({
  entityId: "df64fb34-deda-4fed-8994-72f73452cff8",
  entityType: ENTITY_TYPE.SKILL,
  name: "Electricity",
  artwork: "skill-placeholder.png",
  description: [
    `Allows it's possessor, if they manage to exceed their opponent's defense to inflict ${automaticWounds} automatic wounds, before the attack's wounds are inflicted.  The rest of the wounds are applied as usual.`,
    checkEncumbranceLimit(encumbranceLimit)
  ],
  when: [
    "during the end of the Calculate the Number of Successes step of a defense."
  ],
  requirements: [
    `${name} is the attacker.`,
    "the defender has obtained a number of defense successes that is lower than the number of attack successes."
  ],
  effects: [
    `${name} immediately inflicts ${automaticWounds} wounds on the defender. The defender then moves on to the Determine the Number of Wounds step.`
  ]
});

export const marksman = ({
  automaticSuccess,
  encumbranceLimit,
  name
}: {
  automaticSuccess: number;
  encumbranceLimit?: number;
  name: string;
}): Skill => ({
  entityId: "42f306f1-4360-4976-afe4-c3ea95169555",
  entityType: ENTITY_TYPE.SKILL,
  name: "Marksman",
  artwork: "skill-placeholder.png",
  description: [
    `Add ${automaticSuccess} automatic successes during a ranged attack if you have obtained at least 1 success.`,
    checkEncumbranceLimit(encumbranceLimit)
  ],
  when: [
    "during the Calculate the Number of Successes step of a ranged attack"
  ],
  requirements: [
    `${name} is the attacker.`,
    `${name} has obtained at least one success.`
  ],
  effects: [
    `${name} adds ${automaticSuccess} automatic successes to the number of successes obtained.`
  ]
});

export const martialArts = ({
  automaticSuccess,
  encumbranceLimit,
  name
}: {
  automaticSuccess: number;
  encumbranceLimit?: number;
  name: string;
}): Skill => ({
  entityId: "f312acab-e910-4401-94fd-d486b40d2c9c",
  entityType: ENTITY_TYPE.SKILL,
  name: "Martial Arts",
  artwork: "skill-placeholder.png",
  description: [
    `Add ${automaticSuccess} automatic successes during a melee attack if you have obtained at least 1 success.`,
    checkEncumbranceLimit(encumbranceLimit)
  ],
  when: ["during the Calculate the Number of Successes step of a melee attack"],
  requirements: [
    `${name} is the attacker.`,
    `${name} has obtained at least one success.`
  ],
  effects: [
    `${name} adds ${automaticSuccess} automatic successes to the number of successes obtained.`
  ]
});

export const pointBlank = ({
  freeRerolls,
  encumbranceLimit,
  name
}: {
  encumbranceLimit?: number;
  freeRerolls: number;
  name: string;
}): Skill => ({
  entityId: "2c325f35-1a61-4e5b-969e-46aabb97f341",
  entityType: ENTITY_TYPE.SKILL,
  name: "Point Blank",
  artwork: "skill-placeholder.png",
  description: [
    `Gives you ${freeRerolls} free rerolls during a ranged attack targeting a miniature in your area. The same die can be rerolled several times.`,
    checkEncumbranceLimit(encumbranceLimit)
  ],
  when: ["during the Rerolls step of a ranged attack."],
  requirements: [
    `${name} is the attacker.`,
    `the defender is located in the same area as ${name}.`
  ],
  effects: [
    `At the start of the Free Rerolls step, and before any free rerolls are made, ${name} may perform ${freeRerolls} rerolls from the previously rolled pool. The same die can be rerolled several times.`
  ]
});

export const poison = ({
  automaticWounds,
  encumbranceLimit,
  name
}: {
  automaticWounds: number;
  encumbranceLimit?: number;
  name: string;
}): Skill => ({
  entityId: "2ff112ca-a185-454c-9bb4-ff54d56c2da1",
  entityType: ENTITY_TYPE.SKILL,
  name: "Poison",
  artwork: "skill-placeholder.png",
  description: [
    `Allows it's possessor, if they manage to exceed their opponent's defense to inflict ${automaticWounds} automatic wounds, before the attack's wounds are inflicted.  The rest of the wounds are applied as usual.`,
    checkEncumbranceLimit(encumbranceLimit)
  ],
  when: [
    "during the end of the Calculate the Number of Successes step of a defense."
  ],
  requirements: [
    `${name} is the attacker.`,
    "the defender has obtained a number of defense successes that is lower than the number of attack successes."
  ],
  effects: [
    `${name} immediately inflicts ${automaticWounds} wounds on the defender. The defender then moves on to the Determine the Number of Wounds step.`
  ]
});

export const reach = ({
  automaticSuccess,
  encumbranceLimit,
  name
}: {
  automaticSuccess: number;
  encumbranceLimit?: number;
  name: string;
}): Skill => ({
  entityId: "a7281ff0-bbf7-47ba-8036-747d5616cac1",
  entityType: ENTITY_TYPE.SKILL,
  name: "Reach",
  artwork: "skill-placeholder.png",
  description: [
    `Add ${automaticSuccess} automatic successes during a melee attack if you have obtained at least 1 success`,
    checkEncumbranceLimit(encumbranceLimit)
  ],
  when: ["during the Declare the Target step of a melee attack."],
  requirements: [`${name} is the attacker`],
  effects: [
    `${name} can declare a target, in their line of sight, at a distance lower or equal to ${automaticSuccess}.`
  ]
});

export const retaliation = ({
  dieColor,
  distance,
  encumbranceLimit,
  name
}: {
  dieColor: DIE_COLOR;
  distance: number;
  encumbranceLimit?: number;
  name: string;
}): Skill => ({
  entityId: "921f69e2-b9fd-4c4f-84bf-386e69ab050f",
  entityType: ENTITY_TYPE.SKILL,
  name: "Retaliation",
  artwork: "skill-placeholder.png",
  description: [
    `You may target a miniature not present in your area for a melee attack if you have LOS and are at a distance lower or equal to ${distance}`,
    checkEncumbranceLimit(encumbranceLimit)
  ],
  when: ["During the End the Ranged Attack step."],
  requirements: [
    `${name} is the target of the initial ranged attack.`,
    "the initial ranged attack is not already a retaliation.",
    `${name} must be able to target the initial attacker with a ranged attack with a weapon that does not have the disposable restriction.`
  ],
  effects: [
    `${name} immediately performs a free ranged attack called retaliation.`,
    "The retaliation works in the same way as a ranged attack with the following exceptions:",
    [
      `during the Declare the Target step, ${name} targets the initial attacker.`,
      `during the Create the Dice Pool step, ${name} takes ${distance} ${dieColor} dice to create the attack dice pool.`,
      `if ${name} is a hero, they ignore the Spend Energy Cubes and Add the Weapon and Elevation Bonuses steps. `
    ]
  ]
});

export const shackle = ({
  shackleTokens,
  dieReduction,
  manipulationDifficulty,
  encumbranceLimit,
  name
}: {
  dieReduction: number;
  encumbranceLimit?: number;
  manipulationDifficulty: number;
  name: string;
  shackleTokens: number;
}): Skill => ({
  entityId: "39cac68f-9827-4c78-b459-b4ae5e484b86",
  entityType: ENTITY_TYPE.SKILL,
  name: "Shackle",
  artwork: "skill-placeholder.png",
  description: [
    `If you successfully perform a melee attack, place ${shackleTokens} shackle tokens on the defender. No wounds are inflicted by the attack. The number of successes obtained by the shackled miniature when performing attacks, thoughts, manipulations or defenses are reduced by ${dieReduction}. Shackle tokens can be removed if the affected miniature (or another allied miniature in the same area) successfully performs a complex manipulation of difficulty ${manipulationDifficulty}. The Lock Picking skill can be used for this manipulation.`,
    checkEncumbranceLimit(encumbranceLimit)
  ],
  when: ["During the Declare a Melee Attack step"],
  requirements: [
    `${name} is the attacker.`,
    `${name} declares the use of the skill.`
  ],
  effects: [
    `The Add the Weapon Bonuses step is ignored. During the Defending and Wounds step, if the defender suffers one or more wounds, these are ignored and ${shackleTokens} shackle tokens are placed on the defender’s base.`,
    "A shackle token placed on a miniature’s base must follow the miniature’s movements. At the very end of the Calculate the Number of Successes step of attacks, thoughts, manipulations and defenses, a miniature with at least one shackle token removes the same number of successes as the number of shackle tokens on its base from the number of successes obtained.",
    "To remove all shackle tokens from a miniature, the miniature or another miniature in the same area must successfully perform a complex manipulation with a difficulty level equal to the number of shackle tokens. The Lock picking skill can be used for this manipulation."
  ]
});

export const sneakAttack = ({
  automaticSuccess,
  encumbranceLimit,
  name
}: {
  automaticSuccess: number;
  encumbranceLimit?: number;
  name: string;
}): Skill => ({
  entityId: "256818e3-0d31-4b73-991e-235e90c55dcd",
  entityType: ENTITY_TYPE.SKILL,
  name: "Sneak Attack",
  artwork: "skill-placeholder.png",
  description: [
    `Allows it's possessor to add ${automaticSuccess} automatic successes during attacks in their area, if the total menace indexes of allies is equal to or higher than the total menace indexes of the enemies.`,
    checkEncumbranceLimit(encumbranceLimit)
  ],
  when: ["During the Calculate the Number of Successes step of an attack."],
  requirements: [
    `${name} is the attacker.`,
    "the defender is in the same area as them.",
    "the total menace indexes of the allies is equal to or higher than the total menace indexes of the enemies in the area of the attack."
  ],
  effects: [
    `${name} adds ${automaticSuccess} automatic successes to the number of successes of the attack.`
  ]
});
