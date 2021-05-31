import {AbstractEntity}   from './AbstractEntity';
import {Property}         from '../properties/Property';
import {EntityReferences} from '../properties/EntityReferences';
import {EntityCategory}   from '../category/EntityCategory';
import {Name}             from '../../lang/name/Name';

export class GenericEntity<T extends Property = Property>
    extends AbstractEntity<T> {

    public constructor(name: Name, category: EntityCategory, property: T, references: EntityReferences,) {
        super(name, category, property, references,);
    }

}
