declare const enum Enum {// eslint-disable-line @typescript-eslint/no-unused-vars

    TERRAIN,
    ITEM,
    ENEMY,
    GIZMO,

}

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum

export type PossibleEnglishName = | 'Terrain' | 'Item' | 'Enemy' | 'Gizmo'
