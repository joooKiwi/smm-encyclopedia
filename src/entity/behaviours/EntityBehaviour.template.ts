import type {PossibleAcronymEntityBehaviours, PossibleTranslationKeyEntityBehaviours} from './EntityBehaviours.types';
import type {PossibleGroupName, SingleEntityName}                                     from '../entityTypes';

export interface EntityBehaviourTemplate {

    acronym: PossibleAcronymEntityBehaviours

    translationKey: PossibleTranslationKeyEntityBehaviours

    isOnly: {
        online: boolean
        multiplayer: boolean
    }

    links: {
        group: | PossibleGroupName | null
        entity: | SingleEntityName | null
    }

}
