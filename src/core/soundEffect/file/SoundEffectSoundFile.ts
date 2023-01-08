import type {SMM1SoundFilePath}            from 'core/soundEffect/file/SMM1SoundEffectSoundFile'
import type {SMM2SoundFilePath}            from 'core/soundEffect/file/SMM2SoundEffectSoundFile'
import type {PossibleSoundEffectSoundName} from 'core/soundEffect/sound/types'
import type {NonRepeatableSoundFile}       from 'util/file/sound/NonRepeatableSoundFile'

export interface SoundEffectSoundFile<PATH extends PossibleSoundFilePath = PossibleSoundFilePath, NAME extends PossibleSoundEffectSoundName = PossibleSoundEffectSoundName, >
    extends NonRepeatableSoundFile<PATH, NAME, SoundFileExtension> {
}

export type PossibleSoundFilePath = | SMM1SoundFilePath | SMM2SoundFilePath
export type SoundFileExtension = 'wav'
