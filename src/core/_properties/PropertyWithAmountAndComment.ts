import type {PropertyWithAmount}  from 'core/_properties/PropertyWithAmount'
import type {PropertyWithComment} from 'core/_properties/PropertyWithComment'

/**
 * A generic property with a value
 * and an amount that can be {@link NullOrNumber null or a number}
 * and a comment that can be {@link NullOrString null or a string}
 * contained in it.
 */
export interface PropertyWithAmountAndComment<T, AMOUNT extends NullOrNumber = NullOrNumber, COMMENT extends NullOrString = NullOrString, >
    extends PropertyWithAmount<T, AMOUNT>, PropertyWithComment<T, COMMENT> {

}

export type BooleanPropertyWithAmountAndComment<B extends NullOrBoolean = NullOrBoolean, AMOUNT extends NullOrNumber = NullOrNumber, COMMENT extends NullOrString = NullOrString, > = PropertyWithAmountAndComment<B, AMOUNT, COMMENT>
export type NumberPropertyWithAmountAndComment<N extends NullOrNumber = NullOrNumber, AMOUNT extends NullOrNumber = NullOrNumber, COMMENT extends NullOrString = NullOrString, > = PropertyWithAmountAndComment<N, AMOUNT, COMMENT>
export type StringPropertyWithAmountAndComment<S extends NullOrString = NullOrString, AMOUNT extends NullOrNumber = NullOrNumber, COMMENT extends NullOrString = NullOrString, > = PropertyWithAmountAndComment<S, AMOUNT, COMMENT>
