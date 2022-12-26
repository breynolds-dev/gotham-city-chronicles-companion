import {
  checkEncumbranceLimit,
  ENTITY_TYPE,
  Skill
} from "@gotham-city-chronicles-companion/common";

export const ambidexterity = ({
  encumbranceLimit,
  name,
  sizeLimit
}: {
  encumbranceLimit?: number;
  name: string;
  sizeLimit: number;
}): Skill => ({
  entityId: "7a7b14d5-2d30-4c15-b2e6-27b40b3301a5",
  entityType: ENTITY_TYPE.SKILL,
  name: "Ambidexterity",
  artwork: "skill-placeholder.png",
  description: [
    `Use two weapons of the same type simultaneously during your attacks (and add both their bonuses). Their encumbrance or size must be lower or equal to ${sizeLimit}.`,
    checkEncumbranceLimit(encumbranceLimit)
  ].filter(Boolean),
  when: [
    "During the Add the Weapon Bonuses step of a melee or ranged attack of a hero."
  ],
  requirements: [
    `${name} is the attacker.`,
    `They have two weapon cards whose individual encumbrance or size is lower or equal to ${encumbranceLimit}.`,
    "The two weapon cards must be the same item type."
  ],
  effects: [`${name} can use their two weapon cards and add their bonuses.`]
});

export const horror = ({
  encumbranceLimit,
  moveCostIncrease,
  name
}: {
  encumbranceLimit?: number;
  moveCostIncrease: number;
  name: string;
}): Skill => ({
  entityId: "9f2f23fb-204e-457e-a538-ee441bc08758",
  entityType: ENTITY_TYPE.SKILL,
  name: "Horror",
  artwork: "skill-placeholder.png",
  description: [
    `Increase by ${moveCostIncrease} the move point cost for enemy miniatures wishing to enter the area you are in.`,
    checkEncumbranceLimit(encumbranceLimit)
  ].filter(Boolean),
  when: ["During the Calculate the Move Cost step of a movement."],
  requirements: [
    `the miniature who performs the movement is an enemy to ${name}.`,
    `${name} is in the destination area of the miniature performing the movement.`
  ],
  effects: [
    `the move cost of the miniature is increased by ${moveCostIncrease}.`
  ]
});

export const imaginaryFriend = ({
  encumbranceLimit,
  name,
  thoughtDifficulty
}: {
  encumbranceLimit?: number;
  name: string;
  thoughtDifficulty: number;
}): Skill => ({
  entityId: "938a46f9-18b7-43c6-af69-ac7bff9ba16f",
  entityType: ENTITY_TYPE.SKILL,
  name: "Imaginary Friend",
  artwork: "skill-placeholder.png",
  description: [
    `At the end of the mission setup, choose an unused miniature and place it in your area as your ‘imaginary friend’. It moves with you at no cost, has a size and menace index of 0, does not belong to any side, cannot be targeted, and does not have any life points. As long as your imaginary friend is present on the board, you have an additional yellow die for your actions. An opponent in your area may neutralize your imaginary friend by performing a complex thought of difficulty ${thoughtDifficulty}.`,
    checkEncumbranceLimit(encumbranceLimit)
  ].filter(Boolean),
  when: ["All the time."],
  requirements: [`${name} declares the use of the skill.`],
  effects: [
    `At the end of the mission setup, ${name} chooses an unused miniature for the mission that they place in their area. That miniature is called the imaginary friend.`,
    `The imaginary friend has a size and menace index of zero. It is considered as a miniature that does not belong to any side. It cannot be targeted. It does not have any life points. The only way to neutralize it is if an enemy miniature, located in the same area as ${name}, successfully performs a complex thought with a difficulty level equal to ${thoughtDifficulty}.`,
    `The imaginary friend must always be in the same area as ${name}. So, when the latter is moved, the imaginary friend also moves without additional cost.`,
    `As long as the imaginary friend is present on the board, ${name} gains an additional yellow die for each of their actions.`
  ]
});

export const luck = ({
  encumbranceLimit,
  name,
  rerollCount
}: {
  encumbranceLimit?: number;
  name: string;
  rerollCount: number;
}): Skill => ({
  entityId: "33ada6ce-de35-42dc-8423-597c20d67aa5",
  entityType: ENTITY_TYPE.SKILL,
  name: "Luck",
  artwork: "skill-placeholder.png",
  description: [
    `Gives you ${rerollCount} free rerolls. The same die can be rerolled several times.`,
    checkEncumbranceLimit(encumbranceLimit)
  ].filter(Boolean),
  when: ["During a reroll."],
  requirements: [`${name} performs the reroll.`],
  effects: [
    `at the start of the Free Rerolls step, and before any free rerolls are made, ${name} may perform ${rerollCount} rerolls from the previously rolled pool. The same die can be rerolled several times.`
  ]
});

export const misfortune = ({
  encumbranceLimit,
  name,
  rerollCount
}: {
  encumbranceLimit?: number;
  name: string;
  rerollCount: number;
}): Skill => ({
  entityId: "2a45c8cf-010b-4d22-a155-2efcc80307fc",
  entityType: ENTITY_TYPE.SKILL,
  name: "Misfortune",
  artwork: "skill-placeholder.png",
  description: [
    `Force an enemy in your area to reroll ${rerollCount} dice of your choice (choose after free rerolls). `,
    checkEncumbranceLimit(encumbranceLimit)
  ].filter(Boolean),
  when: ["at the beginning of the Declare the Paid Rerolls step"],
  requirements: [
    `${name} is located in the same area as the miniature rolling the dice.`,
    `${name} is an enemy of the miniature rolling the dice.`
  ],
  effects: [
    `${name} can force the player controlling the miniature who has rolled the dice to reroll, for free, ${rerollCount} dice. ${name} chooses the dice to be rerolled. Then, the Declare the Paid Rerolls step follows as usual.`
  ]
});

