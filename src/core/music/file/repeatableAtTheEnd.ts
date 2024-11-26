import type {RepeatableAtTheEndSoundFile} from 'util/file/sound/RepeatableAtTheEndSoundFile'

import {RESSOURCE_PATH}                               from 'variables'
import {RepeatableAtTheEndExternalSoundFileContainer} from 'util/file/sound/RepeatableAtTheEndExternalSoundFile.container'

/**
 * Create a {@link RepeatableAtTheEndSoundFile}
 *
 * @param name The file name
 */
export function repeatableAtTheEnd<const NAME extends string, >(name: NAME,): RepeatableAtTheEndSoundFile<`${string}/resources/music/SMM2`, NAME, 'wav'> {
    return new RepeatableAtTheEndExternalSoundFileContainer(`${RESSOURCE_PATH}music/SMM2`, name, 'wav',)
}
