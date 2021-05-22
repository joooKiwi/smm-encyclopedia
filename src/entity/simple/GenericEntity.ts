import {AbstractEntity}   from './AbstractEntity';
import {IsInProperty}     from '../properties/IsInProperty';
import {EntityReferences} from '../properties/EntityReferences';
import {EntityCategory}   from '../category/EntityCategory';
import {Name}             from '../../lang/name/Name';

export class GenericEntity
    extends AbstractEntity {

    public constructor(name: Name, category: EntityCategory, isInProperty: IsInProperty, references: EntityReferences,) {
        super(name, category, isInProperty, references,);
    }

}
