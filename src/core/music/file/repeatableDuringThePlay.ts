import type {RepeatableDuringThePlaySoundFile} from 'util/file/sound/RepeatableDuringThePlaySoundFile'

import {FramePerMillisecond}                       from 'util/file/sound/time/FramePerMillisecond'
import {RepeatableDuringThePlaySoundFileContainer} from 'util/file/sound/RepeatableDuringThePlaySoundFile.container'

/**
 * Create a {@link RepeatableDuringThePlaySoundFile}
 *
 * @param name The file name
 * @param frame The frame (60fps) that it does loop
 */
export function repeatableDuringThePlay<const NAME extends string, FRAME extends number, >(name: NAME, frame: FRAME,): RepeatableDuringThePlaySoundFile<'music/SMM2', NAME, 'wav', FramePerMillisecond<FRAME>> {
    return new RepeatableDuringThePlaySoundFileContainer('music/SMM2', name, 'wav', new FramePerMillisecond(frame,),)
}
