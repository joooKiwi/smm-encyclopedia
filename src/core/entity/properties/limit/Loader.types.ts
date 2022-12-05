import type {PossibleEnglishName}        from 'core/entityLimit/EntityLimits.types'
import type {NullOr, NullOrBoolean}      from 'util/types/nullable'
import type {Infinity, UnknownCharacter} from 'util/types/variables'

//region -------------------- Limit amount --------------------

export type PossibleLimitAmountComment =
    | 'For each entity' | 'For each clone (2-4)'
    | `For each objects (${|4})`
    | `For each projectile${| '' | ' (1)'}`
    | `For each projectiles${| '' | ` (${| 2 | 3 | 4 | 5 | 6 | '10?' | '1|3' | '3-5' | 'NSMU → 2, [SMB,SMB3,SMW] → 3'})`}`
export type LimitAmountType = NullOr<| 1 | 2 | `${| 1 | ''}?` | Infinity | PossibleLimitAmountComment>

//endregion -------------------- Limit amount --------------------
//region -------------------- Entity limit --------------------

export type EditorLimitType_SMM1And3DS = NullOr<PossibleEnglishName>
export type EditorLimitType_SMM2 = NullOr<| PossibleEnglishName | UnknownCharacter>

export type PossibleGeneralEntityLimitComment = | 'Only when collected (30 frames)' | 'As a group' | `Can ${| 'overflow' | 'overfill'} limit` | 'Continue firing → GEL is max'
export type GeneralEntityLimitType = NullOr<| boolean | PossibleGeneralEntityLimitComment>

export type PossibleGeneralGlobalEntityLimitComment = | 'Not on track' | 'While holding an entity'
export type GeneralGlobalEntityLimitType = NullOr<| boolean | PossibleGeneralGlobalEntityLimitComment>

export type PowerUpEntityLimitType = NullOrBoolean


export type PossibleProjectileEntityLimitComment = | 'Temporary as it comes out' | 'Each one separated' | 'Always reserve 1 projectile' | 'By player, can overfill limit' | 'Can only spawn (available) based → limits'
export type ProjectileEntityLimitType = NullOr<| boolean | UnknownCharacter | PossibleProjectileEntityLimitComment>

export type RenderedObjectLimitTypeComment = | 'Only when not dotted' | `Only if not hit${| '' | UnknownCharacter}`
export type RenderedObjectLimitType = NullOr<| boolean | RenderedObjectLimitTypeComment>

export type PossibleOtherLimit = Exclude<PossibleEnglishName, `${`${'General' | 'Power-up'} Entity` | 'Projectile'} Limit`>
export type OtherLimitType = NullOr<PossibleOtherLimit>
export type PossibleOtherLimitComment = 'Only falling coin'
export type OtherLimitCommentType = NullOr<PossibleOtherLimitComment>

//endregion -------------------- Entity limit --------------------
//region -------------------- Spawning / Despawning range --------------------

export type OffscreenSpawningAndDespawningReferencePoint = NullOr<| 'Center' | 'Edge' | 'Head' | Infinity | UnknownCharacter>

export type OffscreenSpawningHorizontalRangeLimitType = NullOr<| number | `${number} / ${number}` | 'Variable' | Infinity | UnknownCharacter>
export type OffscreenDespawningHorizontalRangeLimitType = NullOr<| number | `${number} / ${number}` | 'Variable' | UnknownCharacter>
export type OffscreenSpawningUpwardVerticalRangeLimitType = NullOr<| number | `${number} / ${number}` | Infinity | UnknownCharacter>
export type OffscreenDespawningUpwardVerticalRangeLimitType = NullOr<| number | `${number} / ${number}` | UnknownCharacter>
export type OffscreenSpawningDownwardVerticalRangeLimitType = NullOr<| number | `${number} / ${number}` | Infinity | UnknownCharacter>
export type OffscreenDespawningDownwardVerticalRangeLimitType = NullOr<| number | `${number} / ${number}` | UnknownCharacter>

//endregion -------------------- Spawning / Despawning range --------------------
