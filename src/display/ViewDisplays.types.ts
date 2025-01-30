declare const enum Enum {

    TABLE,
    CARD,
    // NAME,
    LIST,

}

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum

export type Type = | 'none' | 'table' | 'card' | 'list'
// export type Type = | 'none' | 'table' | 'card' | 'name' | 'list'
