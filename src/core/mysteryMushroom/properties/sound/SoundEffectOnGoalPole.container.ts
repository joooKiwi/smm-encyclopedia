import type {ExtendedList}                                                                                                                                                                                      from '../../../../util/extended/ExtendedList';
import type {PossibleGames, PossibleGamesReceived, PossibleSimpleTranslationKeys, PossibleTranslationKeys, PossibleTypes, PossibleTypesReceived, PossibleValues, PossibleValuesReceived, SoundEffectOnGoalPole} from './SoundEffectOnGoalPole';

import {PropertyProvider} from '../../../_properties/PropertyProvider';
import {GameReferences}   from '../../../gameReference/GameReferences';
import {isArrayEquals}    from '../../../../util/utilitiesMethods';
import {ExtendedSet}      from '../../../../util/extended/ExtendedSet';

/**
 * @multiton
 * @provider
 */
export class SoundEffectOnGoalPoleContainer
    implements SoundEffectOnGoalPole {

    //region -------------------- Predefined containers --------------------

    static readonly #EVERY_CONTAINERS: ExtendedList<SoundEffectOnGoalPoleContainer> = new ExtendedSet();

    readonly #argumentsReceived: ArgumentsReceived;

    //endregion -------------------- Predefined containers --------------------
    //region -------------------- Container attributes, constructor & methods --------------------

    readonly #property;
    readonly #type;
    readonly #game;
    readonly #smallDefinition;

    private constructor(argumentsReceived: ArgumentsReceived,) {
        const [value, type, game, smallDefinition,] = this.#argumentsReceived = argumentsReceived;

        this.#property = PropertyProvider.newBooleanContainer<PossibleValuesReceived, true, false, true>(value, true, false,);
        this.#type = type;
        this.#game = GameReferences.getValue(game);
        this.#smallDefinition = smallDefinition;
    }

    public get value(): PossibleValues {
        return this.#property.value;
    }

    public get type(): PossibleTypes {
        return this.#type;
    }

    public get gameReference(): PossibleGames {
        return this.#game;
    }

    public get simpleTranslationKey(): PossibleSimpleTranslationKeys {
        return this.#property.comment;
    }

    public get translationKey(): PossibleTranslationKeys {
        return this.#smallDefinition;
    }


    //endregion -------------------- Container attributes, constructor & methods --------------------
    //region -------------------- Provider / Multiton method --------------------

    public static get(value: PossibleValuesReceived, type: PossibleTypesReceived, game: PossibleGamesReceived, smallDefinition: PossibleTranslationKeys,): SoundEffectOnGoalPole {
        const argumentsReceived: ArgumentsReceived = [value, type, game, smallDefinition,];

        return this.#EVERY_CONTAINERS.find(value => isArrayEquals(value.#argumentsReceived, argumentsReceived,))
            ?? this.#EVERY_CONTAINERS.addAndGet(new this(argumentsReceived,));
    }

    //endregion -------------------- Provider / Multiton method --------------------

}

type ArgumentsReceived = readonly [value: PossibleValuesReceived, type: PossibleTypesReceived, game: PossibleGamesReceived, smallDefinition: PossibleTranslationKeys,];
