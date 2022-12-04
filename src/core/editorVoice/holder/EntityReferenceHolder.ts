import type {PossibleEnglishName} from 'core/editorVoice/EditorVoices.types'
import type {Entities}            from 'core/entity/Entities'

export interface EntityReferenceHolder {

    get references(): PossibleEntityReferences

}

type PossibleEntitiesReference_ReceivedAsEntity =
    | readonly [Entities,]
    | readonly [Entities, Entities,]
    | readonly [Entities, Entities, Entities,]
    | readonly [Entities, Entities, Entities, Entities,]
export type PossibleEntityReferences_Received = | readonly [PossibleEnglishName,] | PossibleEntitiesReference_ReceivedAsEntity
export type PossibleEntityReferences = | readonly [] | PossibleEntitiesReference_ReceivedAsEntity
