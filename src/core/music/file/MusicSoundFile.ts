import type {PossibleMusicName} from '../Music'
import type {SoundFile}         from '../../../util/sound/SoundFile'

export interface MusicSoundFile<NAME extends PossibleMusicName = PossibleMusicName, >
    extends SoundFile<MusicFilePath, NAME, MusicFileExtension> {
}

export type MusicFilePath = 'music/SMM2'
export type MusicFileExtension = 'wav'
