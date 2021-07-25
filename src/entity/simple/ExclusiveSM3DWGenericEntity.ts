import type {EntityCategory}               from '../category/EntityCategory';
import type {EntityReferences}             from '../properties/EntityReferences';
import type {ExclusiveSM3DWEntity}         from './ExclusiveSM3DWEntity';
import type {ExclusiveSMM2PropertyInSM3DW} from '../properties/exclusive/ExclusiveSMM2PropertyInSM3DW';
import type {Name}                         from '../../lang/name/Name';
import type {Property}                     from '../properties/Property';

import {AbstractExclusiveSMM2Entity} from './AbstractExclusiveSMM2Entity';

export class ExclusiveSM3DWGenericEntity
    extends AbstractExclusiveSMM2Entity<ExclusiveSMM2PropertyInSM3DW>
    implements ExclusiveSM3DWEntity {

    public constructor(name: Name, category: EntityCategory, property: Property, references: EntityReferences,) {
        super(name, category, validateIsInProperty(property), references);
    }

}

function validateIsInProperty(property: Property,): ExclusiveSMM2PropertyInSM3DW {
    if (property.isInNightTheme !== null)
        throw new TypeError('The property isInNightTheme should always be set to a null for a SMM2 exclusive property when it is exclusively in the SM3DW style.');
    return property as ExclusiveSMM2PropertyInSM3DW;
}
