import {
  checkEncumbranceLimit,
  ENTITY_TYPE,
  Skill
} from "@gotham-city-chronicles-companion/common";

export const attraction = ({
  distance,
  encumbranceLimit,
  name
}: {
  distance: number;
  encumbranceLimit?: number;
  name: string;
}): Skill => ({
  entityId: "a1574e4f-6792-4ff2-b73b-611dfd69d7ad",
  entityType: ENTITY_TYPE.SKILL,
  name: "Attraction",
  artwork: "skill-placeholder.png",
  description: [
    `At the cost of an automatic manipulation, you may attract a miniature you share LOS with and draw it into your area. The target must be at a lower or equal distance than ${distance} and their size index must be lower or equal to yours. The target must not over-occupy your area.`,
    checkEncumbranceLimit(encumbranceLimit)
  ].filter(Boolean),
  when: ["During the Declare an Automatic Manipulation step."],
  requirements: [`${name} declares it's use.`, `${name} preforms the action.`],
  effects: [
    `${name} can target a miniature that meets the following requirements:`,
    [
      `${name} must have a clear line of sight on the target.`,
      `The size index of the target is lower or equal to that of ${name}.`,
      `The target must be at a distance inferior or equal to ${distance} from ${name}.`,
      `The target must not over-occupy ${name}’s area.`
    ],
    `During the Apply the Automatic Manipulation step, ${name} removes the targeted miniature and replaces it in their area.`
  ]
});

export const blast = ({
  explosionLevel,
  encumbranceLimit,
  name
}: {
  encumbranceLimit?: number;
  explosionLevel: number;
  name: string;
}): Skill => ({
  entityId: "3a59fd58-742e-417b-a5b8-010b3a83cb6b",
  entityType: ENTITY_TYPE.SKILL,
  name: "Blast",
  artwork: "skill-placeholder.png",
  description: [
    `At the cost of an automatic manipulation, you may trigger a level ${explosionLevel} explosion in your area and in an adjacent area in LOS. You are not wounded by this explosion.`,
    checkEncumbranceLimit(encumbranceLimit)
  ].filter(Boolean),
  when: ["During the Declare an Automatic Manipulation step."],
  requirements: [
    `${name} performs the action.`,
    `${name} declares the use of the skill.`,
    `${name} has not already used the skill during this turn.`
  ],
  effects: [
    `During the Apply the Automatic Manipulation step, ${name} triggers a level ${explosionLevel} explosion in their area as well as in an adjacent area to which they have a clear line of sight. ${name} is not wounded during this explosion.`
  ]
});

export const cry = ({
  explosionLevel,
  encumbranceLimit,
  name
}: {
  encumbranceLimit?: number;
  explosionLevel: number;
  name: string;
}): Skill => ({
  entityId: "acf06f5f-3900-452f-9a4e-e8d03d1a7b88",
  entityType: ENTITY_TYPE.SKILL,
  name: "Cry",
  artwork: "skill-placeholder.png",
  description: [
    `Once per turn you may trigger a level ${explosionLevel} explosion in your area and in an adjacent area in LOS.`,
    checkEncumbranceLimit(encumbranceLimit)
  ].filter(Boolean),
  when: ["During the Declare an Automatic Manipulation step."],
  requirements: [
    `${name} declares the use of the skill.`,
    `${name} performs the action.`,
    `${name} has not already used the skill during this turn.`
  ],
  effects: [
    "A cry works in the same way as an automatic manipulation with the following exception: the Spend Energy Cube step is ignored.",
    `During the Apply the Automatic Manipulation step, ${name} triggers a level ${explosionLevel} explosion in their area as well as an adjacent area with a clear line of sight. ${name}is not wounded during this explosion.`
  ]
});

export const grenade = ({
  explosionLevel,
  encumbranceLimit,
  name
}: {
  encumbranceLimit?: number;
  explosionLevel: number;
  name: string;
}): Skill => ({
  entityId: "6b2600d2-f528-4b72-8635-45926cb67f56",
  entityType: ENTITY_TYPE.SKILL,
  name: "Grenade",
  artwork: "skill-placeholder.png",
  description: [
    `Trigger a level ${explosionLevel} explosion in a targeted area by performing a complex manipulation with a difficulty equal to the distance between your area and the targeted area. In case of failure, the level ${explosionLevel} explosion is triggered in an area located at a distance equal to the number of successes obtained, along the LOS.`,
    checkEncumbranceLimit(encumbranceLimit)
  ].filter(Boolean),
  when: ["During the Declare a Complex Manipulation step."],
  requirements: [
    `${name} declares the use of the skill.`,
    `${name} has a clear line of sight to the targeted area.`
  ],
  effects: [
    `${name} must successfully perform a complex manipulation with a difficulty level equal to the distance between them and the targeted area.`,
    "During the Apply the Complex Manipulation step, the number of successes is compared to the complex manipulation difficulty level:",
    [
      `If the number of successes is equal to or higher than the difficulty level of the complex manipulation, ${name} triggers a level ${explosionLevel} explosion in the targeted area.`,
      `If the number of successes is lower than the difficulty level of the complex manipulation, ${name} triggers a level ${explosionLevel} explosion in an area located at a distance equal to the number of successes obtained, along the line of sight to the targeted area.`
    ]
  ]
});

export const lockPicking = ({
  automaticSuccess,
  encumbranceLimit,
  name
}: {
  automaticSuccess: number;
  encumbranceLimit?: number;
  name: string;
}): Skill => ({
  entityId: "6719ecf0-5d99-4f8a-9590-82c52efaa09d",
  entityType: ENTITY_TYPE.SKILL,
  name: "Lock Picking",
  artwork: "skill-placeholder.png",
  description: [
    `Add ${automaticSuccess} automatic successes during certain manipulation actions indicated by the mission`,
    checkEncumbranceLimit(encumbranceLimit)
  ].filter(Boolean),
  when: [
    "During the Calculate the Number of Successes step of a complex manipulation."
  ],
  requirements: [
    `${name} performs the action.`,
    "in the description of the performed manipulation, it is indicated that the skill is taken into account."
  ],
  effects: [
    `${name} adds ${automaticSuccess} automatic successes to the number of successes obtained.`
  ]
});

export const munitionsSpecialist = ({
  automaticSuccess,
  encumbranceLimit,
  name
}: {
  automaticSuccess: number;
  encumbranceLimit?: number;
  name: string;
}): Skill => ({
  entityId: "39851a7b-09af-49e0-ab10-e3a4451b1ecc",
  entityType: ENTITY_TYPE.SKILL,
  name: "Munitions Specialist",
  artwork: "skill-placeholder.png",
  description: [
    `Add ${automaticSuccess} automatic successes during certain manipulation actions indicated by the mission.`,
    checkEncumbranceLimit(encumbranceLimit)
  ].filter(Boolean),
  when: [
    "During the Calculate the Number of Successes step of a complex manipulation."
  ],
  requirements: [
    `${name} performs the action.`,
    "in the description of the performed manipulation, it is indicated that the skill is taken into account."
  ],
  effects: [
    `${name} adds ${automaticSuccess} automatic successes to the number of successes obtained.`
  ]
});
