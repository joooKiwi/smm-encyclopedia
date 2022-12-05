import type {PossibleFileName, PossibleStartingName_WithSingingPartBefore} from 'core/editorVoice/EditorVoiceSound'

import {AbstractEditorVoiceSoundHolder} from 'core/editorVoice/holder/AbstractEditorVoiceSoundHolder'

export class EditorVoiceSoundHolderWithSingingPartBefore<U extends PossibleStartingName_WithSingingPartBefore = PossibleStartingName_WithSingingPartBefore, >
    extends AbstractEditorVoiceSoundHolder<never, U> {

    public constructor(fileName: U,) {
        super(fileName)
    }

    //region -------------------- Creator methods --------------------

    protected override _createFileName(): PossibleFileName<never, U> {
        return `se_ui_singingparts_${this._simpleFileName}`
    }

    //endregion -------------------- Creator methods --------------------

}
