declare const enum Enum {// eslint-disable-line @typescript-eslint/no-unused-vars
    UP,
    DOWN,
    LEFT,
    RIGHT,
    VERTICAL_JOINED,
    VERTICAL_SEPARATED,
    HORIZONTAL_JOINED,
    HORIZONTAL_SEPARATED,
}

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum
