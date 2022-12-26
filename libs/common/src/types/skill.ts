import { ENTITY_TYPE } from "./enums";
import { UUID } from "./extras";

export interface Skill {
  artwork?: string;
  description: string[];
  effects: (string | string[])[];
  entityId: UUID;
  entityType: ENTITY_TYPE.SKILL;
  name: string;
  requirements: (string | string[])[];
  when: (string | string[])[];
}
