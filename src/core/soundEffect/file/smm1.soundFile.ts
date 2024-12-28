import type {SMM1SoundEffectSoundFile} from 'core/soundEffect/file/SoundEffectSoundFile'

import {NonRepeatableInternalSoundFileContainer} from 'util/file/sound/NonRepeatableInternalSoundFile.container'

/**
 * Create a {@link SMM1SoundEffectSoundFile} from a {@link name} provided
 *
 * @param name The name of the sound file
 */
export function smm1SoundFile<const NAME extends string, >(name: NAME,): SMM1SoundEffectSoundFile<NAME> {
    return new NonRepeatableInternalSoundFileContainer('sound/sound effect/SMM1', name, 'wav',)
}
