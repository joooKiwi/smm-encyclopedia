import type {PossibleMusicName}           from 'core/music/Music'
import type {NonRepeatableMusicSoundFile} from 'core/music/file/MusicSoundFile'

import {NonRepeatableInternalSoundFileContainer} from 'util/file/sound/NonRepeatableInternalSoundFile.container'

/**
 * Create a {@link NonRepeatableSoundFile non-repeatable} {@link MusicSoundFile}
 *
 * @param name The file name
 */
export function nonRepeatable<const NAME extends PossibleMusicName, >(name: NAME,): NonRepeatableMusicSoundFile<NAME> {
    return new NonRepeatableInternalSoundFileContainer('music/SMM2', name, 'wav',)
}

