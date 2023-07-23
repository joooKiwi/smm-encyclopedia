/**
 * @template
 */
export interface SimpleThemeTemplate<GROUND extends boolean = boolean, UNDERGROUND extends boolean = boolean,
    UNDERWATER extends boolean = boolean, DESERT extends NullOrBoolean = NullOrBoolean,
    SNOW extends NullOrBoolean = NullOrBoolean, SKY extends NullOrBoolean = NullOrBoolean,
    FOREST extends NullOrBoolean = NullOrBoolean, GHOST_HOUSE extends boolean = boolean,
    AIRSHIP extends boolean = boolean, CASTLE extends boolean = boolean, > {

    ground: GROUND

    underground: UNDERGROUND

    underwater: UNDERWATER

    desert: DESERT

    snow: SNOW

    sky: SKY

    forest: FOREST

    ghostHouse: GHOST_HOUSE

    airship: AIRSHIP

    castle: CASTLE

}
