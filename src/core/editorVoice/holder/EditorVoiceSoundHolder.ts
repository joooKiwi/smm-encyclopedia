import type {PossibleFileName} from 'core/editorVoice/EditorVoiceSound'

export interface EditorVoiceSoundHolder<T extends PossibleFileName, > {

    get fileName(): T

}