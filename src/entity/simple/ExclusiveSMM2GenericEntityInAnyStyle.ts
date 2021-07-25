import type {EntityCategory}                  from '../category/EntityCategory';
import type {EntityReferences}                from '../properties/EntityReferences';
import type {ExclusiveSMM2EntityInAnyStyle}   from './ExclusiveSMM2EntityInAnyStyle';
import type {ExclusiveSMM2PropertyInAnyStyle} from '../properties/exclusive/ExclusiveSMM2PropertyInAnyStyle';
import type {Name}                            from '../../lang/name/Name';
import type {Property}                        from '../properties/Property';

import {AbstractExclusiveSMM2Entity} from './AbstractExclusiveSMM2Entity';

export class ExclusiveSMM2GenericEntityInAnyStyle
    extends AbstractExclusiveSMM2Entity<ExclusiveSMM2PropertyInAnyStyle>
    implements ExclusiveSMM2EntityInAnyStyle {

    public constructor(name: Name, category: EntityCategory, property: Property, references: EntityReferences,) {
        super(name, category, validateIsInProperty(property), references);
    }

}

function validateIsInProperty(isInProperty: Property,): ExclusiveSMM2PropertyInAnyStyle {
    if (isInProperty.isInNightTheme === null)
        throw new TypeError('The property isInNightTheme should always be set to a boolean for a SMM2 exclusive property when it is included in at least one of those styles (SMB, SMB3, SMW or NSMBU).');
    return isInProperty as ExclusiveSMM2PropertyInAnyStyle;
}
