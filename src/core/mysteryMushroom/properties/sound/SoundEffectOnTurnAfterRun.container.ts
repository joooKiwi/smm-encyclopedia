import type {PossibleValuesReceived, SoundEffectOnTurnAfterRun} from 'core/mysteryMushroom/properties/sound/SoundEffectOnTurnAfterRun'

import {NOT_APPLICABLE} from 'util/commonVariables'

/**
 * @todo move the content in the constructor in the builder instead
 */
export class SoundEffectOnTurnAfterRunContainer
    implements SoundEffectOnTurnAfterRun {

    readonly #value

    constructor(value: PossibleValuesReceived,) {
        this.#value = value ?? NOT_APPLICABLE as NotApplicable
    }

    public get value(): BooleanOrNotApplicable {
        return this.#value
    }

}
