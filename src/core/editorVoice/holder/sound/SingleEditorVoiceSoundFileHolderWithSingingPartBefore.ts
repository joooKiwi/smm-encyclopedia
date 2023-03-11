import type {EditorVoiceSoundFile}                                         from 'core/editorVoice/file/EditorVoiceSoundFile'
import type {PossibleFileName, PossibleStartingName_WithSingingPartBefore} from 'core/editorVoice/holder/sound/EditorVoiceSoundFileHolder.types'

import {EditorVoiceSoundFileContainer}      from 'core/editorVoice/file/EditorVoiceSoundFile.container'
import {AbstractEditorVoiceSoundFileHolder} from 'core/editorVoice/holder/sound/AbstractEditorVoiceSoundFileHolder'

export class SingleEditorVoiceSoundFileHolderWithSingingPartBefore<FILE_NAME extends PossibleStartingName_WithSingingPartBefore = PossibleStartingName_WithSingingPartBefore, >
    extends AbstractEditorVoiceSoundFileHolder<EditorVoiceSoundFile<PossibleFileName<never, FILE_NAME>>, null> {

    constructor(fileName: FILE_NAME,) {
        super(new EditorVoiceSoundFileContainer(`se_ui_singingparts_${fileName}`), null,)
    }

}
