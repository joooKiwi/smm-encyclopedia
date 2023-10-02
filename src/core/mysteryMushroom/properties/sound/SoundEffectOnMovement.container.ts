import type {PossibleTranslationKeys, PossibleValuesReceived, SoundEffectOnMovement} from 'core/mysteryMushroom/properties/sound/SoundEffectOnMovement'

import {NOT_APPLICABLE} from 'util/commonVariables'

/**
 * @todo move the content in the constructor in the builder instead
 */
export class SoundEffectOnMovementContainer
    implements SoundEffectOnMovement {

    //region -------------------- Fields --------------------

    readonly #value
    readonly #translationKey

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    constructor(value: PossibleValuesReceived,) {
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

}
