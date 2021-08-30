import type {EntityCategory}                  from '../category/EntityCategory';
import type {EntityReferences}                from '../properties/EntityReferences';
import type {ExclusiveSMM2Entity}             from './Entity';
import type {ExclusiveSMM2Property, Property} from '../properties/Property';
import type {Name}                            from '../../lang/name/Name';

import {GenericEntity} from './GenericEntity';

export abstract class AbstractExclusiveSMM2Entity<T extends ExclusiveSMM2Property = ExclusiveSMM2Property,>
    extends GenericEntity<T>
    implements ExclusiveSMM2Entity {

    protected constructor(name: Name, category: EntityCategory, property: T, references: EntityReferences,) {
        super(name, category, validateProperty(property), references,);
    }

}

function validateProperty<T extends ExclusiveSMM2Property,>(property: Property): T {
    if (property.isInSuperMarioMaker1)
        throw new TypeError('The property isInSMM1 should always be set to false for a SMM2 exclusive property.');
    if (!property.isInSuperMarioMaker2)
        throw new TypeError('The property isInSMM2 should always be set to true for a SMM2 exclusive property.');

    if (property.isInSuperMario3DWorldStyle == null)
        throw new TypeError('The property isInSuperMario3DWorldStyle should always be set to a boolean for a SMM2 exclusive property.');

    if (property.isInGeneralLimitWhilePlaying == null)
        throw new TypeError('The property isInGeneralLimitWhilePlaying should always be a boolean for a SMM2 exclusive property.');
    if (property.isInGlobalGeneralLimitWhilePlaying == null)
        throw new TypeError('The property isInGlobalGeneralLimitWhilePlaying should always be a boolean for a SMM2 exclusive property.');
    if (property.isInPowerUpLimitWhilePlaying == null)
        throw new TypeError('The property isInGeneralLimitWhilePlaying should always be a boolean for a SMM2 exclusive property.');
    if (property.isInProjectileLimitWhilePlaying == null && !property.isInProjectileLimitWhilePlayingKnown)
        throw new TypeError('The property isInProjectileLimitWhilePlaying should always be boolean in the case of a known limit for a SMM2 exclusive property.');

    return property as T;
}
