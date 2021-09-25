import type {EntityTemplate}                    from '../simple/Entity.template';
import type {SMM2NameWithoutPortugueseTemplate} from '../lang/SMM2Name.template';

/**
 * @template
 */
export interface EntityCategoryTemplate {

    get entities(): | EntityTemplate[] | null;

    get name(): SMM2NameWithoutPortugueseTemplate;

}
