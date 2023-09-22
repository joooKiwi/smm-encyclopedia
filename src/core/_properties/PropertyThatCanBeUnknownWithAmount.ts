import type {PropertyThatCanBeUnknown} from 'core/_properties/PropertyThatCanBeUnknown'
import type {PropertyWithAmount}       from 'core/_properties/PropertyWithAmount'

/**
 * A generic property with a value,
 * a <u>is unknown</u> property
 * and an amount that can be {@link NullOrNumber null or a number}
 * contained in it.
 */
export interface PropertyThatCanBeUnknownWithAmount<T, IS_UNKNOWN extends boolean = boolean, AMOUNT extends NullOrNumber = NullOrNumber, >
    extends PropertyWithAmount<T, AMOUNT>, PropertyThatCanBeUnknown<T, IS_UNKNOWN> {}
