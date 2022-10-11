import type {PossibleAcronym} from './EntityBehaviours.types'

export type CanRespawnType = | boolean | '?' | 'With Vine' | 'If not collected'
export type CanRespawnOnlineType = | boolean | '?'
export type CanRespawnOnlineOutOfABlockType = | boolean | '?'

export type EveryPossibleLinkedBehaviourAcronymArray = readonly [] | readonly [PossibleAcronym,] | readonly [PossibleAcronym, PossibleAcronym,] | readonly [PossibleAcronym, PossibleAcronym, PossibleAcronym,]
export type PossibleSoloBehaviourType = | PossibleAcronym | `${PossibleAcronym} / ${| PossibleAcronym | `${PossibleAcronym} / ${PossibleAcronym}`}` | '?' | null
export type PossibleLocalCoopBehaviourType = | PossibleAcronym | `${PossibleAcronym} / ${| PossibleAcronym | `${PossibleAcronym} / ${PossibleAcronym}`}` | '?' | null
export type PossibleOnlineCoopBehaviourType = | PossibleAcronym | `${PossibleAcronym} / ${| PossibleAcronym | `${PossibleAcronym} / ${PossibleAcronym}`}` | '?' | null
export type PossibleOnlineVersusBehaviourType = | PossibleAcronym | `${PossibleAcronym} / ${| PossibleAcronym | `${PossibleAcronym} / ${PossibleAcronym}`}` | '?' | null
