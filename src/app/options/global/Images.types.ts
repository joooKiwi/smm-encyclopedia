import type {Images} from './Images'

enum Enum {

    YES,
    NO,

}

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum

export type ImagesByValue<T, > = T extends boolean ? Images : never
