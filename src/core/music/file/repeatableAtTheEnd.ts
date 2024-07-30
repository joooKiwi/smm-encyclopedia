import type {RepeatableAtTheEndSoundFile} from 'util/file/sound/RepeatableAtTheEndSoundFile'

import {RepeatableAtTheEndSoundFileContainer} from 'util/file/sound/RepeatableAtTheEndSoundFile.container'

/**
 * Create a {@link RepeatableAtTheEndSoundFile}
 *
 * @param name The file name
 */
export function repeatableAtTheEnd<const NAME extends string, >(name: NAME,): RepeatableAtTheEndSoundFile<`${string}/music/SMM2`, NAME, 'wav'> {
    return new RepeatableAtTheEndSoundFileContainer('https://github.com/joooKiwi/smm-encyclopedia/tree/main/resources/music/SMM2', name, 'wav',)
}
