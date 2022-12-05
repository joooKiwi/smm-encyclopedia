import type {BasePath}              from 'variables'
import type {SoundEffectCategories} from 'core/soundEffectCategory/SoundEffectCategories'

enum Enum {
    FEELINGS,
    STINGERS,
    REACTIONS,
    ANIMATIONS,
    MUSIC,
}

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum

//region -------------------- Name --------------------

export type PossibleEnglishName = | 'Feelings' | 'Stingers' | 'Reactions' | 'Animations' | 'Music'
export type EnglishNames = readonly ['Feelings', 'Stingers', 'Reactions', 'Animations', 'Music',]

//endregion -------------------- Name --------------------
//region -------------------- Image --------------------

export type PossibleImageNumber = | 4 | 5 | 6 | 7 | 8
export type PossibleImageName = `CategoryIcon_0${PossibleImageNumber}`
export type PossibleImagePath = `/${BasePath}/category/${PossibleImageName}^s.tiff`

//endregion -------------------- Image --------------------

export type SoundEffectCategoriesByName<T extends string, > = T extends PossibleEnglishName ? SoundEffectCategories : never
