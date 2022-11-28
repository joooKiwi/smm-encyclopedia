import type {NullOr}          from '../../util/types'
import type {PossibleAcronym} from './EntityBehaviours.types'

export type CanRespawnType = | boolean | '?' | 'With Vine' | 'If not collected'
export type CanRespawnOnlineType = | boolean | '?'
export type CanRespawnOnlineOutOfABlockType = | boolean | '?'

export type EveryPossibleLinkedBehaviourAcronymArray = readonly [] | readonly [PossibleAcronym,] | readonly [PossibleAcronym, PossibleAcronym,] | readonly [PossibleAcronym, PossibleAcronym, PossibleAcronym,]
export type PossibleSoloBehaviourType = NullOr<| PossibleAcronym | `${PossibleAcronym} / ${| PossibleAcronym | `${PossibleAcronym} / ${PossibleAcronym}`}` | '?'>
export type PossibleLocalCoopBehaviourType = |NullOr<PossibleAcronym | `${PossibleAcronym} / ${| PossibleAcronym | `${PossibleAcronym} / ${PossibleAcronym}`}` | '?'>
export type PossibleOnlineCoopBehaviourType = NullOr<| PossibleAcronym | `${PossibleAcronym} / ${| PossibleAcronym | `${PossibleAcronym} / ${PossibleAcronym}`}` | '?'>
export type PossibleOnlineVersusBehaviourType = NullOr<| PossibleAcronym | `${PossibleAcronym} / ${| PossibleAcronym | `${PossibleAcronym} / ${PossibleAcronym}`}` | '?'>
