import type {Themes} from '../theme/Themes';

export interface ThemeProperty<GROUND extends boolean = boolean,
    UNDERGROUND extends boolean = boolean,
    UNDERWATER extends boolean = boolean,
    DESERT extends | boolean | null = | boolean | null,
    SNOW extends | boolean | null = | boolean | null,
    SKY extends | boolean | null = | boolean | null,
    FOREST extends | boolean | null = | boolean | null,
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
     * with every values stored inside this instance ({@link ThemeProperty})
     * as a boolean only.
     */
    toCourseThemeMap(): ReadonlyMap<Themes, boolean>

}

export type ExclusiveSMM1ThemeProperty = ThemeProperty<true, true, true, null, null, null, null, true, true, true>;
export type ExclusiveSMM2ThemeProperty<GROUND extends boolean = boolean, UNDERGROUND extends boolean = boolean, UNDERWATER extends boolean = boolean, DESERT extends boolean = boolean, SNOW extends boolean = boolean, SKY extends boolean = boolean, FOREST extends boolean = boolean, GHOST_HOUSE extends boolean = boolean, AIRSHIP extends boolean = boolean, CASTLE extends boolean = boolean, >
    = ThemeProperty<GROUND, UNDERGROUND, UNDERWATER, DESERT, SNOW, SKY, FOREST, GHOST_HOUSE, AIRSHIP, CASTLE>;
export type ExclusiveSMM2ThemePropertyInSM3DW = ExclusiveSMM2ThemeProperty;
export type ExclusiveSMM2ThemePropertyInAnyStyle = ExclusiveSMM2ThemeProperty;
