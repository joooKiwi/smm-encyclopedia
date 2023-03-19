enum Enum {

    TABLE,
    SIMPLE_LIST,
    CARD_LIST,

}

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum

//region -------------------- Type --------------------

export type Type = | 'table' | `${| 'simple' | 'card'}-list`
export type RouteType = | 'table' | 'list' | 'card'
export type HTMLType = | 'table' | `${| '' | 'card-'}list`

//endregion -------------------- Type --------------------
