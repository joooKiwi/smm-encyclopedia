import type {EntityReferences} from 'core/entity/properties/EntityReferences'
import type {Property}         from 'core/entity/properties/Property'
import type {EntityCategory}   from 'core/entityCategory/EntityCategory'
import type {Name}             from 'lang/name/Name'

import {EntityContainer}     from 'core/entity/Entity.container'
import {EmptyEntityCategory} from 'core/entityCategory/EmptyEntityCategory'
import {NOT_APPLICABLE}      from 'util/commonVariables'
import {assert}              from 'util/utilitiesMethods'

/**
 * An entity that is exclusive to the {@link Games.SUPER_MARIO_MAKER_1 Super Mario Maker 1} {@link Games game}.
 */
export class ExclusiveSMM1EntityContainer
    extends EntityContainer {

    public constructor(name: Name<string>, category: EntityCategory, property: Property, references: EntityReferences,) {
        super(name, category, property, references,)
    }

    protected override _testCategory(category: EntityCategory,): void {
        super._testCategory(category)

        assert(category instanceof EmptyEntityCategory, 'A SMM1 exclusive entity cannot be in a SMM2 category.',)
    }

    protected override _testProperty(property: Property,): void {
        super._testProperty(property)

        assert(property.isInSuperMarioMaker1, `The ${this.english} entity (SMM1 exclusive) should have a property isInSMM1 to true.`,)
        assert(!property.isInSuperMarioMaker2, `The ${this.english} entity (SMM1 exclusive) should have a property isInSMM2 to false.`,)

        assert(property.isInSuperMario3DWorldStyle == null, `The ${this.english} (SMM1 exclusive) cannot be in the SM3DW style`,)

        assert(property.isInGroundTheme && property.isInUndergroundTheme && property.isInUnderwaterTheme && property.isInDesertTheme == null
            && property.isInSnowTheme == null && property.isInSkyTheme == null && property.isInForestTheme == null && property.isInGhostHouseTheme
            && property.isInAirshipTheme && property.isInCastleTheme, `The ${this.english} entity (SMM1 exclusive) should always have the desert, snow, sky and forest theme to false and the rest to true.`,)

        assert(property.isInDayTheme && property.isInNightTheme == null, `The ${this.english} entity (SMM1 exclusive) should always be in the day time and not not applicable on the night time.`,)

        assert(property.editorLimit_smm2 === NOT_APPLICABLE
            && property.isInGeneralLimit === NOT_APPLICABLE && property.isInGlobalGeneralLimit === NOT_APPLICABLE
            && property.isInPowerUpLimit === NOT_APPLICABLE
            && property.isInProjectileLimit === NOT_APPLICABLE
            && property.otherLimit === NOT_APPLICABLE, `The ${this.english} entity (SMM1 exclusive) should not have any limit since it is only applicable to a SMM2 entity.`,)
    }

}
