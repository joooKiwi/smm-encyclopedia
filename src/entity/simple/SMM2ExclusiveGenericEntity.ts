import {IsInProperty}                  from '../properties/IsInProperty';
import {EntityCategory}                from '../category/EntityCategory';
import {EntityReferences}              from '../properties/EntityReferences';
import {GenericEntity}                 from './GenericEntity';
import {IsInOnlySMM2GameProperty}      from '../properties/IsInOnlySMM2GameProperty';
import {IsInOnlySMM2Property}          from '../properties/IsInOnlySMM2Property';
import {Name}                          from '../../lang/name/Name';
import {SMM2ExclusiveEntity}           from './SMM2ExclusiveEntity';
import {IsInOnlySMM2GameStyleProperty} from '../properties/IsInOnlySMM2GameStyleProperty';
import {IsInOnlySMM2ThemeProperty}     from '../properties/IsInOnlySMM2ThemeProperty';

export class SMM2ExclusiveGenericEntity
    extends GenericEntity
    implements SMM2ExclusiveEntity {

    public constructor(name: Name, category: EntityCategory, isInProperty: IsInProperty, references: EntityReferences,) {
        super(name, category, validateIsInProperty(isInProperty), references,);
    }

    //region -------------------- Is in properties --------------------

    public get isInPropertyContainer(): IsInOnlySMM2Property {
        return super.isInPropertyContainer as IsInOnlySMM2Property;
    }

    //region -------------------- Is in game properties --------------------

    public get isInGameContainer(): IsInOnlySMM2GameProperty {
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

    public get isInGameStyleContainer(): IsInOnlySMM2GameStyleProperty {
        return super.isInGameStyleContainer;
    }

    public get isInSuperMario3DWorldStyle() {
        return this.isInGameStyleContainer.isInSuperMario3DWorldStyle;
    }

    //endregion -------------------- Is in game style properties --------------------
    //region -------------------- Is in theme properties --------------------

    public get isInThemeContainer(): IsInOnlySMM2ThemeProperty {
        return super.isInThemeContainer;
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

    //endregion -------------------- Is in theme properties --------------------
    //region -------------------- Is in time properties --------------------

    public get isInTimeContainer() {
        return super.isInTimeContainer;
    }

    public get isInDayTheme() {
        return this.isInTimeContainer.isInDayTheme;
    }

    public get isInNightTheme() {
        return this.isInTimeContainer.isInNightTheme;
    }

    //endregion -------------------- Is in time properties --------------------

    //endregion -------------------- Is in properties --------------------

}

function validateIsInProperty(isInProperty: IsInProperty): IsInOnlySMM2Property {
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
    if (isInProperty.isInNightTheme === null)
        throw new TypeError('The property isInNightTheme should always be set to a boolean for a SMM2 exclusive property.');
    //endregion ----- Time property -----
    return isInProperty as IsInOnlySMM2Property;
}
