import type {MusicSoundFile}                                  from 'core/music/file/MusicSoundFile'
import type {PossibleSoundEffectName, SingleSoundEffectMusic} from 'core/music/soundEffect/SingleSoundEffectMusic'

/** @deprecated The use of {@link Tracks} should be used instead */
export class SingleSoundEffectMusicContainer<const NAME extends MusicSoundFile<PossibleSoundEffectName>, >
    implements SingleSoundEffectMusic<NAME> {

    readonly #everyMusic
    readonly #soundEffect

    public constructor(name: NAME,) {
        this.#everyMusic = [this.#soundEffect = name,] as const
    }

    public get everyMusics(): ArrayOf1<NAME> {
        return this.#everyMusic
    }

    public get soundEffect(): NAME {
        return this.#soundEffect
    }

    public get editorSoundEffect(): NAME {
        return this.#soundEffect
    }

}
