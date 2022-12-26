import {
  checkEncumbranceLimit,
  ENTITY_TYPE,
  Skill
} from "@gotham-city-chronicles-companion/common";

export const eliteCommand = ({
  eliteCount,
  encumbranceLimit,
  name
}: {
  eliteCount: number;
  encumbranceLimit?: number;
  name: string;
}): Skill => ({
  entityId: "aaba058c-324d-4ce4-b253-7c7e4a7b21dd",
  entityType: ENTITY_TYPE.SKILL,
  name: "Elite Command",
  artwork: "skill-placeholder.png",
  description: [
    `Allows you to control friendly elite units. Choose an elite level tile from your side and ${eliteCount} miniatures. The character tile must not already be in the river or already selected as part of another command skill.`,
    "These friendly miniatures start the mission in your area, and you can activate them by performing an automatic thought action. Each energy cube spent on defense, reroll, or move for the friendly miniatures is moved to your thought action space.",
    "You may take command of as many elite level character tiles as the number of times you have this skill.",
    checkEncumbranceLimit(encumbranceLimit)
  ].filter(Boolean),
  when: ["All the time."],
  requirements: [`${name} declares the use of the skill.`],
  effects: [
    `During the mission setup, ${name} chooses an elite level character tile from the same side as themselves and places that tile next to their hero board. The character tile must not already be in the river or already selected as part of another command skill. This tile is known as a “friendly tile”.`,
    `${name} takes ${eliteCount} miniatures of that tile. These start the mission in the same area as them. If the area would become over-occupied with the miniatures, they are placed in adjacent areas.`,
    `${name} can take command of as many elite level character tiles as the number of times they have this skill.`,
    `To activate all the characters of one of their friendly tiles, ${name} has to perform an automatic thought. This activation follows the same rules as the Activate a Character Controlled by a Tile step (see page 31) with the following exception:`,
    [
      `When the text refers to the villain, it is considered that it refers to ${name}.`
    ],
    `When a character of one of their friendly tiles performs a defense, ${name} must respect the following exceptions:`,
    [
      `During the Spend Energy Cubes step, instead of moving their energy cubes to the defense space, ${name} moves them to their thought action space.`,
      "During the Create the Dice Pool step, the defense characteristic is equal to an orange die."
    ],
    `When a character of one of their friendly tiles performs a reroll, ${name} must respect the following exception:`,
    [
      `During the Spend Energy Cubes step, instead of moving their energy cubes to the reroll space, ${name} moves them to their thought action space.`
    ],
    `When a character of one of their friendly tiles performs a movement, ${name} must respect the following exception:`,
    [
      `During the Spend Energy Cubes step, instead of moving their energy cubes to the movement action space, ${name} moves them to their thought action space. The movement characteristic is equal to 1.`
    ]
  ]
});

export const hacking = ({
  automaticSuccess,
  encumbranceLimit,
  name
}: {
  automaticSuccess: number;
  encumbranceLimit?: number;
  name: string;
}): Skill => ({
  entityId: "107be596-c582-4d94-bdac-1fe2f9845844",
  entityType: ENTITY_TYPE.SKILL,
  name: "Hacking",
  artwork: "skill-placeholder.png",
  description: [
    `Gives you ${automaticSuccess} automatic successes during certain thought actions indicated by the mission.`,
    checkEncumbranceLimit(encumbranceLimit)
  ].filter(Boolean),
  when: [
    "during the Calculate the Number of Successes step of a complex thought."
  ],
  requirements: [
    `${name} performs the action.`,
    "in the description of the performed thought, it is indicated that the skill is taken into account."
  ],
  effects: [
    `${name} adds ${automaticSuccess} automatic successes to the number of successes obtained.`
  ]
});

