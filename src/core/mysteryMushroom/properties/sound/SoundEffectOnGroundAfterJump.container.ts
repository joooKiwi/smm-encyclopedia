import type {PossibleGamesReceived, PossibleValuesReceived, SoundEffectOnGroundAfterJump} from 'core/mysteryMushroom/properties/sound/SoundEffectOnGroundAfterJump'

import {GameReferences} from 'core/gameReference/GameReferences'
import {NOT_APPLICABLE} from 'util/commonVariables'

/**
 * @todo move the content in the constructor in the builder instead
 */
export class SoundEffectOnGroundAfterJumpContainer
    implements SoundEffectOnGroundAfterJump {

    readonly #value
    readonly #game

    constructor(value: PossibleValuesReceived, game: PossibleGamesReceived,) {
        this.#value = value ?? NOT_APPLICABLE as NotApplicable
        this.#game = game == null ? null : GameReferences.CompanionEnum.get.getValueByNameOrAcronym(game,)
    }

    public get value(): BooleanOrNotApplicable {
        return this.#value
    }

    public get gameReference(): NullOr<GameReferences> {
        return this.#game
    }

}
