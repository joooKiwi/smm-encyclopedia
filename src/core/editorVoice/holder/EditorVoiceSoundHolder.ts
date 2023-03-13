import type {PossibleFileName} from 'core/editorVoice/holder/sound/EditorVoiceSoundFileHolder.types'

export interface EditorVoiceSoundHolder<T extends PossibleFileName, > {

    get fileName(): T

}