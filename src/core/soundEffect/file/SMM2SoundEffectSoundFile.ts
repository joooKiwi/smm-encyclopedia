import type {SoundEffectSoundFile}              from 'core/soundEffect/file/SoundEffectSoundFile'
import type {PossibleSoundEffectSoundName_SMM2} from 'core/soundEffect/sound/types'

export interface SMM2SoundEffectSoundFile<NAME extends PossibleSoundEffectSoundName_SMM2 = PossibleSoundEffectSoundName_SMM2, >
    extends SoundEffectSoundFile<SMM2SoundFilePath, NAME> {
}

export type SMM2SoundFilePath = 'sound/sound effect/SMM2'
