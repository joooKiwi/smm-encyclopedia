import type {MusicSoundFile}                                                                                                                        from 'core/music/file/MusicSoundFile'
import type {PossibleMusicArray, PossibleSoundEffectEditorOnly_EditorName, PossibleSoundEffectEditorOnly_Name, SoundEffectMusicWithDifferentEditor} from 'core/music/soundEffect/SoundEffectMusicWithDifferentEditor'

export class SoundEffectMusicWithDifferentEditorContainer<const NAME extends MusicSoundFile<PossibleSoundEffectEditorOnly_Name>,
    const EDITOR_NAME extends MusicSoundFile<PossibleSoundEffectEditorOnly_EditorName>, >
    implements SoundEffectMusicWithDifferentEditor<NAME, EDITOR_NAME> {

    readonly #everyMusic
    readonly #soundEffect
    readonly #editorSoundEffect

    public constructor(name: NAME, editorName: EDITOR_NAME,) {
        this.#everyMusic = [this.#soundEffect = name, this.#editorSoundEffect = editorName,] as const
    }

    public get everyMusics(): PossibleMusicArray<NAME, EDITOR_NAME> {
        return this.#everyMusic
    }

    public get soundEffect(): NAME {
        return this.#soundEffect
    }

    public get editorSoundEffect(): EDITOR_NAME {
        return this.#editorSoundEffect
    }

}
