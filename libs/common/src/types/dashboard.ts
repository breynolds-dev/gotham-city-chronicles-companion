import { DIE_COLOR, ENTITY_TYPE } from "./enums";
import { UUID } from "./extras";
import { Skill } from "./skill";

export interface DashboardSkillDie {
  dieColor: DIE_COLOR;
  max: number;
  reroll?: boolean;
  skills: Skill[];
}

export interface Encumbrance {
  bonus: number;
  level: number;
}

export interface Dashboard {
  artwork: string;
  automaticDefense?: {
    dieColor: DIE_COLOR;
    reroll?: boolean;
  };
  batGadgets: number;
  defense: DashboardSkillDie;
  description: string[];
  entityId: UUID;
  entityType: ENTITY_TYPE.DASHBOARD;
  id: string;
  manipulation: DashboardSkillDie;
  maxRerolls: number;
  melee: DashboardSkillDie;
  menaceIndex: number;
  movement: {
    base: number;
    encumbrance: Encumbrance[];
    max: number;
    skills: Skill[];
  };
  name: string;
  ranged: DashboardSkillDie;
  recoveryValues: {
    active: number;
    resting: number;
  };
  size: string;
  sizeIndex: number;
  skills: Skill[];
  subtext?: string;
  thought: DashboardSkillDie;
  totalEnergy: number;
  traits: Skill[];
  weight: string;
}
