import type {PossibleAcronym_Game, PossibleEnglishName_Game} from 'core/gameReference/GameReferences.types'

enum Enum {

    SUPER_MARIO_MAKER_1,
    SUPER_MARIO_MAKER_FOR_NINTENDO_3DS,
    SUPER_MARIO_MAKER_2,

}

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum

//region -------------------- Name / acronym / image --------------------

export type PossibleAcronym = PossibleAcronym_Game
export type PossibleEnglishName = PossibleEnglishName_Game
export type PossibleSimpleValue = `${| 1 | 2}` | '3DS'

//endregion -------------------- Name / acronym / image --------------------~
//region -------------------- URL --------------------~

export type GroupUrlSimpleValue = | PossibleSimpleValue | `${PossibleSimpleValue}&${PossibleSimpleValue}` | 'all'
export type FullUrlSimpleValue = `Game=${GroupUrlSimpleValue}`
export type GroupValidUrlSimpleValue = | PossibleSimpleValue | `1&${| '3DS' | 2}` | '3DS&2' | 'all'
export type FullValidUrlSimpleValue = `Game=${GroupValidUrlSimpleValue}`

export type PossibleSimpleUrlValue = Lowercase<PossibleSimpleValue>
export type GroupUrlValue = | PossibleSimpleUrlValue | `${PossibleSimpleUrlValue},${PossibleSimpleUrlValue}` | 'all'
export type FullUrlValue = `game-${GroupUrlValue}`
export type GroupValidUrlValue = | PossibleSimpleUrlValue | `1,${| '3ds' | 2}` | '3ds,2' | 'all'
export type FullValidUrlValue = `game-${GroupValidUrlValue}`

//endregion -------------------- URL --------------------~
