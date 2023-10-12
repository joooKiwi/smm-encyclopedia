import type {PossibleAmount, PossibleGamesReceived, PossibleValuesReceived, SoundEffectOnJump} from 'core/mysteryMushroom/properties/sound/SoundEffectOnJump'

import {GameReferences} from 'core/gameReference/GameReferences'
import {NOT_APPLICABLE} from 'util/commonVariables'

/**
 * @todo move the content in the constructor in the builder instead
 */
export class SoundEffectOnJumpContainer
    implements SoundEffectOnJump {

    //region -------------------- Fields --------------------

    readonly #value
    readonly #haveMultipleImages
    readonly #amount
    readonly #game

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    constructor(value: PossibleValuesReceived, game: PossibleGamesReceived,) {
        if (value == null) {
            this.#value = NOT_APPLICABLE as NotApplicable
            this.#haveMultipleImages = false
            this.#amount = null
        } else if (typeof value == 'boolean') {
            this.#value = value
            this.#haveMultipleImages = false
            this.#amount = value ? 0 as const : 1 as const
        } else {
            this.#value = true
            this.#haveMultipleImages = true
            this.#amount = typeof value == 'string' ? 3 as const : 2 as const
        }
        this.#game = game == null ? null : GameReferences.CompanionEnum.get.getValueByNameOrAcronym(game,)
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get value(): BooleanOrNotApplicable {
        return this.#value
    }

    public get haveMultipleImages(): boolean {
        return this.#haveMultipleImages
    }

    public get amount(): PossibleAmount {
        return this.#amount
    }

    public get gameReference(): NullOr<GameReferences> {
        return this.#game
    }

    //endregion -------------------- Getter methods --------------------

}
