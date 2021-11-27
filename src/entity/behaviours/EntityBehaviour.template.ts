import type {PossibleAcronym, PossibleTranslationKeys} from './EntityBehaviours.types';
import type {PossibleGroupName, SingleEntityName}      from '../entityTypes';

export interface EntityBehaviourTemplate {

    acronym: PossibleAcronym

    translationKey: PossibleTranslationKeys

    isOnly: {
        online: boolean
        multiplayer: boolean
    }

    links: {
        group: | PossibleGroupName | null
        entity: | SingleEntityName | null
    }

}
