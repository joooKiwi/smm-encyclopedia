import type {PossibleGamesReceived, PossibleTranslationKeys, PossibleValuesReceived, SpecialMusicInStarMode} from 'core/mysteryMushroom/properties/sound/SpecialMusicInStarMode'

import {GameReferences} from 'core/gameReference/GameReferences'
import {NOT_APPLICABLE} from 'util/commonVariables'

/**
 * @todo move the content in the constructor in the builder instead
 */
export class SpecialMusicInStarModeContainer
    implements SpecialMusicInStarMode {

    //region -------------------- Fields --------------------

    readonly #value
    readonly #translationKey
    readonly #game

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    constructor(value: PossibleValuesReceived, game: PossibleGamesReceived,) {
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
        this.#game = game == null ? null : GameReferences.getValueByNameOrAcronym(game)
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get value(): BooleanOrNotApplicable {
        return this.#value
    }

    public get gameReference(): NullOr<GameReferences> {
        return this.#game
    }

    public get translationKey(): PossibleTranslationKeys {
        return this.#translationKey
    }

    //endregion -------------------- Getter methods --------------------

}
