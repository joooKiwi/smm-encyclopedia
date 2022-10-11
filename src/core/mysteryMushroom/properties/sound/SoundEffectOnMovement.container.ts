import type {ExtendedMap}                                                                            from '../../../../util/extended/ExtendedMap'
import type {PossibleTranslationKeys, PossibleValues, PossibleValuesReceived, SoundEffectOnMovement} from './SoundEffectOnMovement'

import {ExtendedMapContainer} from '../../../../util/extended/ExtendedMap.container'
import {PropertyProvider}     from '../../../_properties/PropertyProvider'

/**
 * @todo move the content in the constructor in the builder instead
 * @multiton
 * @provider
 */
export class SoundEffectOnMovementContainer
    implements SoundEffectOnMovement {

    //region -------------------- Fields --------------------

    static readonly #EVERY_CONTAINERS: ExtendedMap<PossibleValuesReceived, SoundEffectOnMovement> = new ExtendedMapContainer()

    readonly #property

    //endregion -------------------- Fields --------------------

    private constructor(value: PossibleValuesReceived,) {
        this.#property = PropertyProvider.newBooleanContainer<PossibleValuesReceived, true, false, true>(value, true, false,)
    }

    //region -------------------- Getter methods --------------------

    public get value(): PossibleValues {
        return this.#property.value
    }

    public get translationKey(): PossibleTranslationKeys {
        return this.#property.comment
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Provider / Multiton method --------------------

    public static get(value: PossibleValuesReceived,): SoundEffectOnMovement {
        return this.#EVERY_CONTAINERS.if(map => map.has(value))
            .isNotMet(reference => reference.set(value, new this(value),))
            .get(value)
    }

    //endregion -------------------- Provider / Multiton method --------------------

}
