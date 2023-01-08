import type {PossibleFileName}                                from 'core/mysteryMushroom/MysteryMushrooms.types'
import type {SoundFileName as GoalPoleSoundFileName}          from 'core/mysteryMushroom/file/GoalPoleSoundFile'
import type {SoundFileName as JumpSoundFileName}              from 'core/mysteryMushroom/file/JumpSoundFile'
import type {SoundFileName as OnGroundAfterJumpSoundFileName} from 'core/mysteryMushroom/file/OnGroundAfterAJumpSoundFile'
import type {SoundFileName as PowerUpCollectedSoundFileName}  from 'core/mysteryMushroom/file/PowerUpCollectedSoundFile'
import type {SoundFileName as TauntSoundFileName}             from 'core/mysteryMushroom/file/TauntSoundFile'
import type {SoundFileName as TurningSoundFileName}           from 'core/mysteryMushroom/file/TurningSoundFile'
import type {SoundFileName as LostALifeSoundFileName}         from 'core/mysteryMushroom/file/LostALifeSoundFile'
import type {NonRepeatableSoundFile}                          from 'util/file/sound/NonRepeatableSoundFile'

export interface MysteryMushroomSoundFile<NAME extends PossibleSoundFileName = PossibleSoundFileName, >
    extends NonRepeatableSoundFile<MysteryMushroomSoundPath, NAME, MysteryMushroomSoundExtension> {
}


export type MysteryMushroomSoundPath = `sound/mystery mushroom/${PossibleFileName}`

export type PossibleSoundFileName = | PowerUpCollectedSoundFileName
                                    | TauntSoundFileName
                                    | JumpSoundFileName
                                    | OnGroundAfterJumpSoundFileName
                                    | TurningSoundFileName
                                    | GoalPoleSoundFileName
                                    | LostALifeSoundFileName

export type MysteryMushroomSoundExtension = 'wav'
