import type {GlobalThemeOption} from 'app/options/global/GlobalThemeOption'
import type {ImageAnimations}   from 'app/options/global/ImageAnimations'
import type {Images}            from 'app/options/global/Images'
import type {Sounds}            from 'app/options/global/Sounds'
import type {Texts}             from 'app/options/global/Texts'

declare const enum Enum {

    IMAGES,
    IMAGE_ANIMATIONS,
    SOUNDS,

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

}

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum


export type PossibleAppOptionValue = | ImageAnimations | Images | Sounds | Texts | boolean | GlobalThemeOption
