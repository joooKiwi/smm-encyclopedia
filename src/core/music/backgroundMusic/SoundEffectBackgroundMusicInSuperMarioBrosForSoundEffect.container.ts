import type {PossibleLink_LinkMusic, PossibleSMB2_SMB2Music}           from 'core/music/backgroundMusic/types'
import type {SoundEffectBackgroundMusicInSuperMarioBrosForSoundEffect} from 'core/music/backgroundMusic/SoundEffectBackgroundMusicInSuperMarioBrosForSoundEffect'
import type {MusicSoundFile}                                           from 'core/music/file/MusicSoundFile'

import {SingleBackgroundMusic}          from 'core/music/backgroundMusic/SingleBackgroundMusic'
import {EmptySingleBackgroundMusic}     from 'core/music/backgroundMusic/EmptySingleBackgroundMusic'
import {SingleBackgroundMusicContainer} from 'core/music/backgroundMusic/SingleBackgroundMusic.container'

const emptyMusic = EmptySingleBackgroundMusic.get

export class SoundEffectBackgroundMusicInSuperMarioBrosForSoundEffectContainer<LINK_MUSIC extends MusicSoundFile<PossibleLink_LinkMusic>, SMB2_MUSIC extends MusicSoundFile<PossibleSMB2_SMB2Music>, >
    implements SoundEffectBackgroundMusicInSuperMarioBrosForSoundEffect<LINK_MUSIC, SMB2_MUSIC> {

    //region -------------------- Fields --------------------

    readonly #everyMusic
    readonly #linkMusic
    readonly #smb2Music

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    public constructor(link: LINK_MUSIC, smb2: SMB2_MUSIC,) {
        this.#everyMusic = [link, smb2,] as const
        this.#linkMusic = new SingleBackgroundMusicContainer(link, null, null, null, null,)
        this.#smb2Music = new SingleBackgroundMusicContainer(smb2, null, null, null, null,)
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get everyMusics(): readonly [LINK_MUSIC, SMB2_MUSIC,] {
        return this.#everyMusic
    }


    public readonly editorMusic = emptyMusic


    public readonly regularMusic = emptyMusic

    public get linkMusic(): SingleBackgroundMusic<LINK_MUSIC, null, null, null, null> {
        return this.#linkMusic
    }

    public get smb2Music(): SingleBackgroundMusic<SMB2_MUSIC, null, null, null, null> {
        return this.#smb2Music
    }

    public readonly underwaterMusic = emptyMusic
    public readonly yoshiSound = emptyMusic


    public readonly fastMusic = emptyMusic

    public get fastLinkMusic(): SingleBackgroundMusic<LINK_MUSIC, null, null, null, null> {
        return this.#linkMusic
    }

    public get fastSmb2Music(): SingleBackgroundMusic<SMB2_MUSIC, null, null, null, null> {
        return this.#smb2Music
    }

    public readonly fastUnderwaterMusic = emptyMusic
    public readonly fastYoshiSound = emptyMusic

    //endregion -------------------- Getter methods --------------------

}
