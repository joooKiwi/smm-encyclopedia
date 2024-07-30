import type {RepeatableAtTheEndSoundFile} from 'util/file/sound/RepeatableAtTheEndSoundFile'

import {RepeatableAtTheEndExternalSoundFileContainer} from 'util/file/sound/RepeatableAtTheEndExternalSoundFile.container'

/**
 * Create a {@link RepeatableAtTheEndSoundFile}
 *
 * @param name The file name
 */
export function repeatableAtTheEnd<const NAME extends string, >(name: NAME,): RepeatableAtTheEndSoundFile<`${string}/music/SMM2`, NAME, 'wav'> {
    return new RepeatableAtTheEndExternalSoundFileContainer('https://github.com/joooKiwi/smm-encyclopedia/tree/main/resources/music/SMM2', name, 'wav',)
}
