import type {Provider} from 'util/provider/Provider'

/**
 * A class "factory" that will get (or create) an instance
 * of the class specified by some arguments.
 */
export interface ProviderWithMultipleArgumentsAsKey<out ARGUMENTS extends readonly unknown[],
    out T, >
    extends Provider<ARGUMENTS, T> {

    get(...argumentsReceived: ARGUMENTS): T

}
