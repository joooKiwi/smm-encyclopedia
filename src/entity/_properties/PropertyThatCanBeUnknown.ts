import type {ClassThatCanBeUnknown}                                     from './ClassThatCanBeUnknown';
import type {PossibleBoolean, PossibleNumber, PossibleString, Property} from './Property';

/**
 * A generic property with a value
 * and a <u>is unknown</u> property
 * contained in it.
 */
export interface PropertyThatCanBeUnknown<T, IS_UNKNOWN extends boolean = boolean, >
    extends Property<T>, ClassThatCanBeUnknown<IS_UNKNOWN> {

}

export type BooleanPropertyThatCanBeUnknown<B extends PossibleBoolean = PossibleBoolean, IS_UNKNOWN extends boolean = boolean, > = PropertyThatCanBeUnknown<B, IS_UNKNOWN>;
export type NumberPropertyThatCanBeUnknown<N extends PossibleNumber = PossibleNumber, IS_UNKNOWN extends boolean = boolean, > = PropertyThatCanBeUnknown<N, IS_UNKNOWN>;
export type StringPropertyThatCanBeUnknown<S extends PossibleString = PossibleString, IS_UNKNOWN extends boolean = boolean, > = PropertyThatCanBeUnknown<S, IS_UNKNOWN>;
