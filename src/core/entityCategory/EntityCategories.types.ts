import type {BasePath} from 'variables'

enum Enum {

    TERRAIN,
    ITEM,
    ENEMY,
    GIZMO,

}

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum

//region -------------------- Name / image --------------------

export type PossibleEnglishName = | 'Terrain' | 'Item' | 'Enemy' | 'Gizmo'

export type PossibleImageNumber = | 0 | 1 | 2 | 3
export type PossibleImageName = `CategoryIcon_0${PossibleImageNumber}`
export type PossibleImagePath = `/${BasePath}/category/${PossibleImageName}^s.tiff`

//endregion -------------------- Name / image --------------------
