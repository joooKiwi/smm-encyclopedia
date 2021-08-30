import type {EntityCategory}                            from '../category/EntityCategory';
import type {EntityReferences}                          from '../properties/EntityReferences';
import type {ExclusiveSMM2EntityInAnyStyle}             from './Entity';
import type {ExclusiveSMM2PropertyInAnyStyle, Property} from '../properties/Property';
import type {Name}                                      from '../../lang/name/Name';

import {AbstractExclusiveSMM2Entity} from './AbstractExclusiveSMM2Entity';

export class ExclusiveSMM2GenericEntityInAnyStyle
    extends AbstractExclusiveSMM2Entity<ExclusiveSMM2PropertyInAnyStyle>
    implements ExclusiveSMM2EntityInAnyStyle {

    public constructor(name: Name, category: EntityCategory, property: Property, references: EntityReferences,) {
        super(name, category, validateProperty(property), references);
    }

}

function validateProperty(property: Property,): ExclusiveSMM2PropertyInAnyStyle {
    if (property.isInNightTheme == null)
        throw new TypeError('The property isInNightTheme should always be set to a boolean for a SMM2 exclusive property when it is included in at least one of those styles (SMB, SMB3, SMW or NSMBU).');
    return property as ExclusiveSMM2PropertyInAnyStyle;
}
