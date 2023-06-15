import type {Enumerable, PossibleEnumerableValueBy} from '@joookiwi/enumerable/dist/types'

import type {NullOr} from 'util/types/nullable'

/** A simple class made to be used in a static context of an {@link Enumerable} */
export interface ClassWithCurrent<T extends Enumerable, > {

    /** Get the current value or null <i>(if it has not been initialized)</i> */
    get currentOrNull(): NullOr<T>

    /**
     * Get the current value
     *
     * @throws {ReferenceError} The value has not been initialized
     */
    get current(): T

    /**
     * Set the current value by a value applicable to an {@link EnumerableConstructor}
     *
     * @param value The value to set
     * @see Enum.getValueOn
     */
    set current(value: PossibleEnumerableValueBy<T>,)

}

