import {
  TILE_LEVEL,
  DIE_COLOR,
  TILE_TYPE,
  Tile,
  ENTITY_TYPE
} from "@gotham-city-chronicles-companion/common";
import { skills } from "@gotham-city-chronicles-companion/skills";

const name = "Guards";

export const guards: Tile = {
  entityId: "f88c83a4-6057-4280-bd8a-eae4895ef8b6",
  entityType: ENTITY_TYPE.TILE,
  name,
  subtext: undefined,
  artwork: "placeholder.png",
  double: false,
  tileType: TILE_TYPE.HERO,
  tileLevel: TILE_LEVEL.HENCHMAN,
  lifePoints: 1,
  automaticDefense: 1,
  firstMoveBonus: 2,
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
    skills.munitionsSpecialist({ automaticSuccess: 2, name }),
    skills.immobilization({ woundsInflicted: 1, name })
  ],
  reinforcementCost: 1
};
