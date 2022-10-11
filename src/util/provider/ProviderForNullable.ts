import type {PossibleKeys, Provider} from './Provider'

/**
 * A class "factory" that can get (or create) an instance
 * of a class with only null arguments.
 */
export interface ProviderForNullable<T, NULLABLE_T extends T = T, KEY extends PossibleKeys = PossibleKeys, >
    extends Provider<KEY, T> {

    get null(): NULLABLE_T

}
