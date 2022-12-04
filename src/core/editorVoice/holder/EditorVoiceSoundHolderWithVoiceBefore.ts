import type {PossibleFileName, PossibleStartingName_WithVoiceBefore} from 'core/editorVoice/EditorVoiceSound'

import {AbstractEditorVoiceSoundHolder} from 'core/editorVoice/holder/AbstractEditorVoiceSoundHolder'

export class EditorVoiceSoundHolderWithVoiceBefore<T extends PossibleStartingName_WithVoiceBefore = PossibleStartingName_WithVoiceBefore, >
    extends AbstractEditorVoiceSoundHolder<T, never> {

    public constructor(fileName: T) {
        super(fileName)
    }

    //region -------------------- Creator methods --------------------

    protected override _createFileName(): PossibleFileName<T, never> {
        return `voice_${this._simpleFileName}`
    }

    //endregion -------------------- Creator methods --------------------

}
