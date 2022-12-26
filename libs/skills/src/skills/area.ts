import {
  checkEncumbranceLimit,
  ENTITY_TYPE,
  Skill
} from "@gotham-city-chronicles-companion/common";

export const flame = ({
  tokenCount,
  encumbranceLimit,
  name
}: {
  encumbranceLimit?: number;
  name: string;
  tokenCount: number;
}): Skill => ({
  entityId: "fb3365b8-6cb2-4d77-9f2c-513b8efcddd4",
  entityType: ENTITY_TYPE.SKILL,
  name: "Flame",
  artwork: "skill-placeholder.png",
  description: [
    `Allows its possessor, during an attack or after an explosion, to place ${tokenCount} flame tokens on the area of the attack or the explosion (see Dissipation page 44).  Each token adds 1 level of dangerous terrain to it's area.  Its possessor is immune to this effect.`,
    checkEncumbranceLimit(encumbranceLimit)
  ].filter(Boolean),
  when: [
    "During the End the Melee Attack step or the End the Ranged Attack step or just after an explosion."
  ],
  requirements: [
    `${name} is the attacker, or the player triggering an explosion.`
  ],
  effects: [
    `${name} places ${tokenCount} flame tokens in the area of the target or the explosion.`,
    "A flame token adds 1 to the level of “dangerous terrain” of its area.",
    `${name} ignores all the flame tokens`
  ]
});

export const frost = ({
  tokenCount,
  encumbranceLimit,
  name
}: {
  encumbranceLimit?: number;
  name: string;
  tokenCount: number;
}): Skill => ({
  entityId: "1d0c7025-cf77-4d45-990b-9701c74c6584",
  entityType: ENTITY_TYPE.SKILL,
  name: "Frost",
  artwork: "skill-placeholder.png",
  description: [
    `Allows its possessor, during an attack or after an explosion, to freeze the terrain by placing ${tokenCount} frost tokens on the area of the attack or the explosion (see Dissipation page 44).  Each token adds 1 level of difficult terrain to it's area.  Its possessor is immune to this effect.`,
    checkEncumbranceLimit(encumbranceLimit)
  ].filter(Boolean),
  when: [
    "During the End the Melee Attack step or during the End the Ranged Attack step, or just after an explosion."
  ],
  requirements: [
    `${name} is the attacker or the player triggering an explosion.`
  ],
  effects: [
    `${name} places ${tokenCount} frost tokens in the area of the target or the explosion`,
    "A frost token adds 1 to the level of “dangerous terrain” of its area.",
    `${name} ignores all the frost tokens.`
  ]
});

export const smokeGrenade = ({
  tokenCount,
  encumbranceLimit,
  name
}: {
  encumbranceLimit?: number;
  name: string;
  tokenCount: number;
}): Skill => ({
  entityId: "a2abe462-6d54-4298-94d2-76d180c6cf97",
  entityType: ENTITY_TYPE.SKILL,
  name: "Smoke Grenade",
  artwork: "skill-placeholder.png",
  description: [
    `Allows it's possessor, after having triggered an explosion, to place ${tokenCount} smoke grenade tokens in this area (see Dissipation page 44).  During a ranged attack the attacker must count the number of smoke grenade tokens on the areas in their line of sight crosses and subtract it from the number of attack's successes.`,
    checkEncumbranceLimit(encumbranceLimit)
  ].filter(Boolean),
  when: ["Just after an explosion."],
  requirements: [`${name} triggers an explosion.`],
  effects: [
    `${name} places ${tokenCount} smoke grenade tokens in the area of the explosion.`,
    "During the Declare the Target step of a ranged attack, the attacker counts the number of smoke grenade tokens in the areas that cross their line of sight (start area and target area included). At the very end of the Calculate the Number of Successes step of the ranged attack, the attacker subtracts the number of tokens from the number of successes obtained."
  ]
});

export const toxicGas = ({
  tokenCount,
  encumbranceLimit,
  name
}: {
  encumbranceLimit?: number;
  name: string;
  tokenCount: number;
}): Skill => ({
  entityId: "8e4ce589-536a-40f3-ba97-5f8c636c13ce",
  entityType: ENTITY_TYPE.SKILL,
  name: "Toxic Gas",
  artwork: "skill-placeholder.png",
  description: [
    `Allows its possessor, during an attack or after an explosion, to place ${tokenCount} gas tokens on the area of the attack or the explosion (see Dissipation page 44).  Each token adds 1 level of dangerous terrain to it's area.  Its possessor is immune to this effect.`,
    checkEncumbranceLimit(encumbranceLimit)
  ].filter(Boolean),
  when: [
    "During the End the Melee Attack step or the End the Ranged Attack step or just after an explosion."
  ],
  requirements: [
    `${name} is the attacker, or the player triggering an explosion.`
  ],
  effects: [
    `${name} places ${tokenCount} gas tokens in the area of the target or the explosion.`,
    "A gas token adds 1 to the level of “dangerous terrain” of its area.",
    `${name} ignores all the gas tokens`
  ]
});
