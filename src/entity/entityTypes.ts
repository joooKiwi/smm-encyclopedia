/**
 * @temporaryVariable
 */
export type PossibleGroupName = string;

/**
 * @temporaryVariable
 */
export type SingleEntityName = string;
/**
 * @temporaryLocation
 */
export type EntityLink = | 'this' | SingleEntityName | `${SingleEntityName} / ${SingleEntityName}` | `${SingleEntityName} / this` | `this / ${SingleEntityName}`;
/**
 * @temporaryLocation
 */
export type PossibleLightSource = | '?' | `${'Dim' | 'Full'} light` | 'Project a light in front of them' | 'Variable' | null;

/**
 * @temporaryVariable
 */
export type PossibleEntityType = | 'Entity' | 'Projectile' | `${| '(Entity)' | 'Entity'} & Projectile`;

/**
 * @temporaryVariable
 */
export type CanRespawnType = | boolean | '?' | `With ${'Vine'}`;
/**
 * @temporaryVariable
 */
export type CanRespawnOnlineType = | boolean | '?';
/**
 * @temporaryVariable
 */
export type CanRespawnOnlineOutOfABlockType = | boolean | '?';

/**
 * @temporaryBehaviour
 */
export type EveryPossibleLinkedBehaviourAcronym = | 'RV' | 'RB' | 'AC' | 'NC' | 'O1S' | 'S1P' | 'S1-4P' | 'EPB' | 'AFP' | 'R10' | 'CRCP' | 'RBD';
/**
 * @temporaryBehaviour
 */
export type EveryPossibleLinkedBehaviourAcronymArray = [] | [EveryPossibleLinkedBehaviourAcronym,] | [EveryPossibleLinkedBehaviourAcronym, EveryPossibleLinkedBehaviourAcronym,] | [EveryPossibleLinkedBehaviourAcronym, EveryPossibleLinkedBehaviourAcronym, EveryPossibleLinkedBehaviourAcronym,];
/**
 * @temporaryBehaviour
 */
export type PossibleSoloBehaviourType = | EveryPossibleLinkedBehaviourAcronym | `${EveryPossibleLinkedBehaviourAcronym} / ${| EveryPossibleLinkedBehaviourAcronym | `${EveryPossibleLinkedBehaviourAcronym} / ${EveryPossibleLinkedBehaviourAcronym}`}` | '?' | null;
/**
 * @temporaryBehaviour
 */
export type PossibleLocalCoopBehaviourType = | EveryPossibleLinkedBehaviourAcronym | `${EveryPossibleLinkedBehaviourAcronym} / ${| EveryPossibleLinkedBehaviourAcronym | `${EveryPossibleLinkedBehaviourAcronym} / ${EveryPossibleLinkedBehaviourAcronym}`}` | '?' | null;
/**
 * @temporaryBehaviour
 */
export type PossibleOnlineCoopBehaviourType = | EveryPossibleLinkedBehaviourAcronym | `${EveryPossibleLinkedBehaviourAcronym} / ${| EveryPossibleLinkedBehaviourAcronym | `${EveryPossibleLinkedBehaviourAcronym} / ${EveryPossibleLinkedBehaviourAcronym}`}` | '?' | null;
/**
 * @temporaryBehaviour
 */
export type PossibleOnlineVersusBehaviourType = | EveryPossibleLinkedBehaviourAcronym | `${EveryPossibleLinkedBehaviourAcronym} / ${| EveryPossibleLinkedBehaviourAcronym | `${EveryPossibleLinkedBehaviourAcronym} / ${EveryPossibleLinkedBehaviourAcronym}`}` | '?' | null;
