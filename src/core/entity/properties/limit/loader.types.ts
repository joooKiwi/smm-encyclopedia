import type {EmptyString, NullOr, NullOrString} from '@joookiwi/type'

import type {PossibleEnglishName} from 'core/limit/Limits.types'

//region -------------------- Limit amount --------------------

export type PossibleLimitAmountComment =
    | 'For each entity' | 'For each clone (2-4)'
    | `For each objects (${|4})`
    | `For each projectile${| EmptyString | ' (1)'}`
    | `For each projectiles${| EmptyString | ` (${| 2 | 3 | 4 | 5 | 6 | '10?' | '1|3' | '3-5' | 'NSMU → 2, [SMB,SMB3,SMW] → 3'})`}`
export type LimitAmountType = NullOr<| 1 | 2 | `${| 1 | EmptyString}?` | Infinity | PossibleLimitAmountComment>

//endregion -------------------- Limit amount --------------------
//region -------------------- Entity limit --------------------

export type PossibleGeneralLimitComment = | 'Only when collected (30 frames)' | 'As a group' | `Can ${| 'overflow' | 'overfill'} limit` | 'Continue firing → GEL is max'

export type PossibleGeneralGlobalLimitComment = | 'Not on track' | 'While holding an entity'


export type PossibleProjectileLimitComment = | 'Temporary as it comes out' | 'Each one separated' | 'Always reserve 1 projectile' | 'By player, can overfill limit' | 'Can only spawn (available) based → limits'

export type PossibleRenderedObjectLimitTypeComment = | 'Only when not dotted' | `Only if not hit${| EmptyString | UnknownCharacter}`

export type PossibleOtherLimit = Exclude<PossibleEnglishName, `${`${'General' | 'Power-up'} Entity` | 'Projectile' | 'Rendered Object'} Limit`>
export type PossibleOtherLimitComment = 'Only falling coin'

//endregion -------------------- Entity limit --------------------
//region -------------------- Spawning / Despawning range --------------------

export type OffscreenSpawningAndDespawningReferencePoint = NullOrString<| `${| 'Center' | 'Anything'}${| EmptyString | '\n(excluding path)'}` | 'Edge' | Infinity | UnknownCharacter>

export type OffscreenSpawningHorizontalRangeLimitType = NullOr<| number | `${number} / ${number}` | 'Variable' | Infinity | UnknownCharacter>
export type OffscreenDespawningHorizontalRangeLimitType = NullOr<| number | `${number} / ${number}` | 'Variable' | UnknownCharacter>
export type OffscreenSpawningUpwardVerticalRangeLimitType = NullOr<| number | `${number} / ${number}` | Infinity | UnknownCharacter>
export type OffscreenDespawningUpwardVerticalRangeLimitType = NullOr<| number | `${number} / ${number}` | UnknownCharacter>
export type OffscreenSpawningDownwardVerticalRangeLimitType = NullOr<| number | `${number} / ${number}` | Infinity | UnknownCharacter>
export type OffscreenDespawningDownwardVerticalRangeLimitType = NullOr<| number | `${number} / ${number}` | UnknownCharacter>

//endregion -------------------- Spawning / Despawning range --------------------
