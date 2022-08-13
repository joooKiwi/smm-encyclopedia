import type {BasePath}          from '../../../variables';
import type {EnglishNameOnFile} from '../MysteryMushrooms.types';

export interface Sound<FILE extends EnglishNameOnFile = EnglishNameOnFile, > {

    get powerUpCollectedSound(): PowerUpCollectedSound<FILE>

    get tauntSound(): TauntSound<FILE>

    get jumpSounds(): JumpSounds<FILE>

    get onGroundAfterJumpSound(): OnGroundAfterJumpSound<FILE>

    get turningSound(): TurningSound<FILE>

    get goalPoleSound(): GoalPoleSound<FILE>

    get lostALifeSound(): LostALifeSound<FILE>

}


/** The base path for a sound */
export type Path<FILE extends EnglishNameOnFile = EnglishNameOnFile, > = `/${BasePath}/sound/mystery mushroom/${FILE}`;

/**
 * The sound file path relative to the {@link Path sound path}
 *
 * @see Path
 */
export type SingleSound<FILE extends EnglishNameOnFile = EnglishNameOnFile, SOUND_FILE extends PossibleSounds = PossibleSounds, > = `${Path<FILE>}/${SOUND_FILE}`;

//region -------------------- Specific sound files --------------------

export type PossibleSounds = | PowerUpCollectedSoundFile
                             | TauntSoundFile
                             | JumpSoundFile
                             | OnGroundAfterJumpSoundFile
                             | TurningSoundFile
                             | GoalPoleSoundFile
                             | LostALifeSoundFile;

export type PowerUpCollectedSoundFile = `powerup.wav`;

export type TauntSoundFile = 'appeal.wav';

export type JumpSoundNumber = | '' | 2;
export type JumpSoundFile<N extends JumpSoundNumber = JumpSoundNumber, > = `jump${N}.wav`;

export type TurningSoundFile = 'slip.wav';

export type OnGroundAfterJumpSoundFile = 'ground.wav';

export type GoalPoleSoundFile = 'goal.wav';

export type LostALifeSoundFile = 'down.wav';

//endregion -------------------- Specific sound files --------------------
//region -------------------- Possible sounds (array) --------------------

export type PowerUpCollectedSound<FILE extends EnglishNameOnFile = EnglishNameOnFile, > =
    SingleSound<FILE, PowerUpCollectedSoundFile>;

export type TauntSound<FILE extends EnglishNameOnFile = EnglishNameOnFile, > =
    SingleSound<FILE, TauntSoundFile>;

export type JumpSounds<FILE extends EnglishNameOnFile = EnglishNameOnFile, > =
    | readonly []
    | readonly [SingleSound<FILE, JumpSoundFile<''>>,]
    | readonly [SingleSound<FILE, JumpSoundFile<''>>, SingleSound<FILE, JumpSoundFile<2>>,];

export type OnGroundAfterJumpSound<FILE extends EnglishNameOnFile = EnglishNameOnFile, > =
    SingleSound<FILE, OnGroundAfterJumpSoundFile>;

export type TurningSound<FILE extends EnglishNameOnFile = EnglishNameOnFile, > =
    SingleSound<FILE, TurningSoundFile>;

export type GoalPoleSound<FILE extends EnglishNameOnFile = EnglishNameOnFile, > =
    SingleSound<FILE, GoalPoleSoundFile>;

export type LostALifeSound<FILE extends EnglishNameOnFile = EnglishNameOnFile, > =
    SingleSound<FILE, LostALifeSoundFile>;

//endregion -------------------- Possible sounds (array) --------------------
