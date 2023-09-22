import type {EditorVoiceSoundFile, EuropeanEditorVoiceSoundFile, RegularEditorVoiceSoundFile} from 'core/editorVoice/file/EditorVoiceSoundFile'

export interface EditorVoiceSound<out SOUNDS extends readonly EditorVoiceSoundFile[] = readonly EditorVoiceSoundFile[],
    out REGULAR_SOUND extends RegularEditorVoiceSoundFile = RegularEditorVoiceSoundFile,
    out EUROPEAN_SOUND extends NullOr<EuropeanEditorVoiceSoundFile> = NullOr<EuropeanEditorVoiceSoundFile>, > {

    get sounds(): SOUNDS


    get regularSound(): REGULAR_SOUND

    get europeanSound(): EUROPEAN_SOUND

}
