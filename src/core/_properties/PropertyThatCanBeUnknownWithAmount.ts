import type {PossibleAmount}                                  from './ClassWithAmount'
import type {PossibleBoolean, PossibleNumber, PossibleString} from './Property'
import type {PropertyWithAmount}                              from './PropertyWithAmount'
import type {PropertyThatCanBeUnknown}                        from './PropertyThatCanBeUnknown'

/**
 * A generic property with a value,
 * a <u>is unknown</u> property
 * and an amount that can be {@link PossibleAmount null or a number}
 * contained in it.
 */
export interface PropertyThatCanBeUnknownWithAmount<T, IS_UNKNOWN extends boolean = boolean, AMOUNT extends PossibleAmount = PossibleAmount, >
    extends PropertyWithAmount<T, AMOUNT>, PropertyThatCanBeUnknown<T, IS_UNKNOWN> {

}

export type BooleanPropertyThatCanBeUnknownWithAmount<B extends PossibleBoolean = PossibleBoolean, IS_UNKNOWN extends boolean = boolean, AMOUNT extends PossibleAmount = PossibleAmount, > = PropertyThatCanBeUnknownWithAmount<B, IS_UNKNOWN, AMOUNT>
export type NumberPropertyThatCanBeUnknownWithAmount<N extends PossibleNumber = PossibleNumber, IS_UNKNOWN extends boolean = boolean, AMOUNT extends PossibleAmount = PossibleAmount, > = PropertyThatCanBeUnknownWithAmount<N, IS_UNKNOWN, AMOUNT>
export type StringPropertyThatCanBeUnknownWithAmount<S extends PossibleString = PossibleString, IS_UNKNOWN extends boolean = boolean, AMOUNT extends PossibleAmount = PossibleAmount, > = PropertyThatCanBeUnknownWithAmount<S, IS_UNKNOWN, AMOUNT>
