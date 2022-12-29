import {
  TILE_LEVEL,
  DIE_COLOR,
  TILE_TYPE,
  Tile,
  ENTITY_TYPE
} from "@gotham-city-chronicles-companion/common";
import { skills } from "@gotham-city-chronicles-companion/skills";

const name = "Batman";

export const batmanYear100: Tile = {
  entityId: "61335fa3-6fe1-426e-adb8-3a1a75b1ae95",
  entityType: ENTITY_TYPE.TILE,
  name,
  subtext: "Year 100",
  artwork: "placeholder.png",
  double: false,
  tileType: TILE_TYPE.HERO,
  tileLevel: TILE_LEVEL.LEADER,
  lifePoints: 5,
  automaticDefense: 3,
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
          reroll: false
        },
        {
          die_color: DIE_COLOR.RED,
          reroll: false
        }
      ]
    },
    {
      limit: 2,
      dice: [
        {
          die_color: DIE_COLOR.WHITE,
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
      limit: 3,
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
    skills.parkour({ jumpLevels: 1, wounds: 1, name }),
    skills.mobility({ terrainLevelsToIgnore: 1, name }),
    skills.martialArts({ automaticSuccess: 1, name })
  ],
  reinforcementCost: undefined
};
