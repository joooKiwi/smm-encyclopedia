import type {PossibleFileName} from '../EditorVoiceSound';

export interface EditorVoiceSoundHolder<T extends PossibleFileName, > {

    get fileName(): T

}