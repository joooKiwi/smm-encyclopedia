import type {PossibleAmount}                                  from './ClassWithAmount';
import type {PossibleBoolean, PossibleNumber, PossibleString} from './Property';
import type {PossibleComment}                                 from './ClassWithComment';
import type {PropertyWithAmount}                              from './PropertyWithAmount';
import type {PropertyWithComment}                             from './PropertyWithComment';

/**
 * A generic property with a value
 * and an amount that can be {@link PossibleAmount null or a number}
 * and a comment that can be {@link PossibleComment null or a string}
 * contained in it.
 */
export interface PropertyWithAmountAndComment<T, AMOUNT extends PossibleAmount = PossibleAmount, COMMENT extends PossibleComment = PossibleComment, >
    extends PropertyWithAmount<T, AMOUNT>, PropertyWithComment<T, COMMENT> {

}

export type BooleanPropertyWithAmountAndComment<B extends PossibleBoolean = PossibleBoolean, AMOUNT extends PossibleAmount = PossibleAmount, COMMENT extends PossibleComment = PossibleComment, > = PropertyWithAmountAndComment<B, AMOUNT, COMMENT>;
export type NumberPropertyWithAmountAndComment<N extends PossibleNumber = PossibleNumber, AMOUNT extends PossibleAmount = PossibleAmount, COMMENT extends PossibleComment = PossibleComment, > = PropertyWithAmountAndComment<N, AMOUNT, COMMENT>;
export type StringPropertyWithAmountAndComment<S extends PossibleString = PossibleString, AMOUNT extends PossibleAmount = PossibleAmount, COMMENT extends PossibleComment = PossibleComment, > = PropertyWithAmountAndComment<S, AMOUNT, COMMENT>;
