import type {SoundStates} from './SoundStates'

enum Enum {
    STANDBY,
    PLAYING,
    PAUSED,
    LOADING,
    EXCEPTION,
}

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum

export type EnglishName = | 'playing' | 'paused' | 'standby' | 'loading' | 'exception'
export type SoundStatesByName<T, > = T extends EnglishName ? SoundStates : never