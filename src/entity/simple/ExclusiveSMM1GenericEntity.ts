import {EmptyEntityCategory}   from '../category/EmptyEntityCategory';
import {EntityCategory}        from '../category/EntityCategory';
import {EntityReferences}      from '../properties/EntityReferences';
import {ExclusiveSMM1Entity}   from './ExclusiveSMM1Entity';
import {ExclusiveSMM1Property} from '../properties/exclusive/ExclusiveSMM1Property';
import {GenericEntity}         from './GenericEntity';
import {Name}                  from '../../lang/name/Name';
import {Property}              from '../properties/Property';

export class ExclusiveSMM1GenericEntity
    extends GenericEntity<ExclusiveSMM1Property>
    implements ExclusiveSMM1Entity {

    public constructor(name: Name, category: EntityCategory, property: Property, references: EntityReferences,) {
        super(name, validateIsEmptyCategory(category), validateIsInProperty(property), references);
    }

}

function validateIsEmptyCategory(category: EntityCategory): EmptyEntityCategory {
    if (!(category instanceof EmptyEntityCategory))
        throw new TypeError('A SMM1 exclusive entity cannot be in a SMM2 category.');
    return category;
}

function validateIsInProperty(property: Property): ExclusiveSMM1Property {
    if (!property.isInSuperMarioMaker1)
        throw new TypeError('The property isInSMM1 should always be set to true for a SMM1 exclusive property.');
    if (property.isInSuperMarioMaker2)
        throw new TypeError('The property isInSMM2 should always be set to false for a SMM2 exclusive property.');

    if (!property.isInSuperMarioBrosStyle
        || property.isInSuperMarioBros3Style
        || property.isInSuperMarioWorldStyle
        || property.isInNewSuperMarioBrosUStyle
        || property.isInSuperMario3DWorldStyle !== null)
        throw new TypeError('The possible SMM1 entity can only be in the SMB style');

    if (!(property.isInGroundTheme && property.isInUndergroundTheme && property.isInUnderwaterTheme && property.isInDesertTheme === null
        && property.isInSnowTheme === null && property.isInSkyTheme === null && property.isInForestTheme === null && property.isInGhostHouseTheme
        && property.isInAirshipTheme && property.isInCastleTheme))
        throw new TypeError('A SMM1 entity is never in the desert, snow, sky and forest theme. The rest should always be set to true.');

    if (!(property.isInDayTheme && property.isInNightTheme === null))
        throw new TypeError('A SMM1 entity is never in the night theme, but always in the day theme.');

    return property as ExclusiveSMM1Property;
}