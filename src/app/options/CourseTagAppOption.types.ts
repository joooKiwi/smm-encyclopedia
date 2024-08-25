enum Enum {
    NAME,
    FIRST_APPEARANCE,
}

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum
