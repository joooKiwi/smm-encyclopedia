import type {EditorVoiceSoundFileHolder} from 'core/editorVoice/holder/sound/EditorVoiceSoundFileHolder'

export interface ClassWithNullableEditorVoiceSoundFileHolder {

    get editorVoiceSoundFileHolder(): NullOr<EditorVoiceSoundFileHolder>

}

export interface ClassWithEditorVoiceSoundFileHolder
    extends ClassWithNullableEditorVoiceSoundFileHolder {

    get editorVoiceSoundFileHolder(): EditorVoiceSoundFileHolder

}
