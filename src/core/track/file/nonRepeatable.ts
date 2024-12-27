import type {NonRepeatableTrackSoundFile} from 'core/track/file/TrackSoundFile'

import {NonRepeatableInternalSoundFileContainer} from 'util/file/sound/NonRepeatableInternalSoundFile.container'

/**
 * Create a {@link NonRepeatableSoundFile non-repeatable} {@link NonRepeatableSoundFile}
 *
 * @param name The file name
 */
export function nonRepeatable<const FILE_NAME extends string, >(name: FILE_NAME,): NonRepeatableTrackSoundFile<FILE_NAME> {
    return new NonRepeatableInternalSoundFileContainer('music/SMM2', name, 'wav',)
}

