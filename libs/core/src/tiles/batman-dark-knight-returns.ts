import {
  TILE_LEVEL,
  DIE_COLOR,
  TILE_TYPE,
  Tile,
  ENTITY_TYPE
} from "@gotham-city-chronicles-companion/common";
import { skills } from "@gotham-city-chronicles-companion/skills";

const name = "Batman";

export const batmanDarkKnightReturns: Tile = {
  entityId: "0af9d59b-8091-4d21-bd40-57998d42c36f",
  entityType: ENTITY_TYPE.TILE,
  name,
  subtext: "The Dark Knight Returns",
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
          die_color: DIE_COLOR.BLACK,
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
    skills.support({ freeRerolls: 2, name }),
    skills.circularStrike({ additionalTargets: 1, name }),
    skills.berserk({ whiteDice: 1, name })
  ],
  reinforcementCost: undefined
};
