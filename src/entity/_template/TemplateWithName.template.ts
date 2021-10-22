import type {PossibleSMM2NameTemplate} from '../lang/SMM2Name.template';

/**
 * @template
 */
export interface TemplateWithNameTemplate<NAME extends PossibleSMM2NameTemplate = PossibleSMM2NameTemplate, > {

    name: NAME

}
