import type {TemplateWithNameTemplate} from 'core/_template/TemplateWithName.template'
import type {NameTemplate}             from 'lang/name/Name.template'

/**
 * A template containing a {@link NameTemplate} as well as a unique name
 * to differentiate the {@link NameTemplate.english english name} ambiguity
 *
 * @template
 */
export interface TemplateWithUniqueNameTemplate<UNIQUE_NAME extends string = string, NAME extends NameTemplate = NameTemplate, >
    extends TemplateWithNameTemplate<NAME> {

    readonly uniqueName: UNIQUE_NAME

}
