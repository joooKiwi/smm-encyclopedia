import type {Provider} from 'util/provider/Provider'

/**
 * A class "factory" that will get (or create) an instance of the class specified by some arguments.
 * It will store the key when creating and retrieving it at the end of the process.
 */
export interface ProviderWithExplicitKey<out T,
    out KEY extends unknown = unknown,
    out ARGUMENTS extends readonly unknown[] = readonly unknown[], >
    extends Provider<KEY, T> {

    get(key: KEY, ...argumentsReceived: ARGUMENTS): T

}
