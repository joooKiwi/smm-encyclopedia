import type {PossibleMusicFileName} from 'core/track/Tracks.types'
import type {PossibleMusicName}     from 'core/music/Music'
import type {NonRepeatableSoundFile} from 'util/file/sound/NonRepeatableSoundFile'

/**
 * A {@link SoundFile} made to be used by a {@link Musics}
 *
 * @deprecated The use {@link Tracks} is used and better
 */
export type MusicSoundFile<NAME extends PossibleMusicName = PossibleMusicName, > =
    | NonRepeatableMusicSoundFile<NAME>
    | NonNullable<PossibleMusicFileName>

/** @deprecated The use {@link Tracks} is used and better */export type NonRepeatableMusicSoundFile<NAME extends PossibleMusicName = PossibleMusicName, >
    = NonRepeatableSoundFile<'music/SMM2', NAME, 'wav'>
