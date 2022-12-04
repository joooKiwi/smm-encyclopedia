import type {ArrowDirections} from 'app/tools/arrow/ArrowDirections'

enum Enum {
    VERTICAL,
    HORIZONTAL,
}

export type Ordinals = typeof Enum[Names]

export type Names = keyof typeof Enum

export type PossibleName = | 'vertical' | 'horizontal'
export type ArrowDirectionsByValue<T, > = T extends PossibleName ? ArrowDirections : never
