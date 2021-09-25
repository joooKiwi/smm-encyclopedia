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

//region -------------------- Basic properties --------------------

/**
 * @temporaryLocation
 */
export type HasAMushroomVariant = | boolean | null;
/**
 * @temporaryLocation
 */
export type CanBeInAParachute = | boolean | '?' | null;
/**
 * @temporaryLocation
 */
export type CanHaveWings = | boolean | '?';
//endregion -------------------- Basic properties --------------------
//region -------------------- Specific properties --------------------

/**
 * @temporaryLocation
 */
export type CanContainOrSpawnAKey = | boolean | null;

/**
 * @temporaryLocation
 */
export type IsAffectedDirectlyByAnOnOrOffState = | boolean | null;

/**
 * @temporaryLocation
 */
export type CanBePutOnATrack = | boolean | '?' | null;

/**
 * @temporaryLocation
 */
export type CanSpawnOutOfAPipe = | boolean | null;

/**
 * @temporaryLocation
 */
export type CanBePutInASwingingClaw = | boolean | null;

/**
 * @temporaryLocation
 */
export type CanBeThrownByALakitu = | boolean | '?' | null;
/**
 * @temporaryLocation
 */
export type CanBePutInALakituCloud = | boolean | '?' | null;

/**
 * @temporaryLocation
 */
export type CanBePutInAClownCar = | boolean | null;

/**
 * @temporaryLocation
 */
export type CanBeFiredOutOfABulletLauncher = | boolean | null;

/**
 * @temporaryLocation
 */
export type CanBePutInABlock = | boolean | null;

/**
 * @temporaryLocation
 */
export type CanBePutInATree = | boolean | null;

/**
 * @temporaryLocation
 */
export type HasALightSourceEmittedInSMB = | boolean | null;

/**
 * @temporaryLocation
 */
export type CanSurviveInTheLavaOrThePoison = | boolean | '?' | 'Explode' | 'Only in the ground' | 'float' | 'melt to Coin';

/**
 * @temporaryLocation
 */
export type CanIgniteABobOmb = | boolean | 'NSMBU' | `Castle${| '' | ' / Night Forest'}` | null;

/**
 * @temporaryLocation
 */
export type CanBeAffectedByATwister = | boolean | 'When falling' | 'Parachute' | null;

/**
 * @temporaryLocation
 */
export type CanGoThroughWalls = | boolean | null;

/**
 * @temporaryLocation
 */
export type CanBeStacked = | boolean | null;

/**
 * @temporaryLocation
 */
export type IsGlobalGroundOrGlobal = | boolean | 'SM3DW' | null;

/**
 * @temporaryLocation
 */
export type CanMakeASoundOutOfAMusicBlock = | boolean | '?' | null;

/**
 * @temporaryLocation
 */
export type PossibleLightSource = | '?' | `${'Dim' | 'Full'} light` | 'Project a light in front of them' | 'Variable' | null;

//endregion -------------------- Specific properties --------------------

/**
 * @temporaryBehaviour
 */
export type HasAReferenceInMarioMaker = | boolean | 'French only' | 'Only spoken (in english) in Editor' | null;