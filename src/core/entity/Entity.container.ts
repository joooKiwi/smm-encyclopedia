import type {EntityReferences} from './properties/EntityReferences';
import type {EntityCategory}   from '../entityCategory/EntityCategory';
import type {Name}             from '../../lang/name/Name';
import type {Property}         from './properties/Property';

import {AbstractEntity} from './AbstractEntity';

/**
 * An entity that is not exclusive to any {@link GameStyles game style}.
 */
export class EntityContainer<CATEGORY extends EntityCategory = EntityCategory, PROPERTY extends Property = Property>
    extends AbstractEntity<CATEGORY, PROPERTY> {

    public constructor(name: Name<string>, category: EntityCategory, property: Property, references: EntityReferences,) {
        super(name, category, property, references,);
    }

}
