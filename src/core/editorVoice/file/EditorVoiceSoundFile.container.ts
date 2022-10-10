import type {EditorVoiceExtension, EditorVoicePath, EditorVoiceSoundFile} from './EditorVoiceSoundFile';
import type {PossibleFileName}                                            from '../EditorVoiceSound';

import {NonRepeatableSoundFileContainer} from '../../../util/sound/NonRepeatableSoundFile.container';

export class EditorVoiceSoundFileContainer<NAME extends PossibleFileName, >
    extends NonRepeatableSoundFileContainer<EditorVoicePath, NAME, EditorVoiceExtension>
    implements EditorVoiceSoundFile<NAME> {

    public constructor(name: NAME,) {
        super('editor voice', name, 'wav',);
    }

}
