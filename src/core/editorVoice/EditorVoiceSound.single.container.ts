import type {EditorVoiceSound, PossibleFileName, PossibleStartingName_WithVoiceBefore_WithoutEuropeanAlternative} from './EditorVoiceSound'
import type {EditorVoiceSoundFile}                                                                                from './file/EditorVoiceSoundFile'

export class EditorVoiceSoundSingleContainer<NAME extends PossibleFileName<PossibleStartingName_WithVoiceBefore_WithoutEuropeanAlternative>, >
    implements EditorVoiceSound<EditorVoiceSoundFile<NAME>, null> {

    //region -------------------- Fields --------------------

    readonly #fileName

    //endregion -------------------- Fields --------------------

    public constructor(fileName: EditorVoiceSoundFile<NAME>,) {
        this.#fileName = fileName
    }

    //region -------------------- Getter methods --------------------

    public get file(): EditorVoiceSoundFile<NAME> {
        return this.#fileName
    }

    public readonly europeanFile = null

    //endregion -------------------- Getter methods --------------------

}
