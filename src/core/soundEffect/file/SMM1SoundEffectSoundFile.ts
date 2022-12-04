import type {SoundEffectSoundFile}              from 'core/soundEffect/file/SoundEffectSoundFile'
import type {PossibleSoundEffectSoundName_SMM1} from 'core/soundEffect/sound/types'

export interface SMM1SoundEffectSoundFile<NAME extends PossibleSoundEffectSoundName_SMM1 = PossibleSoundEffectSoundName_SMM1, >
    extends SoundEffectSoundFile<SMM1SoundFilePath, NAME> {
}

export type SMM1SoundFilePath = 'sound/sound effect/SMM1'
