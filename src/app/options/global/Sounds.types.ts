import type {Sounds} from './Sounds'

enum Enum {

    YES,
    NO,

}

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum

export type SoundsByValue<T, > = T extends boolean ? Sounds : never
