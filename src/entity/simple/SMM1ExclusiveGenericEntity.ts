import {IsInProperty}                  from '../properties/IsInProperty';
import {EmptyEntityCategory}           from '../category/EmptyEntityCategory';
import {EntityCategory}                from '../category/EntityCategory';
import {EntityReferences}              from '../properties/EntityReferences';
import {GenericEntity}                 from './GenericEntity';
import {IsInOnlySMM1GameProperty}      from '../properties/IsInOnlySMM1GameProperty';
import {IsInOnlySMM1Property}          from '../properties/IsInOnlySMM1Property';
import {Name}                          from '../../lang/name/Name';
import {SMM1ExclusiveEntity}           from './SMM1ExclusiveEntity';
import {IsInOnlySMM1GameStyleProperty} from '../properties/IsInOnlySMM1GameStyleProperty';

export class SMM1ExclusiveGenericEntity
    extends GenericEntity
    implements SMM1ExclusiveEntity {

    public constructor(name: Name, category: EntityCategory, isInProperty: IsInProperty, references: EntityReferences,) {
        super(name, validateIsEmptyCategory(category), validateIsInProperty(isInProperty), references);
    }

    //region -------------------- Is in properties --------------------

    public get isInProperty(): IsInOnlySMM1Property {
        return super.isInProperty as IsInOnlySMM1Property;
    }

    public get isInGame(): IsInOnlySMM1GameProperty {
        return super.isInGame as IsInOnlySMM1GameProperty;
    }

    public get isInSuperMarioMaker1() {
        return this.isInGame.isInSuperMarioMaker1;
    }

    public get isInSuperMarioMaker2() {
        return this.isInGame.isInSuperMarioMaker2;
    }


    public get isInGameStyle(): IsInOnlySMM1GameStyleProperty {
        return super.isInGameStyle as IsInOnlySMM1GameStyleProperty;
    }

    public get isInSuperMarioBrosStyle() {
        return this.isInGameStyle.isInSuperMarioBrosStyle;
    }

    public get isInSuperMarioBros3Style() {
        return this.isInGameStyle.isInSuperMarioBros3Style;
    }

    public get isInSuperMarioWorldStyle() {
        return this.isInGameStyle.isInSuperMarioWorldStyle;
    }

    public get isInNewSuperMarioBrosUStyle() {
        return this.isInGameStyle.isInNewSuperMarioBrosUStyle;
    }

    public get isInSuperMario3DWorldStyle() {
        return this.isInGameStyle.isInSuperMario3DWorldStyle;
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

function validateIsInProperty(isInProperty: IsInProperty): IsInOnlySMM1Property {
    //region ----- Game property -----
    if (!isInProperty.isInSuperMarioMaker1)
        throw new TypeError('The property isInSMM1 should always be set to true for a SMM1 exclusive property.');
    if (isInProperty.isInSuperMarioMaker2)
        throw new TypeError('The property isInSMM2 should always be set to false for a SMM2 exclusive property.');
    //endregion ----- Game property -----
    //region ----- Game style property -----
    if (!isInProperty.isInSuperMarioBrosStyle
        || isInProperty.isInSuperMarioBros3Style
        || isInProperty.isInSuperMarioWorldStyle
        || isInProperty.isInNewSuperMarioBrosUStyle
        || isInProperty.isInSuperMario3DWorldStyle !== null)
        throw new TypeError('The possible SMM1 entity can only be in the SMB style');
    //endregion ----- Game style property -----
    //region ----- Theme property -----
    if (!(isInProperty.isInGroundTheme && isInProperty.isInUndergroundTheme && isInProperty.isInUnderwaterTheme && isInProperty.isInDesertTheme === null
        && isInProperty.isInSnowTheme === null && isInProperty.isInSkyTheme === null && isInProperty.isInForestTheme === null && isInProperty.isInGhostHouseTheme
        && isInProperty.isInAirshipTheme && isInProperty.isInCastleTheme))
        throw new TypeError('A SMM1 entity is never in the desert, snow, sky and forest theme. The rest should always be set to true.');
    if (!(isInProperty.isInDayTheme && isInProperty.isInNightTheme === null))
        throw new TypeError('A SMM1 entity is never in the night theme, but always in the day theme.');
    //endregion ----- Theme property -----
    return isInProperty as IsInOnlySMM1Property;
}