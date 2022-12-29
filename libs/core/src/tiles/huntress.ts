import {
  TILE_LEVEL,
  DIE_COLOR,
  TILE_TYPE,
  Tile,
  ENTITY_TYPE
} from "@gotham-city-chronicles-companion/common";
import { skills } from "@gotham-city-chronicles-companion/skills";

const name = "Huntress";

export const huntress: Tile = {
  entityId: "0ef973fe-3a5c-4303-a19e-0cb992168217",
  entityType: ENTITY_TYPE.TILE,
  name,
  subtext: undefined,
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
  ranged: [
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
    },
    {
      limit: 3,
      dice: [
        {
          die_color: DIE_COLOR.WHITE,
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
          die_color: DIE_COLOR.RED,
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
          die_color: DIE_COLOR.RED,
          reroll: false
        }
      ]
    }
  ],
  skills: [
    skills.martialArts({ automaticSuccess: 1, name }),
    skills.marksman({ automaticSuccess: 1, name }),
    skills.munitionsSpecialist({ automaticSuccess: 1, name })
  ],
  reinforcementCost: undefined
};
