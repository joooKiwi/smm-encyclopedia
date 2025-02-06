declare const enum Enum {// eslint-disable-line @typescript-eslint/no-unused-vars
    NAME,
    FIRST_APPEARANCE,
}

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum
