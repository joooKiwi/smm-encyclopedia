/**
 * The base provider giving a way to retrieve the containers
 * by any possible values (array included)
 */
export interface Provider<K extends unknown, V> {

    get everyContainers(): Map<K, V>

}
