import {Property}            from '../properties/Property';
import {EmptyEntityCategory} from '../category/EmptyEntityCategory';
import {EntityCategory}                from '../category/EntityCategory';
import {EntityReferences}              from '../properties/EntityReferences';
import {GenericEntity}             from './GenericEntity';
import {ExclusiveSMM1GameProperty} from '../properties/ExclusiveSMM1GameProperty';
import {ExclusiveSMM1Property}     from '../properties/ExclusiveSMM1Property';
import {Name}                      from '../../lang/name/Name';
import {SMM1ExclusiveEntity}            from './SMM1ExclusiveEntity';
import {ExclusiveSMM1GameStyleProperty} from '../properties/ExclusiveSMM1GameStyleProperty';
import {ExclusiveSMM1ThemeProperty} from '../properties/ExclusiveSMM1ThemeProperty';
import {ExclusiveSMM1TimeProperty}  from '../properties/ExclusiveSMM1TimeProperty';

export class SMM1ExclusiveGenericEntity
    extends GenericEntity
    implements SMM1ExclusiveEntity {

    public constructor(name: Name, category: EntityCategory, isInProperty: Property, references: EntityReferences,) {
        super(name, validateIsEmptyCategory(category), validateIsInProperty(isInProperty), references);
    }


    //region -------------------- Is in properties --------------------

    public get isInPropertyContainer(): ExclusiveSMM1Property {
        return super.isInPropertyContainer as ExclusiveSMM1Property;
    }

    //region -------------------- Is in game properties --------------------

    public get isInGameContainer(): ExclusiveSMM1GameProperty {
        return super.isInGameContainer;
    }

    public get isInSuperMarioMaker1() {
        return this.isInGameContainer.isInSuperMarioMaker1;
    }

    public get isInSuperMarioMaker2() {
        return this.isInGameContainer.isInSuperMarioMaker2;
    }

    //endregion -------------------- Is in game properties --------------------
    //region -------------------- Is in game style properties --------------------

    public get isInGameStyleContainer(): ExclusiveSMM1GameStyleProperty {
        return super.isInGameStyleContainer;
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

    public get isInThemeContainer(): ExclusiveSMM1ThemeProperty {
        return super.isInThemeContainer;
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
    //region -------------------- Is in time properties --------------------

    public get isInTimeContainer(): ExclusiveSMM1TimeProperty {
        return super.isInTimeContainer;
    }

    public get isInDayTheme() {
        return this.isInPropertyContainer.isInDayTheme;
    }

    public get isInNightTheme() {
        return this.isInPropertyContainer.isInNightTheme;
    }

    //endregion -------------------- Is in time properties --------------------

    //endregion -------------------- Is in properties --------------------

}

function validateIsEmptyCategory(category: EntityCategory): EmptyEntityCategory {
    if (!(category instanceof EmptyEntityCategory))
        throw new TypeError('A SMM1 exclusive entity cannot be in a SMM2 category.');
    return category;
}

function validateIsInProperty(isInProperty: Property): ExclusiveSMM1Property {
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
    //endregion ----- Theme property -----
    //region ----- Time property -----
    if (!(isInProperty.isInDayTheme && isInProperty.isInNightTheme === null))
        throw new TypeError('A SMM1 entity is never in the night theme, but always in the day theme.');
    //endregion ----- Time property -----
    return isInProperty as ExclusiveSMM1Property;
}