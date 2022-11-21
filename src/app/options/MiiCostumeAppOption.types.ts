enum Enum {

    IMAGE,
    NAME,
    OFFICIAL_NOTIFICATION,
    CATEGORY,

    CATEGORY_AS_TEXT,

}

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum
