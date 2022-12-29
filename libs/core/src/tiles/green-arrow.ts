import {
  TILE_LEVEL,
  DIE_COLOR,
  TILE_TYPE,
  Tile,
  ENTITY_TYPE
} from "@gotham-city-chronicles-companion/common";
import { skills } from "@gotham-city-chronicles-companion/skills";

const name = "Green Arrow";

export const greenArrow: Tile = {
  entityId: "14d0a3bd-54b3-43b1-ad71-094adf5576a8",
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
          die_color: DIE_COLOR.ORANGE,
          reroll: true
        },
        {
          die_color: DIE_COLOR.ORANGE,
          reroll: true
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
        },
        {
          die_color: DIE_COLOR.ORANGE,
          reroll: true
        }
      ]
    },
    {
      limit: 2,
      dice: [
        {
          die_color: DIE_COLOR.ORANGE,
          reroll: true
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
          die_color: DIE_COLOR.WHITE,
          reroll: false
        },
        {
          die_color: DIE_COLOR.YELLOW,
          reroll: true
        }
      ]
    }
  ],
  skills: [
    skills.parkour({ jumpLevels: 2, wounds: 2, name }),
    skills.marksman({ automaticSuccess: 1, name }),
    skills.retaliation({ dieColor: DIE_COLOR.ORANGE, distance: 2, name })
  ],
  reinforcementCost: undefined
};
