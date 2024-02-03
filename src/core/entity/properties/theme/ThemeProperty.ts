import type {Themes} from 'core/theme/Themes'

export interface ThemeProperty<out GROUND extends boolean = boolean,
    out UNDERGROUND extends boolean = boolean,
    out UNDERWATER extends boolean = boolean,
    out DESERT extends NullOrBooleanOrNotApplicable = NullOrBooleanOrNotApplicable,
    out SNOW extends NullOrBooleanOrNotApplicable = NullOrBooleanOrNotApplicable,
    out SKY extends NullOrBooleanOrNotApplicable = NullOrBooleanOrNotApplicable,
    out FOREST extends NullOrBooleanOrNotApplicable = NullOrBooleanOrNotApplicable,
    out GHOST_HOUSE extends boolean = boolean,
    out AIRSHIP extends boolean = boolean,
    out CASTLE extends boolean = boolean, > {

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
