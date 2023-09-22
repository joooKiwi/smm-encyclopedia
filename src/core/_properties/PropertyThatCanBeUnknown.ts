import type {Property}              from 'core/_properties/Property'
import type {ClassThatCanBeUnknown} from 'util/ClassThatCanBeUnknown'

/**
 * A generic property with a value
 * and a <u>is unknown</u> property
 * contained in it.
 */
export interface PropertyThatCanBeUnknown<T, IS_UNKNOWN extends boolean = boolean, >
    extends Property<T>, ClassThatCanBeUnknown<IS_UNKNOWN> {}
