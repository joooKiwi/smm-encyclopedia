enum Enum {

    ACRONYM,
    NAME,
    AMOUNT,
    TYPE,

}

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum
