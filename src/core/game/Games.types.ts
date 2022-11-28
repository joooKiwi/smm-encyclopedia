import type {BasePath}                                       from '../../variables'
import type {Games}                                          from './Games'
import type {PossibleAcronym_Game, PossibleEnglishName_Game} from '../gameReference/GameReferences.types'

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
export type PossibleImagePath = `/${BasePath}/game/${PossibleEnglishName}.svg`

//endregion -------------------- Name / acronym / image --------------------

export type GamesByValue<T extends string, > = T extends (| PossibleEnglishName | PossibleAcronym | PossibleSimpleValue) ? Games : never
