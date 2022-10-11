import type {NonRepeatableSoundFile}       from '../../../util/sound/NonRepeatableSoundFile'
import type {PossibleSoundEffectSoundName} from '../sound/types'
import type {SMM1SoundFilePath}            from './SMM1SoundEffectSoundFile'
import type {SMM2SoundFilePath}            from './SMM2SoundEffectSoundFile'

export interface SoundEffectSoundFile<PATH extends PossibleSoundFilePath = PossibleSoundFilePath, NAME extends PossibleSoundEffectSoundName = PossibleSoundEffectSoundName, >
    extends NonRepeatableSoundFile<PATH, NAME, SoundFileExtension> {
}

export type SoundEffectSoundFileFromName<NAME extends PossibleSoundEffectSoundName = PossibleSoundEffectSoundName, > = SoundEffectSoundFile<PossibleSoundFilePath, NAME>

export type PossibleSoundFilePath = | SMM1SoundFilePath | SMM2SoundFilePath
export type SoundFileExtension = 'wav'
