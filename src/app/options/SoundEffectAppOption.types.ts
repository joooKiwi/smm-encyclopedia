enum Enum {

    SMM1_AND_SMM3DS_ICON,
    SMM2_ICON,
    NAME,
    CATEGORY,
    PLAYER_BEHAVIOUR,
    SOUNDS,

}

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum
