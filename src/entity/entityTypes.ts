import type {PossibleEntityLimits} from './limit/EntityLimits.types';

export type EditorLimitType = | PossibleEntityLimits | '?' | null;
export type GeneralEntityLimitType = | boolean | 2 | 'Only when collected' | null;
export type GeneralGlobalEntityLimitType = | boolean | 'Not on track' | null;
export type ProjectileEntityLimitType = | boolean | '?' | 'Temporary as it comes out' | null;
export type CustomLimitType = | PossibleEntityLimits | '?' | null;

export type SingleEntityName = string;
export type EntityLink = Exclude<| 'this' | SingleEntityName | `${SingleEntityName | 'this'} / ${'this' | SingleEntityName}`, 'this / this'>;
export type PossibleLightSource = | '?' | `${'Dim' | 'Full'} light` | 'Project a light in front of them' | 'Variable' | null;