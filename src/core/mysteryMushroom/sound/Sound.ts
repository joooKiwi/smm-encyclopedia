import type {PossibleFileName}         from 'core/mysteryMushroom/MysteryMushrooms.types'
import type {MysteryMushroomSoundFile} from 'core/mysteryMushroom/file/MysteryMushroomSoundFile'

export interface Sound<FILE extends PossibleFileName = PossibleFileName, > {

    get powerUpCollectedSound(): PowerUpCollectedSound<FILE>

    get tauntSound(): TauntSound<FILE>

    get jumpSounds(): JumpSounds<FILE>

    get onGroundAfterJumpSound(): OnGroundAfterJumpSound<FILE>

    get turningSound(): TurningSound<FILE>

    get goalPoleSound(): GoalPoleSound<FILE>

    get lostALifeSound(): LostALifeSound<FILE>

}


//region -------------------- Specific sound files --------------------

export type PossibleSounds = | PowerUpCollectedSoundFile
                             | TauntSoundFile
                             | JumpSoundFile
                             | OnGroundAfterJumpSoundFile
                             | TurningSoundFile
                             | GoalPoleSoundFile
                             | LostALifeSoundFile

export type PowerUpCollectedSoundFile = `powerup`

export type TauntSoundFile = 'appeal'

type JumpSoundNumber = | '' | 2
export type JumpSoundFile<N extends JumpSoundNumber = JumpSoundNumber, > = `jump${N}`

export type TurningSoundFile = 'slip'

export type OnGroundAfterJumpSoundFile = 'ground'

export type GoalPoleSoundFile = 'goal'

export type LostALifeSoundFile = 'down'

//endregion -------------------- Specific sound files --------------------
//region -------------------- Possible sounds (array) --------------------

export type PowerUpCollectedSound<FILE extends PossibleFileName = PossibleFileName, > =
    MysteryMushroomSoundFile<FILE, PowerUpCollectedSoundFile>

export type TauntSound<FILE extends PossibleFileName = PossibleFileName, > =
    MysteryMushroomSoundFile<FILE, TauntSoundFile>

export type JumpSounds<FILE extends PossibleFileName = PossibleFileName, > =
    | readonly []
    | readonly [MysteryMushroomSoundFile<FILE, JumpSoundFile<''>>,]
    | readonly [MysteryMushroomSoundFile<FILE, JumpSoundFile<''>>, MysteryMushroomSoundFile<FILE, JumpSoundFile<2>>,]

export type OnGroundAfterJumpSound<FILE extends PossibleFileName = PossibleFileName, > =
    MysteryMushroomSoundFile<FILE, OnGroundAfterJumpSoundFile>

export type TurningSound<FILE extends PossibleFileName = PossibleFileName, > =
    MysteryMushroomSoundFile<FILE, TurningSoundFile>

export type GoalPoleSound<FILE extends PossibleFileName = PossibleFileName, > =
    MysteryMushroomSoundFile<FILE, GoalPoleSoundFile>

export type LostALifeSound<FILE extends PossibleFileName = PossibleFileName, > =
    MysteryMushroomSoundFile<FILE, LostALifeSoundFile>

//endregion -------------------- Possible sounds (array) --------------------
