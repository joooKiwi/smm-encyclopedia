import type {PossibleAcronym}  from 'core/behaviour/EntityBehaviours.types'
import type {NullOr}           from 'util/types/nullable'
import type {UnknownCharacter} from 'util/types/variables'

export type CanRespawnType = NullOr<| boolean | UnknownCharacter | 'With Vine' | 'If not collected'>
export type CanRespawnOnlineType = | boolean | UnknownCharacter
export type CanRespawnOnlineOutOfABlockType = | boolean | UnknownCharacter

export type PossibleBehaviourType = NullOr<| PossibleAcronym | `${PossibleAcronym} / ${| PossibleAcronym | `${PossibleAcronym} / ${PossibleAcronym}`}` | UnknownCharacter>
