import type {ExtendedList}                                                                                                    from '../../../../util/extended/ExtendedList';
import type {PossibleAmount, PossibleGames, PossibleGamesReceived, PossibleValues, PossibleValuesReceived, SoundEffectOnJump} from './SoundEffectOnJump';

import {ExtendedSetContainer} from '../../../../util/extended/ExtendedSet.container';
import {GameReferences}       from '../../../gameReference/GameReferences';
import {isArrayEquals}        from '../../../../util/utilitiesMethods';
import {PropertyProvider}     from '../../../_properties/PropertyProvider';

/**
 * @multiton
 * @provider
 */
export class SoundEffectOnJumpContainer
    implements SoundEffectOnJump {

    //region -------------------- Predefined containers --------------------

    public static readonly _3_IMAGES = '3 images';
    static readonly #EVERY_CONTAINERS: ExtendedList<SoundEffectOnJumpContainer> = new ExtendedSetContainer();

    readonly #argumentsReceived: ArgumentsReceived;

    //endregion -------------------- Predefined containers --------------------
    //region -------------------- Fields, constructor & methods --------------------

    readonly #property;
    readonly #game;
    #haveMultipleImages?: boolean;

    private constructor(argumentsReceived: ArgumentsReceived,) {
        const [value, game,] = this.#argumentsReceived = argumentsReceived;

        this.#property = PropertyProvider.newBooleanContainer<PossibleValuesReceived, true, true, true>(value, true, true,);
        this.#game = GameReferences.getValue(game);
    }

    public get value(): PossibleValues {
        return this.#property.value;
    }

    public get haveMultipleImages(): boolean {
        return this.#haveMultipleImages ??= this.#property.comment === SoundEffectOnJumpContainer._3_IMAGES;
    }

    public get amount(): PossibleAmount {
        return this.#property.amount;
    }

    public get gameReference(): PossibleGames {
        return this.#game;
    }

    //endregion -------------------- Fields, constructor & methods --------------------
    //region -------------------- Provider / Multiton method --------------------

    public static get(value: PossibleValuesReceived, game: PossibleGamesReceived,): SoundEffectOnJump {
        const argumentsReceived: ArgumentsReceived = [value, game,];

        return this.#EVERY_CONTAINERS.find(value => isArrayEquals(value.#argumentsReceived, argumentsReceived,))
            ?? this.#EVERY_CONTAINERS.addAndGet(new this(argumentsReceived,));
    }

    //endregion -------------------- Provider / Multiton method --------------------

}

type ArgumentsReceived = readonly [value: PossibleValuesReceived, game: PossibleGamesReceived,];
