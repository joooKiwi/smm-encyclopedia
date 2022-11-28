import type {NullOr, NullOrBoolean} from '../util/types'

/** @temporaryVariable */
export type PossibleGroupName = string

/** @temporaryVariable */export type PossibleEntityType = | '(Entity)' | 'Entity' | 'Projectile' | 'Object'

/** @temporaryVariable */export type PossibleFirstAppearanceInMarioMaker = | 1 | 2

//region -------------------- Specific properties --------------------

/** @temporaryLocation */export type CanContainOrSpawnAKey = NullOrBoolean

/** @temporaryLocation */export type IsAffectedDirectlyByAnOnOrOffState = NullOrBoolean

/** @temporaryLocation */export type CanBePutOnATrack = NullOr<| boolean | '?'>

/** @temporaryLocation */export type CanSpawnOutOfAPipe = NullOrBoolean

/** @temporaryLocation */export type CanBePutInASwingingClaw = NullOrBoolean

/** @temporaryLocation */export type CanBeThrownByALakitu = NullOr<| boolean | '?'>
/** @temporaryLocation */export type CanBePutInALakituCloud = NullOr<| boolean | '?'>

/** @temporaryLocation */export type CanBePutInAClownCar = NullOrBoolean

/** @temporaryLocation */export type CanBeFiredOutOfABulletLauncher = NullOrBoolean

/** @temporaryLocation */export type CanBePutInABlock = NullOrBoolean

/** @temporaryLocation */export type PossibleWeight = NullOr<| 0 | 1 | '½' | 2 | '?'>
/** @temporaryLocation */export type CanBePutInATree = NullOrBoolean

/** @temporaryLocation */export type HasALightSourceEmittedInSMB = NullOrBoolean

/** @temporaryLocation */export type CanSurviveInTheLavaOrThePoison = | boolean | '?' | `Castle${| '' | ' / Night Forest'}` | 'Explode' | 'Float' | 'Melt to Coin' | 'Only inside the ground'

/** @temporaryLocation */export type CanIgniteABobOmb = | boolean | 'NSMBU' | 'Castle'
/** @temporaryLocation */export type CanBeBrokenOrKilledByABobOmb = | boolean | 'Koopa Troopa' | 'Unchained Chomp' | 'Standing on top of block that get destroyed'

/** @temporaryLocation */export type CanBeAffectedByATwister = NullOr<| boolean | 'When falling' | 'Parachute'>

/** @temporaryLocation */export type CanGoThroughWalls = NullOrBoolean
/** @temporaryLocation */export type CanGoThroughWallsInSM3DW = NullOr<| boolean | 'on down curve'>

/** @temporaryLocation */export type CanBeStacked = NullOrBoolean

/** @temporaryLocation */export type IsGlobalGroundOrGlobal = NullOr<| boolean | 'SM3DW'>

/** @temporaryLocation */export type PossibleLightSource = NullOr<| `${'Dim' | 'Full'} light`
                                                                  | `Full light when ${| 'falling' | 'collected' | 'shooting'}`
                                                                  | 'Dim light / Full light when falling or collected'
                                                                  | 'Project a light in front of them'
                                                                  | 'Only when lit'
                                                                  | '?'>

//endregion -------------------- Specific properties --------------------
//region -------------------- Bowser / Bowser Jr. / Magikoopa properties --------------------

/** @temporaryLocation */export type CanBeThrownByBowserInClownCar = NullOr<| boolean | 'Bob-omb clear condition'>
/** @temporaryLocation */export type CanBeThrownByBowserJr = NullOr<| boolean | '3rd phase'>
/** @temporaryLocation */export type CanBeThrownByBowserJrInClownCar = NullOr<| boolean | 'Koopa Troopa clear condition'>

/** @temporaryLocation */export type CanBeTransformedByMagikoopa = NullOr<| boolean | '?'>
/** @temporaryLocation */export type CanBeSpawnedByMagikoopa = NullOrBoolean
/** @temporaryLocation */export type CanBeSpawnedByWingedMagikoopa = NullOr<| false | 'winged' | 'Green Winged Koopa Troopa' | '?'>

//endregion -------------------- Bowser / Bowser Jr. / Magikoopa properties --------------------
//region -------------------- Dimension properties --------------------

export type PossibleDimension = NullOr<| `${number}x${number}` | `${number}\n(only on the top or bottom of the screen)x∞` | 'string' | '?'>
export type PossibleMaximumDimension = NullOr<| `${number}x${number}` | `${number}\n(only on the top or bottom of the screen)x[level width]∞` | 'string'>
export type PossibleDimensionDifferentInSM3DW = NullOr<| `${number}x${number}` | 'string'>
export type PossibleMaximumDimensionDifferentInSM3DW = NullOr<| `${number}x${number}` | 'string'>

//endregion -------------------- Dimension properties --------------------

/** @temporaryBehaviour */export type HasAReferenceInMarioMaker = NullOr<| boolean | 'Only spoken (in english) in Editor' | '?'>