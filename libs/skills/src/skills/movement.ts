import {
  checkEncumbranceLimit,
  ENTITY_TYPE,
  Skill
} from "@gotham-city-chronicles-companion/common";

export const elusive = ({
  enemySizeToIgnore,
  encumbranceLimit,
  name
}: {
  encumbranceLimit?: number;
  enemySizeToIgnore: number;
  name: string;
}): Skill => ({
  entityId: "82cc38ba-ab7e-410b-81f7-2249adf0a0f6",
  entityType: ENTITY_TYPE.SKILL,
  name: "Elusive",
  artwork: "skill-placeholder.png",
  description: [
    `Ignore ${enemySizeToIgnore} enemy size indexes when moving.`,
    checkEncumbranceLimit(encumbranceLimit)
  ].filter(Boolean),
  when: ["During the Calculate the Move Cost step of a movement."],
  requirements: [`${name} performs the action.`],
  effects: [
    `${name} adds ${enemySizeToIgnore} automatic successes to the number of successes of their defense.`
  ]
});

export const immobilization = ({
  encumbranceLimit,
  name,
  woundsInflicted
}: {
  encumbranceLimit?: number;
  name: string;
  woundsInflicted: number;
}): Skill => ({
  entityId: "540a5e7a-9010-4f8f-92a1-df8a6d9d0d36",
  entityType: ENTITY_TYPE.SKILL,
  name: "Immobilization",
  artwork: "skill-placeholder.png",
  description: [
    `After an attack or an explosion that inflicts at least ${woundsInflicted} wounds, you may lay down the wounded miniature. To stand back up, they must spend their Move Point Bonus for the First Movement.`,
    checkEncumbranceLimit(encumbranceLimit)
  ].filter(Boolean),
  when: [
    "During the End the Melee Attack step or the End the Ranged Attack step, or just after an explosion."
  ],
  requirements: [
    `${name} is the attacker or the player triggering an explosion.`
  ],
  effects: [
    `Every miniature which have suffered at least ${woundsInflicted} wounds due to the attack or the explosion are laid down in their area. At the start of their next activation, they are stood back up. Their Move Point Bonus for the First Movement is reduced to zero for this activation.`
  ]
});

export const mobility = ({
  encumbranceLimit,
  name,
  terrainLevelsToIgnore
}: {
  encumbranceLimit?: number;
  name: string;
  terrainLevelsToIgnore: number;
}): Skill => ({
  entityId: "4cc58e25-5c5c-4e17-ab97-5d8871b20be6",
  entityType: ENTITY_TYPE.SKILL,
  name: "Mobility",
  artwork: "skill-placeholder.png",
  description: [
    `Allows its possessor to ignore ${terrainLevelsToIgnore} difficult terrain levels when moving`,
    checkEncumbranceLimit(encumbranceLimit)
  ].filter(Boolean),
  when: ["during the Calculate the Move Cost step of a movement."],
  requirements: [`${name} performs the action.`],
  effects: [
    `${name} ignores ${terrainLevelsToIgnore} levels of difficult terrain for each move.`
  ]
});

export const parkour = ({
  encumbranceLimit,
  jumpLevels,
  name,
  wounds
}: {
  encumbranceLimit?: number;
  jumpLevels: number;
  name: string;
  wounds: number;
}): Skill => ({
  entityId: "311f387b-ab96-4095-87d0-920bdbdc2d02",
  entityType: ENTITY_TYPE.SKILL,
  name: "Parkour",
  artwork: "skill-placeholder.png",
  description: [
    `Ignore ${jumpLevels} jump or climb levels when performing a special move, and ${wounds} wounds caused by a fall.`,
    checkEncumbranceLimit(encumbranceLimit)
  ].filter(Boolean),
  when: [
    "When climbing or jumping and during the Calculate the Move Cost step.",
    "When falling and during the Apply the Effects of the Destination Area step."
  ],
  requirements: [`${name} performs the action.`],
  effects: [
    [`${name} ignores ${jumpLevels} levels of jump or climb.`],
    "OR",
    [`${name} ignores ${wounds} wounds caused by the fall`]
  ]
});

export const wallBreaker = ({
  encumbranceLimit,
  name,
  wallLevel
}: {
  encumbranceLimit?: number;
  name: string;
  wallLevel: number;
}): Skill => ({
  entityId: "3e5f8745-bf66-4f0c-a1e1-287262f0dcad",
  entityType: ENTITY_TYPE.SKILL,
  name: "Wall Breaker",
  artwork: "skill-placeholder.png",
  description: [
    `Move through a level ${wallLevel} or lower wall, then put a broken wall token on it. The cost of this move is raised by 2. The two areas become adjacent, a LOS can be drawn between them, and movement is possible.`,
    checkEncumbranceLimit(encumbranceLimit)
  ].filter(Boolean),
  when: ["during the Choose Move Type step of a movement action"],
  requirements: [
    `${name} performs the action.`,
    `at least one wall limiting their area is associated with a level. This level must be lower than or equal to ${wallLevel}. The two areas separated by that wall must be at the same elevation level.`
  ],
  effects: [
    `${name} can consider that wall as being a white area boundary during movement.`,
    "They can therefore perform a simple move through the wall with the following exceptions:",
    [
      "The destination area must be at the same elevation level as the start area.",
      "During the Calculate the Move Cost step, this cost is raised by 2 move points.",
      "During the End the Move step, [the possessor] places a broken wall token on the boundary between the two areas."
    ],
    "Two areas connected by a broken wall token share a clear line of sight. A miniature may perform a simple move between these two areas."
  ]
});
