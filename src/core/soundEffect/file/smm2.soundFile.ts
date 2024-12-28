import type {SMM2SoundEffectSoundFile} from 'core/soundEffect/file/SoundEffectSoundFile'

import {NonRepeatableInternalSoundFileContainer} from 'util/file/sound/NonRepeatableInternalSoundFile.container'

/**
 * Create a {@link SMM2SoundEffectSoundFile} from a {@link name} provided
 *
 * @param name The name of the sound file
 */
export function smm2SoundFile<const NAME extends string, >(name: NAME,): SMM2SoundEffectSoundFile<NAME> {
    return new NonRepeatableInternalSoundFileContainer('sound/sound effect/SMM2', name, 'wav',)
}
