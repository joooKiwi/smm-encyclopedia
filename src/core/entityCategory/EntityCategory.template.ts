import type {EntityTemplate} from '../entity/Entity.template'
import type {NameTemplate}   from '../../lang/name/Name.template'
import type {NullOr}         from '../../util/types'

/**
 * @template
 */
export interface EntityCategoryTemplate {

    get entities(): NullOr<EntityTemplate[]>

    get name(): NameTemplate

}
