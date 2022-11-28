import type {Texts} from './Texts'

enum Enum {

    YES,
    NO,

}

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum

export type TextsByValue<T, > = T extends boolean ? Texts : never
