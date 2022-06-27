import type {PossibleFileName, PossibleStartingName_WithSingingPartBefore} from '../EditorVoiceSound';

import {AbstractEditorVoiceSoundHolder} from './AbstractEditorVoiceSoundHolder';
import {BASE_PATH}                      from '../../../variables';

export class EditorVoiceSoundHolderWithSingingPartBefore<U extends PossibleStartingName_WithSingingPartBefore = PossibleStartingName_WithSingingPartBefore, >
    extends AbstractEditorVoiceSoundHolder<never, U> {

    public constructor(fileName: U,) {
        super(fileName);
    }

    //region -------------------- Creator methods --------------------

    protected override _createFileName(): PossibleFileName<never, U> {
        return `/${BASE_PATH}/editor voice/se_ui_singingparts_${this._simpleFileName}.wav`;
    }

    //endregion -------------------- Creator methods --------------------

}
