import type {NullOrBoolean} from '../../../../util/types'
import type {ThemeProperty} from './ThemeProperty'

import {Themes} from '../../../theme/Themes'

/**
 * @classWithDynamicImport {@link Themes}
 */
export class ThemePropertyContainer<GROUND extends boolean = boolean, UNDERGROUND extends boolean = boolean, UNDERWATER extends boolean = boolean, DESERT extends NullOrBoolean = NullOrBoolean, SNOW extends NullOrBoolean = NullOrBoolean, SKY extends NullOrBoolean = NullOrBoolean, FOREST extends NullOrBoolean = NullOrBoolean, GHOST_HOUSE extends boolean = boolean, AIRSHIP extends boolean = boolean, CASTLE extends boolean = boolean, >
    implements ThemeProperty<GROUND, UNDERGROUND, UNDERWATER, DESERT, SNOW, SKY, FOREST, GHOST_HOUSE, AIRSHIP, CASTLE> {

    //region -------------------- Fields --------------------

    #map?: ReadonlyMap<Themes, boolean>
    readonly #isInGroundTheme
    readonly #isInUndergroundTheme
    readonly #isInUnderwaterTheme
    readonly #isInDesertTheme: DESERT//FIXME this type is only there to help typescript (it's not the standard)
    readonly #isInSnowTheme: SNOW//FIXME this type is only there to help typescript (it's not the standard)
    readonly #isInSkyTheme: SKY//FIXME this type is only there to help typescript (it's not the standard)
    readonly #isInForestTheme: FOREST//FIXME this type is only there to help typescript (it's not the standard)
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
