enum Enum {

    IMAGE,
    NAME,
    NIGHT_EFFECT,

}

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum
