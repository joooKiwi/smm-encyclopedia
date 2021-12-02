import type {EntityCategory}                  from '../category/EntityCategory';
import type {EntityReferences}                from '../properties/EntityReferences';
import type {ExclusiveSMM1Entity}             from './Entity';
import type {ExclusiveSMM1Property, Property} from '../properties/Property';
import type {Name}                            from '../../lang/name/Name';

import {EmptyEntityCategory} from '../category/EmptyEntityCategory';
import {EntityContainer}     from './Entity.container';

/**
 * An entity that is exclusive to the {@link Games.SUPER_MARIO_MAKER_1 Super Mario Maker 1} {@link Games game}.
 */
export class ExclusiveSMM1EntityContainer
    extends EntityContainer<EmptyEntityCategory, ExclusiveSMM1Property>
    implements ExclusiveSMM1Entity {

    public constructor(name: Name, category: EntityCategory, property: Property, references: EntityReferences,) {
        super(name, category, property, references,);
    }

    protected _testCategory(category: EntityCategory,): EntityCategory {
        category = super._testCategory(category);

        if (!(category instanceof EmptyEntityCategory))
            throw new TypeError('A SMM1 exclusive entity cannot be in a SMM2 category.');

        return category;
    }

    protected _testProperty(property: Property,): Property {
        property = super._testProperty(property);

        if (!property.isInSuperMarioMaker1)
            throw new TypeError('The property isInSMM1 should always be set to true for a SMM1 exclusive property.');
        if (property.isInSuperMarioMaker2)
            throw new TypeError('The property isInSMM2 should always be set to false for a SMM2 exclusive property.');

        if (!property.isInSuperMarioBrosStyle
            || property.isInSuperMarioBros3Style
            || property.isInSuperMarioWorldStyle
            || property.isInNewSuperMarioBrosUStyle
            || property.isInSuperMario3DWorldStyle != null)
            throw new TypeError('The possible SMM1 entity can only be in the SMB style');

        if (!(property.isInGroundTheme && property.isInUndergroundTheme && property.isInUnderwaterTheme && property.isInDesertTheme == null
            && property.isInSnowTheme == null && property.isInSkyTheme == null && property.isInForestTheme == null && property.isInGhostHouseTheme
            && property.isInAirshipTheme && property.isInCastleTheme))
            throw new TypeError('A SMM1 entity is never in the desert, snow, sky and forest theme. The rest should always be set to true.');

        if (!(property.isInDayTheme && property.isInNightTheme == null))
            throw new TypeError('A SMM1 entity is never in the night theme, but always in the day theme.');

        if (property.editorLimit !== ExclusiveSMM1EntityContainer.NOT_APPLICABLE
            && property.isInGeneralLimitWhilePlaying !== ExclusiveSMM1EntityContainer.NOT_APPLICABLE && property.isInGlobalGeneralLimitWhilePlaying !== ExclusiveSMM1EntityContainer.NOT_APPLICABLE
            && property.isInPowerUpLimitWhilePlaying !== ExclusiveSMM1EntityContainer.NOT_APPLICABLE
            && property.isInProjectileLimitWhilePlaying !== ExclusiveSMM1EntityContainer.NOT_APPLICABLE
            && property.customLimitWhilePlaying !== ExclusiveSMM1EntityContainer.NOT_APPLICABLE)
            throw new TypeError('A SMM1 entity doesn\'t have any limit since it is only applicable to a SMM2 entity.');


        return property;
    }

}
