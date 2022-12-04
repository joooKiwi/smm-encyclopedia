import type {TemplateWithNameTemplate} from 'core/_template/TemplateWithName.template'
import type {PossibleAcronym}          from 'core/gameReference/GameReferences.types'

export interface GameReferenceTemplate
    extends TemplateWithNameTemplate {

    acronym: PossibleAcronym

}
