import type {BasePath} from 'variables'
import type {Times}    from 'core/time/Times'

enum Enum {

    DAY,
    NIGHT,

}

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum

//region -------------------- Name & image path --------------------

export type PossibleEnglishName = | 'Day' | 'Night'

export type PossibleSimpleImagePath = | 'Sun' | 'Moon'
export type PossibleImagePath = `/${BasePath}/time/${PossibleSimpleImagePath}.png`

//endregion -------------------- Name & image path --------------------

export type TimesByName<T extends string, > = T extends PossibleEnglishName ? Times : never
