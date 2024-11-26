import type {RepeatableDuringThePlaySoundFile} from 'util/file/sound/RepeatableDuringThePlaySoundFile'

import {RESSOURCE_PATH}                                    from 'variables'
import {FramePerMillisecond}                               from 'util/file/sound/time/FramePerMillisecond'
import {RepeatableDuringThePlayExternalSoundFileContainer} from 'util/file/sound/RepeatableDuringThePlayExternalSoundFile.container'

/**
 * Create a {@link RepeatableDuringThePlaySoundFile}
 *
 * @param name The file name
 * @param frame The frame (60fps) that it does loop
 */
export function repeatableDuringThePlay<const NAME extends string, FRAME extends number, >(name: NAME, frame: FRAME,): RepeatableDuringThePlaySoundFile<`${string}/resources/music/SMM2`, NAME, 'wav', FramePerMillisecond<FRAME>> {
    return new RepeatableDuringThePlayExternalSoundFileContainer(`${RESSOURCE_PATH}music/SMM2`, name, 'wav', new FramePerMillisecond(frame,),)
}
