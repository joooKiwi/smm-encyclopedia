import type {ClassWithPath, GoalPoleSound, JumpSound, LostALifeSound, OnGroundAfterJumpSound, PossibleBasicPath, PossiblePath, PossibleSounds, PowerUpCollectedSound, TauntSound, TurningSound} from '../path/ClassWithPath';

export interface Sound<T extends PossiblePath = PossiblePath, >
    extends ClassWithPath {

    get powerUpCollectedSounds(): PowerUpCollectedSounds<T>;

    get tauntSounds(): TauntSounds<T>;

    get jumpSounds(): JumpSounds<T>;

    get onGroundAfterJumpSounds(): OnGroundAfterJumpSounds<T>;

    get turningSounds(): TurningSounds<T>;

    get goalPoleSounds(): GoalPoleSounds<T>;

    get lostALifeSounds(): LostALifeSounds<T>;

}

//region -------------------- Possible sounds (array) --------------------


export type PowerUpCollectedSounds<T extends PossiblePath = PossiblePath, > = PossibleSounds_Array<PowerUpCollectedSound, T>;

export type TauntSounds<T extends PossiblePath = PossiblePath, > = PossibleSounds_Array<TauntSound, T>;

export type JumpSounds<T extends PossiblePath = PossiblePath, > = | readonly [] | readonly [
    ...Exclude<PossibleSounds_Array<JumpSound<''>, T>, readonly []>,
    ...PossibleSounds_Array<JumpSound<2>, T>,
];

export type OnGroundAfterJumpSounds<T extends PossiblePath = PossiblePath, > = PossibleSounds_Array<OnGroundAfterJumpSound, T>;

export type TurningSounds<T extends PossiblePath = PossiblePath, > = PossibleSounds_Array<TurningSound, T>;

export type GoalPoleSounds<T extends PossiblePath = PossiblePath, > = PossibleSounds_Array<GoalPoleSound, T>;

export type LostALifeSounds<T extends PossiblePath = PossiblePath, > = PossibleSounds_Array<LostALifeSound, T>;


export type PossibleSounds_Array<V extends PossibleSounds = PossibleSounds, T extends PossiblePath = PossiblePath, > =
    | readonly []
    | readonly [`${PossibleBasicPath<T>}/${V}`,];

//endregion -------------------- Possible sounds (array) --------------------
