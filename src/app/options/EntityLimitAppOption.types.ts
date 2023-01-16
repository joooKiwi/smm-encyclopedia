enum Enum {

    ACRONYM,
    NAME,
    AMOUNT,

}

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum
