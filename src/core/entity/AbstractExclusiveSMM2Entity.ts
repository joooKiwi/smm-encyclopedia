import type {Property}         from 'core/entity/properties/Property'
import type {EntityReferences} from 'core/entity/properties/EntityReferences'
import type {EntityCategory}   from 'core/entityCategory/EntityCategory'
import type {Name}             from 'lang/name/Name'

import {EntityContainer} from 'core/entity/Entity.container'
import {assert}          from 'util/utilitiesMethods'

/**
 * An entity that is exclusive to the {@link Games.SUPER_MARIO_MAKER_2 Super Mario Maker 2} {@link Games game}.
 */
export abstract class AbstractExclusiveSMM2Entity
    extends EntityContainer {

    protected constructor(name: Name<string>, category: EntityCategory, property: Property, references: EntityReferences,) {
        super(name, category, property, references,)
    }

    protected override _testProperty(property: Property,): void {
        super._testProperty(property)

        assert(!property.isInSuperMarioMaker1, 'The property isInSMM1 should always be set to false for a SMM2 exclusive property.',)
        assert(!property.isInSuperMarioMakerFor3DS, 'The property isInSMM3DS should always be set to false for a SMM2 exclusive property.',)
        assert(property.isInSuperMarioMaker2, 'The property isInSMM2 should always be set to true for a SMM2 exclusive property.',)

        assert(property.isInSuperMario3DWorldStyle != null, 'The property isInSuperMario3DWorldStyle should always be set to a boolean for a SMM2 exclusive property.',)

        assert(property.isInGeneralLimit != null, 'The property isInGeneralLimitWhilePlaying should always be a boolean for a SMM2 exclusive property.',)
        assert(property.isInGlobalGeneralLimit != null, 'The property isInGlobalGeneralLimitWhilePlaying should always be a boolean for a SMM2 exclusive property.',)
        assert(property.isInPowerUpLimit != null, 'The property isInGeneralLimitWhilePlaying should always be a boolean for a SMM2 exclusive property.',)
        assert(property.editorLimit_smm1And3ds == null, 'The property editorLimit_smm1And3ds should always be null for an exclusive SMM2 property.',)
    }

}
