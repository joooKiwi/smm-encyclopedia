import type {PossibleArgumentsReceived, Provider} from './Provider'

/**
 * A class "factory" that will get (or create) an instance
 * of the class specified by some arguments.
 */
export interface ProviderWithoutKey<T, ARGUMENTS extends PossibleArgumentsReceived = PossibleArgumentsReceived, >
    extends Provider<ARGUMENTS, T> {

    get(...argumentsReceived: ARGUMENTS): T

}
