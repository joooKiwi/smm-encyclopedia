import type {PossibleMusicName} from 'core/music/Music'
import type {SoundFile}         from 'util/sound/SoundFile'

export interface MusicSoundFile<NAME extends PossibleMusicName = PossibleMusicName, >
    extends SoundFile<MusicFilePath, NAME, MusicFileExtension> {
}

export type MusicFilePath = 'music/SMM2'
export type MusicFileExtension = 'wav'