export const henchmanCommand = ({
  henchmanCount,
  encumbranceLimit,
  name
}: {
  encumbranceLimit?: number;
  henchmanCount: number;
  name: string;
}): Skill => ({
  entityId: "9cf1ac66-ad9a-4c81-b550-3bdc48ee5652",
  entityType: ENTITY_TYPE.SKILL,
  name: "Henchman Command",
  artwork: "skill-placeholder.png",
  description: [
    `Allows you to control friendly elite units. Choose an henchman level tile from your side and ${henchmanCount} miniatures. The character tile must not already be in the river or already selected as part of another command skill.`,
    "These friendly miniatures start the mission in your area, and you can activate them by performing an automatic thought action. Each energy cube spent on defense, reroll, or move for the friendly miniatures is moved to your thought action space.",
    "You may take command of as many henchmen level character tiles as the number of times you have this skill.",
    checkEncumbranceLimit(encumbranceLimit)
  ].filter(Boolean),
  when: ["All the time."],
  requirements: [`${name} declares the use of the skill.`],
  effects: [
    `During the mission setup, ${name} chooses an henchman level character tile from the same side as themselves and places that tile next to their hero board. The character tile must not already be in the river or already selected as part of another command skill. This tile is known as a “friendly tile”.`,
    `${name} takes ${henchmanCount} miniatures of that tile. These start the mission in the same area as them. If the area would become over-occupied with the miniatures, they are placed in adjacent areas.`,
    `${name} can take command of as many henchman level character tiles as the number of times they have this skill.`,
    `To activate all the characters of one of their friendly tiles, ${name} has to perform an automatic thought. This activation follows the same rules as the Activate a Character Controlled by a Tile step (see page 31) with the following exception:`,
    [
      `When the text refers to the villain, it is considered that it refers to ${name}.`
    ],
    `When a character of one of their friendly tiles performs a defense, ${name} must respect the following exceptions:`,
    [
      `During the Spend Energy Cubes step, instead of moving their energy cubes to the defense space, ${name} moves them to their thought action space.`,
      "During the Create the Dice Pool step, the defense characteristic is equal to an orange die."
    ],
    `When a character of one of their friendly tiles performs a reroll, ${name} must respect the following exception:`,
    [
      `During the Spend Energy Cubes step, instead of moving their energy cubes to the reroll space, ${name} moves them to their thought action space.`
    ],
    `When a character of one of their friendly tiles performs a movement, ${name} must respect the following exception:`,
    [
      `During the Spend Energy Cubes step, instead of moving their energy cubes to the movement action space, ${name} moves them to their thought action space. The movement characteristic is equal to 1.`
    ]
  ]
});

export const investigation = ({
  automaticSuccess,
  encumbranceLimit,
  name
}: {
  automaticSuccess: number;
  encumbranceLimit?: number;
  name: string;
}): Skill => ({
  entityId: "9c43b65d-1231-4b99-a71c-46adefb4499e",
  entityType: ENTITY_TYPE.SKILL,
  name: "Investigation",
  artwork: "skill-placeholder.png",
  description: [
    `Gives you ${automaticSuccess} during certain thought actions indicated by the mission.`,
    checkEncumbranceLimit(encumbranceLimit)
  ].filter(Boolean),
  when: [
    "During the Calculate the Number of Successes step of a complex thought."
  ],
  requirements: [
    `${name} performs the action.`,
    "in the description of the performed thought, it is indicated that the skill is taken into account."
  ],
  effects: [
    `${name} adds ${automaticSuccess} automatic successes to the number of successes obtained.`
  ]
});

export const tactician = ({
  freeMovementPoints,
  encumbranceLimit,
  name,
  targetIsModel
}: {
  encumbranceLimit?: number;
  freeMovementPoints: number;
  name: string;
  targetIsModel: boolean;
}): Skill => ({
  entityId: "90f7559f-82c9-44c8-8e13-a863e43cc7fb",
  entityType: ENTITY_TYPE.SKILL,
  name: "Tactician",
  artwork: "skill-placeholder.png",
  description: [
    `Perform an automatic thought to immediately grant ${freeMovementPoints} free move points to an allied miniature that hasn’t been the target of this effect this turn. If the miniature is a character, they also get their Move Point Bonus for the First Movement.`,
    checkEncumbranceLimit(encumbranceLimit)
  ].filter(Boolean),
  when: ["During the Declare an Automatic Thought step."],
  requirements: [
    `${name} declares the use of the skill.`,
    `${name} performs the action.`
  ],
  effects: [
    `During the End the Automatic Thought step, ${name} targets:`,
    [
      "A character that has not yet benefited from this skill",
      "Or a hero that has not yet benefited from this skill, that is in the active stance."
    ],
    targetIsModel
      ? `${name} performs an Activation of the character controlled by a tile (see page 31) with the following exceptions:`
      : "",
    targetIsModel
      ? [
          "Only the targeted character is activated.",
          "They only perform their First Movement step.",
          `During the Create the Move Point Pool step of the movement action, the character adds ${freeMovementPoints} move points to their move point pool.`
        ]
      : "",
    !targetIsModel
      ? `The targeted hero immediately performs a Movement action. During the Create the Move Point Pool step of the movement action, the hero adds ${freeMovementPoints} move points to their move point pool.`
      : ""
  ].filter(Boolean)
});
