import type {ClassWithAmount} from 'core/_properties/ClassWithAmount'
import type {Property}        from 'core/_properties/Property'

/**
 * A generic property with a value
 * and an amount that can be {@link NullOrNumber null or a number}
 * contained in it.
 */
export interface PropertyWithAmount<T, AMOUNT extends NullOrNumber = NullOrNumber, >
    extends Property<T>, ClassWithAmount<AMOUNT> {}

export type PossibleAmountOnFalse = NullOr<0>
export type PossibleAmountOnTrue = NullOr<1>
