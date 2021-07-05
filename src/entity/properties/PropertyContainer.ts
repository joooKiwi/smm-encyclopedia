import type {GameProperty}      from './GameProperty';
import type {GameStyleProperty} from './GameStyleProperty';
import type {Property}          from './Property';
import type {ThemeProperty}     from './ThemeProperty';
import type {TimeProperty}      from './TimeProperty';

import {GamePropertyContainer}      from './GamePropertyContainer';
import {GameStylePropertyContainer} from './GameStylePropertyContainer';
import {ThemePropertyContainer}     from './ThemePropertyContainer';
import {TimePropertyContainer}      from './TimePropertyContainer';

export class PropertyContainer
    implements Property {

    //region -------------------- Attributes --------------------

    readonly #gameContainer: GameProperty;
    readonly #gameStyleContainer: GameStyleProperty;
    readonly #themeContainer: ThemeProperty;
    readonly #timeContainer: TimeProperty;

    //endregion -------------------- Attributes --------------------

    public constructor(isInSuperMarioMaker1: boolean, isInSuperMarioMaker2: boolean,
                       isInSuperMarioBrosStyle: boolean, isInSuperMarioBros3Style: boolean, isInSuperMarioWorldStyle: boolean, isInNewSuperMarioBrosUStyle: boolean, isInSuperMario3DWorldStyle: null | boolean,
                       isInGroundTheme: boolean, isInUndergroundTheme: boolean, isInUnderwaterTheme: boolean, isInDesertTheme: null | boolean, isInSnowTheme: null | boolean, isInSkyTheme: null | boolean, isInForestTheme: null | boolean, isInGhostHouseTheme: boolean, isInAirshipTheme: boolean, isInCastleTheme: boolean,
                       isInDayTheme: boolean, isInNightTheme: null | boolean,) {
        this.#gameContainer = GamePropertyContainer.get(isInSuperMarioMaker1, isInSuperMarioMaker2,);
        this.#gameStyleContainer = GameStylePropertyContainer.get(isInSuperMarioBrosStyle, isInSuperMarioBros3Style, isInSuperMarioWorldStyle, isInNewSuperMarioBrosUStyle, isInSuperMario3DWorldStyle,);
        this.#themeContainer = ThemePropertyContainer.get(isInGroundTheme, isInUndergroundTheme, isInUnderwaterTheme, isInDesertTheme, isInSnowTheme, isInSkyTheme, isInForestTheme, isInGhostHouseTheme, isInAirshipTheme, isInCastleTheme,);
        this.#timeContainer = TimePropertyContainer.get(isInDayTheme, isInNightTheme,);
    }

    //region -------------------- Game properties --------------------

    public get gameContainer() {
        return this.#gameContainer;
    }

    public get isInSuperMarioMaker1() {
        return this.gameContainer.isInSuperMarioMaker1;
    }

    public get isInSuperMarioMaker2() {
        return this.gameContainer.isInSuperMarioMaker2;
    }

    //endregion -------------------- Game properties --------------------
    //region -------------------- Game style properties --------------------

    public get gameStyleContainer() {
        return this.#gameStyleContainer;
    }

    public get isInSuperMarioBrosStyle() {
        return this.gameStyleContainer.isInSuperMarioBrosStyle;
    }

    public get isInSuperMarioBros3Style() {
        return this.gameStyleContainer.isInSuperMarioBros3Style;
    }

    public get isInSuperMarioWorldStyle() {
        return this.gameStyleContainer.isInSuperMarioWorldStyle;
    }

    public get isInNewSuperMarioBrosUStyle() {
        return this.gameStyleContainer.isInNewSuperMarioBrosUStyle;
    }

    public get isInSuperMario3DWorldStyle() {
        return this.gameStyleContainer.isInSuperMario3DWorldStyle;
    }

    //endregion -------------------- Game style properties --------------------
    //region -------------------- Theme properties --------------------

    public get themeContainer() {
        return this.#themeContainer;
    }

    public get isInGroundTheme() {
        return this.themeContainer.isInGroundTheme;
    }

    public get isInUndergroundTheme() {
        return this.themeContainer.isInUndergroundTheme;
    }

    public get isInUnderwaterTheme() {
        return this.themeContainer.isInUnderwaterTheme;
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

    public get isInGhostHouseTheme() {
        return this.themeContainer.isInGhostHouseTheme;
    }

    public get isInAirshipTheme() {
        return this.themeContainer.isInAirshipTheme;
    }

    public get isInCastleTheme() {
        return this.themeContainer.isInCastleTheme;
    }

    //endregion -------------------- Theme properties --------------------
    //region -------------------- Time properties --------------------

    public get timeContainer() {
        return this.#timeContainer;
    }

    public get isInDayTheme() {
        return this.timeContainer.isInDayTheme;
    }

    public get isInNightTheme() {
        return this.timeContainer.isInNightTheme;
    }

    //endregion -------------------- Time properties --------------------

    public toGameStyleMap() {
        return this.gameStyleContainer.toGameStyleMap();
    }

    public toCourseThemeMap() {
        return this.themeContainer.toCourseThemeMap();
    }

    public toTimeMap() {
        return this.timeContainer.toTimeMap();
    }

}
