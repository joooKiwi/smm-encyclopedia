import type {EditorVoiceSound}                                      from './EditorVoiceSound';
import type {ClassWithNullObjectPattern, EmptyEditorVoiceSoundName} from '../../util/ClassWithNullObjectPattern';

export class EmptyEditorVoiceSound
    implements EditorVoiceSound<null>, ClassWithNullObjectPattern<EmptyEditorVoiceSoundName> {

    //region -------------------- Singleton usage --------------------

    static #instance?: EmptyEditorVoiceSound;

    private constructor() {
    }

    public static get get() {
        return this.#instance ??= new this();
    }

    //endregion -------------------- Singleton usage --------------------

    public readonly fileName = null;
    public readonly europeanFileName = null;


    public toString(): EmptyEditorVoiceSoundName {
        return 'Empty "editor voice" sound';
    }

}
