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
//region -------------------- URL --------------------

/** The url (name or value) for a {@link Times} */
export type PossibleUrl = | 'day' | 'night'
/** The url (name or value) possibility for a group of {@link Times} */
export type GroupUrl = | PossibleUrl | 'all'

/** The full url name possibility for a group of {@link Times} */
export type FullUrlName = `Time=${GroupUrl}`

/** The full url possibility for a group of {@link Times} */
export type FullUrlValue = `time-${GroupUrl}`

//endregion -------------------- URL --------------------
