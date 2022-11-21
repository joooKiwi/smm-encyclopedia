enum Enum {

    GAME,
    NAME,
    CATEGORY,
    PLAYER_BEHAVIOUR,
    SOUNDS,

}

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum
