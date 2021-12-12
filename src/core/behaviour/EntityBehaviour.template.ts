import type {PossibleAcronym, PossibleTranslationKeys} from './EntityBehaviours.types';
import type {PossibleEnglishName as EntityName}        from '../entity/Entities.types';
import type {PossibleGroupName}                        from '../entityTypes';

export interface EntityBehaviourTemplate {

    acronym: PossibleAcronym

    translationKey: PossibleTranslationKeys

    isOnly: {
        online: boolean
        multiplayer: boolean
    }

    links: {
        group: | PossibleGroupName | null
        entity: | EntityName | null
    }

}
