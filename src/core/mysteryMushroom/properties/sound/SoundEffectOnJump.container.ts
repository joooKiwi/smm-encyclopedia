import type {ExtendedMap}                                                                                                     from '../../../../util/extended/ExtendedMap';
import type {PossibleAmount, PossibleGames, PossibleGamesReceived, PossibleValues, PossibleValuesReceived, SoundEffectOnJump} from './SoundEffectOnJump';

import {ExtendedMapContainer} from '../../../../util/extended/ExtendedMap.container';
import {GameReferences}       from '../../../gameReference/GameReferences';
import {PropertyProvider}     from '../../../_properties/PropertyProvider';

/**
 * @todo move the content in the constructor in the builder instead
 * @multiton
 * @provider
 */
export class SoundEffectOnJumpContainer
    implements SoundEffectOnJump {

    //region -------------------- Fields --------------------

    public static readonly $3_IMAGES = '3 images';
    static readonly #EVERY_CONTAINERS: ExtendedMap<ArgumentsReceived, SoundEffectOnJumpContainer> = new ExtendedMapContainer();

    readonly #property;
    readonly #game;
    #haveMultipleImages?: boolean;

    //endregion -------------------- Fields --------------------

    private constructor([value, game,]: ArgumentsReceived,) {
        this.#property = PropertyProvider.newBooleanContainer<PossibleValuesReceived, true, true, true>(value, true, true,);
        this.#game = GameReferences.getValue(game);
    }

    //region -------------------- Getter methods --------------------

    public get value(): PossibleValues {
        return this.#property.value;
    }

    public get haveMultipleImages(): boolean {
        return this.#haveMultipleImages ??= this.#property.comment === SoundEffectOnJumpContainer.$3_IMAGES;
    }

    public get amount(): PossibleAmount {
        return this.#property.amount;
    }

    public get gameReference(): PossibleGames {
        return this.#game;
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Provider / Multiton method --------------------

    public static get(value: PossibleValuesReceived, game: PossibleGamesReceived,): SoundEffectOnJump {
        const argumentsReceived: ArgumentsReceived = [value, game,];

        return this.#EVERY_CONTAINERS.if(map => map.has(argumentsReceived))
            .isNotMet(reference => reference.set(argumentsReceived, new this(argumentsReceived)))
            .get(argumentsReceived);
    }

    //endregion -------------------- Provider / Multiton method --------------------

}

type ArgumentsReceived = readonly [value: PossibleValuesReceived, game: PossibleGamesReceived,];
