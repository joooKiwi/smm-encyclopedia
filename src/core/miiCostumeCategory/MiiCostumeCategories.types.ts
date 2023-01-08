enum Enum {

    TOP,
    HEADGEAR,
    COSTUME,
    BOTTOM,

}

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum

export type PossibleEnglishName = | 'Top' | 'Headgear' | 'Costume' | 'Bottom'
