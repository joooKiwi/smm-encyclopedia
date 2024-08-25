enum Enum {
    NAME,
    EDITOR_VOICE,
}

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum
