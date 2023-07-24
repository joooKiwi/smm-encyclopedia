import type {PossibleTranslationKeys, PossibleValuesReceived, SoundEffectOnMovement} from 'core/mysteryMushroom/properties/sound/SoundEffectOnMovement'
import type {ExtendedMap}                                                            from 'util/extended/ExtendedMap'

import {NOT_APPLICABLE}       from 'util/commonVariables'
import {ExtendedMapContainer} from 'util/extended/ExtendedMap.container'

/**
 * @todo move the content in the constructor in the builder instead
 * @multiton
 * @provider
 */
export class SoundEffectOnMovementContainer
    implements SoundEffectOnMovement {

    //region -------------------- Fields --------------------

    static readonly #EVERY_CONTAINERS: ExtendedMap<PossibleValuesReceived, SoundEffectOnMovement> = new ExtendedMapContainer()

    readonly #value
    readonly #translationKey

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    private constructor(value: PossibleValuesReceived,) {
        if (value == null) {
            this.#value = NOT_APPLICABLE as NotApplicable
            this.#translationKey = null
        } else if (typeof value == 'boolean') {
            this.#value = value
            this.#translationKey = null
        } else {
            this.#value = true
            this.#translationKey = value
        }
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get value(): BooleanOrNotApplicable {
        return this.#value
    }

    public get translationKey(): PossibleTranslationKeys {
        return this.#translationKey
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
