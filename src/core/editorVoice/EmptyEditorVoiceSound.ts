import type {EditorVoiceSound}                                      from 'core/editorVoice/EditorVoiceSound'
import type {ClassWithNullObjectPattern, EmptyEditorVoiceSoundName} from 'util/ClassWithNullObjectPattern'

export class EmptyEditorVoiceSound
    implements EditorVoiceSound<null, null>, ClassWithNullObjectPattern<EmptyEditorVoiceSoundName> {

    //region -------------------- Singleton usage --------------------

    static #instance?: EmptyEditorVoiceSound

    private constructor() {
    }

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------

    public readonly file = null
    public readonly europeanFile = null


    public toString(): EmptyEditorVoiceSoundName {
        return 'Empty "editor voice" sound'
    }

}
