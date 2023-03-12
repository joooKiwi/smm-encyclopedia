import type {EditorVoiceSoundFile}                                           from 'core/editorVoice/file/EditorVoiceSoundFile'
import type {PossibleFileName, PossibleStartingName_WithEuropeanAlternative} from 'core/editorVoice/holder/sound/EditorVoiceSoundFileHolder.types'

import {EditorVoiceSoundFileContainer}      from 'core/editorVoice/file/EditorVoiceSoundFile.container'
import {AbstractEditorVoiceSoundFileHolder} from 'core/editorVoice/holder/sound/AbstractEditorVoiceSoundFileHolder'

export class EditorVoiceSoundFileHolderWithVoiceBeforeWithEuropeanAlternative<REGULAR_FILE_NAME extends PossibleStartingName_WithEuropeanAlternative[0] = PossibleStartingName_WithEuropeanAlternative[0], EUROPEAN_FILE_NAME extends PossibleStartingName_WithEuropeanAlternative[1] = PossibleStartingName_WithEuropeanAlternative[1], >
    extends AbstractEditorVoiceSoundFileHolder<EditorVoiceSoundFile<PossibleFileName<REGULAR_FILE_NAME, never>>, EditorVoiceSoundFile<PossibleFileName<EUROPEAN_FILE_NAME, never>>> {

    constructor(regularFileName: REGULAR_FILE_NAME, europeanFileName: EUROPEAN_FILE_NAME,) {
        super(new EditorVoiceSoundFileContainer(`voice_${regularFileName}`), new EditorVoiceSoundFileContainer(`voice_${europeanFileName}`),)
    }

    protected _createSoundFiles(): readonly [EditorVoiceSoundFile<PossibleFileName<REGULAR_FILE_NAME, never>>, EditorVoiceSoundFile<PossibleFileName<EUROPEAN_FILE_NAME, never>>,] {
        return [this.regularSoundFile, this.europeanSoundFile,]
    }

}
