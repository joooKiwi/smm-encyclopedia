import type {ThemeProperty} from 'core/entity/properties/theme/ThemeProperty'
import type {NullOrBoolean} from 'util/types/nullable'

import type {Themes} from 'core/theme/Themes'
import {Import}      from 'util/DynamicImporter'

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
    //region -------------------- Constructor --------------------

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

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get isInGroundTheme(): GROUND {
        return this.#isInGroundTheme
    }

    public get isInUndergroundTheme(): UNDERGROUND {
        return this.#isInUndergroundTheme
    }

    public get isInUnderwaterTheme(): UNDERWATER {
        return this.#isInUnderwaterTheme
    }

    public get isInDesertTheme(): DESERT {
        return this.#isInDesertTheme
    }

    public get isInSnowTheme(): SNOW {
        return this.#isInSnowTheme
    }

    public get isInSkyTheme(): SKY {
        return this.#isInSkyTheme
    }

    public get isInForestTheme(): FOREST {
        return this.#isInForestTheme
    }

    public get isInGhostHouseTheme(): GHOST_HOUSE {
        return this.#isInGhostHouseTheme
    }

    public get isInAirshipTheme(): AIRSHIP {
        return this.#isInAirshipTheme
    }

    public get isInCastleTheme(): CASTLE {
        return this.#isInCastleTheme
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Convertor methods --------------------

    public toCourseThemeMap(): ReadonlyMap<Themes, boolean> {
        return this.#map ??= new Map(Import.Themes.courseThemes.map(theme => [theme, theme.get(this),]))
    }

    //endregion -------------------- Convertor methods --------------------

}
