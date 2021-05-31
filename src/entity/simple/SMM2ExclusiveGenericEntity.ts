import {Property}       from '../properties/Property';
import {EntityCategory} from '../category/EntityCategory';
import {EntityReferences}              from '../properties/EntityReferences';
import {GenericEntity}             from './GenericEntity';
import {ExclusiveSMM2GameProperty} from '../properties/ExclusiveSMM2GameProperty';
import {ExclusiveSMM2Property}     from '../properties/ExclusiveSMM2Property';
import {Name}                      from '../../lang/name/Name';
import {SMM2ExclusiveEntity}            from './SMM2ExclusiveEntity';
import {ExclusiveSMM2GameStyleProperty} from '../properties/ExclusiveSMM2GameStyleProperty';
import {ExclusiveSMM2ThemeProperty}     from '../properties/ExclusiveSMM2ThemeProperty';

export class SMM2ExclusiveGenericEntity
    extends GenericEntity
    implements SMM2ExclusiveEntity {

    public constructor(name: Name, category: EntityCategory, isInProperty: Property, references: EntityReferences,) {
        super(name, category, validateIsInProperty(isInProperty), references,);
    }


    //region -------------------- Is in properties --------------------

    public get propertyContainer(): ExclusiveSMM2Property {
        return super.propertyContainer as ExclusiveSMM2Property;
    }

    //region -------------------- Is in game properties --------------------

    public get gameContainer(): ExclusiveSMM2GameProperty {
        return super.gameContainer;
    }

    public get isInSuperMarioMaker1() {
        return this.gameContainer.isInSuperMarioMaker1;
    }

    public get isInSuperMarioMaker2() {
        return this.gameContainer.isInSuperMarioMaker2;
    }

    //endregion -------------------- Is in game properties --------------------
    //region -------------------- Is in game style properties --------------------

    public get gameStyleContainer(): ExclusiveSMM2GameStyleProperty {
        return super.gameStyleContainer;
    }

    public get isInSuperMario3DWorldStyle() {
        return this.gameStyleContainer.isInSuperMario3DWorldStyle;
    }

    //endregion -------------------- Is in game style properties --------------------
    //region -------------------- Is in theme properties --------------------

    public get themeContainer(): ExclusiveSMM2ThemeProperty {
        return super.themeContainer;
    }

    public get isInDesertTheme() {
        return this.themeContainer.isInDesertTheme;
    }

    public get isInSnowTheme() {
        return this.themeContainer.isInSnowTheme;
    }

    public get isInSkyTheme() {
        return this.themeContainer.isInSkyTheme;
    }

    public get isInForestTheme() {
        return this.themeContainer.isInForestTheme;
    }

    //endregion -------------------- Is in theme properties --------------------
    //region -------------------- Is in time properties --------------------

    public get timeContainer() {
        return super.timeContainer;
    }

    public get isInDayTheme() {
        return this.timeContainer.isInDayTheme;
    }

    public get isInNightTheme() {
        return this.timeContainer.isInNightTheme;
    }

    //endregion -------------------- Is in time properties --------------------

    //endregion -------------------- Is in properties --------------------

}

function validateIsInProperty(isInProperty: Property): ExclusiveSMM2Property {
    //region ----- Game property -----
    if (isInProperty.isInSuperMarioMaker1)
        throw new TypeError('The property isInSMM1 should always be set to false for a SMM2 exclusive property.');
    if (!isInProperty.isInSuperMarioMaker2)
        throw new TypeError('The property isInSMM2 should always be set to true for a SMM2 exclusive property.');
    //endregion ----- Game property -----
    //region ----- Game style property -----
    if (isInProperty.isInSuperMario3DWorldStyle === null)
        throw new TypeError('The property isInSuperMario3DWorldStyle should always be set to a boolean for a SMM2 exclusive property.');
    //endregion ----- Game style property -----
    //region ----- Time property -----
    if (!isInProperty.isInSuperMarioBrosStyle && !isInProperty.isInSuperMarioBros3Style && !isInProperty.isInSuperMarioWorldStyle && !isInProperty.isInNewSuperMarioBrosUStyle && isInProperty.isInSuperMario3DWorldStyle) {
        if (isInProperty.isInNightTheme !== null)
            throw new TypeError('The property isInNightTheme should always be set to a null for a SMM2 exclusive property when it is exclusively in the SM3DW style.');
    } else {
        if (isInProperty.isInNightTheme === null)
            throw new TypeError('The property isInNightTheme should always be set to a boolean for a SMM2 exclusive property when it is included in at least one of those styles (SMB, SMB3, SMW or NSMBU).');
    }
    //endregion ----- Time property -----
    return isInProperty as ExclusiveSMM2Property;
}
