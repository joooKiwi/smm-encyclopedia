import type {NonChangeableSoundEffectBackgroundMusic}             from 'core/music/backgroundMusic/NonChangeableSoundEffectBackgroundMusic'
import type {SingleBackgroundMusic}                               from 'core/music/backgroundMusic/SingleBackgroundMusic'
import type {PossibleOther_FastMusic, PossibleOther_RegularMusic} from 'core/music/backgroundMusic/types'
import type {MusicSoundFile}                                      from 'core/music/file/MusicSoundFile'

import {EmptySingleBackgroundMusic}     from 'core/music/backgroundMusic/EmptySingleBackgroundMusic'
import {SingleBackgroundMusicContainer} from 'core/music/backgroundMusic/SingleBackgroundMusic.container'

const emptyMusic = EmptySingleBackgroundMusic.get

export class NonChangeableSoundEffectBackgroundMusicContainer<const out MUSIC extends MusicSoundFile<PossibleOther_RegularMusic>,
    const out FAST_MUSIC extends MusicSoundFile<PossibleOther_FastMusic>, >
    implements NonChangeableSoundEffectBackgroundMusic<MUSIC, FAST_MUSIC> {

    //region -------------------- Fields --------------------

    readonly #everyMusic
    readonly #music
    readonly #fastMusic

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    public constructor(music: MUSIC, fastMusic: FAST_MUSIC,) {
        this.#everyMusic = [music, fastMusic,] as const
        this.#music = new SingleBackgroundMusicContainer(music, music, music, music, music,)
        this.#fastMusic = new SingleBackgroundMusicContainer(fastMusic, fastMusic, fastMusic, fastMusic, fastMusic,)
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get everyMusics(): readonly [MUSIC, FAST_MUSIC,] {
        return this.#everyMusic
    }


    public get editorMusic(): SingleBackgroundMusic<MUSIC, MUSIC, MUSIC, MUSIC, MUSIC> {
        return this.#music
    }


    public get regularMusic(): SingleBackgroundMusic<MUSIC, MUSIC, MUSIC, MUSIC, MUSIC> {
        return this.#music
    }

    public readonly linkMusic = emptyMusic
    public readonly smb2Music = emptyMusic
    public readonly underwaterMusic = emptyMusic
    public readonly yoshiSound = emptyMusic


    public get fastMusic(): SingleBackgroundMusic<FAST_MUSIC, FAST_MUSIC, FAST_MUSIC, FAST_MUSIC, FAST_MUSIC> {
        return this.#fastMusic
    }

    public readonly fastLinkMusic = emptyMusic
    public readonly fastSmb2Music = emptyMusic
    public readonly fastUnderwaterMusic = emptyMusic
    public readonly fastYoshiSound = emptyMusic

    //endregion -------------------- Getter methods --------------------

}
