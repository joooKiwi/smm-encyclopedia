import type {EuropeanEditorVoiceSoundFile, RegularEditorVoiceSoundFile} from 'core/editorVoice/file/EditorVoiceSoundFile'
import type {EditorVoiceSound}                                          from 'core/editorVoice/sound/EditorVoiceSound'

export class DoubleEditorVoiceSound<const REGULAR_SOUND extends RegularEditorVoiceSoundFile = RegularEditorVoiceSoundFile,
    const EUROPEAN_SOUND extends EuropeanEditorVoiceSoundFile = EuropeanEditorVoiceSoundFile, >
    implements EditorVoiceSound<readonly [REGULAR_SOUND, EUROPEAN_SOUND,], REGULAR_SOUND, EUROPEAN_SOUND> {

    readonly #regularSound
    readonly #europeanSound
    readonly #sounds

    constructor(regular: REGULAR_SOUND, european: EUROPEAN_SOUND,) {
        this.#sounds = [this.#regularSound = regular, this.#europeanSound = european,] as const
    }

    public get sounds(): readonly [REGULAR_SOUND, EUROPEAN_SOUND] {
        return this.#sounds
    }

    public get regularSound(): REGULAR_SOUND {
        return this.#regularSound
    }

    public get europeanSound(): EUROPEAN_SOUND {
        return this.#europeanSound
    }

}
