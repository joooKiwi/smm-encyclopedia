import type {PossibleEntityLimits} from '../../limit/EntityLimits.types';

//region -------------------- Limit amount --------------------

export type LimitAmountType = | 1 | 2 | `${| 1 | ''}?` | null;
export type LimitAmountCommentType = | string | null;

//endregion -------------------- Limit amount --------------------
//region -------------------- Entity limit --------------------

export type EditorLimitType = | PossibleEntityLimits | '?' | null;

export type GeneralEntityLimitType = | boolean | 'Only when collected' | null;
export type GeneralEntityLimitCommentType = | string | null;

export type GeneralGlobalEntityLimitType = | boolean | 'Not on track' | null;
export type GeneralGlobalEntityLimitCommentType = | string | null;

export type PowerUpEntityLimitType = | boolean | null;
export type PowerUpEntityLimitCommentType = | string | null;


export type ProjectileEntityLimitType = | boolean | '?' | 'Temporary as it comes out' | 'Each one separated' | null;
export type ProjectileEntityLimitCommentType = | string | null;

export type CustomLimitType = | Exclude<PossibleEntityLimits, `${`${'General' | 'Power-up'} Entity` | 'Projectile'} Limit`> | '?' | null;
export type CustomLimitCommentType = | string | null;

//endregion -------------------- Entity limit --------------------
//region -------------------- Spawning / Despawning range --------------------

export type OffscreenSpawningAndDespawningReferencePoint = | 'Center' | 'Edge' | 'Head' | '∞' | '?' | null;

export type OffscreenSpawningHorizontalRangeLimitType = | number | `${number} / ${number}` | 'Variable' | '∞' | '?' | null;
export type OffscreenDespawningHorizontalRangeLimitType = | number | `${number} / ${number}` | 'Variable' | '?' | null;
export type OffscreenSpawningUpwardVerticalRangeLimitType = | number | `${number} / ${number}` | '∞' | '?' | null;
export type OffscreenDespawningUpwardVerticalRangeLimitType = | number | `${number} / ${number}` | '?' | null;
export type OffscreenSpawningDownwardVerticalRangeLimitType = | number | `${number} / ${number}` | '∞' | '?' | null;
export type OffscreenDespawningDownwardVerticalRangeLimitType = | number | `${number} / ${number}` | '?' | null;

//endregion -------------------- Spawning / Despawning range --------------------
