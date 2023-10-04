import type {PossibleGamesReceived, PossibleSimpleTranslationKeys, PossibleTranslationKeys, PossibleTypes, PossibleTypesReceived, PossibleValuesReceived, SoundEffectOnGoalPole} from 'core/mysteryMushroom/properties/sound/SoundEffectOnGoalPole'

import {GameReferences}                    from 'core/gameReference/GameReferences'
import {NOT_APPLICABLE, UNKNOWN_REFERENCE} from 'util/commonVariables'

/**
 * @todo move the content in the constructor in the builder instead
 */
export class SoundEffectOnGoalPoleContainer
    implements SoundEffectOnGoalPole {

    //region -------------------- Fields --------------------

    readonly #value
    readonly #type
    readonly #game
    readonly #simpleTranslationKey
    readonly #translationKey

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    constructor(value: PossibleValuesReceived, type: PossibleTypesReceived, game: PossibleGamesReceived, smallDefinition: PossibleTranslationKeys,) {
        if (value == null) {
            this.#value = NOT_APPLICABLE as NotApplicable
            this.#simpleTranslationKey = null
        } else if (typeof value == 'boolean') {
            this.#value = value
            this.#simpleTranslationKey = null
        } else {
            this.#value = true
            this.#simpleTranslationKey = value
        }
        this.#type = type
        this.#game = game == null || game === UNKNOWN_REFERENCE || game.startsWith('Pokémon gen') ? null : GameReferences.CompanionEnum.get.getValueByNameOrAcronym(game,)
        //FIXME try not to receive ??? as the value for the game
        //FIXME try not to receive "Pokémon gen 1" as the value for the game
        this.#translationKey = smallDefinition
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get value(): BooleanOrNotApplicable {
        return this.#value
    }

    public get type(): PossibleTypes {
        return this.#type
    }

    public get gameReference(): NullOr<GameReferences> {
        return this.#game
    }

    public get simpleTranslationKey(): PossibleSimpleTranslationKeys {
        return this.#simpleTranslationKey
    }

    public get translationKey(): PossibleTranslationKeys {
        return this.#translationKey
    }

    //endregion -------------------- Getter methods --------------------

}
