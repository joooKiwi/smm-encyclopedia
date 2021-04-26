import {SMM2Name} from "../lang/SMM2Name";
import {IsInProperty} from "../properties/IsInProperty";
import {EntityReferences} from "../properties/EntityReferences";
import {IsInExclusiveSMM1Property} from "../properties/IsInExclusiveSMM1Property";
import {GenericEntity} from "./GenericEntity";
import {SMM1ExclusiveEntity} from "./SMM1ExclusiveEntity";
import {EntityCategory} from "../category/EntityCategory";
import {EmptyEntityCategory} from "../category/EmptyEntityCategory";

export class SMM1ExclusiveGenericEntity
    extends GenericEntity
    implements SMM1ExclusiveEntity {

    public constructor(name: SMM2Name, category: EntityCategory, isInProperty: IsInProperty, references: EntityReferences,) {
        super(name, validateIsEmptyCategory(category), validateIsInProperty(isInProperty), references);
    }

    //region -------------------- Is in properties --------------------

    public get isInProperty(): IsInExclusiveSMM1Property {
        return super.isInProperty as IsInExclusiveSMM1Property;
    }

    public get isInSuperMarioMaker1() {
        return this.isInProperty.isInSuperMarioMaker1;
    }

    public get isInSuperMarioMaker2() {
        return this.isInProperty.isInSuperMarioMaker2;
    }


    public get isInSuperMario3DWorldStyle() {
        return this.isInProperty.isInSuperMario3DWorldStyle;
    }


    public get isInGroundTheme() {
        return this.isInProperty.isInGroundTheme;
    }

    public get isInUndergroundTheme() {
        return this.isInProperty.isInUndergroundTheme;
    }

    public get isInUnderwaterTheme() {
        return this.isInProperty.isInUnderwaterTheme;
    }

    public get isInDesertTheme() {
        return this.isInProperty.isInDesertTheme;
    }

    public get isInSnowTheme() {
        return this.isInProperty.isInSnowTheme;
    }

    public get isInSkyTheme() {
        return this.isInProperty.isInSkyTheme;
    }

    public get isInForestTheme() {
        return this.isInProperty.isInForestTheme;
    }

    public get isInGhostHouseTheme() {
        return this.isInProperty.isInGhostHouseTheme;
    }

    public get isInAirshipTheme() {
        return this.isInProperty.isInAirshipTheme;
    }

    public get isInCastleTheme() {
        return this.isInProperty.isInCastleTheme;
    }


    public get isInDayTheme() {
        return this.isInProperty.isInDayTheme;
    }

    public get isInNightTheme() {
        return this.isInProperty.isInNightTheme;
    }

    //endregion -------------------- Is in properties --------------------

}

function validateIsEmptyCategory(category: EntityCategory): EmptyEntityCategory {
    if (!(category instanceof EmptyEntityCategory))
        throw new TypeError('A SMM1 exclusive entity cannot be in a SMM2 category.');
    return category;
}

function validateIsInProperty(isInProperty: IsInProperty): IsInExclusiveSMM1Property {
    if (!isInProperty.isInSuperMarioMaker1)
        throw new TypeError('The property isInSMM1 should always be set to true for a SMM1 exclusive property.');
    if (isInProperty.isInSuperMarioMaker2)
        throw new TypeError('The property isInSMM2 should always be set to false for a SMM2 exclusive property.');
    if (isInProperty.isInSuperMario3DWorldStyle !== null)
        throw new TypeError('A SMM1 entity is never in the SM3DW theme, but can be on the other 4 styles.');
    if (!(isInProperty.isInGroundTheme && isInProperty.isInUndergroundTheme && isInProperty.isInUnderwaterTheme && isInProperty.isInDesertTheme === null
        && isInProperty.isInSnowTheme === null && isInProperty.isInSkyTheme === null && isInProperty.isInForestTheme === null && isInProperty.isInGhostHouseTheme
        && isInProperty.isInAirshipTheme && isInProperty.isInCastleTheme))
        throw new TypeError('A SMM1 entity is never in the desert, snow, sky and forest theme. The rest should always be set to true.');
    if (!(isInProperty.isInDayTheme && isInProperty.isInNightTheme === null))
        throw new TypeError('A SMM1 entity is never in the night theme, but always in the day theme.');
    return isInProperty as IsInExclusiveSMM1Property;
}