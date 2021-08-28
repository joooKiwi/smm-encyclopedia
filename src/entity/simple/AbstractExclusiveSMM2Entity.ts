import type {EntityCategory}                  from '../category/EntityCategory';
import type {EntityReferences}                from '../properties/EntityReferences';
import type {ExclusiveSMM2Entity}             from './Entity';
import type {ExclusiveSMM2Property, Property} from '../properties/Property';
import type {Name}                            from '../../lang/name/Name';

import {GenericEntity} from './GenericEntity';

export abstract class AbstractExclusiveSMM2Entity<T extends ExclusiveSMM2Property = ExclusiveSMM2Property>
    extends GenericEntity<T>
    implements ExclusiveSMM2Entity {

    protected constructor(name: Name, category: EntityCategory, property: T, references: EntityReferences,) {
        super(name, category, validateIsInProperty(property), references,);
    }

}

function validateIsInProperty<T extends ExclusiveSMM2Property>(isInProperty: Property): T {
    if (isInProperty.isInSuperMarioMaker1)
        throw new TypeError('The property isInSMM1 should always be set to false for a SMM2 exclusive property.');
    if (!isInProperty.isInSuperMarioMaker2)
        throw new TypeError('The property isInSMM2 should always be set to true for a SMM2 exclusive property.');

    if (isInProperty.isInSuperMario3DWorldStyle === null)
        throw new TypeError('The property isInSuperMario3DWorldStyle should always be set to a boolean for a SMM2 exclusive property.');

    return isInProperty as T;
}
