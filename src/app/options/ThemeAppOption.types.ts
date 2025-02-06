declare const enum Enum {// eslint-disable-line @typescript-eslint/no-unused-vars

    ICON,
    ENDLESS_MARIO_ICON,
    NAME,
    NIGHT_EFFECT,

}

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum
