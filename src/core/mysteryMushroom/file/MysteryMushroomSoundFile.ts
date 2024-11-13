import type {PossibleFileName}       from 'core/mysteryMushroom/MysteryMushrooms.types'
import type {NonRepeatableSoundFile} from 'util/file/sound/NonRepeatableSoundFile'

/**
 * An {@link NonRepeatableSoundFile} made to be related to a {@link MysteryMushrooms}
 *
 * @see GoalPoleSoundFile
 * @see JumpSoundFile
 * @see LostALifeSoundFile
 * @see OnGroundAfterAJumpSoundFile
 * @see PowerUpCollectedSoundFile
 * @see TauntSoundFile
 * @see TurningSoundFile
 */
export type MysteryMushroomSoundFile<NAME extends PossibleName = PossibleName, >
    = NonRepeatableSoundFile<`sound/mystery mushroom/${PossibleFileName}`, NAME, 'wav'>

//region -------------------- Power-up collected --------------------

export type PowerUpCollectedSoundFile = MysteryMushroomSoundFile<SoundFileName_PowerUpCollected>

type SoundFileName_PowerUpCollected = 'powerup'

//endregion -------------------- Power-up collected --------------------
//region -------------------- Taunt --------------------

export type TauntSoundFile = MysteryMushroomSoundFile<SoundFileName_Taunt>

type SoundFileName_Taunt = 'appeal'

//endregion -------------------- Taunt --------------------
//region -------------------- Jump --------------------

export type JumpSoundFile = MysteryMushroomSoundFile<SoundFileName_Jump>

export type SoundFileNumber = | EmptyString | 2
type SoundFileName_Jump = `jump${SoundFileNumber}`

//endregion -------------------- Jump --------------------
//region -------------------- On ground after a jump --------------------

export type OnGroundAfterAJumpSoundFile = MysteryMushroomSoundFile<SoundFileName_OnGroundAfterAJump>

type SoundFileName_OnGroundAfterAJump = 'ground'

//endregion -------------------- On ground after a jump --------------------
//region -------------------- Turning --------------------

export type TurningSoundFile = MysteryMushroomSoundFile<SoundFileName_Turning>

type SoundFileName_Turning = 'slip'

//endregion -------------------- Turning --------------------
//region -------------------- Goal pole --------------------

export type GoalPoleSoundFile = MysteryMushroomSoundFile<SoundFileName_GoalPole>

type SoundFileName_GoalPole = 'goal'

//endregion -------------------- Goal pole --------------------
//region -------------------- Lost a life --------------------

export type LostALifeSoundFile = MysteryMushroomSoundFile<SoundFileName_LostALife>

type SoundFileName_LostALife = 'down'

//endregion -------------------- Lost a life --------------------

type PossibleName = | SoundFileName_PowerUpCollected
                    | SoundFileName_Taunt
                    | SoundFileName_Jump
                    | SoundFileName_OnGroundAfterAJump
                    | SoundFileName_Turning
                    | SoundFileName_GoalPole
                    | SoundFileName_LostALife
