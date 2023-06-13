enum Enum {

    IMAGE,
    NAME,
    NIGHT_DESERT_WIND,

}

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum
