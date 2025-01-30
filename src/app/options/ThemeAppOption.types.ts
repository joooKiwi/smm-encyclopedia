declare const enum Enum {

    ICON,
    ENDLESS_MARIO_ICON,
    NAME,
    NIGHT_EFFECT,

}

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum
