import type {ExtendedMap}                                                                                                                                                                        from '../../../../util/extended/ExtendedMap'
import type {NullOr}                                                                                                                                                                             from '../../../../util/types'
import type {PossibleGamesReceived, PossibleSimpleTranslationKeys, PossibleTranslationKeys, PossibleTypes, PossibleTypesReceived, PossibleValues, PossibleValuesReceived, SoundEffectOnGoalPole} from './SoundEffectOnGoalPole'

import {ExtendedMapContainer} from '../../../../util/extended/ExtendedMap.container'
import {GameReferences}       from '../../../gameReference/GameReferences'
import {PropertyProvider}     from '../../../_properties/PropertyProvider'

/**
 * @todo move the content in the constructor in the builder instead
 * @multiton
 * @provider
 */
export class SoundEffectOnGoalPoleContainer
    implements SoundEffectOnGoalPole {

    //region -------------------- Fields --------------------

    static readonly #EVERY_CONTAINERS: ExtendedMap<ArgumentsReceived, SoundEffectOnGoalPoleContainer> = new ExtendedMapContainer()

    readonly #property
    readonly #type
    readonly #game
    readonly #smallDefinition

    //endregion -------------------- Fields --------------------

    private constructor([value, type, game, smallDefinition,]: ArgumentsReceived,) {
        this.#property = PropertyProvider.newBooleanContainer<PossibleValuesReceived, true, false, true>(value, true, false,)
        this.#type = type
        this.#game = game == null || game === '???' || game.startsWith('Pokémon gen') ? null : GameReferences.getValueByNameOrAcronym(game)
        //FIXME try not to receive ??? as the value for the game
        //FIXME try not to receive "Pokémon gen 1" as the value for the game
        this.#smallDefinition = smallDefinition
    }

    //region -------------------- Getter methods --------------------

    public get value(): PossibleValues {
        return this.#property.value
    }

    public get type(): PossibleTypes {
        return this.#type
    }

    public get gameReference(): NullOr<GameReferences> {
        return this.#game
    }

    public get simpleTranslationKey(): PossibleSimpleTranslationKeys {
        return this.#property.comment
    }

    public get translationKey(): PossibleTranslationKeys {
        return this.#smallDefinition
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
