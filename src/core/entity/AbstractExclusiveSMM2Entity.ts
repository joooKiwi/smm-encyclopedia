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

        assert(!property.isInSuperMarioMaker1, `The ${this.english} (SMM2 exclusive) should have a property isInSMM1 to false.`,)
        assert(!property.isInSuperMarioMakerFor3DS, `The ${this.english} (SMM2 exclusive) should have a property isInSMM3DS to false.`,)
        assert(property.isInSuperMarioMaker2, `The ${this.english} (SMM2 exclusive) should have a property isInSMM2 to true.`,)

        assert(property.isInSuperMario3DWorldStyle != null, `The ${this.english} (SMM2 exclusive) should have a property isInSuperMario3DWorldStyle to a boolean.`,)

        assert(property.isInGeneralLimit !== 'N/A', `The ${this.english} (SMM2 exclusive) should have a property isInGeneralLimit to a boolean.`,)
        assert(property.isInGlobalGeneralLimit !== 'N/A', `The ${this.english} (SMM2 exclusive) should have a property isInGlobalGeneralLimit to a boolean.`,)
        assert(typeof property.isInPowerUpLimit === 'boolean', `The ${this.english} (SMM2 exclusive) should have a property isInPowerUpLimit to a boolean.`,)
        assert(property.editorLimit_smm1And3ds == null, `The ${this.english} (SMM2 exclusive) should have a property editorLimit_smm1And3ds to null.`,)
    }

}
