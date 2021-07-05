import type {EntityTemplate}   from '../simple/EntityTemplate';
import type {SMM2NameTemplate} from '../lang/SMM2NameTemplate';

/**
 * @template
 */
export interface EntityCategoryTemplate {

    get entities(): null | EntityTemplate[]

    get name(): SMM2NameTemplate

}
