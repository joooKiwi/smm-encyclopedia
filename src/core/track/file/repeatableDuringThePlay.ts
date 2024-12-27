import type {RepeatableDuringThePlayTrackSoundFile}             from 'core/track/file/TrackSoundFile'

import {RESSOURCE_PATH}                                    from 'variables'
import {FramePerMillisecond}                               from 'util/file/sound/time/FramePerMillisecond'
import {RepeatableDuringThePlayExternalSoundFileContainer} from 'util/file/sound/RepeatableDuringThePlayExternalSoundFile.container'

/**
 * Create a {@link RepeatableDuringThePlaySoundFile}
 *
 * @param name The file name
 * @param frame The frame (60fps) that it does loop
 */
export function repeatableDuringThePlay<const FILE_NAME extends string, const FRAME extends number, >(name: FILE_NAME, frame: FRAME,): RepeatableDuringThePlayTrackSoundFile<FILE_NAME, FRAME> {
    return new RepeatableDuringThePlayExternalSoundFileContainer(`${RESSOURCE_PATH}music/SMM2`, name, 'wav', new FramePerMillisecond(frame,),)
}
