import type {PossibleMusicName}           from 'core/music/Music'
import type {NonRepeatableSoundFile}      from 'util/file/sound/NonRepeatableSoundFile'
import type {RepeatableAtTheEndSoundFile} from 'util/file/sound/RepeatableAtTheEndSoundFile'
import {RepeatableDuringThePlaySoundFile} from 'util/file/sound/RepeatableDuringThePlaySoundFile'

/**
 * A {@link SoundFile} made to be used by a {@link Musics}
 *
 * @deprecated The use of a more simplistic {@link IndividualMusics} is used and better
 */
export type MusicSoundFile<NAME extends PossibleMusicName = PossibleMusicName, > =
    | NonRepeatableMusicSoundFile<NAME>
    | RepeatableAtTheEndMusicSoundFile<NAME>
    | RepeatableDuringThePlayMusicSoundFile<NAME>

/**@deprecated The use of a more simplistic {@link IndividualMusics} is used and better*/export type NonRepeatableMusicSoundFile<NAME extends PossibleMusicName = PossibleMusicName, > = NonRepeatableSoundFile<'music/SMM2', NAME, 'wav'>
/**@deprecated The use of a more simplistic {@link IndividualMusics} is used and better*/type RepeatableAtTheEndMusicSoundFile<NAME extends PossibleMusicName = PossibleMusicName, > = RepeatableAtTheEndSoundFile<'music/SMM2', NAME, 'wav'>
/**@deprecated The use of a more simplistic {@link IndividualMusics} is used and better*/type RepeatableDuringThePlayMusicSoundFile<NAME extends PossibleMusicName = PossibleMusicName, > = RepeatableDuringThePlaySoundFile<'music/SMM2', NAME, 'wav'>
