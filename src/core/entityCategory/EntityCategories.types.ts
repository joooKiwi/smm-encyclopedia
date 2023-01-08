enum Enum {

    TERRAIN,
    ITEM,
    ENEMY,
    GIZMO,

}

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum

export type PossibleEnglishName = | 'Terrain' | 'Item' | 'Enemy' | 'Gizmo'
