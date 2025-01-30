declare const enum Enum {
    NONE,
    AT_THE_END,
    DURING_THE_PLAY,
}

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum

export type PossibleRepeatableName = | 'non repeatable' | `repeatable (${| 'at the end' | 'during the play'})`
