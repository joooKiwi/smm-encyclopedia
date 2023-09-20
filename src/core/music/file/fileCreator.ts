import type {PossibleMusicName}                                                                                    from 'core/music/Music'
import type {NonRepeatableMusicSoundFile, RepeatableAtTheEndMusicSoundFile, RepeatableDuringThePlayMusicSoundFile} from 'core/music/file/MusicSoundFile'

import {NonRepeatableSoundFileContainer}           from 'util/file/sound/NonRepeatableSoundFile.container'
import {RepeatableAtTheEndSoundFileContainer}      from 'util/file/sound/RepeatableAtTheEndSoundFile.container'
import {RepeatableDuringThePlaySoundFileContainer} from 'util/file/sound/RepeatableDuringThePlaySoundFile.container'
import {FramePerMillisecond}                       from 'util/file/sound/time/FramePerMillisecond'

/**
 * Create a {@link NonRepeatableSoundFile non-repeatable} {@link MusicSoundFile}
 *
 * @param name The file name
 */
export function nonRepeatable<const NAME extends PossibleMusicName, >(name: NAME,): & NonRepeatableMusicSoundFile<NAME> {
    return new NonRepeatableSoundFileContainer('music/SMM2', name, 'wav',)
}

/**
 * Create a {@link RepeatableAtTheEndSoundFile repeatable (at the end)} {@link MusicSoundFile}
 *
 * @param name The file name
 */
export function repeatableAtTheEnd<const NAME extends PossibleMusicName, >(name: NAME,): & RepeatableAtTheEndMusicSoundFile<NAME> {
    return new RepeatableAtTheEndSoundFileContainer('music/SMM2', name, 'wav',)
}

/**
 * Create a {@link RepeatableDuringThePlaySoundFile repeatable} {@link MusicSoundFile}
 *
 * @param name The file name
 * @param frame The frame (60fps) that it does loop
 */
export function repeatableDuringThePlay<const NAME extends PossibleMusicName, >(name: NAME, frame: number,): & RepeatableDuringThePlayMusicSoundFile<NAME> {
    return new RepeatableDuringThePlaySoundFileContainer('music/SMM2', name, 'wav', new FramePerMillisecond(frame,),)
}
