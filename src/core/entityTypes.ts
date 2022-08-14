/** @temporaryVariable */
export type PossibleGroupName = string;

/** @temporaryVariable */export type PossibleEntityType = | '(Entity)' | 'Entity' | 'Projectile' | 'Object';

/** @temporaryVariable */export type PossibleFirstAppearanceInMarioMaker = | 1 | 2;

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

/** @temporaryLocation */export type PossibleWeight = | 0 | 1 | '½' | 2 | '?' | null;
/** @temporaryLocation */export type CanBePutInATree = | boolean | null;

/** @temporaryLocation */export type HasALightSourceEmittedInSMB = | boolean | null;

/** @temporaryLocation */export type CanSurviveInTheLavaOrThePoison = | boolean | '?' | `Castle${| '' | ' / Night Forest'}` | 'Explode' | 'Float' | 'Melt to Coin' | 'Only inside the ground';

/** @temporaryLocation */export type CanIgniteABobOmb = | boolean | 'NSMBU' | 'Castle';
/** @temporaryLocation */export type CanBeBrokenOrKilledByABobOmb = | boolean | 'Koopa Troopa' | 'Unchained Chomp' | 'Standing on top of block that get destroyed';

/** @temporaryLocation */export type CanBeAffectedByATwister = | boolean | 'When falling' | 'Parachute' | null;

/** @temporaryLocation */export type CanGoThroughWalls = | boolean | null;
/** @temporaryLocation */export type CanGoThroughWallsInSM3DW = | boolean | 'on down curve' | null;

/** @temporaryLocation */export type CanBeStacked = | boolean | null;

/** @temporaryLocation */export type IsGlobalGroundOrGlobal = | boolean | 'SM3DW' | null;

/** @temporaryLocation */export type PossibleLightSource = | '?'
                                                           | `${'Dim' | 'Full'} light`
                                                           | `Full light when ${| 'falling' | 'collected' | 'shooting'}`
                                                           | 'Dim light / Full light when falling or collected'
                                                           | 'Project a light in front of them'
                                                           | 'Only when lit' | null;

//endregion -------------------- Specific properties --------------------
//region -------------------- Bowser / Bowser Jr. / Magikoopa properties --------------------

/** @temporaryLocation */export type CanBeThrownByBowserInClownCar = | boolean | 'Bob-omb clear condition' | null;
/** @temporaryLocation */export type CanBeThrownByBowserJr = | boolean | '3rd phase' | null;
/** @temporaryLocation */export type CanBeThrownByBowserJrInClownCar = | boolean | 'Koopa Troopa clear condition' | null;

/** @temporaryLocation */export type CanBeTransformedByMagikoopa = | boolean | '?' | null;
/** @temporaryLocation */export type CanBeSpawnedByMagikoopa = | boolean | null;
/** @temporaryLocation */export type CanBeSpawnedByWingedMagikoopa = | false | 'winged' | 'Green Winged Koopa Troopa' | '?' | null;

//endregion -------------------- Bowser / Bowser Jr. / Magikoopa properties --------------------
//region -------------------- Dimension properties --------------------

export type PossibleDimension = | `${number}x${number}` | `${number}\n(only on the top or bottom of the screen)x∞` | 'string' | '?' | null;
export type PossibleMaximumDimension = | `${number}x${number}` | `${number}\n(only on the top or bottom of the screen)x[level width]∞` | 'string' | null;
export type PossibleDimensionDifferentInSM3DW = | `${number}x${number}` | 'string' | null;
export type PossibleMaximumDimensionDifferentInSM3DW = | `${number}x${number}` | 'string' | null;

//endregion -------------------- Dimension properties --------------------

/** @temporaryBehaviour */export type HasAReferenceInMarioMaker = | boolean | 'Only spoken (in english) in Editor' | '?' | null;