declare const enum Enum {

    IMAGE,
    NAME,
    OFFICIAL_NOTIFICATION,
    CATEGORY,

}

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum
