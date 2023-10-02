import type {PossibleAcronym, PossibleTranslationKeys} from 'core/behaviour/EntityBehaviours.types'
import type {EntityBehaviourLinkTemplate}              from 'core/behaviour/properties/EntityBehaviourLink.template'
import type {IsInOnlyTemplate}                         from 'core/behaviour/properties/IsInOnlyTemplate'

/** @template */
export interface EntityBehaviourTemplate {

    acronym: PossibleAcronym

    translationKey: PossibleTranslationKeys

    isOnly: IsInOnlyTemplate

    links: EntityBehaviourLinkTemplate

}
