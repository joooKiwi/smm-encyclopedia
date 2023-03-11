import type {EditorVoiceExtension, EditorVoicePath, EditorVoiceSoundFile} from 'core/editorVoice/file/EditorVoiceSoundFile'
import type {PossibleFileName}                                            from 'core/editorVoice/holder/sound/EditorVoiceSoundFileHolder.types'

import {NonRepeatableSoundFileContainer} from 'util/file/sound/NonRepeatableSoundFile.container'

export class EditorVoiceSoundFileContainer<NAME extends PossibleFileName, >
    extends NonRepeatableSoundFileContainer<EditorVoicePath, NAME, EditorVoiceExtension>
    implements EditorVoiceSoundFile<NAME> {

    public constructor(name: NAME,) {
        super('editor voice', name, 'wav',)
    }

}
