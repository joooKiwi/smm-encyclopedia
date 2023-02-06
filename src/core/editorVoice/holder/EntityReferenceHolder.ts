import type {PossibleEnglishName} from 'core/editorVoice/EditorVoices.types'
import type {Entities}            from 'core/entity/Entities'

export interface EntityReferenceHolder {

    get references(): readonly Entities[]

}

export type PossibleEntityReferences_Received = | PossibleEnglishName | readonly Entities[]
