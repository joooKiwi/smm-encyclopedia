import type {ClassThatCanBeUnknown} from 'core/_properties/ClassThatCanBeUnknown'
import type {Property}              from 'core/_properties/Property'

/**
 * A generic property with a value
 * and a <u>is unknown</u> property
 * contained in it.
 */
export interface PropertyThatCanBeUnknown<T, IS_UNKNOWN extends boolean = boolean, >
    extends Property<T>, ClassThatCanBeUnknown<IS_UNKNOWN> {}
