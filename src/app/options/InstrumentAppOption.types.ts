enum Enum {
    NAME,
    SOUND,
}

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum
