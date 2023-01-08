enum Enum {
    FEELINGS,
    STINGERS,
    REACTIONS,
    ANIMATIONS,
    MUSIC,
}

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum

//region -------------------- Name --------------------

export type PossibleEnglishName = | 'Feelings' | 'Stingers' | 'Reactions' | 'Animations' | 'Music'
export type EnglishNames = readonly ['Feelings', 'Stingers', 'Reactions', 'Animations', 'Music',]

//endregion -------------------- Name --------------------
//region -------------------- Image --------------------

export type PossibleImageNumber = | 4 | 5 | 6 | 7 | 8
export type PossibleImageName = `CategoryIcon_0${PossibleImageNumber}`

//endregion -------------------- Image --------------------
