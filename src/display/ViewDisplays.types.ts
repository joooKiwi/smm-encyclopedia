declare const enum Enum {// eslint-disable-line @typescript-eslint/no-unused-vars

    TABLE,
    CARD,
    // NAME,
    LIST,

}

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum

export type Type = | 'none' | 'table' | 'card' | 'list'
// export type Type = | 'none' | 'table' | 'card' | 'name' | 'list'
