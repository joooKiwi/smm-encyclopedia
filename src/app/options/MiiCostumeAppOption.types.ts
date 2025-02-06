declare const enum Enum {// eslint-disable-line @typescript-eslint/no-unused-vars

    IMAGE,
    NAME,
    OFFICIAL_NOTIFICATION,
    CATEGORY,

}

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum
