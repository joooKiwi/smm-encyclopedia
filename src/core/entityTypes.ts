import type {NullOrBoolean, NullOr} from '@joookiwi/type'

/** @temporaryVariable */
export type PossibleGroupName = string

/** @temporaryVariable */export type PossibleEntityType = | '(Entity)' | 'Entity' | 'Projectile' | 'Unused projectile' | 'Object'

/** @temporaryVariable */export type PossibleFirstAppearanceInMarioMaker = | 1 | 2

//region -------------------- Specific properties --------------------

/** @temporaryLocation */export type CanBePutOnATrack = NullOr<| boolean | UnknownCharacter>

/** @temporaryLocation */export type PossibleWeight = NullOr<| 0 | 1 | '½' | 2 | '1 per segment (1 to 8)' | '2 (any height)' | UnknownCharacter>

/** @temporaryLocation */export type HasALightSourceEmittedInSMB = NullOrBoolean

/** @temporaryLocation */export type CanSurviveInTheLavaOrThePoison = | boolean | UnknownCharacter | `Castle${| EmptyString | ' / Night Forest'}` | 'Explode' | 'Float' | 'Melt to Coin' | 'Only inside the ground'

/** @temporaryLocation */export type CanIgniteABobOmb = | boolean | 'NSMBU' | 'Castle'
/** @temporaryLocation */export type CanBeBrokenOrKilledByABobOmb = | boolean | 'Koopa Troopa' | 'Unchained Chomp' | 'Standing on top of block that get destroyed'

/** @temporaryLocation */export type CanBeAffectedByATwister = NullOr<| boolean | NotApplicable | 'When falling' | 'Parachute'>

/** @temporaryLocation */export type CanGoThroughWalls = NullOrBoolean
/** @temporaryLocation */export type CanGoThroughWallsInSM3DW = NullOr<| boolean | 'on down curve'>

/** @temporaryLocation */export type PossibleLightSource = NullOr<| `${'Dim' | 'Full'} light`
                                                                  | `Full light when ${| 'falling' | 'collected' | 'shooting'}`
                                                                  | 'Dim light / Full light when falling or collected'
                                                                  | 'Project a light in front of them'
                                                                  | 'Only when lit'
                                                                  | UnknownCharacter>

//endregion -------------------- Specific properties --------------------
//region -------------------- Bowser / Bowser Jr. / Magikoopa properties --------------------

/** @temporaryLocation */export type CanBeThrownByBowserInClownCar = NullOr<| boolean | 'Bob-omb clear condition'>
/** @temporaryLocation */export type CanBeThrownByBowserJr = NullOr<| false | '3rd phase'>
/** @temporaryLocation */export type CanBeThrownByBowserJrInClownCar = NullOr<| boolean | 'Koopa Troopa clear condition'>

/** @temporaryLocation */export type CanBeTransformedByMagikoopa = NullOr<| boolean | UnknownCharacter>
/** @temporaryLocation */export type CanBeSpawnedByMagikoopa = NullOrBoolean
/** @temporaryLocation */export type CanBeSpawnedByWingedMagikoopa = NullOr<| boolean | 'winged' | UnknownCharacter>

//endregion -------------------- Bowser / Bowser Jr. / Magikoopa properties --------------------
//region -------------------- Dimension properties --------------------

export type PossibleDimension = NullOr<| `${number}x${number}` | `${number}\n(only on the top or bottom of the screen)x∞` | 'string' | UnknownCharacter>
export type PossibleMaximumDimension = NullOr<| `${number}x${number}` | `${number}\n(only on the top or bottom of the screen)x[level width]∞` | 'string'>
export type PossibleDimensionDifferentInSM3DW = NullOr<| `${number}x${number}` | 'string'>
export type PossibleMaximumDimensionDifferentInSM3DW = NullOr<| `${number}x${number}` | 'string'>

//endregion -------------------- Dimension properties --------------------

/** @temporaryBehaviour */export type HasAReferenceInMarioMaker = NullOr<| boolean | 'Only spoken (in english) in Editor' | UnknownCharacter>
