declare const enum Enum {
    FEELINGS,
    STINGERS,
    REACTIONS,
    ANIMATIONS,
    MUSIC,
}

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum

export type PossibleEnglishName = | 'Feelings' | 'Stingers' | 'Reactions' | 'Animations' | 'Music'
