declare const enum Enum {// eslint-disable-line @typescript-eslint/no-unused-vars

    REWARD,
    NAME,
    DESCRIPTION,
    GAME_STYLE_AND_AREAS,
    TIME,
    AVAILABILITY,

}

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum
