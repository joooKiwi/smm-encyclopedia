import type {GlobalThemeOption} from './GlobalThemeOption'
import type {ImageAnimations}   from './ImageAnimations'
import type {Images}            from './Images'
import type {Sounds}            from './Sounds'
import type {Texts}             from './Texts'

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
