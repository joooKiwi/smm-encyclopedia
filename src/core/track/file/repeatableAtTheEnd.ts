import type {RepeatableAtTheEndTrackSoundFile} from 'core/track/file/TrackSoundFile'

import {RESSOURCE_PATH}                               from 'variables'
import {RepeatableAtTheEndExternalSoundFileContainer} from 'util/file/sound/RepeatableAtTheEndExternalSoundFile.container'

/**
 * Create a {@link RepeatableAtTheEndSoundFile}
 *
 * @param name The file name
 */
export function repeatableAtTheEnd<const FILE_NAME extends string, >(name: FILE_NAME,): RepeatableAtTheEndTrackSoundFile<FILE_NAME> {
    return new RepeatableAtTheEndExternalSoundFileContainer(`${RESSOURCE_PATH}music/SMM2`, name, 'wav',)
}
