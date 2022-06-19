import type {PossibleFileName, PossibleStartingName_WithVoiceBefore} from '../EditorVoiceSound';

import {AbstractEditorVoiceSoundHolder} from './AbstractEditorVoiceSoundHolder';

export class EditorVoiceSoundHolderWithVoiceBefore<T extends PossibleStartingName_WithVoiceBefore = PossibleStartingName_WithVoiceBefore, >
    extends AbstractEditorVoiceSoundHolder<T, never> {

    public constructor(fileName: T) {
        super(fileName);
    }

    //region -------------------- Creator methods --------------------

    protected override _createFileName(): PossibleFileName<T, never> {
        return `/editor voice/voice_${this._simpleFileName}.wav`;
    }

    //endregion -------------------- Creator methods --------------------

}
