import type {PossibleNameTemplate} from 'lang/name/Name.template'

/**
 * @template
 */
export interface TemplateWithNameTemplate<NAME extends PossibleNameTemplate = PossibleNameTemplate, > {

    name: NAME

}
