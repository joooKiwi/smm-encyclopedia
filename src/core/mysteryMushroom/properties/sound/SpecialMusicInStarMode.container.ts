import type {ExtendedList}                                                                                                                  from '../../../../util/extended/ExtendedList';
import type {PossibleGames, PossibleGamesReceived, PossibleTranslationKeys, PossibleValues, PossibleValuesReceived, SpecialMusicInStarMode} from './SpecialMusicInStarMode';

import {ExtendedSetContainer} from '../../../../util/extended/ExtendedSet.container';
import {GameReferences}       from '../../../gameReference/GameReferences';
import {isArrayEquals}        from '../../../../util/utilitiesMethods';
import {PropertyProvider}     from '../../../_properties/PropertyProvider';

/**
 * @multiton
 * @provider
 */
export class SpecialMusicInStarModeContainer
    implements SpecialMusicInStarMode {

    //region -------------------- Predefined containers --------------------

    static readonly #EVERY_CONTAINERS: ExtendedList<SpecialMusicInStarModeContainer> = new ExtendedSetContainer();

    readonly #argumentsReceived: ArgumentsReceived;

    //endregion -------------------- Predefined containers --------------------
    //region -------------------- Fields, constructor & methods --------------------

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


    //endregion -------------------- Fields, constructor & methods --------------------
    //region -------------------- Provider / Multiton method --------------------

    public static get(value: PossibleValuesReceived, game: PossibleGamesReceived,): SpecialMusicInStarMode {
        const argumentsReceived: ArgumentsReceived = [value, game,];

        return this.#EVERY_CONTAINERS.find(value => isArrayEquals(value.#argumentsReceived, argumentsReceived,))
            ?? this.#EVERY_CONTAINERS.addAndGet(new this(argumentsReceived,));
    }

    //endregion -------------------- Provider / Multiton method --------------------

}

type ArgumentsReceived = readonly [value: PossibleValuesReceived, game: PossibleGamesReceived,];
