import type {GlobalThemeOption} from 'app/options/global/GlobalThemeOption'
import type {ImageAnimations}   from 'app/options/global/ImageAnimations'
import type {Images}            from 'app/options/global/Images'
import type {Sounds}            from 'app/options/global/Sounds'
import type {Texts}             from 'app/options/global/Texts'

enum Enum {

    IMAGES,
    IMAGE_ANIMATIONS,
    SOUNDS,

    SMM1,
    SMM3DS,
    SMM2,

    SMB,
    SMB3,
    SMW,
    NSMBU,
    SM3DW,

    GROUND,
    UNDERGROUND,
    UNDERWATER,
    DESERT,
    SNOW,
    SKY,
    FOREST,
    GHOST_HOUSE,
    AIRSHIP,
    CASTLE,

    DAY,
    NIGHT,

}

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum


export type PossibleAppOptionValue = | ImageAnimations | Images | Sounds | Texts | boolean | GlobalThemeOption
