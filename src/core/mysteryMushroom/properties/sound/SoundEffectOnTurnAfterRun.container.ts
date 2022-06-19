import type {PossibleValues, PossibleValuesReceived, SoundEffectOnTurnAfterRun} from './SoundEffectOnTurnAfterRun';

import {PropertyProvider} from '../../../_properties/PropertyProvider';

/**
 * @multiton
 * @provider
 */
export class SoundEffectOnTurnAfterRunContainer
    implements SoundEffectOnTurnAfterRun {

    //region -------------------- Predefined containers --------------------

    static readonly #EVERY_CONTAINERS = new Map<PossibleValuesReceived, SoundEffectOnTurnAfterRun>();

    //endregion -------------------- Predefined containers --------------------
    //region -------------------- Container attributes, constructor & methods --------------------

    readonly #property;

    private constructor(value: PossibleValuesReceived,) {
        this.#property = PropertyProvider.newBooleanContainer(value, true, false,);
    }

    public get value(): PossibleValues {
        return this.#property.value;
    }

    //endregion -------------------- Container attributes, constructor & methods --------------------
    //region -------------------- Provider / Multiton method --------------------

    public static get(value: PossibleValuesReceived,): SoundEffectOnTurnAfterRun {
        const map = this.#EVERY_CONTAINERS;
        return map.get(value) ?? map.set(value, new this(value),).get(value)!;
    }

    //endregion -------------------- Provider / Multiton method --------------------

}
