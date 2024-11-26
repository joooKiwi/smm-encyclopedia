enum Enum {

    TABLE,
    // NAME_LIST,
    SIMPLE_LIST,
    CARD_LIST,

}

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum

//region -------------------- Type --------------------

export type Type = | 'table' | `${| 'simple' | 'card'}-list`
// export type Type = | 'table' | `${| 'name' | 'simple' | 'card'}-list`

export type PossibleUrlValue = | 'table' | 'list' | 'card'
// export type PossibleUrlValue = | 'table' | 'name' | 'list' | 'card'

//endregion -------------------- Type --------------------
