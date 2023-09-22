import type {EditorVoiceSound} from 'core/editorVoice/sound/EditorVoiceSound'

export interface ClassWithNullableEditorVoiceSoundFileHolder {

    get editorVoiceSoundFileHolder(): NullOr<EditorVoiceSound>

}

export interface ClassWithEditorVoiceSoundFileHolder
    extends ClassWithNullableEditorVoiceSoundFileHolder {

    get editorVoiceSoundFileHolder(): EditorVoiceSound

}
