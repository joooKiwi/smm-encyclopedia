enum Enum {

    ACRONYM,
    NAME,
    AMOUNT,
    AMOUNT_IN_SMM1_AND_3DS,
    AMOUNT_IN_SMM2,

}

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum
