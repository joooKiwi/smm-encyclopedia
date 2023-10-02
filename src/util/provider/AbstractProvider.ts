import type {Provider} from 'util/provider/Provider'

export class AbstractProvider<K extends unknown, V>
    implements Provider<K, V> {

    //region -------------------- Fields --------------------

    #everyContainers?: Map<K, V>

    //endregion -------------------- Fields --------------------

    protected constructor() {
    }

    //region -------------------- Getter methods --------------------

    public get everyContainers(): Map<K, V> {
        return this.#everyContainers ??= new Map()
    }

    //endregion -------------------- Getter methods --------------------

}
