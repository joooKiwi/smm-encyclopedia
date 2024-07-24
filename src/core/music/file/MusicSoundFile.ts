import type {PossibleMusicName}           from 'core/music/Music'
import type {NonRepeatableSoundFile}      from 'util/file/sound/NonRepeatableSoundFile'
import type {RepeatableAtTheEndSoundFile} from 'util/file/sound/RepeatableAtTheEndSoundFile'
import {RepeatableDuringThePlaySoundFile} from 'util/file/sound/RepeatableDuringThePlaySoundFile'

/** A {@link SoundFile} made to be used by a {@link Musics} */
export type MusicSoundFile<NAME extends PossibleMusicName = PossibleMusicName, > =
    | NonRepeatableMusicSoundFile<NAME>
    | RepeatableAtTheEndMusicSoundFile<NAME>
    | RepeatableDuringThePlayMusicSoundFile<NAME>

export type NonRepeatableMusicSoundFile<NAME extends PossibleMusicName = PossibleMusicName, > = NonRepeatableSoundFile<'music/SMM2', NAME, 'wav'>
/**@deprecated This type is no longer used */export type RepeatableAtTheEndMusicSoundFile<NAME extends PossibleMusicName = PossibleMusicName, > = RepeatableAtTheEndSoundFile<'music/SMM2', NAME, 'wav'>
/**@deprecated This type is no longer used */export type RepeatableDuringThePlayMusicSoundFile<NAME extends PossibleMusicName = PossibleMusicName, > = RepeatableDuringThePlaySoundFile<'music/SMM2', NAME, 'wav'>
