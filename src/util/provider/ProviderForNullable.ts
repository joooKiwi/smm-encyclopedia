import type {Provider} from 'util/provider/Provider'

/**
 * A class "factory" that can get (or create) an instance
 * of a class with only null arguments.
 */
export interface ProviderForNullable<out T,
    out NULLABLE_T extends T = T,
    out KEY extends unknown = unknown, >
    extends Provider<KEY, T> {

    get null(): NULLABLE_T

}
