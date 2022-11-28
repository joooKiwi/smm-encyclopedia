enum Enum {
    HEAD,
    FOOT,
}

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum

export type PossibleName = Lowercase<Names>
export type PossiblePlacement = | 'top' | 'bottom'
