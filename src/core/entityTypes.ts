/** @temporaryVariable */export type PossibleGroupName = string;

/** @temporaryVariable */export type SingleEntityName = string;
/** @temporaryLocation */export type EntityLink = | 'this' | SingleEntityName | `${SingleEntityName} / ${SingleEntityName}` | `${SingleEntityName} / this` | `this / ${SingleEntityName}`;

/** @temporaryVariable */export type PossibleEntityType = | '(Entity)' | 'Entity' | 'Projectile' | 'Object';

//region -------------------- Specific properties --------------------

/** @temporaryLocation */export type CanContainOrSpawnAKey = | boolean | null;

/** @temporaryLocation */export type IsAffectedDirectlyByAnOnOrOffState = | boolean | null;

/** @temporaryLocation */export type CanBePutOnATrack = | boolean | '?' | null;

/** @temporaryLocation */export type CanSpawnOutOfAPipe = | boolean | null;

/** @temporaryLocation */export type CanBePutInASwingingClaw = | boolean | null;

/** @temporaryLocation */export type CanBeThrownByALakitu = | boolean | '?' | null;
/** @temporaryLocation */export type CanBePutInALakituCloud = | boolean | '?' | null;

/** @temporaryLocation */export type CanBePutInAClownCar = | boolean | null;

/** @temporaryLocation */export type CanBeFiredOutOfABulletLauncher = | boolean | null;

/** @temporaryLocation */export type CanBePutInABlock = | boolean | null;

/** @temporaryLocation */export type CanBePutInATree = | boolean | null;

/** @temporaryLocation */export type HasALightSourceEmittedInSMB = | boolean | null;

/** @temporaryLocation */export type CanSurviveInTheLavaOrThePoison = | boolean | '?' | `Castle${| '' | ' / Night Forest'}` | 'Explode' | 'Float' | 'Melt to Coin' | 'Only inside the ground';

/** @temporaryLocation */export type CanIgniteABobOmb = | boolean | 'NSMBU' | 'Castle' | 'Only when the player press the run button' | null;

/** @temporaryLocation */export type CanBeAffectedByATwister = | boolean | 'When falling' | 'Parachute' | null;

/** @temporaryLocation */export type CanGoThroughWalls = | boolean | 'SM3DW on down curve' | null;
/** @temporaryLocation */export type CanGoThroughWallsInSM3DW = | boolean | 'SM3DW on down curve' | null;

/** @temporaryLocation */export type CanBeStacked = | boolean | null;

/** @temporaryLocation */export type IsGlobalGroundOrGlobal = | boolean | 'SM3DW' | null;

/** @temporaryLocation */export type CanMakeASoundOutOfAMusicBlock = | boolean | 'Excluding the top 3 notes' | null;

/** @temporaryLocation */export type PossibleLightSource = | '?'
                                                           | `${'Dim' | 'Full'} light`
                                                           | `Full light when ${| 'falling' | 'collected' | 'shooting'}`
                                                           | 'Dim light / Full light when falling or collected'
                                                           | 'Project a light in front of them'
                                                           | 'Only when lit' | null;

//endregion -------------------- Specific properties --------------------
//region -------------------- Bowser / Bowser Jr. / Magikoopa properties --------------------

/** @temporaryLocation */export type CanBeThrownByBowserInClownCar = | boolean | 'Bob-omb clear condition';
/** @temporaryLocation */export type CanBeThrownByBowserJr = | boolean | '3rd phase';
/** @temporaryLocation */export type CanBeThrownByBowserJrInClownCar = | boolean | 'Koopa Troopa clear condition';

/** @temporaryLocation */export type CanBeTransformedByMagikoopa = | boolean | '?';
/** @temporaryLocation */export type CanBeSpawnedByMagikoopa = boolean;
/** @temporaryLocation */export type CanBeSpawnedByWingedMagikoopa = | false | `${| '' | 'green '}winged` | '?';

//region -------------------- Bowser / Bowser Jr. / Magikoopa properties --------------------

/** @temporaryBehaviour */export type HasAReferenceInMarioMaker = | boolean | 'French only' | 'Only spoken (in english) in Editor' | null;