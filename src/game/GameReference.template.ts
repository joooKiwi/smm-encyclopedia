import type {TemplateWithNameTemplate} from '../entity/_template/TemplateWithName.template';
import type {PossibleAcronym}          from './GameReferences.types';

export interface GameReferenceTemplate
    extends TemplateWithNameTemplate {

    acronym: PossibleAcronym

}
