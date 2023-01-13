import type {Themes}        from 'core/theme/Themes'
import type {NullOrBoolean} from 'util/types/nullable'

export interface ThemeProperty<GROUND extends boolean = boolean,
    UNDERGROUND extends boolean = boolean,
    UNDERWATER extends boolean = boolean,
    DESERT extends NullOrBoolean = NullOrBoolean,
    SNOW extends NullOrBoolean = NullOrBoolean,
    SKY extends NullOrBoolean = NullOrBoolean,
    FOREST extends NullOrBoolean = NullOrBoolean,
    GHOST_HOUSE extends boolean = boolean,
    AIRSHIP extends boolean = boolean,
    CASTLE extends boolean = boolean, > {

    get isInGroundTheme(): GROUND

    get isInUndergroundTheme(): UNDERGROUND

    get isInUnderwaterTheme(): UNDERWATER

    get isInDesertTheme(): DESERT

    get isInSnowTheme(): SNOW

    get isInSkyTheme(): SKY

    get isInForestTheme(): FOREST

    get isInGhostHouseTheme(): GHOST_HOUSE

    get isInAirshipTheme(): AIRSHIP

    get isInCastleTheme(): CASTLE

    /**
     * Return a {@link Map} based on the enum {@link Themes}
     * with every value stored inside this instance ({@link ThemeProperty})
     * as a boolean only.
     */
    toCourseThemeMap(): ReadonlyMap<Themes, boolean>

}
