import type {PossibleArgumentsReceived, PossibleKeys, Provider} from 'util/provider/Provider'

/**
 * A class "factory" that will get (or create) an instance of the class specified by some arguments.
 * It will store the key when creating and retrieving it at the end of the process.
 */
export interface ProviderWithKey<T, KEY extends PossibleKeys = PossibleKeys, ARGUMENTS extends PossibleArgumentsReceived = PossibleArgumentsReceived, >
    extends Provider<KEY, T> {

    get(key: KEY, ...argumentsReceived: ARGUMENTS): T

}
