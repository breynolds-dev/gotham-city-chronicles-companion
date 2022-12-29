import {
  TILE_LEVEL,
  DIE_COLOR,
  TILE_TYPE,
  Tile,
  ENTITY_TYPE
} from "@gotham-city-chronicles-companion/common";
import { skills } from "@gotham-city-chronicles-companion/skills";

const name = "Black Canary";

export const blackCanary: Tile = {
  entityId: "0088bcfa-6832-4c25-a0b5-2a5686e059c8",
  entityType: ENTITY_TYPE.TILE,
  name,
  subtext: undefined,
  artwork: "placeholder.png",
  double: false,
  tileType: TILE_TYPE.HERO,
  tileLevel: TILE_LEVEL.LEADER,
  lifePoints: 4,
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
          die_color: DIE_COLOR.YELLOW,
          reroll: true
        }
      ]
    }
  ],
  ranged: [],
  manipulation: [],
  thought: [
    {
      limit: 1,
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
  skills: [
    skills.parkour({ jumpLevels: 1, wounds: 1, name }),
    skills.blast({ explosionLevel: 2, name }),
    skills.martialArts({ automaticSuccess: 2, name })
  ],
  reinforcementCost: undefined
};
