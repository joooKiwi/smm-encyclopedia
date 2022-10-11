import type {ClassWithAmount, PossibleAmount}                           from './ClassWithAmount'
import type {PossibleBoolean, PossibleNumber, PossibleString, Property} from './Property'

/**
 * A generic property with a value
 * and an amount that can be {@link PossibleAmount null or a number}
 * contained in it.
 */
export interface PropertyWithAmount<T, AMOUNT extends PossibleAmount = PossibleAmount, >
    extends Property<T>, ClassWithAmount<AMOUNT> {

}

export type BooleanPropertyWithAmount<B extends PossibleBoolean = PossibleBoolean, AMOUNT extends PossibleAmount = PossibleAmount, > = PropertyWithAmount<B, AMOUNT>
export type NumberPropertyWithAmount<N extends PossibleNumber = PossibleNumber, AMOUNT extends PossibleAmount = PossibleAmount, > = PropertyWithAmount<N, AMOUNT>
export type StringPropertyWithAmount<S extends PossibleString = PossibleString, AMOUNT extends PossibleAmount = PossibleAmount, > = PropertyWithAmount<S, AMOUNT>

export type PossibleAmountOnFalse = null | 0
export type PossibleAmountOnTrue = null | 1
