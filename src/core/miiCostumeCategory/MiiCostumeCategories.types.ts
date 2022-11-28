import type {BasePath}             from '../../variables'
import type {MiiCostumeCategories} from './MiiCostumeCategories'

enum Enum {

    TOP,
    HEADGEAR,
    COSTUME,
    BOTTOM,

}

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum

//region -------------------- English name --------------------

export type PossibleEnglishName = | 'Top' | 'Headgear' | 'Costume' | 'Bottom'

//endregion -------------------- English name --------------------
//region -------------------- Image name --------------------

export type PossibleImageNumber = | 0 | 1 | 2 | 3
export type PossibleImageName = `DressIcon_0${PossibleImageNumber}`
export type PossibleImagePath = `/${BasePath}/category/${PossibleImageName}^s.tiff`

//endregion -------------------- Image name --------------------

export type MiiCostumeCategoriesByName<T extends string, > = T extends (| PossibleEnglishName | PossibleImageName) ? MiiCostumeCategories : never