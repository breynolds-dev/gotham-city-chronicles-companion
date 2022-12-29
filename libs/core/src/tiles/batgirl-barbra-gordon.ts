import {
  TILE_LEVEL,
  DIE_COLOR,
  TILE_TYPE,
  Tile,
  ENTITY_TYPE
} from "@gotham-city-chronicles-companion/common";
import { skills } from "@gotham-city-chronicles-companion/skills";

const name = "Batgirl";

export const batgirlBarbraGordon: Tile = {
  entityId: "ea392b47-f5e8-41dd-afa8-db6af5430edd",
  entityType: ENTITY_TYPE.TILE,
  name,
  subtext: "Barbara Gordon",
  artwork: "placeholder.png",
  double: false,
  tileType: TILE_TYPE.HERO,
  tileLevel: TILE_LEVEL.LEADER,
  lifePoints: 5,
  automaticDefense: 2,
  firstMoveBonus: 3,
  sizeIndex: 1,
  menaceIndex: 1,
  trait: undefined,
  melee: [
    {
      limit: 1,
      dice: [
        {
          die_color: DIE_COLOR.ORANGE,
          reroll: true
        },
        {
          die_color: DIE_COLOR.ORANGE,
          reroll: true
        }
      ]
    },
    {
      limit: 3,
      dice: [
        {
          die_color: DIE_COLOR.WHITE,
          reroll: true
        }
      ]
    }
  ],
  ranged: [
    {
      limit: 2,
      dice: [
        {
          die_color: DIE_COLOR.YELLOW,
          reroll: false
        },
        {
          die_color: DIE_COLOR.YELLOW,
          reroll: false
        }
      ]
    }
  ],
  manipulation: [
    {
      limit: 1,
      dice: [
        {
          die_color: DIE_COLOR.ORANGE,
          reroll: false
        },
        {
          die_color: DIE_COLOR.ORANGE,
          reroll: false
        }
      ]
    }
  ],
  thought: [
    {
      limit: 1,
      dice: [
        {
          die_color: DIE_COLOR.WHITE,
          reroll: false
        },
        {
          die_color: DIE_COLOR.RED,
          reroll: false
        }
      ]
    }
  ],
  skills: [
    skills.martialArts({ automaticSuccess: 1, name }),
    skills.parkour({ jumpLevels: 1, wounds: 1, name }),
    skills.investigation({ automaticSuccess: 1, name })
  ],
  reinforcementCost: undefined
};
