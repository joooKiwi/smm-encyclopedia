import type {PossibleEntityLimits} from '../../limit/EntityLimits.types';


export type PossibleLimitAmount = | 1 | 2 | '?' | null;
export type LimitAmountCommentType = | string | null;

export type EditorLimitType = | PossibleEntityLimits | '?' | null;
export type GeneralEntityLimitType = | boolean | 2 | 'Only when collected' | null;
export type GeneralGlobalEntityLimitType = | boolean | 'Not on track' | null;
export type PowerUpEntityLimitType = | boolean | null;
export type ProjectileEntityLimitType = | boolean | '?' | 'Temporary as it comes out' | 'Each one separated' | null;
export type CustomLimitType = | Exclude<PossibleEntityLimits, `${`${'General' | 'Power-up'} Entity` | 'Projectile'} Limit`> | '?' | null;


export type OffscreenSpawningAndDespawningReferencePoint = | 'Center' | 'Edge' | 'Head' | '∞' | '?' | null;

export type OffscreenSpawningHorizontalRangeLimitType = | number | `${number} / ${number}` | 'Variable' | '∞' | '?' | null;
export type OffscreenDespawningHorizontalRangeLimitType = | number | `${number} / ${number}` | 'Variable' | '?' | null;
export type OffscreenSpawningUpwardVerticalRangeLimitType = | number | `${number} / ${number}` | '∞' | '?' | null;
export type OffscreenDespawningUpwardVerticalRangeLimitType = | number | `${number} / ${number}` | '?' | null;
export type OffscreenSpawningDownwardVerticalRangeLimitType = | number | `${number} / ${number}` | '∞' | '?' | null;
export type OffscreenDespawningDownwardVerticalRangeLimitType = | number | `${number} / ${number}` | '?' | null;
