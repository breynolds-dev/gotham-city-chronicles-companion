import {
  TILE_LEVEL,
  DIE_COLOR,
  TILE_TYPE,
  Tile,
  ENTITY_TYPE
} from "@gotham-city-chronicles-companion/common";
import { skills } from "@gotham-city-chronicles-companion/skills";

const name = "Orphan";

export const orphan: Tile = {
  entityId: "78178e66-41c6-4f78-936d-78643dbb6f50",
  entityType: ENTITY_TYPE.TILE,
  name,
  subtext: "Cassandra Cain",
  artwork: "placeholder.png",
  double: false,
  tileType: TILE_TYPE.HERO,
  tileLevel: TILE_LEVEL.LEADER,
  lifePoints: 4,
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
          die_color: DIE_COLOR.YELLOW,
          reroll: true
        },
        {
          die_color: DIE_COLOR.YELLOW,
          reroll: true
        },
        {
          die_color: DIE_COLOR.YELLOW,
          reroll: true
        },
        {
          die_color: DIE_COLOR.YELLOW,
          reroll: true
        }
      ]
    },
    {
      limit: 4,
      dice: [
        {
          die_color: DIE_COLOR.RED,
          reroll: false
        }
      ]
    }
  ],
  ranged: [],
  manipulation: [
    {
      limit: 1,
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
    },
    {
      limit: 3,
      dice: [
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
  skills: [
    skills.parkour({ jumpLevels: 2, wounds: 2, name }),
    skills.elusive({ enemySizeToIgnore: 1, name }),
    skills.martialArts({ automaticSuccess: 1, name })
  ],
  reinforcementCost: undefined
};
