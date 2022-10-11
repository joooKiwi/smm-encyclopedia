import type {EntityBehaviourLinkTemplate}              from './properties/EntityBehaviourLink.template'
import type {IsInOnlyTemplate}                         from './properties/IsInOnlyTemplate'
import type {PossibleAcronym, PossibleTranslationKeys} from './EntityBehaviours.types'

/**
 * @template
 */
export interface EntityBehaviourTemplate {

    acronym: PossibleAcronym

    translationKey: PossibleTranslationKeys

    isOnly: IsInOnlyTemplate

    links: EntityBehaviourLinkTemplate

}
