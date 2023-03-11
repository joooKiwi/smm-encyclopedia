import type {PossibleFileName}       from 'core/editorVoice/holder/sound/EditorVoiceSoundFileHolder.types'
import type {NonRepeatableSoundFile} from 'util/file/sound/NonRepeatableSoundFile'

export interface EditorVoiceSoundFile<NAME extends PossibleFileName, >
    extends NonRepeatableSoundFile<EditorVoicePath, NAME, EditorVoiceExtension> {

}

export type EditorVoicePath = 'editor voice'
export type EditorVoiceExtension = 'wav'
