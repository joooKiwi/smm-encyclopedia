import type {PropertyThatCanBeUnknown} from 'core/_properties/PropertyThatCanBeUnknown'
import type {PropertyWithComment}      from 'core/_properties/PropertyWithComment'

/**
 * A generic property with a value,
 * a <u>is unknown</u> property
 * and a comment that can be {@link NullOrString null or a string}
 * contained in it.
 */
export interface PropertyThatCanBeUnknownWithComment<T, IS_UNKNOWN extends boolean = boolean, COMMENT extends NullOrString = NullOrString, >
    extends PropertyWithComment<T, COMMENT>, PropertyThatCanBeUnknown<T, IS_UNKNOWN> {}
