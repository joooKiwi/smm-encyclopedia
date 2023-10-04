enum Enum {

    YES,
    NO,

}

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum
