import {Provider} from 'util/provider/Provider'

/**
 * A class "factory" that will get (or create) an instance
 * of the class specified by one argument
 */
export interface ProviderWithSingleArgumentAsKey<out ARGUMENT extends unknown,
    out T, >
    extends Provider<ARGUMENT, T> {

    get(argumentReceived: ARGUMENT,): T

}
