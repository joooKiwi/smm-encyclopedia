import type {EntityTemplate}   from '../simple/Entity.template';
import type {SMM2NameTemplate} from '../lang/SMM2Name.template';

/**
 * @template
 */
export interface EntityCategoryTemplate {

    get entities(): | EntityTemplate[] | null

    get name(): SMM2NameTemplate

}
