import {
  TILE_LEVEL,
  DIE_COLOR,
  TILE_TYPE,
  Tile,
  ENTITY_TYPE
} from "@gotham-city-chronicles-companion/common";
import { skills } from "@gotham-city-chronicles-companion/skills";

const name = "Batman";

export const batman: Tile = {
  entityId: "1c125837-1e9a-43b3-91ba-345aede6cad2",
  entityType: ENTITY_TYPE.TILE,
  name,
  subtext: "Bruce Wayne",
  artwork: "placeholder.png",
  double: false,
  tileType: TILE_TYPE.HERO,
  tileLevel: TILE_LEVEL.LEADER,
  lifePoints: 5,
  automaticDefense: 2,
  firstMoveBonus: 2,
  sizeIndex: 1,
  menaceIndex: 1,
  trait: undefined,
  melee: [
    {
      limit: 1,
      dice: [
        {
          die_color: DIE_COLOR.RED,
          reroll: false
        },
        {
          die_color: DIE_COLOR.RED,
          reroll: false
        }
      ]
    },
    {
      limit: 3,
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
          die_color: DIE_COLOR.RED,
          reroll: false
        },
        {
          die_color: DIE_COLOR.BLACK,
          reroll: false
        }
      ]
    }
  ],
  skills: [
    skills.mobility({ terrainLevelsToIgnore: 1, name }),
    skills.investigation({ automaticSuccess: 2, name }),
    skills.hacking({ automaticSuccess: 1, name })
  ],
  reinforcementCost: undefined
};
