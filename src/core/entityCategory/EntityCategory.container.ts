import type {EntityCategory} from 'core/entityCategory/EntityCategory'
import type {Name}           from 'lang/name/Name'

import {ClassContainingAName} from 'lang/name/ClassContainingAName'

export class EntityCategoryContainer
    extends ClassContainingAName<string>
    implements EntityCategory {

    public constructor(name: Name<string>,) {
        super(name,)
    }

}
