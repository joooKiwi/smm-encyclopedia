import type {PossibleSoundEffectSoundName, PossibleSoundEffectSoundName_SMM1, PossibleSoundEffectSoundName_SMM2} from 'core/soundEffect/sound/types'
import type {NonRepeatableSoundFile}                                                                             from 'util/file/sound/NonRepeatableSoundFile'

/** A {@link NonRepeatableSoundFile} made to be related to a {@link SoundEffects} */
export type SoundEffectSoundFile<out NAME extends PossibleSoundEffectSoundName = PossibleSoundEffectSoundName, >
    = | SMM1SoundEffectSoundFile<NAME> | SMM2SoundEffectSoundFile<NAME>


export type SMM1SoundEffectSoundFile<out NAME extends PossibleSoundEffectSoundName_SMM1 = PossibleSoundEffectSoundName_SMM1, >
    = NonRepeatableSoundFile<'sound/sound effect/SMM1', NAME, 'wav'>

export type SMM2SoundEffectSoundFile<out NAME extends PossibleSoundEffectSoundName_SMM2 = PossibleSoundEffectSoundName_SMM2, >
    = NonRepeatableSoundFile<'sound/sound effect/SMM2', NAME, 'wav'>
