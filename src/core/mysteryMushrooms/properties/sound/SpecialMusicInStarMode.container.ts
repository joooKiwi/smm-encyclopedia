import type {ExtendedList}                                                                                                                  from '../../../../util/extended/ExtendedList';
import type {PossibleGames, PossibleGamesReceived, PossibleTranslationKeys, PossibleValues, PossibleValuesReceived, SpecialMusicInStarMode} from './SpecialMusicInStarMode';

import {PropertyProvider} from '../../../_properties/PropertyProvider';
import {GameReferences}   from '../../../../game/GameReferences';
import {isArrayEquals}    from '../../../../util/utilitiesMethods';
import {ExtendedSet}      from '../../../../util/extended/ExtendedSet';

/**
 * @multiton
 * @provider
 */
export class SpecialMusicInStarModeContainer
    implements SpecialMusicInStarMode {

    //region -------------------- Predefined containers --------------------

    static readonly #EVERY_CONTAINERS: ExtendedList<SpecialMusicInStarModeContainer> = new ExtendedSet();

    readonly #argumentsReceived: ArgumentsReceived;

    //endregion -------------------- Predefined containers --------------------
    //region -------------------- Container attributes, constructor & methods --------------------

    readonly #property;
    readonly #game;

    private constructor(argumentsReceived: ArgumentsReceived,) {
        const [value, game,] = this.#argumentsReceived = argumentsReceived;

        this.#property = PropertyProvider.newBooleanContainer<PossibleValuesReceived, true, false, true>(value, true, false,);
        this.#game = GameReferences.getValue(game);
    }

    public get value(): PossibleValues {
        return this.#property.value;
    }


    public get gameReference(): PossibleGames {
        return this.#game;
    }

    public get translationKey(): PossibleTranslationKeys {
        return this.#property.comment;
    }


    //endregion -------------------- Container attributes, constructor & methods --------------------
    //region -------------------- Provider / Multiton method --------------------

    public static get(value: PossibleValuesReceived, game: PossibleGamesReceived,): SpecialMusicInStarMode {
        const argumentsReceived: ArgumentsReceived = [value, game,];

        return this.#EVERY_CONTAINERS.find(value => isArrayEquals(value.#argumentsReceived, argumentsReceived,))
            ?? this.#EVERY_CONTAINERS.addAndGet(new this(argumentsReceived,));
    }

    //endregion -------------------- Provider / Multiton method --------------------

}

type ArgumentsReceived = readonly [value: PossibleValuesReceived, game: PossibleGamesReceived,];
