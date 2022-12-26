import { ENTITY_TYPE, TILE_LEVEL, DIE_COLOR, TILE_TYPE } from "./enums";
import { UUID } from "./extras";
import { Skill } from "./skill";

interface TileSkillDie {
  die_color: DIE_COLOR;
  reroll?: boolean;
}

interface SkillCharacteristic {
  dice: TileSkillDie[];
  limit?: number;
}

export interface Tile {
  artwork: string;
  automaticDefense: number;
  double: boolean;
  entityId: UUID;
  entityType: ENTITY_TYPE.TILE;
  firstMoveBonus: number;
  lifePoints: number;
  manipulation: SkillCharacteristic[];
  melee: SkillCharacteristic[];
  menaceIndex: number;
  name: string;
  ranged: SkillCharacteristic[];
  reinforcementCost?: number;
  sizeIndex: number;
  skills: Skill[];
  subtext?: string;
  thought: SkillCharacteristic[];
  tileLevel: TILE_LEVEL;
  tileType: TILE_TYPE;
  trait?: Skill;
}
