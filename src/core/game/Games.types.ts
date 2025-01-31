import type {PossibleAcronym_Game, PossibleEnglishName_Game} from 'core/gameReference/GameReferences.types'

declare const enum Enum {// eslint-disable-line @typescript-eslint/no-unused-vars

    SUPER_MARIO_MAKER_1,
    SUPER_MARIO_MAKER_FOR_NINTENDO_3DS,
    SUPER_MARIO_MAKER_2,

}

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum

//region -------------------- Name / acronym --------------------

/** The possible <b>acronym</b> for any given {@link Games} */
export type PossibleAcronym = PossibleAcronym_Game
/** The possible <b>english name</b> for any given {@link Games} */
export type PossibleEnglishName = PossibleEnglishName_Game

//endregion -------------------- Name / acronym --------------------
//region -------------------- URL --------------------

export type PossibleSimpleValue = '1' | '2' | '3DS'
/** Every possibility for any group of {@link Games} (for a name) */
export type GroupUrlName = | PossibleSimpleValue | '1&3DS' | '1&2' | '3DS&2' | 'all'
type GroupUrlName_WithNotSMM2 = | '1' | '3DS' | '1&3DS'
type GroupUrlName_WithSMM2 = | '2' | '1&2' | '3DS&2' | 'all'
/** Every possibility for any group of {@link Games} (as a full name) */
export type FullGroupUrlName = `Game=${GroupUrlName}`
/** Every possibility for any group of {@link Games} (as a full name in {@link SMM1} or {@link SMM3DS}) */
export type FullGroupUrlName_WithNotSMM2 = `Game=${GroupUrlName_WithNotSMM2}`
/** Every possibility for any group of {@link Games} (as a full name in {@link SMM2}) */
export type FullGroupUrlName_WithSMM2 = `Game=${GroupUrlName_WithSMM2}`

export type PossibleUrlValue = | '1' | '2' | '3ds'
/** Every possibility for any group of {@link Games} (for an url value) */
export type GroupUrlValue = | PossibleUrlValue | '1,3ds' | '1,2' | '3ds,2' | 'all'
type GroupUrlValue_WithNotSMM2 = | '1' | '3ds' | '1,3ds'
type GroupUrlValue_WithSMM2 = | '2' | '1,2' | '3ds,2' | 'all'
/** Every possibility for any group of {@link Games} (for a full url value) */
export type FullUrlValue = `game-${GroupUrlValue}`
/** Every possibility for any group of {@link Games} (as a full url value in {@link SMM1} or {@link SMM3DS}) */
export type FullUrlValue_WithNotSMM2 = `game-${GroupUrlValue_WithNotSMM2}`
/** Every possibility for any group of {@link Games} (as a full url value in {@link SMM2}) */
export type FullUrlValue_WithSMM2 = `game-${GroupUrlValue_WithSMM2}`

//endregion -------------------- URL --------------------
