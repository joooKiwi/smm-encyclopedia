declare const enum Enum {

    SMM1_AND_SMM3DS_ICON,
    SMM2_ICON,

    NAME,
    CATEGORY,
    PLAYER_BEHAVIOUR,

    SOUNDS_IN_SMM1_AND_3DS,
    SOUNDS_IN_SMM1_AND_3DS_ONLY,
    SOUNDS_IN_SMM2,
    SOUNDS_IN_SMM2_ONLY,

}

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum
