import type {NullOr, NullOrString} from '@joookiwi/type'

import type {PossibleAcronym} from 'core/behaviour/EntityBehaviours.types'

export type CanRespawnType = NullOr<| boolean | UnknownCharacter | 'With Vine' | 'If not collected'>
export type CanRespawnOnlineType = | boolean | UnknownCharacter
export type CanRespawnOnlineOutOfABlockType = | boolean | UnknownCharacter

export type PossibleBehaviourType = NullOrString<| PossibleAcronym | `${PossibleAcronym} / ${| PossibleAcronym | `${PossibleAcronym} / ${PossibleAcronym}`}` | UnknownCharacter>
