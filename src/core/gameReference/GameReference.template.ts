import type {TemplateWithNameTemplate} from 'core/_template/TemplateWithName.template'
import type {PossibleAcronym}          from 'core/gameReference/GameReferences.types'

/** @template */
export interface GameReferenceTemplate
    extends TemplateWithNameTemplate {

    acronym: PossibleAcronym

}
