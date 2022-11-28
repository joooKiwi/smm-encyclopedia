enum Enum {

    IMAGE,
    NAME,
    GAME,
    NIGHT_DESERT_WIND,

}

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum
