declare const enum Enum {// eslint-disable-line @typescript-eslint/no-unused-vars
    AUTOMATIC,
    LIGHT,
    DARK,
}

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum

export type PossibleColorMode = | 'auto' | 'light' | 'dark'
export type PossibleColor = | 'light' | 'dark'
