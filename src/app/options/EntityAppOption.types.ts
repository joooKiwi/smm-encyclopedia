declare const enum Enum {

    IMAGE_IN_SMB,
    IMAGE_IN_SMB3,
    IMAGE_IN_SMW,
    IMAGE_IN_NSMBU,
    IMAGE_IN_SM3DW,

    NAME,
    GAME,
    GAME_STYLE,
    COURSE_THEME,
    TIME,
    CATEGORY,

    EDITOR_LIMIT_IN_SMM1_AND_3DS,
    EDITOR_LIMIT_IN_SMM1_AND_3DS_ONLY,
    EDITOR_LIMIT_IN_SMM2,
    EDITOR_LIMIT_IN_SMM2_ONLY,
    PLAY_LIMIT,

}

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum
