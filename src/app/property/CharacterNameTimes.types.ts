import type {GroupUrl} from 'core/time/Times.types'

declare const enum Enum {
    ALL_TIMES,
    DAY,
    NIGHT,
}

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum

export type PossibleRouteName = `everyCharacterName (Time=${GroupUrl})`