export const nervesOfSteel = ({
  encumbranceLimit,
  name,
  menaceIndex
}: {
  encumbranceLimit?: number;
  menaceIndex: number;
  name: string;
}): Skill => ({
  entityId: "01c190d6-19f6-488c-898f-6b1ab677e467",
  entityType: ENTITY_TYPE.SKILL,
  name: "Nerves of Steel",
  artwork: "skill-placeholder.png",
  description: [
    `Ignore ${menaceIndex} enemy menace indexes when performing ranged attacks, manipulations, or thoughts`,
    checkEncumbranceLimit(encumbranceLimit)
  ].filter(Boolean),
  when: ["During the calculation of the hindering index."],
  requirements: [`${name} performs the action.`],
  effects: [`${name} ignores ${menaceIndex} enemy miniature menace indexes.`]
});

export const pushingLimits = ({
  encumbranceLimit,
  name,
  wounds
}: {
  encumbranceLimit?: number;
  name: string;
  wounds: number;
}): Skill => ({
  entityId: "65b53b79-6d8a-462f-a1ea-bbbff577a26a",
  entityType: ENTITY_TYPE.SKILL,
  name: "Pushing Limits",
  artwork: "skill-placeholder.png",
  description: [
    `Once per turn, you may wound yourself to perform actions. Suffer ${wounds} wounds; for each of them, energy cubes moved to the wound zone are considered spent on the current action space, regardless of exertion limit.`,
    checkEncumbranceLimit(encumbranceLimit)
  ].filter(Boolean),
  when: [
    "At the start of the Spend Energy Cubes step of an action and before spending any other energy cubes"
  ],
  requirements: [
    `${name} performs the action.`,
    `${name} has not yet used it during this turn.`
  ],
  effects: [
    `${name} suffers ${wounds} wounds. For each of those wounds, the energy cubes that have just been moved to the wound zone are considered to have been spent on the current action space, regardless of its exertion limit. `
  ]
});

export const regeneration = ({
  encumbranceLimit,
  isHero,
  level,
  name
}: {
  encumbranceLimit?: number;
  isHero: boolean;
  level: number;
  name: string;
}): Skill => ({
  entityId: "3fa35d65-bf30-4e6e-9ad1-dc2ff64fcced",
  entityType: ENTITY_TYPE.SKILL,
  name: "Regeneration",
  artwork: "skill-placeholder.png",
  description: [
    `If you are a hero, during the Declare Heroes’ Stance step, move ${level} energy cubes from your wound zone to your fatigue zone. If you are a character, at the start of your activation, recover ${level} life points. A character cannot have more life points than their initial number.`,
    checkEncumbranceLimit(encumbranceLimit)
  ].filter(Boolean),
  when: [
    isHero
      ? "During the Declare Heroes’ Stance step and before any recovery."
      : "At the start of its activation."
  ],
  requirements: [
    isHero
      ? `${name} has at least one energy cube in their wound zone.`
      : `${name} does not have all their life points.`
  ],
  effects: [
    isHero
      ? `${name} moves up to ${level} energy cubes from their wound zone to their fatigue zone.`
      : `${name} recovers up to ${level} life points. A character cannot have more life points than their initial life point count.`
  ]
});

export const sacrifice = ({
  encumbranceLimit,
  name,
  successesCount
}: {
  encumbranceLimit?: number;
  name: string;
  successesCount: number;
}): Skill => ({
  entityId: "fe5a027c-f719-4fd0-b8fc-8c0e9e1be469",
  entityType: ENTITY_TYPE.SKILL,
  name: "Sacrifice",
  artwork: "skill-placeholder.png",
  description: [
    `Declare during the Create the Dice Pool step of an attack in which you are neither attacker or defender. Subtract ${successesCount} successes from the attack targeting an ally in your area and suffer that many wounds (no defence). Apply remaining successes as usual to the defender.`,
    checkEncumbranceLimit(encumbranceLimit)
  ].filter(Boolean),
  when: ["during the Calculate the Number of Successes step of an attack."],
  requirements: [
    `${name} is neither the attacker nor the defender.`,
    `${name} is located in the same area as the defender.`,
    `${name} has previously declared that they will use their skill during the Create the Dice Pool step of the attack`
  ],
  effects: [
    `${name} subtracts ${successesCount} to the number of successes obtained. They immediately suffer as many wounds as the number of successes they have subtracted.`,
    "The remaining successes, if any, are then applied as usual to the defender."
  ]
});

export const support = ({
  encumbranceLimit,
  freeRerolls,
  name
}: {
  encumbranceLimit?: number;
  freeRerolls: number;
  name: string;
}): Skill => ({
  entityId: "28b68250-aaae-406b-a90d-52cb82ae6927",
  entityType: ENTITY_TYPE.SKILL,
  name: "Support",
  artwork: "skill-placeholder.png",
  description: [
    `Provide ${freeRerolls} free rerolls to all allied miniatures in your area. The same die may be rerolled more than once.`,
    checkEncumbranceLimit(encumbranceLimit)
  ].filter(Boolean),
  when: ["During a reroll."],
  requirements: [
    `the miniature performing the reroll is an allied to ${name}.`,
    `the miniature performing the reroll is located in the same area as ${name}.`
  ],
  effects: [
    `At the start of the Free Rerolls step, before any free rerolls are made, the allied miniature may perform ${freeRerolls} dice rolls from the pool previously rolled. The same die may be rerolled more than once.`
  ]
});
