import type {NameTemplate} from 'lang/name/Name.template'

/**
 * A template containing a {@link NameTemplate}
 *
 * @template
 */
export interface TemplateWithNameTemplate<NAME extends NameTemplate = NameTemplate, > {

    name: NAME

}
