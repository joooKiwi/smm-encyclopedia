import type {PossibleEntityLimits} from '../../limit/EntityLimits.types';

export type EditorLimitType = | PossibleEntityLimits | '?' | null;
export type GeneralEntityLimitType = | boolean | 2 | 'Only when collected' | null;
export type GeneralGlobalEntityLimitType = | boolean | 'Not on track' | null;
export type PowerUpEntityLimitType = | boolean | null;
export type ProjectileEntityLimitType = | boolean | '?' | 'Temporary as it comes out' | 'Each one separated' | null;
export type CustomLimitType = | Exclude<PossibleEntityLimits, `${`${'General' | 'Power-up'} Entity` | 'Projectile'} Limit`> | '?' | null;

export type OffscreenSpawningHorizontalRangeLimitType = | number | 'Variable' | null;
export type OffscreenDespawningHorizontalRangeLimitType = | number | 'Variable' | 'Infinity' | null;
export type OffscreenSpawningUpwardVerticalRangeLimitType = | number | null;
export type OffscreenDespawningUpwardVerticalRangeLimitType = | number | null;
export type OffscreenSpawningDownwardVerticalRangeLimitType = | number | null;
export type OffscreenDespawningDownwardVerticalRangeLimitType = | number | null;
