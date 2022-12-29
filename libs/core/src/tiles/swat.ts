import {
  TILE_LEVEL,
  DIE_COLOR,
  TILE_TYPE,
  Tile,
  ENTITY_TYPE
} from "@gotham-city-chronicles-companion/common";
import { skills } from "@gotham-city-chronicles-companion/skills";

const name = "SWAT";

export const swat: Tile = {
  entityId: "1a50b525-57d8-498b-9ec0-9021dd4cad80",
  entityType: ENTITY_TYPE.TILE,
  name,
  subtext: undefined,
  artwork: "placeholder.png",
  double: false,
  tileType: TILE_TYPE.HERO,
  tileLevel: TILE_LEVEL.ELITE,
  lifePoints: 1,
  automaticDefense: 2,
  firstMoveBonus: 2,
  sizeIndex: 1,
  menaceIndex: 1,
  trait: undefined,
  melee: [],
  ranged: [
    {
      limit: 1,
      dice: [
        {
          die_color: DIE_COLOR.WHITE,
          reroll: false
        },
        {
          die_color: DIE_COLOR.WHITE,
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
  thought: [],
  skills: [
    skills.burst({ burstCount: 2, name }),
    skills.parkour({ jumpLevels: 1, wounds: 1, name })
  ],
  reinforcementCost: 2
};
