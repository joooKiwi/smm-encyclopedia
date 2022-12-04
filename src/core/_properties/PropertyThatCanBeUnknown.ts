import type {ClassThatCanBeUnknown}                     from 'core/_properties/ClassThatCanBeUnknown'
import type {Property}                                  from 'core/_properties/Property'
import type {NullOrBoolean, NullOrNumber, NullOrString} from 'util/types/nullable'

/**
 * A generic property with a value
 * and a <u>is unknown</u> property
 * contained in it.
 */
export interface PropertyThatCanBeUnknown<T, IS_UNKNOWN extends boolean = boolean, >
    extends Property<T>, ClassThatCanBeUnknown<IS_UNKNOWN> {

}

export type BooleanPropertyThatCanBeUnknown<B extends NullOrBoolean = NullOrBoolean, IS_UNKNOWN extends boolean = boolean, > = PropertyThatCanBeUnknown<B, IS_UNKNOWN>
export type NumberPropertyThatCanBeUnknown<N extends NullOrNumber = NullOrNumber, IS_UNKNOWN extends boolean = boolean, > = PropertyThatCanBeUnknown<N, IS_UNKNOWN>
export type StringPropertyThatCanBeUnknown<S extends NullOrString = NullOrString, IS_UNKNOWN extends boolean = boolean, > = PropertyThatCanBeUnknown<S, IS_UNKNOWN>
