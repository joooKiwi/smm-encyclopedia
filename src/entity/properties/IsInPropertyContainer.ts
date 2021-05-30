import {IsInProperty}                   from './IsInProperty';
import {IsInGameProperty}               from './IsInGameProperty';
import {IsInGamePropertyContainer}      from './IsInGamePropertyContainer';
import {IsInGameStyleProperty}          from './IsInGameStyleProperty';
import {IsInGameStylePropertyContainer} from './IsInGameStylePropertyContainer';
import {IsInThemeProperty}              from './IsInThemeProperty';
import {IsInThemePropertyContainer}     from './IsInThemePropertyContainer';

export class IsInPropertyContainer
    implements IsInProperty {

    readonly #isInGameContainer: IsInGameProperty;

    readonly #isInGameStyleContainer: IsInGameStyleProperty;

    readonly #isInThemeContainer: IsInThemeProperty;

    readonly #isInDayTheme: boolean;
    readonly #isInNightTheme: boolean | null;

    public constructor(isInSuperMarioMaker1: boolean, isInSuperMarioMaker2: boolean,
                       isInSuperMarioBrosStyle: boolean, isInSuperMarioBros3Style: boolean, isInSuperMarioWorldStyle: boolean, isInNewSuperMarioBrosUStyle: boolean, isInSuperMario3DWorldStyle: null | boolean,
                       isInGroundTheme: boolean, isInUndergroundTheme: boolean, isInUnderwaterTheme: boolean, isInDesertTheme: null | boolean, isInSnowTheme: null | boolean, isInSkyTheme: null | boolean, isInForestTheme: null | boolean, isInGhostHouseTheme: boolean, isInAirshipTheme: boolean, isInCastleTheme: boolean,
                       isInDayTheme: boolean, isInNightTheme: null | boolean,) {
        this.#isInGameContainer = IsInGamePropertyContainer.get(isInSuperMarioMaker1, isInSuperMarioMaker2,);

        this.#isInGameStyleContainer = IsInGameStylePropertyContainer.get(isInSuperMarioBrosStyle, isInSuperMarioBros3Style, isInSuperMarioWorldStyle, isInNewSuperMarioBrosUStyle, isInSuperMario3DWorldStyle,);

        this.#isInThemeContainer = IsInThemePropertyContainer.get(isInGroundTheme, isInUndergroundTheme, isInUnderwaterTheme, isInDesertTheme, isInSnowTheme, isInSkyTheme, isInForestTheme, isInGhostHouseTheme, isInAirshipTheme, isInCastleTheme,);

        this.#isInDayTheme = isInDayTheme;
        this.#isInNightTheme = isInNightTheme;
    }

    //region -------------------- Is in game properties --------------------

    public get isInGameContainer() {
        return this.#isInGameContainer;
    }

    public get isInSuperMarioMaker1() {
        return this.isInGameContainer.isInSuperMarioMaker1;
    }

    public get isInSuperMarioMaker2() {
        return this.isInGameContainer.isInSuperMarioMaker2;
    }

    //endregion -------------------- Is in game properties --------------------
    //region -------------------- Is in game style properties --------------------

    public get isInGameStyleContainer() {
        return this.#isInGameStyleContainer;
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

    public get isInThemeContainer() {
        return this.#isInThemeContainer;
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
        return this.#isInDayTheme;
    }

    public get isInNightTheme() {
        return this.#isInNightTheme;
    }


    public toGameStyleMap() {
        return this.isInGameStyleContainer.toGameStyleMap();
    }

    public toCourseThemeMap() {
        return this.isInThemeContainer.toCourseThemeMap();
    }

}
