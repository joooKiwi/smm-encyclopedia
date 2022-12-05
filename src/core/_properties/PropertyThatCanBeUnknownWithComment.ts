import type {PropertyThatCanBeUnknown}                  from 'core/_properties/PropertyThatCanBeUnknown'
import type {PropertyWithComment}                       from 'core/_properties/PropertyWithComment'
import type {NullOrBoolean, NullOrNumber, NullOrString} from 'util/types/nullable'

/**
 * A generic property with a value,
 * a <u>is unknown</u> property
 * and a comment that can be {@link NullOrString null or a string}
 * contained in it.
 */
export interface PropertyThatCanBeUnknownWithComment<T, IS_UNKNOWN extends boolean = boolean, COMMENT extends NullOrString = NullOrString, >
    extends PropertyWithComment<T, COMMENT>, PropertyThatCanBeUnknown<T, IS_UNKNOWN> {

}

export type BooleanPropertyThatCanBeUnknownWithComment<B extends NullOrBoolean = NullOrBoolean, IS_UNKNOWN extends boolean = boolean, COMMENT extends NullOrString = NullOrString, > = PropertyThatCanBeUnknownWithComment<B, IS_UNKNOWN, COMMENT>
export type NumberPropertyThatCanBeUnknownWithComment<N extends NullOrNumber = NullOrNumber, IS_UNKNOWN extends boolean = boolean, COMMENT extends NullOrString = NullOrString, > = PropertyThatCanBeUnknownWithComment<N, IS_UNKNOWN, COMMENT>
export type StringPropertyThatCanBeUnknownWithComment<S extends NullOrString = NullOrString, IS_UNKNOWN extends boolean = boolean, COMMENT extends NullOrString = NullOrString, > = PropertyThatCanBeUnknownWithComment<S, IS_UNKNOWN, COMMENT>
