import {
  TILE_LEVEL,
  DIE_COLOR,
  TILE_TYPE,
  Tile,
  ENTITY_TYPE
} from "@gotham-city-chronicles-companion/common";
import { skills } from "@gotham-city-chronicles-companion/skills";

const name = "GCPD Officers";

export const gcpdOfficersWithHandgun: Tile = {
  entityId: "a3df3474-ab9f-4674-b90f-bde4859626ce",
  entityType: ENTITY_TYPE.TILE,
  name,
  subtext: "with Handgun",
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
  ranged: [],
  manipulation: [
    {
      limit: 1,
      dice: [
        {
          die_color: DIE_COLOR.YELLOW,
          reroll: false
        }
      ]
    }
  ],
  thought: [],
  skills: [
    skills.munitionsSpecialist({ automaticSuccess: 2, name }),
    skills.immobilization({ woundsInflicted: 1, name })
  ],
  reinforcementCost: 2
};
