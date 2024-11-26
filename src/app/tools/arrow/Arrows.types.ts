import type {EmptyString} from '@joookiwi/type'

enum Enum {
    UP,
    DOWN,
    LEFT,
    RIGHT,
    VERTICAL_JOINED,
    VERTICAL_SEPARATED,
    HORIZONTAL_JOINED,
    HORIZONTAL_SEPARATED,
}

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum

export type PossibleContainer = `arrow${| EmptyString | 's'}-container`
