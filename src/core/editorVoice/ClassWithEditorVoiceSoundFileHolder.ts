import type {EditorVoiceSoundFileHolder} from 'core/editorVoice/holder/sound/EditorVoiceSoundFileHolder'
import type {NullOr}                     from 'util/types/nullable'

export interface ClassWithNullableEditorVoiceSoundFileHolder {

    get editorVoiceSoundFileHolder(): NullOr<EditorVoiceSoundFileHolder>

}

export interface ClassWithEditorVoiceSoundFileHolder
    extends ClassWithNullableEditorVoiceSoundFileHolder {

    get editorVoiceSoundFileHolder(): EditorVoiceSoundFileHolder

}
