import type {EntityReferences} from '../properties/EntityReferences';
import type {EntityCategory}   from '../category/EntityCategory';
import type {Name}             from '../../lang/name/Name';
import type {Property}         from '../properties/Property';

import {AbstractEntity} from './AbstractEntity';

export class GenericEntity<T extends Property = Property>
    extends AbstractEntity<T> {

    public constructor(name: Name, category: EntityCategory, property: T, references: EntityReferences,) {
        super(name, category, property, references,);
    }

}
