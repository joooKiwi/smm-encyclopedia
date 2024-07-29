import type {MusicSoundFile} from 'core/music/file/MusicSoundFile'

/** @deprecated This declaration should no longer be used. The individual music or sound effect are better */
export interface SoundEffectFromMusicAdaptor {

    get sounds(): readonly MusicSoundFile[]

    readonly editorSound: null
    readonly linkSounds: EmptyArray
    readonly smb2Sounds: EmptyArray

}
