import type {Nullable} from '@joookiwi/type'

export interface DimensionOnList {
    readonly default: PossibleBootstrapRowDimensionOrAutomatic
    readonly small?: Nullable<PossibleBootstrapRowDimensionOrAutomatic>
    readonly medium?: Nullable<PossibleBootstrapRowDimensionOrAutomatic>
    readonly large?: Nullable<PossibleBootstrapRowDimensionOrAutomatic>
    readonly extraLarge?: Nullable<PossibleBootstrapRowDimensionOrAutomatic>
    readonly extraExtraLarge?: Nullable<PossibleBootstrapRowDimensionOrAutomatic>
}
