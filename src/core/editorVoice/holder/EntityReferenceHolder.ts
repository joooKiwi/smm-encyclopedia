import type {Entities}            from '../../entity/Entities';
import type {PossibleEnglishName} from '../EditorVoices.types';

export interface EntityReferenceHolder {

    get references(): PossibleEntityReferences

}

type PossibleEntitiesReference_ReceivedAsEntity =
    | readonly [Entities,]
    | readonly [Entities, Entities,]
    | readonly [Entities, Entities, Entities,]
    | readonly [Entities, Entities, Entities, Entities,];
export type PossibleEntityReferences_Received = | readonly [PossibleEnglishName,] | PossibleEntitiesReference_ReceivedAsEntity;
export type PossibleEntityReferences = | readonly [] | PossibleEntitiesReference_ReceivedAsEntity;
