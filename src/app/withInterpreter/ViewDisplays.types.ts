enum Enum {

    TABLE,
    SIMPLE_LIST,
    CARD_LIST,

}

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum

export type Type = | 'table' | `${| 'simple' | 'card'}-list`
export type PossibleUrlValue = | 'table' | 'list' | 'card'
