import type {ThemeProperty} from './ThemeProperty'

import {Themes} from '../../../theme/Themes'

/**
 * @classWithDynamicImport {@link Themes}
 */
export class ThemePropertyContainer<GROUND extends boolean = boolean, UNDERGROUND extends boolean = boolean, UNDERWATER extends boolean = boolean, DESERT extends | boolean | null = | boolean | null, SNOW extends | boolean | null = | boolean | null, SKY extends | boolean | null = | boolean | null, FOREST extends | boolean | null = | boolean | null, GHOST_HOUSE extends boolean = boolean, AIRSHIP extends boolean = boolean, CASTLE extends boolean = boolean, >
    implements ThemeProperty<GROUND, UNDERGROUND, UNDERWATER, DESERT, SNOW, SKY, FOREST, GHOST_HOUSE, AIRSHIP, CASTLE> {

    //region -------------------- Fields --------------------

    #map?: ReadonlyMap<Themes, boolean>
    readonly #isInGroundTheme
    readonly #isInUndergroundTheme
    readonly #isInUnderwaterTheme
    readonly #isInDesertTheme
    readonly #isInSnowTheme
    readonly #isInSkyTheme
    readonly #isInForestTheme
    readonly #isInGhostHouseTheme
    readonly #isInAirshipTheme
    readonly #isInCastleTheme

    //endregion -------------------- Fields --------------------

    constructor(isInGroundTheme: GROUND, isInUndergroundTheme: UNDERGROUND, isInUnderwaterTheme: UNDERWATER, isInDesertTheme: DESERT, isInSnowTheme: SNOW, isInSkyTheme: SKY, isInForestTheme: FOREST, isInGhostHouseTheme: GHOST_HOUSE, isInAirshipTheme: AIRSHIP, isInCastleTheme: CASTLE,) {
        this.#isInGroundTheme = isInGroundTheme
        this.#isInUndergroundTheme = isInUndergroundTheme
        this.#isInUnderwaterTheme = isInUnderwaterTheme
        this.#isInDesertTheme = isInDesertTheme
        this.#isInSnowTheme = isInSnowTheme
        this.#isInSkyTheme = isInSkyTheme
        this.#isInForestTheme = isInForestTheme
        this.#isInGhostHouseTheme = isInGhostHouseTheme
        this.#isInAirshipTheme = isInAirshipTheme
        this.#isInCastleTheme = isInCastleTheme
    }

    //region -------------------- Getter methods --------------------

    public get isInGroundTheme() {
        return this.#isInGroundTheme
    }

    public get isInUndergroundTheme() {
        return this.#isInUndergroundTheme
    }

    public get isInUnderwaterTheme() {
        return this.#isInUnderwaterTheme
    }

    public get isInDesertTheme() {
        return this.#isInDesertTheme
    }

    public get isInSnowTheme() {
        return this.#isInSnowTheme
    }

    public get isInSkyTheme() {
        return this.#isInSkyTheme
    }

    public get isInForestTheme() {
        return this.#isInForestTheme
    }

    public get isInGhostHouseTheme() {
        return this.#isInGhostHouseTheme
    }

    public get isInAirshipTheme() {
        return this.#isInAirshipTheme
    }

    public get isInCastleTheme() {
        return this.#isInCastleTheme
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Convertor methods --------------------

    public toCourseThemeMap(): ReadonlyMap<Themes, boolean> {
        return this.#map ??= new Map(Themes.courseThemes.map(theme => [theme, theme.get(this),]))
    }

    //endregion -------------------- Convertor methods --------------------

}
