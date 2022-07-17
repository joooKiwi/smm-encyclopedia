import type {PossibleTranslationKeys, PossibleValues, PossibleValuesReceived, SoundEffectOnMovement} from './SoundEffectOnMovement';

import {PropertyProvider} from '../../../_properties/PropertyProvider';

/**
 * @multiton
 * @provider
 */
export class SoundEffectOnMovementContainer
    implements SoundEffectOnMovement {

    //region -------------------- Predefined containers --------------------

    static readonly #EVERY_CONTAINERS = new Map<PossibleValuesReceived, SoundEffectOnMovement>();

    //endregion -------------------- Predefined containers --------------------
    //region -------------------- Fields, constructor & methods --------------------

    readonly #property;

    private constructor(value: PossibleValuesReceived,) {
        this.#property = PropertyProvider.newBooleanContainer<PossibleValuesReceived, true, false, true>(value, true, false,);
    }

    public get value(): PossibleValues {
        return this.#property.value;
    }

    public get translationKey(): PossibleTranslationKeys {
        return this.#property.comment;
    }

    //endregion -------------------- Fields, constructor & methods --------------------
    //region -------------------- Provider / Multiton method --------------------

    public static get(value: PossibleValuesReceived,): SoundEffectOnMovement {
        const map = this.#EVERY_CONTAINERS;
        return map.get(value) ?? map.set(value, new this(value),).get(value)!;
    }

    //endregion -------------------- Provider / Multiton method --------------------

}
