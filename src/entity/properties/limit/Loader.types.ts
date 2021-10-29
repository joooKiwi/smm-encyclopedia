import type {PossibleEntityLimits} from '../../limit/EntityLimits.types';

//region -------------------- Limit amount --------------------

export type PossibleLimitAmountComment =
    | 'For each entity' | 'For each clone (2-4)'
    | `For each projectile${| '' | ' (1)'}`
    | `For each projectiles${| '' | ` (${| 2 | 3 | 4 | 5 | 6 | '10?' | '1-3' | '3-5' | '(NSMU → 2, [SMB,SMB3,SMW] → 3)'})`}`;
export type LimitAmountType = | 1 | 2 | `${| 1 | ''}?` | PossibleLimitAmountComment | null;

//endregion -------------------- Limit amount --------------------
//region -------------------- Entity limit --------------------

export type PossibleLimitType = | EditorLimitType | GeneralEntityLimitType | GeneralGlobalEntityLimitType | PowerUpEntityLimitType | ProjectileEntityLimitType | CustomLimitType;

export type EditorLimitType = | PossibleEntityLimits | '?' | null;

export type PossibleGeneralEntityLimitComment = | 'Only when collected (30 frames)' | 'As a group' | `Can ${| 'overflow' | 'overfill'} limit` | 'Continue firing → GEL is max';
export type GeneralEntityLimitType = | boolean | PossibleGeneralEntityLimitComment | null;

export type PossibleGeneralGlobalEntityLimitComment = 'Not on track';
export type GeneralGlobalEntityLimitType = | boolean | PossibleGeneralGlobalEntityLimitComment | null;

export type PowerUpEntityLimitType = | boolean | null;


export type PossibleProjectileEntityLimitComment = | 'Temporary as it comes out' | 'Each one separated' | 'Always reserve 1 projectile' | 'By player, can overfill limit' | 'Can only spawn (available) based → limits';
export type ProjectileEntityLimitType = | boolean | '?' | PossibleProjectileEntityLimitComment | null;

export type CustomLimitType = | Exclude<PossibleEntityLimits, `${`${'General' | 'Power-up'} Entity` | 'Projectile'} Limit`> | '?' | null;
export type PossibleCustomLimitComment = 'Only falling coin';
export type CustomLimitCommentType = | PossibleCustomLimitComment | null;

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
