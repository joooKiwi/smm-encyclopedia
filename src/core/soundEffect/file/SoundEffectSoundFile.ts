import type {PossibleSoundEffectSoundName_SMM1, PossibleSoundEffectSoundName_SMM2} from 'core/soundEffect/sound/types'
import type {NonRepeatableSoundFile}                                               from 'util/file/sound/NonRepeatableSoundFile'

/** A {@link NonRepeatableSoundFile} made to be related to a {@link SoundEffects} */
export type SoundEffectSoundFile = | SMM1SoundEffectSoundFile | SMM2SoundEffectSoundFile


export type SMM1SoundEffectSoundFile<NAME extends PossibleSoundEffectSoundName_SMM1 = PossibleSoundEffectSoundName_SMM1, >
    = NonRepeatableSoundFile<'sound/sound effect/SMM1', NAME, 'wav'>

export type SMM2SoundEffectSoundFile<NAME extends PossibleSoundEffectSoundName_SMM2 = PossibleSoundEffectSoundName_SMM2, >
    = NonRepeatableSoundFile<'sound/sound effect/SMM2', NAME, 'wav'>
