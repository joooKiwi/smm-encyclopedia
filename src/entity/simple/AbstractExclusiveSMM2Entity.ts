import type {AbstractExclusiveSMM2Entity as AbstractExclusiveSMM2EntityInterface} from './Entity';
import type {AbstractExclusiveSMM2Property, Property}                             from '../properties/Property';
import type {EntityCategory}                                                      from '../category/EntityCategory';
import type {EntityReferences}                                                    from '../properties/EntityReferences';
import type {Name}                                                                from '../../lang/name/Name';

import {GenericEntity} from './GenericEntity';

/**
 * An entity that is exclusive to the {@link Games.SUPER_MARIO_MAKER_2 Super Mario Maker 2} {@link Games game}.
 */
export abstract class AbstractExclusiveSMM2Entity<CATEGORY extends EntityCategory = EntityCategory, PROPERTY extends AbstractExclusiveSMM2Property = AbstractExclusiveSMM2Property, >
    extends GenericEntity<CATEGORY, PROPERTY>
    implements AbstractExclusiveSMM2EntityInterface {

    protected constructor(name: Name, category: EntityCategory, property: PROPERTY, references: EntityReferences,) {
        super(name, category, validateProperty(property), references,);
    }

}

function validateProperty<T extends AbstractExclusiveSMM2Property, >(property: Property): T {
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
    if (property.isInProjectileLimitWhilePlaying == null && !property.isInProjectileLimitWhilePlayingUnknown)
        throw new TypeError('The property isInProjectileLimitWhilePlaying should always be boolean in the case of a known limit for a SMM2 exclusive property.');

    return property as T;
}
