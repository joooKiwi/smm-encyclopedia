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
export type PossibleSimpleValue = '1' | '2' | '3DS'

//endregion -------------------- Name / acronym / image --------------------
//region -------------------- URL --------------------

export type GroupUrlName = | PossibleSimpleValue | '1&3DS' | '1&2' | '3DS&2' | 'all'
type GroupUrlName_WithNotSMM2 = | '1' | '3DS' | '1&3DS'
type GroupUrlName_WithSMM2 = | '2' | '1&2' | '3DS&2' | 'all'
export type FullGroupValidUrlName = `Game=${GroupUrlName}`
export type FullGroupValidUrlName_WithNotSMM2 = `Game=${GroupUrlName_WithNotSMM2}`
export type FullGroupValidUrlName_WithSMM2 = `Game=${GroupUrlName_WithSMM2}`

export type PossibleSimpleUrlValue = Lowercase<PossibleSimpleValue>
export type GroupUrlValue = | PossibleSimpleUrlValue | '1,3ds' | '1,2' | '3ds,2' | 'all'
type GroupUrlValue_WithNotSMM2 = | '1' | '3ds' | '1,3ds'
type GroupUrlValue_WithSMM2 = | '2' | '1,2' | '3ds,2' | 'all'
export type FullValidUrlValue = `game-${GroupUrlValue}`
export type FullValidUrlValue_WithNotSMM2 = `game-${GroupUrlValue_WithNotSMM2}`
export type FullValidUrlValue_WithSMM2 = `game-${GroupUrlValue_WithSMM2}`

//endregion -------------------- URL --------------------
