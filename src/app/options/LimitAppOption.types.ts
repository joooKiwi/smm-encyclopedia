enum Enum {

    ACRONYM,
    NAME,
    DESCRIPTION,
    AMOUNT_IN_ALL_GAMES,
    AMOUNT_IN_SMM1_AND_3DS,
    AMOUNT_IN_SMM2,

}

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum
