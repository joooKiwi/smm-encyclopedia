import type {AbstractExclusiveSMM2Entity as AbstractExclusiveSMM2EntityInterface} from './Entity';
import type {AbstractExclusiveSMM2Property, Property}                             from './properties/Property';
import type {EntityCategory}                                                      from '../entityCategory/EntityCategory';
import type {EntityReferences}                                                    from './properties/EntityReferences';
import type {Name}                                                                from '../../lang/name/Name';

import {assert}          from '../../util/utilitiesMethods';
import {EntityContainer} from './Entity.container';

/**
 * An entity that is exclusive to the {@link Games.SUPER_MARIO_MAKER_2 Super Mario Maker 2} {@link Games game}.
 */
export abstract class AbstractExclusiveSMM2Entity<CATEGORY extends EntityCategory = EntityCategory, PROPERTY extends AbstractExclusiveSMM2Property = AbstractExclusiveSMM2Property, >
    extends EntityContainer<CATEGORY, PROPERTY>
    implements AbstractExclusiveSMM2EntityInterface<CATEGORY> {

    protected constructor(name: Name<string>, category: EntityCategory, property: Property, references: EntityReferences,) {
        super(name, category, property, references,);
    }

    protected override _testProperty(property: Property,): Property {
        property = super._testProperty(property);

        assert(!property.isInSuperMarioMaker1, 'The property isInSMM1 should always be set to false for a SMM2 exclusive property.',);
        assert(!property.isInSuperMarioMakerFor3DS, 'The property isInSMM3DS should always be set to false for a SMM2 exclusive property.',);
        assert(property.isInSuperMarioMaker2, 'The property isInSMM2 should always be set to true for a SMM2 exclusive property.',);

        assert(property.isInSuperMario3DWorldStyle != null, 'The property isInSuperMario3DWorldStyle should always be set to a boolean for a SMM2 exclusive property.',);

        assert(property.isInGeneralLimitWhilePlaying != null, 'The property isInGeneralLimitWhilePlaying should always be a boolean for a SMM2 exclusive property.',);
        assert(property.isInGlobalGeneralLimitWhilePlaying != null, 'The property isInGlobalGeneralLimitWhilePlaying should always be a boolean for a SMM2 exclusive property.',);
        assert(property.isInPowerUpLimitWhilePlaying != null, 'The property isInGeneralLimitWhilePlaying should always be a boolean for a SMM2 exclusive property.',);
        assert(property.editorLimit_smm1And3ds == null, 'The property editorLimit_smm1And3ds should always be null for an exclusive SMM2 property.',);

        return property;
    }

}
