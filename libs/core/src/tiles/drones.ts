import {
  TILE_LEVEL,
  DIE_COLOR,
  TILE_TYPE,
  Tile,
  ENTITY_TYPE
} from "@gotham-city-chronicles-companion/common";
import { skills } from "@gotham-city-chronicles-companion/skills";

const name = "Drones";

export const drones: Tile = {
  entityId: "1a680121-8e1d-4f3d-a3fb-5a593a095f18",
  entityType: ENTITY_TYPE.TILE,
  name,
  subtext: undefined,
  artwork: "placeholder.png",
  double: false,
  tileType: TILE_TYPE.HERO,
  tileLevel: TILE_LEVEL.HENCHMAN,
  lifePoints: 1,
  automaticDefense: 0,
  firstMoveBonus: 5,
  sizeIndex: 0,
  menaceIndex: 0,
  trait: skills.fly({ name }),
  melee: [],
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
          die_color: DIE_COLOR.YELLOW,
          reroll: false
        }
      ]
    }
  ],
  skills: [skills.nervesOfSteel({ menaceIndex: 5, name })],
  reinforcementCost: 1
};
