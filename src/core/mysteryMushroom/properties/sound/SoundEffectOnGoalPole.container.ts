import type {PossibleGamesReceived, PossibleSimpleTranslationKeys, PossibleTranslationKeys, PossibleTypes, PossibleTypesReceived, PossibleValuesReceived, SoundEffectOnGoalPole} from 'core/mysteryMushroom/properties/sound/SoundEffectOnGoalPole'
import type {ExtendedMap}                                                                                                                                                        from 'util/extended/ExtendedMap'

import {GameReferences}                    from 'core/gameReference/GameReferences'
import {NOT_APPLICABLE, UNKNOWN_REFERENCE} from 'util/commonVariables'
import {ExtendedMapContainer}              from 'util/extended/ExtendedMap.container'

/**
 * @todo move the content in the constructor in the builder instead
 * @multiton
 * @provider
 */
export class SoundEffectOnGoalPoleContainer
    implements SoundEffectOnGoalPole {

    //region -------------------- Fields --------------------

    static readonly #EVERY_CONTAINERS: ExtendedMap<ArgumentsReceived, SoundEffectOnGoalPoleContainer> = new ExtendedMapContainer()

    readonly #value
    readonly #type
    readonly #game
    readonly #simpleTranslationKey
    readonly #translationKey

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    private constructor([value, type, game, smallDefinition,]: ArgumentsReceived,) {
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
        this.#game = game == null || game === UNKNOWN_REFERENCE || game.startsWith('Pokémon gen') ? null : GameReferences.getValueByNameOrAcronym(game)
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
    //region -------------------- Provider / Multiton method --------------------

    public static get(value: PossibleValuesReceived, type: PossibleTypesReceived, game: PossibleGamesReceived, smallDefinition: PossibleTranslationKeys,): SoundEffectOnGoalPole {
        const argumentsReceived: ArgumentsReceived = [value, type, game, smallDefinition,]

        return this.#EVERY_CONTAINERS.if(map => map.has(argumentsReceived))
            .isNotMet(reference => reference.set(argumentsReceived, new this(argumentsReceived)))
            .get(argumentsReceived)
    }

    //endregion -------------------- Provider / Multiton method --------------------

}

type ArgumentsReceived = readonly [value: PossibleValuesReceived, type: PossibleTypesReceived, game: PossibleGamesReceived, smallDefinition: PossibleTranslationKeys,]
