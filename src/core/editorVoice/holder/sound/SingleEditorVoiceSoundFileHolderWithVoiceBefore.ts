import type {EditorVoiceSoundFile}                                                                                                                                                  from 'core/editorVoice/file/EditorVoiceSoundFile'
import type {PossibleFileName, PossibleStartingName_WithEuropeanAlternative, PossibleStartingName_WithVoiceBefore, PossibleStartingName_WithVoiceBefore_WithoutEuropeanAlternative} from 'core/editorVoice/holder/sound/EditorVoiceSoundFileHolder.types'

import {EditorVoiceSoundFileContainer}      from 'core/editorVoice/file/EditorVoiceSoundFile.container'
import {AbstractEditorVoiceSoundFileHolder} from 'core/editorVoice/holder/sound/AbstractEditorVoiceSoundFileHolder'

export class SingleEditorVoiceSoundFileHolderWithVoiceBefore<FILE_NAME extends PossibleStartingName_WithVoiceBefore = PossibleStartingName_WithVoiceBefore, EUROPEAN_FILE_NAME extends NullOr<PossibleStartingName_WithEuropeanAlternative[1]> = null, >
    extends AbstractEditorVoiceSoundFileHolder<EditorVoiceSoundFile<PossibleFileName<FILE_NAME, never>>, EuropeanEditorVoiceSoundFile<EUROPEAN_FILE_NAME>> {

    public constructor(fileName: &FILE_NAME & PossibleStartingName_WithVoiceBefore_WithoutEuropeanAlternative,)
    public constructor(regularFileName: &FILE_NAME & PossibleStartingName_WithEuropeanAlternative[0], europeanFileName: &EUROPEAN_FILE_NAME & PossibleStartingName_WithEuropeanAlternative[1],)
    public constructor(regularFileName: FILE_NAME, europeanFileName: EUROPEAN_FILE_NAME = null as EUROPEAN_FILE_NAME,) {
        super(
            new EditorVoiceSoundFileContainer(`voice_${regularFileName}`),
            (europeanFileName == null ? null : new EditorVoiceSoundFileContainer(`voice_${europeanFileName}`)) as EuropeanEditorVoiceSoundFile<EUROPEAN_FILE_NAME>,
        )
    }

}

type EuropeanEditorVoiceSoundFile<EUROPEAN_FILE_NAME extends NullOr<PossibleStartingName_WithVoiceBefore>, > = EUROPEAN_FILE_NAME extends null ? null : EditorVoiceSoundFile<PossibleFileName<NonNullable<EUROPEAN_FILE_NAME>, never>>
