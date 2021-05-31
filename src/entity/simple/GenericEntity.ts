import {AbstractEntity}   from './AbstractEntity';
import {Property}         from '../properties/Property';
import {EntityReferences} from '../properties/EntityReferences';
import {EntityCategory}   from '../category/EntityCategory';
import {Name}             from '../../lang/name/Name';

export class GenericEntity
    extends AbstractEntity {

    public constructor(name: Name, category: EntityCategory, isInProperty: Property, references: EntityReferences,) {
        super(name, category, isInProperty, references,);
    }

}
