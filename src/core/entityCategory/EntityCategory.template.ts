import type {EntityTemplate} from 'core/entity/Entity.template'
import type {NameTemplate}   from 'lang/name/Name.template'

/** @template */
export interface EntityCategoryTemplate {

    get entities(): NullOr<EntityTemplate[]>

    get name(): NameTemplate

}
