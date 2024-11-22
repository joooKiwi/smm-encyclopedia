enum Enum {
    LEVEL_NUMBER,
    NAME,
    GAME_STYLE_AND_AREAS,
    TIME,
}

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum
