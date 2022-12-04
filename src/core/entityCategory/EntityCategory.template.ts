import type {EntityTemplate} from 'core/entity/Entity.template'
import type {NameTemplate}   from 'lang/name/Name.template'
import type {NullOr}         from 'util/types/nullable'

/**
 * @template
 */
export interface EntityCategoryTemplate {

    get entities(): NullOr<EntityTemplate[]>

    get name(): NameTemplate

}
