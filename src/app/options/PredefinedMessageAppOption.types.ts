enum Enum {

    NAME,

}

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum
