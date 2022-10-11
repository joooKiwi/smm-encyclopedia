import type {EnumName} from './Enum.types'

export interface Enumerable<O extends number = number, N extends string = string, > {

    /**
     * Get the name on the current enum instance (not to be confused with the class name).
     *
     * @note This will fail if called during the construction
     */
    get name(): N

    /**
     * Get the ordinal on the current enum instance.
     *
     * @note This will work in the constructors.
     */
    get ordinal(): O

    [Symbol.toStringTag]: EnumName

}
