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
import {IsInOnlySMM1ThemeProperty}     from '../properties/IsInOnlySMM1ThemeProperty';

export class SMM1ExclusiveGenericEntity
    extends GenericEntity
    implements SMM1ExclusiveEntity {

    public constructor(name: Name, category: EntityCategory, isInProperty: IsInProperty, references: EntityReferences,) {
        super(name, validateIsEmptyCategory(category), validateIsInProperty(isInProperty), references);
    }

    //region -------------------- Is in properties --------------------

    public get isInPropertyContainer(): IsInOnlySMM1Property {
        return super.isInPropertyContainer as IsInOnlySMM1Property;
    }

    //region -------------------- Is in game properties --------------------

    public get isInGameContainer(): IsInOnlySMM1GameProperty {
        return super.isInGameContainer as IsInOnlySMM1GameProperty;
    }

    public get isInSuperMarioMaker1() {
        return this.isInGameContainer.isInSuperMarioMaker1;
    }

    public get isInSuperMarioMaker2() {
        return this.isInGameContainer.isInSuperMarioMaker2;
    }

    //endregion -------------------- Is in game properties --------------------
    //region -------------------- Is in game style properties --------------------

    public get isInGameStyleContainer(): IsInOnlySMM1GameStyleProperty {
        return super.isInGameStyleContainer as IsInOnlySMM1GameStyleProperty;
    }

    public get isInSuperMarioBrosStyle() {
        return this.isInGameStyleContainer.isInSuperMarioBrosStyle;
    }

    public get isInSuperMarioBros3Style() {
        return this.isInGameStyleContainer.isInSuperMarioBros3Style;
    }

    public get isInSuperMarioWorldStyle() {
        return this.isInGameStyleContainer.isInSuperMarioWorldStyle;
    }

    public get isInNewSuperMarioBrosUStyle() {
        return this.isInGameStyleContainer.isInNewSuperMarioBrosUStyle;
    }

    public get isInSuperMario3DWorldStyle() {
        return this.isInGameStyleContainer.isInSuperMario3DWorldStyle;
    }

    //endregion -------------------- Is in game style properties --------------------
    //region -------------------- Is in theme properties --------------------

    public get isInThemeContainer(): IsInOnlySMM1ThemeProperty {
        return super.isInThemeContainer as IsInOnlySMM1ThemeProperty;
    }

    public get isInGroundTheme() {
        return this.isInThemeContainer.isInGroundTheme;
    }

    public get isInUndergroundTheme() {
        return this.isInThemeContainer.isInUndergroundTheme;
    }

    public get isInUnderwaterTheme() {
        return this.isInThemeContainer.isInUnderwaterTheme;
    }

    public get isInDesertTheme() {
        return this.isInThemeContainer.isInDesertTheme;
    }

    public get isInSnowTheme() {
        return this.isInThemeContainer.isInSnowTheme;
    }

    public get isInSkyTheme() {
        return this.isInThemeContainer.isInSkyTheme;
    }

    public get isInForestTheme() {
        return this.isInThemeContainer.isInForestTheme;
    }

    public get isInGhostHouseTheme() {
        return this.isInThemeContainer.isInGhostHouseTheme;
    }

    public get isInAirshipTheme() {
        return this.isInThemeContainer.isInAirshipTheme;
    }

    public get isInCastleTheme() {
        return this.isInThemeContainer.isInCastleTheme;
    }

    //endregion -------------------- Is in theme properties --------------------

    public get isInDayTheme() {
        return this.isInPropertyContainer.isInDayTheme;
    }

    public get isInNightTheme() {
        return this.isInPropertyContainer.isInNightTheme;
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