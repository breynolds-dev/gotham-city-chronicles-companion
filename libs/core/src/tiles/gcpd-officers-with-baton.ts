import {
  TILE_LEVEL,
  DIE_COLOR,
  TILE_TYPE,
  Tile,
  ENTITY_TYPE
} from "@gotham-city-chronicles-companion/common";
import { skills } from "@gotham-city-chronicles-companion/skills";

const name = "GCPD Officers";

export const gcpdOfficersWithBaton: Tile = {
  entityId: "99d7f8ca-ba17-4adc-ab57-5649f845bb0d",
  entityType: ENTITY_TYPE.TILE,
  name,
  subtext: "with Baton",
  artwork: "placeholder.png",
  double: false,
  tileType: TILE_TYPE.HERO,
  tileLevel: TILE_LEVEL.ELITE,
  lifePoints: 1,
  automaticDefense: 3,
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
  manipulation: [],
  thought: [],
  skills: [skills.impenetrableDefense({ automaticDefense: 1, name })],
  reinforcementCost: 2
};
