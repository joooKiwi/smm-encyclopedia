import type {RegularEditorVoiceSoundFile} from 'core/editorVoice/file/EditorVoiceSoundFile'
import type {EditorVoiceSound}            from 'core/editorVoice/sound/EditorVoiceSound'

export class SingleEditorVoiceSound<const out REGULAR_SOUND extends RegularEditorVoiceSoundFile = RegularEditorVoiceSoundFile, >
    implements EditorVoiceSound<readonly [REGULAR_SOUND,], REGULAR_SOUND, null> {

    readonly #regularSound
    readonly #sounds

    constructor(regular: REGULAR_SOUND,) {
        this.#sounds = [this.#regularSound = regular,] as const
    }

    public get sounds(): readonly [REGULAR_SOUND,] {
        return this.#sounds
    }


    public get regularSound(): REGULAR_SOUND {
        return this.#regularSound
    }

    public readonly europeanSound = null

}
