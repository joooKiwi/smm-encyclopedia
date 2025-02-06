import type {GroupUrl} from 'core/time/Times.types'

declare const enum Enum {// eslint-disable-line @typescript-eslint/no-unused-vars
    ALL_TIMES,
    DAY,
    NIGHT,
}

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum

export type PossibleRouteName = `everyCharacterName (Time=${GroupUrl})`
