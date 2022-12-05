import type {ClassWithAmount}                                   from 'core/_properties/ClassWithAmount'
import type {Property}                                          from 'core/_properties/Property'
import type {NullOr, NullOrBoolean, NullOrNumber, NullOrString} from 'util/types/nullable'

/**
 * A generic property with a value
 * and an amount that can be {@link NullOrNumber null or a number}
 * contained in it.
 */
export interface PropertyWithAmount<T, AMOUNT extends NullOrNumber = NullOrNumber, >
    extends Property<T>, ClassWithAmount<AMOUNT> {

}

export type BooleanPropertyWithAmount<B extends NullOrBoolean = NullOrBoolean, AMOUNT extends NullOrNumber = NullOrNumber, > = PropertyWithAmount<B, AMOUNT>
export type NumberPropertyWithAmount<N extends NullOrNumber = NullOrNumber, AMOUNT extends NullOrNumber = NullOrNumber, > = PropertyWithAmount<N, AMOUNT>
export type StringPropertyWithAmount<S extends NullOrString = NullOrString, AMOUNT extends NullOrNumber = NullOrNumber, > = PropertyWithAmount<S, AMOUNT>

export type PossibleAmountOnFalse = NullOr<0>
export type PossibleAmountOnTrue = NullOr<1>
