declare const enum Enum {// eslint-disable-line @typescript-eslint/no-unused-vars
    ICON,
    NAME,
    MAXIMUM_AMOUNT_OF_COURSE_TO_UPLOAD,
    AMOUNT_OF_STAR_TO_UNLOCK,
}

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum
