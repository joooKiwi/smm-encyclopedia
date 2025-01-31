declare const enum Enum {// eslint-disable-line @typescript-eslint/no-unused-vars

    ICON,
    NAME,
    NIGHT_DESERT_WIND,

}

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum
