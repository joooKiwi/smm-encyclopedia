import type {PossibleFileName} from '../EditorVoiceSound';

import {NonRepeatableSoundFileContainer} from '../../../util/sound/NonRepeatableSoundFile.container';

export class EditorVoiceSoundFile<NAME extends PossibleFileName, >
    extends NonRepeatableSoundFileContainer<'editor voice', NAME, 'wav'> {

    public constructor(name: NAME,) {
        super('editor voice', name, 'wav',);
    }

}
