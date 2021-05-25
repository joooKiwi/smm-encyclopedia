import {IsInProperty}                   from './IsInProperty';
import {IsInGameProperty}               from './IsInGameProperty';
import {IsInGamePropertyContainer}      from './IsInGamePropertyContainer';
import {IsInGameStyleProperty}          from './IsInGameStyleProperty';
import {IsInGameStylePropertyContainer} from './IsInGameStylePropertyContainer';
import {IsInThemeProperty}              from './IsInThemeProperty';
import {IsInThemePropertyContainer}     from './IsInThemePropertyContainer';

export class IsInPropertyContainer
    implements IsInProperty {

    readonly #isInGame: IsInGameProperty;

    readonly #isInGameStyle: IsInGameStyleProperty;

    readonly #isInTheme: IsInThemeProperty;

    readonly #isInDayTheme: boolean;
    readonly #isInNightTheme: boolean | null;

    public constructor(isInSuperMarioMaker1: boolean, isInSuperMarioMaker2: boolean,
                       isInSuperMarioBrosStyle: boolean, isInSuperMarioBros3Style: boolean, isInSuperMarioWorldStyle: boolean, isInNewSuperMarioBrosUStyle: boolean, isInSuperMario3DWorldStyle: null | boolean,
                       isInGroundTheme: boolean, isInUndergroundTheme: boolean, isInUnderwaterTheme: boolean, isInDesertTheme: null | boolean, isInSnowTheme: null | boolean, isInSkyTheme: null | boolean, isInForestTheme: null | boolean, isInGhostHouseTheme: boolean, isInAirshipTheme: boolean, isInCastleTheme: boolean,
                       isInDayTheme: boolean, isInNightTheme: null | boolean,) {
        this.#isInGame = IsInGamePropertyContainer.get(isInSuperMarioMaker1, isInSuperMarioMaker2,);

        this.#isInGameStyle = IsInGameStylePropertyContainer.get(isInSuperMarioBrosStyle, isInSuperMarioBros3Style, isInSuperMarioWorldStyle, isInNewSuperMarioBrosUStyle, isInSuperMario3DWorldStyle,);

        this.#isInTheme = IsInThemePropertyContainer.get(isInGroundTheme, isInUndergroundTheme, isInUnderwaterTheme, isInDesertTheme, isInSnowTheme, isInSkyTheme, isInForestTheme, isInGhostHouseTheme, isInAirshipTheme, isInCastleTheme,);

        this.#isInDayTheme = isInDayTheme;
        this.#isInNightTheme = isInNightTheme;
    }

    //region -------------------- Is in game properties --------------------

    public get isInGame() {
        return this.#isInGame;
    }

    public get isInSuperMarioMaker1() {
        return this.isInGame.isInSuperMarioMaker1;
    }

    public get isInSuperMarioMaker2() {
        return this.isInGame.isInSuperMarioMaker2;
    }

    //endregion -------------------- Is in game properties --------------------
    //region -------------------- Is in game style properties --------------------

    public get isInGameStyle() {
        return this.#isInGameStyle;
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

    //endregion -------------------- Is in game style properties --------------------
    //region -------------------- Is in theme properties --------------------

    public get isInTheme() {
        return this.#isInTheme;
    }

    public get isInGroundTheme() {
        return this.isInTheme.isInGroundTheme;
    }

    public get isInUndergroundTheme() {
        return this.isInTheme.isInUndergroundTheme;
    }

    public get isInUnderwaterTheme() {
        return this.isInTheme.isInUnderwaterTheme;
    }

    public get isInDesertTheme() {
        return this.isInTheme.isInDesertTheme;
    }

    public get isInSnowTheme() {
        return this.isInTheme.isInSnowTheme;
    }

    public get isInSkyTheme() {
        return this.isInTheme.isInSkyTheme;
    }

    public get isInForestTheme() {
        return this.isInTheme.isInForestTheme;
    }

    public get isInGhostHouseTheme() {
        return this.isInTheme.isInGhostHouseTheme;
    }

    public get isInAirshipTheme() {
        return this.isInTheme.isInAirshipTheme;
    }

    public get isInCastleTheme() {
        return this.isInTheme.isInCastleTheme;
    }

    //endregion -------------------- Is in theme properties --------------------

    public get isInDayTheme() {
        return this.#isInDayTheme;
    }

    public get isInNightTheme() {
        return this.#isInNightTheme;
    }

}
