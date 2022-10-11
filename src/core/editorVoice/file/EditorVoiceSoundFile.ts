import type {NonRepeatableSoundFile} from '../../../util/sound/NonRepeatableSoundFile'
import type {PossibleFileName}       from '../EditorVoiceSound'

export interface EditorVoiceSoundFile<NAME extends PossibleFileName, >
    extends NonRepeatableSoundFile<EditorVoicePath, NAME, EditorVoiceExtension> {

}

export type EditorVoicePath = 'editor voice'
export type EditorVoiceExtension = 'wav'
