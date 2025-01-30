declare const enum Enum {

    SPECIAL_EFFECT_ON_ENTITIES,
    SCREEN_UPSIDE_DOWN,
    DARK,
    WIND,
    SLIPPERY,
    LOW_GRAVITY,
    POISON_LIQUID,
    ENTITIES_IN_WATER, CHARACTERS_IN_WATER,

}

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum

//region -------------------- English name --------------------

export type PossibleEnglishName = | 'Special effect on entities' | 'Screen upside down' | 'Dark' | 'Wind' | 'Slippery'
                                  | 'Low gravity' | 'Poison liquid' | `${| 'Entities' | 'Characters'} in water`

//endregion -------------------- English name --------------------
