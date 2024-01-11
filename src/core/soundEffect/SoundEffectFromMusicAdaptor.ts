import type {MusicSoundFile} from 'core/music/file/MusicSoundFile'

export interface SoundEffectFromMusicAdaptor {

    get sounds(): readonly MusicSoundFile[]

    readonly editorSound: null
    readonly linkSounds: EmptyArray
    readonly smb2Sounds: EmptyArray

}
