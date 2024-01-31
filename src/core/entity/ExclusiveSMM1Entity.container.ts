import type {EntityReferences}    from 'core/entity/properties/EntityReferences'
import type {Property}            from 'core/entity/properties/Property'
import type {EmptyEntityCategory} from 'core/entityCategory/EmptyEntityCategory'
import type {Name}                from 'lang/name/Name'

import {EntityContainer} from 'core/entity/Entity.container'

/**
 * An entity that is exclusive to the {@link Games.SUPER_MARIO_MAKER_1 Super Mario Maker 1} {@link Games game}.
 */
export class ExclusiveSMM1EntityContainer
    extends EntityContainer {

    public constructor(name: Name<string>, category: EmptyEntityCategory, property: Property, references: EntityReferences,) {
        super(name, category, property, references,)
    }

}
