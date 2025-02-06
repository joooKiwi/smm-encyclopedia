declare const enum Enum {// eslint-disable-line @typescript-eslint/no-unused-vars
    NAME,
    REFERENCE_SMB,
    REFERENCE_SMB3,
    REFERENCE_SMW,
    REFERENCE_NSMBU,
    SOUND,
}

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum
