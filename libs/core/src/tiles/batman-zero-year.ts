import {
  TILE_LEVEL,
  DIE_COLOR,
  TILE_TYPE,
  Tile,
  ENTITY_TYPE
} from "@gotham-city-chronicles-companion/common";
import { skills } from "@gotham-city-chronicles-companion/skills";

const name = "Batman";

export const batmanZeroYear: Tile = {
  entityId: "60e89f99-2242-42d0-b908-37d49bbcac8b",
  entityType: ENTITY_TYPE.TILE,
  name,
  subtext: "Zero Year",
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
          die_color: DIE_COLOR.YELLOW,
          reroll: true
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
      limit: 1,
      dice: [
        {
          die_color: DIE_COLOR.BLACK,
          reroll: true
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
    skills.parkour({ jumpLevels: 2, wounds: 2, name }),
    skills.mobility({ terrainLevelsToIgnore: 1, name }),
    skills.investigation({ automaticSuccess: 1, name })
  ],
  reinforcementCost: undefined
};
