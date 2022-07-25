import type {ExtendedMap}                                                                                            from '../../../../util/extended/ExtendedMap';
import type {PossibleGames, PossibleGamesReceived, PossibleValues, PossibleValuesReceived, SoundEffectWhenCollected} from './SoundEffectWhenCollected';

import {ExtendedMapContainer} from '../../../../util/extended/ExtendedMap.container';
import {GameReferences}       from '../../../gameReference/GameReferences';
import {PropertyProvider}     from '../../../_properties/PropertyProvider';

/**
 * @todo move the content in the constructor in the builder instead
 * @multiton
 * @provider
 */
export class SoundEffectWhenCollectedContainer
    implements SoundEffectWhenCollected {

    //region -------------------- Fields --------------------

    static readonly #EVERY_CONTAINERS: ExtendedMap<ArgumentsReceived, SoundEffectWhenCollectedContainer> = new ExtendedMapContainer();

    readonly #property;
    readonly #game;

    //endregion -------------------- Fields --------------------

    private constructor([value, game,]: ArgumentsReceived,) {
        this.#property = PropertyProvider.newBooleanContainer(value, true, false,);
        this.#game = GameReferences.getValue(game);
    }

    //region -------------------- Getter methods --------------------

    public get value(): PossibleValues {
        return this.#property.value;
    }

    public get gameReference(): PossibleGames {
        return this.#game;
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Provider / Multiton method --------------------

    public static get(value: PossibleValuesReceived, game: PossibleGamesReceived,): SoundEffectWhenCollected {
        const argumentsReceived: ArgumentsReceived = [value, game,];

        return this.#EVERY_CONTAINERS.if(map => map.has(argumentsReceived))
            .isNotMet(reference => reference.set(argumentsReceived, new this(argumentsReceived)))
            .get(argumentsReceived);
    }

    //endregion -------------------- Provider / Multiton method --------------------

}

type ArgumentsReceived = readonly [value: PossibleValuesReceived, game: PossibleGamesReceived,];
