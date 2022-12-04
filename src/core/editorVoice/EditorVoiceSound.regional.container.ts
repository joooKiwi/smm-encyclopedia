import type {EditorVoiceSound, PossibleFileName_WithVoiceBefore_WithEuropeanAlternative_European, PossibleFileName_WithVoiceBefore_WithEuropeanAlternative_Regular} from 'core/editorVoice/EditorVoiceSound'
import type {EditorVoiceSoundFile}                                                                                                                                  from 'core/editorVoice/file/EditorVoiceSoundFile'

export class EditorVoiceSoundRegionalContainer<REGULAR_NAME extends PossibleFileName_WithVoiceBefore_WithEuropeanAlternative_Regular, EUROPEAN_NAME extends PossibleFileName_WithVoiceBefore_WithEuropeanAlternative_European, >
    implements EditorVoiceSound<EditorVoiceSoundFile<REGULAR_NAME>, EditorVoiceSoundFile<EUROPEAN_NAME>> {

    //region -------------------- Fields --------------------

    readonly #regularFileName
    readonly #europeanFileName

    //endregion -------------------- Fields --------------------

    public constructor(regularFileName: EditorVoiceSoundFile<REGULAR_NAME>, europeanFileName: EditorVoiceSoundFile<EUROPEAN_NAME>,) {
        this.#regularFileName = regularFileName
        this.#europeanFileName = europeanFileName
    }

    //region -------------------- Getter methods --------------------

    public get file(): EditorVoiceSoundFile<REGULAR_NAME> {
        return this.#regularFileName
    }

    public get europeanFile(): EditorVoiceSoundFile<EUROPEAN_NAME> {
        return this.#europeanFileName
    }

    //endregion -------------------- Getter methods --------------------

}
