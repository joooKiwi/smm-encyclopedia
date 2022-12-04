import type {CanMakeASoundOutOfAMusicBlock}                             from 'core/entity/properties/instrument/loader.types'
import type {CanMakeASoundOutOfAMusicBlockProperty, InstrumentProperty} from 'core/entity/properties/instrument/InstrumentProperty'
import type {Instrument}                                                from 'core/instrument/Instrument'
import type {PossibleInstrument}                                        from 'core/instrument/loader.types'
import type {ObjectHolder}                                              from 'util/holder/ObjectHolder'
import type {ProviderWithKey}                                           from 'util/provider/ProviderWithKey'

import {InstrumentPropertyContainer} from 'core/entity/properties/instrument/InstrumentProperty.container'
import {AbstractProvider}            from 'util/provider/AbstractProvider'

/**
 * @singleton
 */
export class InstrumentPropertyProvider
    extends AbstractProvider<Key, InstrumentProperty>
    implements ProviderWithKey<InstrumentProperty, Key, ArgumentsReceived> {

    //region -------------------- Singleton usage --------------------

    static #instance?: InstrumentPropertyProvider

    private constructor() {
        super()
    }

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------

    public get(key: Key, ...argumentsReceived: ArgumentsReceived): InstrumentProperty {
        return this.everyContainers.if(map => map.has(key))
            .isNotMet(map => map.set(key, new InstrumentPropertyContainer(...argumentsReceived),))
            .get(key)
    }

}

type Key = readonly [
    name: PossibleInstrument,
    canMakeASoundOutOfAMusicBlock: CanMakeASoundOutOfAMusicBlock,
]
type ArgumentsReceived = readonly [
    intruments: ObjectHolder<readonly Instrument[]>,
    canMakeASoundOutOfAMusicBlock: CanMakeASoundOutOfAMusicBlockProperty,
]
