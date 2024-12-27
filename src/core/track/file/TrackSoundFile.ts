import type {NonRepeatableSoundFile}           from 'util/file/sound/NonRepeatableSoundFile'
import type {RepeatableAtTheEndSoundFile}      from 'util/file/sound/RepeatableAtTheEndSoundFile'
import type {RepeatableDuringThePlaySoundFile} from 'util/file/sound/RepeatableDuringThePlaySoundFile'
import type {FramePerMillisecond}              from 'util/file/sound/time/FramePerMillisecond'

export type NonRepeatableTrackSoundFile<FILE_NAME extends string = string, >
    = NonRepeatableSoundFile<'music/SMM2', FILE_NAME, 'wav'>

export type RepeatableAtTheEndTrackSoundFile<FILE_NAME extends string = string, >
    = RepeatableAtTheEndSoundFile<`${string}/resources/music/SMM2`, FILE_NAME, 'wav'>

export type RepeatableDuringThePlayTrackSoundFile<FILE_NAME extends string = string, FRAME extends number = number, >
    = RepeatableDuringThePlaySoundFile<`${string}/resources/music/SMM2`, FILE_NAME, 'wav', FramePerMillisecond<FRAME>>
