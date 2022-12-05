import type {ExtendedMap}            from 'util/extended/ExtendedMap'
import type {PossibleKeys, Provider} from 'util/provider/Provider'

import {ExtendedMapContainer} from 'util/extended/ExtendedMap.container'

export class AbstractProvider<K extends PossibleKeys, V>
    implements Provider<K, V> {

    //region -------------------- Fields --------------------

    #everyContainers?: ExtendedMap<K, V>

    //endregion -------------------- Fields --------------------

    protected constructor() {
    }

    //region -------------------- Getter methods --------------------

    public get everyContainers(): ExtendedMap<K, V> {
        return this.#everyContainers ??= new ExtendedMapContainer()
    }

    //endregion -------------------- Getter methods --------------------

}
