import type {EntityReferences} from 'core/entity/properties/EntityReferences'
import type {Property}         from 'core/entity/properties/Property'
import type {EntityCategory}   from 'core/entityCategory/EntityCategory'
import type {Name}             from 'lang/name/Name'

import {AbstractEntity} from 'core/entity/AbstractEntity'

/**
 * An entity that is not exclusive to any {@link GameStyles game style}.
 */
export class EntityContainer<CATEGORY extends EntityCategory = EntityCategory, PROPERTY extends Property = Property>
    extends AbstractEntity<CATEGORY, PROPERTY> {

    public constructor(name: Name<string>, category: EntityCategory, property: Property, references: EntityReferences,) {
        super(name, category, property, references,)
    }

}
