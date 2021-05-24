import {IsInProperty}                   from './IsInProperty';
import {IsInGameProperty}               from './IsInGameProperty';
import {IsInGamePropertyContainer}      from './IsInGamePropertyContainer';
import {IsInGameStyleProperty}          from './IsInGameStyleProperty';
import {IsInGameStylePropertyContainer} from './IsInGameStylePropertyContainer';

export class IsInPropertyContainer
    implements IsInProperty {

    readonly #isInGame: IsInGameProperty;

    readonly #isInGameStyle: IsInGameStyleProperty;

    readonly #isInGroundTheme: boolean;
    readonly #isInUndergroundTheme: null | boolean;
    readonly #isInUnderwaterTheme: null | boolean;
    readonly #isInDesertTheme: null | boolean;
    readonly #isInSnowTheme: null | boolean;
    readonly #isInSkyTheme: null | boolean;
    readonly #isInForestTheme: null | boolean;
    readonly #isInGhostHouseTheme: null | boolean;
    readonly #isInAirshipTheme: null | boolean;
    readonly #isInCastleTheme: null | boolean;

    readonly #isInDayTheme: boolean;
    readonly #isInNightTheme: boolean | null;

    public constructor(isInSuperMarioMaker1: boolean, isInSuperMarioMaker2: boolean,
                       isInSuperMarioBrosStyle: boolean, isInSuperMarioBros3Style: boolean, isInSuperMarioWorldStyle: boolean, isInNewSuperMarioBrosUStyle: boolean, isInSuperMario3DWorldStyle: null | boolean,
                       isInGroundTheme: boolean, isInUndergroundTheme: null | boolean, isInUnderwaterTheme: null | boolean, isInDesertTheme: null | boolean, isInSnowTheme: null | boolean, isInSkyTheme: null | boolean, isInForestTheme: null | boolean, isInGhostHouseTheme: null | boolean, isInAirshipTheme: null | boolean, isInCastleTheme: null | boolean,
                       isInDayTheme: boolean, isInNightTheme: null | boolean,) {
        this.#isInGame = IsInGamePropertyContainer.get(isInSuperMarioMaker1, isInSuperMarioMaker2,);

        this.#isInGameStyle = IsInGameStylePropertyContainer.get(isInSuperMarioBrosStyle, isInSuperMarioBros3Style, isInSuperMarioWorldStyle, isInNewSuperMarioBrosUStyle, isInSuperMario3DWorldStyle,);

        this.#isInGroundTheme = isInGroundTheme;
        this.#isInUndergroundTheme = isInUndergroundTheme;
        this.#isInUnderwaterTheme = isInUnderwaterTheme;
        this.#isInDesertTheme = isInDesertTheme;
        this.#isInSnowTheme = isInSnowTheme;
        this.#isInSkyTheme = isInSkyTheme;
        this.#isInForestTheme = isInForestTheme;
        this.#isInGhostHouseTheme = isInGhostHouseTheme;
        this.#isInAirshipTheme = isInAirshipTheme;
        this.#isInCastleTheme = isInCastleTheme;

        this.#isInDayTheme = isInDayTheme;
        this.#isInNightTheme = isInNightTheme;
    }


    public get isInGame() {
        return this.#isInGame;
    }

    public get isInSuperMarioMaker1() {
        return this.isInGame.isInSuperMarioMaker1;
    }

    public get isInSuperMarioMaker2() {
        return this.isInGame.isInSuperMarioMaker2;
    }


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


    public get isInGroundTheme() {
        return this.#isInGroundTheme;
    }

    public get isInUndergroundTheme() {
        return this.#isInUndergroundTheme;
    }

    public get isInUnderwaterTheme() {
        return this.#isInUnderwaterTheme;
    }

    public get isInDesertTheme() {
        return this.#isInDesertTheme;
    }

    public get isInSnowTheme() {
        return this.#isInSnowTheme;
    }

    public get isInSkyTheme() {
        return this.#isInSkyTheme;
    }

    public get isInForestTheme() {
        return this.#isInForestTheme;
    }

    public get isInGhostHouseTheme() {
        return this.#isInGhostHouseTheme;
    }

    public get isInAirshipTheme() {
        return this.#isInAirshipTheme;
    }

    public get isInCastleTheme() {
        return this.#isInCastleTheme;
    }

    public get isInDayTheme() {
        return this.#isInDayTheme;
    }

    public get isInNightTheme() {
        return this.#isInNightTheme;
    }

}
