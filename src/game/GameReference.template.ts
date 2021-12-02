import type {TemplateWithNameTemplate} from '../core/_template/TemplateWithName.template';
import type {PossibleAcronym}          from './GameReferences.types';

export interface GameReferenceTemplate
    extends TemplateWithNameTemplate {

    acronym: PossibleAcronym

}
