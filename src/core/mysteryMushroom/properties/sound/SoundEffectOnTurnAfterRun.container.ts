import type {PossibleValuesReceived, SoundEffectOnTurnAfterRun} from 'core/mysteryMushroom/properties/sound/SoundEffectOnTurnAfterRun'
import type {ExtendedMap}                                       from 'util/extended/ExtendedMap'

import {NOT_APPLICABLE}       from 'util/commonVariables'
import {ExtendedMapContainer} from 'util/extended/ExtendedMap.container'

/**
 * @todo move the content in the constructor in the builder instead
 * @multiton
 * @provider
 */
export class SoundEffectOnTurnAfterRunContainer
    implements SoundEffectOnTurnAfterRun {

    //region -------------------- Fields --------------------

    static readonly #EVERY_CONTAINERS: ExtendedMap<NullOrBoolean, SoundEffectOnTurnAfterRun> = new ExtendedMapContainer()

    readonly #value

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    private constructor(value: PossibleValuesReceived,) {
        this.#value = value ?? NOT_APPLICABLE as NotApplicable
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get value(): BooleanOrNotApplicable {
        return this.#value
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Provider / Multiton method --------------------

    public static get(value: PossibleValuesReceived,): SoundEffectOnTurnAfterRun {
        return this.#EVERY_CONTAINERS.if(map => map.has(value))
            .isNotMet(reference => reference.set(value, new this(value),))
            .get(value)
    }

    //endregion -------------------- Provider / Multiton method --------------------

}
