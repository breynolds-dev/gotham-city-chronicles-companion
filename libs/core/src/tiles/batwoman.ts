import {
  TILE_LEVEL,
  DIE_COLOR,
  TILE_TYPE,
  Tile,
  ENTITY_TYPE
} from "@gotham-city-chronicles-companion/common";
import { skills } from "@gotham-city-chronicles-companion/skills";

const name = "Batwoman";

export const batwoman: Tile = {
  entityId: "f2c41fe1-ae7e-4134-b806-fd3adf5b6953",
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
    },
    {
      limit: 3,
      dice: [
        {
          die_color: DIE_COLOR.WHITE,
          reroll: true
        },
        {
          die_color: DIE_COLOR.WHITE,
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
          die_color: DIE_COLOR.YELLOW,
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
  skills: [
    skills.martialArts({ automaticSuccess: 1, name }),
    skills.parkour({ jumpLevels: 1, wounds: 1, name }),
    skills.counterattack({ dieColor: DIE_COLOR.ORANGE, extraDice: 2, name })
  ],
  reinforcementCost: undefined
};
