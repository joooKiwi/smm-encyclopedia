import type {ExtendedMap} from '../extended/ExtendedMap';

/**
 * The base provider giving a way to retrieve the containers by any possible values (array included).
 */
export interface Provider<K extends PossibleKeys, V> {

    get everyContainers(): ExtendedMap<K, V>

}

/** The possible arguments received for the {@link Provider} */
export type PossibleArgumentsReceived = readonly any[];
/**
 * The possible keys received for the {@link Provider}.
 * Note that giving a nullable value should not be a possibility.
 * And using an array is a valid key.
 */
export type PossibleKeys = NonNullable<any>;
