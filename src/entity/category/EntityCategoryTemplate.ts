import type {EntityTemplate}   from '../simple/EntityTemplate';
import type {SMM2NameTemplate} from '../lang/SMM2NameTemplate';

/**
 * @template
 */
export interface EntityCategoryTemplate {

    get entities(): | EntityTemplate[] | null

    get name(): SMM2NameTemplate

}
