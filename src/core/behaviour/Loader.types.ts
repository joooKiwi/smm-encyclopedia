import type {PossibleAcronym}              from 'core/behaviour/EntityBehaviours.types'
import type {NullOr}                       from 'util/types/nullable'
import type {EmptyArray, UnknownCharacter} from 'util/types/variables'

export type CanRespawnType = | boolean | UnknownCharacter | 'With Vine' | 'If not collected'
export type CanRespawnOnlineType = | boolean | UnknownCharacter
export type CanRespawnOnlineOutOfABlockType = | boolean | UnknownCharacter

export type EveryPossibleLinkedBehaviourAcronymArray = | EmptyArray | readonly [PossibleAcronym,] | readonly [PossibleAcronym, PossibleAcronym,] | readonly [PossibleAcronym, PossibleAcronym, PossibleAcronym,]
export type PossibleSoloBehaviourType = NullOr<| PossibleAcronym | `${PossibleAcronym} / ${| PossibleAcronym | `${PossibleAcronym} / ${PossibleAcronym}`}` | UnknownCharacter>
export type PossibleLocalCoopBehaviourType = |NullOr<PossibleAcronym | `${PossibleAcronym} / ${| PossibleAcronym | `${PossibleAcronym} / ${PossibleAcronym}`}` | UnknownCharacter>
export type PossibleOnlineCoopBehaviourType = NullOr<| PossibleAcronym | `${PossibleAcronym} / ${| PossibleAcronym | `${PossibleAcronym} / ${PossibleAcronym}`}` | UnknownCharacter>
export type PossibleOnlineVersusBehaviourType = NullOr<| PossibleAcronym | `${PossibleAcronym} / ${| PossibleAcronym | `${PossibleAcronym} / ${PossibleAcronym}`}` | UnknownCharacter>
