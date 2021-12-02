import type {EntityTemplate} from '../simple/Entity.template';
import type {NameTemplate}   from '../../lang/name/Name.template';

/**
 * @template
 */
export interface EntityCategoryTemplate {

    get entities(): | EntityTemplate[] | null

    get name(): NameTemplate

}
