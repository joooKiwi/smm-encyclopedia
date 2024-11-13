import type {Array, NullOr} from '@joookiwi/type'

import type {EditorVoiceSoundFile, EuropeanEditorVoiceSoundFile, RegularEditorVoiceSoundFile} from 'core/editorVoice/file/EditorVoiceSoundFile'

export interface EditorVoiceSound<out SOUNDS extends Array<EditorVoiceSoundFile> = Array<EditorVoiceSoundFile>,
    out REGULAR_SOUND extends RegularEditorVoiceSoundFile = RegularEditorVoiceSoundFile,
    out EUROPEAN_SOUND extends NullOr<EuropeanEditorVoiceSoundFile> = NullOr<EuropeanEditorVoiceSoundFile>, > {

    get sounds(): SOUNDS


    get regularSound(): REGULAR_SOUND

    get europeanSound(): EUROPEAN_SOUND

}
