import {
  TILE_LEVEL,
  DIE_COLOR,
  TILE_TYPE,
  Tile,
  ENTITY_TYPE
} from "@gotham-city-chronicles-companion/common";
import { skills } from "@gotham-city-chronicles-companion/skills";

const name = "Katana";

export const katana: Tile = {
  entityId: "53e980f8-79a0-4f0b-a243-86e77dd2bd49",
  entityType: ENTITY_TYPE.TILE,
  name,
  subtext: undefined,
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
          die_color: DIE_COLOR.YELLOW,
          reroll: false
        },
        {
          die_color: DIE_COLOR.YELLOW,
          reroll: false
        },
        {
          die_color: DIE_COLOR.ORANGE,
          reroll: false
        }
      ]
    },
    {
      limit: 4,
      dice: [
        {
          die_color: DIE_COLOR.YELLOW,
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
    skills.counterattack({ dieColor: DIE_COLOR.YELLOW, extraDice: 2, name }),
    skills.martialArts({ automaticSuccess: 2, name })
  ],
  reinforcementCost: undefined
};
