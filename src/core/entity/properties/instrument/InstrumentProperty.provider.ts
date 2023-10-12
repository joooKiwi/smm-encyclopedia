import type {Lazy} from '@joookiwi/lazy'

import type {CanMakeASoundOutOfAMusicBlock}                             from 'core/entity/properties/instrument/loader.types'
import type {CanMakeASoundOutOfAMusicBlockProperty, InstrumentProperty} from 'core/entity/properties/instrument/InstrumentProperty'
import type {Instrument}                                                from 'core/instrument/Instrument'
import type {PossibleInstrument}      from 'core/instrument/loader.types'
import type {ProviderWithExplicitKey} from 'util/provider/ProviderWithExplicitKey'

import {InstrumentPropertyContainer} from 'core/entity/properties/instrument/InstrumentProperty.container'
import {isArrayEquals}               from 'util/utilitiesMethods'
import {AbstractProvider}            from 'util/provider/AbstractProvider'

/** @singleton */
export class InstrumentPropertyProvider
    extends AbstractProvider<Key, InstrumentProperty>
    implements ProviderWithExplicitKey<InstrumentProperty, Key, ArgumentsReceived> {

    //region -------------------- Singleton usage --------------------

    static #instance?: InstrumentPropertyProvider

    private constructor() {
        super()
    }

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------

    public get(key: Key, instruments: Lazy<readonly Instrument[]>, canMakeASoundOutOfAMusicBlock: CanMakeASoundOutOfAMusicBlockProperty,): InstrumentProperty {
        const everyContainer = this.everyContainers
        let keyReferenced = key
        for (let [keyInMap,] of everyContainer) {
            if (!isArrayEquals(keyInMap, key,))
                continue
            keyReferenced = keyInMap
            break
        }
        if (keyReferenced === key)
            everyContainer.set(key, new InstrumentPropertyContainer(instruments, canMakeASoundOutOfAMusicBlock,),)
        return everyContainer.get(keyReferenced,)!
    }

}

type Key = readonly [
    name: PossibleInstrument,
    canMakeASoundOutOfAMusicBlock: CanMakeASoundOutOfAMusicBlock,
]
type ArgumentsReceived = readonly [
    instruments: Lazy<readonly Instrument[]>,
    canMakeASoundOutOfAMusicBlock: CanMakeASoundOutOfAMusicBlockProperty,
]
