import type {PossibleGamesReceived, PossibleValuesReceived, SoundEffectOnTaunt} from 'core/mysteryMushroom/properties/sound/SoundEffectOnTaunt'

import {GameReferences} from 'core/gameReference/GameReferences'
import {NOT_APPLICABLE} from 'util/commonVariables'

/**
 * @todo move the content in the constructor in the builder instead
 */
export class SoundEffectOnTauntContainer
    implements SoundEffectOnTaunt {

    readonly #value
    readonly #game

    constructor(value: PossibleValuesReceived, game: PossibleGamesReceived,) {
        this.#value = value ?? NOT_APPLICABLE as NotApplicable
        this.#game = game == null ? null : GameReferences.getValueByNameOrAcronym(game)
    }

    public get value(): BooleanOrNotApplicable {
        return this.#value
    }

    public get gameReference(): NullOr<GameReferences> {
        return this.#game
    }

}
