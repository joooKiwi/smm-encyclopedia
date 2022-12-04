import type {PossibleFileName, PossibleStartingName_WithSingingPartBefore, PossibleStartingName_WithVoiceBefore} from 'core/editorVoice/EditorVoiceSound'
import type {EditorVoiceSoundHolder}                                                                             from 'core/editorVoice/holder/EditorVoiceSoundHolder'

export abstract class AbstractEditorVoiceSoundHolder<T extends PossibleStartingName_WithVoiceBefore, U extends PossibleStartingName_WithSingingPartBefore, >
    implements EditorVoiceSoundHolder<PossibleFileName<T, U>> {

    //region -------------------- Fields --------------------

    readonly #simpleFileName
    #fileName?: PossibleFileName<T, U>

    //endregion -------------------- Fields --------------------

    protected constructor(fileName: | T | U,) {
        this.#simpleFileName = fileName
    }

    //region -------------------- Getter & creator methods --------------------

    protected get _simpleFileName(): | T | U {
        return this.#simpleFileName
    }

    protected abstract _createFileName(): PossibleFileName<T, U>

    public get fileName(): PossibleFileName<T, U> {
        return this.#fileName ??= this._createFileName()
    }

    //endregion -------------------- Getter & creator methods --------------------

}
