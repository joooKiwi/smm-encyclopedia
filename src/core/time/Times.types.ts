enum Enum {

    DAY,
    NIGHT,

}

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum

//region -------------------- Name & image path --------------------

export type PossibleEnglishName = | 'Day' | 'Night'

export type PossibleSimpleImagePath = | 'Sun' | 'Moon'

//endregion -------------------- Name & image path --------------------
