import type {CharacterNames}      from 'core/characterName/CharacterNames'
import type {PossibleEnglishName} from 'core/editorVoice/EditorVoices.types'

export interface CharacterNameReferenceHolder {

    get references(): readonly CharacterNames[]

}

export type PossibleCharacterNameReferences_Received = | PossibleEnglishName | readonly CharacterNames[]
