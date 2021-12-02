/**
 * @template
 */
export interface SimpleThemeTemplate<GROUND extends boolean = boolean, UNDERGROUND extends boolean = boolean,
    UNDERWATER extends boolean = boolean, DESERT extends | boolean | null = | boolean | null,
    SNOW extends | boolean | null = | boolean | null, SKY extends | boolean | null = | boolean | null,
    FOREST extends | boolean | null = | boolean | null, GHOST_HOUSE extends boolean = boolean,
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
