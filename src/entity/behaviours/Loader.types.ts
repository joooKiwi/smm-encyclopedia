import type {PossibleAcronymEntityBehaviours} from './EntityBehaviours.types';

export type CanRespawnType = | boolean | '?' | 'With Vine';
export type CanRespawnOnlineType = | boolean | '?';
export type CanRespawnOnlineOutOfABlockType = | boolean | '?';

export type EveryPossibleLinkedBehaviourAcronymArray = [] | [PossibleAcronymEntityBehaviours,] | [PossibleAcronymEntityBehaviours, PossibleAcronymEntityBehaviours,] | [PossibleAcronymEntityBehaviours, PossibleAcronymEntityBehaviours, PossibleAcronymEntityBehaviours,];
export type PossibleSoloBehaviourType = | PossibleAcronymEntityBehaviours | `${PossibleAcronymEntityBehaviours} / ${| PossibleAcronymEntityBehaviours | `${PossibleAcronymEntityBehaviours} / ${PossibleAcronymEntityBehaviours}`}` | '?' | null;
export type PossibleLocalCoopBehaviourType = | PossibleAcronymEntityBehaviours | `${PossibleAcronymEntityBehaviours} / ${| PossibleAcronymEntityBehaviours | `${PossibleAcronymEntityBehaviours} / ${PossibleAcronymEntityBehaviours}`}` | '?' | null;
export type PossibleOnlineCoopBehaviourType = | PossibleAcronymEntityBehaviours | `${PossibleAcronymEntityBehaviours} / ${| PossibleAcronymEntityBehaviours | `${PossibleAcronymEntityBehaviours} / ${PossibleAcronymEntityBehaviours}`}` | '?' | null;
export type PossibleOnlineVersusBehaviourType = | PossibleAcronymEntityBehaviours | `${PossibleAcronymEntityBehaviours} / ${| PossibleAcronymEntityBehaviours | `${PossibleAcronymEntityBehaviours} / ${PossibleAcronymEntityBehaviours}`}` | '?' | null;
