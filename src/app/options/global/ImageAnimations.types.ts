import type {ImageAnimations} from 'app/options/global/ImageAnimations'

declare const enum Enum {// eslint-disable-line @typescript-eslint/no-unused-vars

    SEPARATED,
    YES,
    NO,

}

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum

export type PossibleImageAnimation = | boolean | 'separated'
export type ImageAnimationByValue<T, > = T extends PossibleImageAnimation ? ImageAnimations : never
