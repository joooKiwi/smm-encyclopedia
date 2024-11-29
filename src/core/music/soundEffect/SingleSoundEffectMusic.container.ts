import type {MusicSoundFile}                                                      from 'core/music/file/MusicSoundFile'
import type {PossibleMusicArray, PossibleSoundEffectName, SingleSoundEffectMusic} from 'core/music/soundEffect/SingleSoundEffectMusic'

export class SingleSoundEffectMusicContainer<const NAME extends MusicSoundFile<PossibleSoundEffectName>, >
    implements SingleSoundEffectMusic<NAME> {

    readonly #everyMusic
    readonly #soundEffect

    public constructor(name: NAME,) {
        this.#everyMusic = [this.#soundEffect = name,] as const
    }

    public get everyMusics(): PossibleMusicArray<NAME> {
        return this.#everyMusic
    }

    public get soundEffect(): NAME {
        return this.#soundEffect
    }

    public get editorSoundEffect(): NAME {
        return this.#soundEffect
    }

}
