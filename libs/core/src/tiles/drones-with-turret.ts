import {
  TILE_LEVEL,
  DIE_COLOR,
  TILE_TYPE,
  Tile,
  ENTITY_TYPE
} from "@gotham-city-chronicles-companion/common";
import { skills } from "@gotham-city-chronicles-companion/skills";

const name = "Drones";

export const dronesWithTurret: Tile = {
  entityId: "d6c17dd8-ec12-4f9f-92c4-39e8e628f534",
  entityType: ENTITY_TYPE.TILE,
  name,
  subtext: "with Turret",
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
  ranged: [
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
  manipulation: [],
  thought: [],
  skills: [skills.nervesOfSteel({ menaceIndex: 5, name })],
  reinforcementCost: 1
};
