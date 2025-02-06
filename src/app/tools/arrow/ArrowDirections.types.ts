declare const enum Enum {// eslint-disable-line @typescript-eslint/no-unused-vars
    VERTICAL,
    HORIZONTAL,
}

export type Ordinals = typeof Enum[Names]

export type Names = keyof typeof Enum

export type PossibleName = | 'vertical' | 'horizontal'
export type PossibleDirection = | 'row' | 'column'
