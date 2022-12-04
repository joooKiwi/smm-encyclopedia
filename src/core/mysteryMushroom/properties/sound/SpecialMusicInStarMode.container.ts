import type {PossibleGamesReceived, PossibleTranslationKeys, PossibleValues, PossibleValuesReceived, SpecialMusicInStarMode} from 'core/mysteryMushroom/properties/sound/SpecialMusicInStarMode'
import type {ExtendedMap}                                                                                                    from 'util/extended/ExtendedMap'
import type {NullOr}                                                                                                         from 'util/types/nullable'

import {PropertyProvider}     from 'core/_properties/PropertyProvider'
import {GameReferences}       from 'core/gameReference/GameReferences'
import {ExtendedMapContainer} from 'util/extended/ExtendedMap.container'

/**
 * @todo move the content in the constructor in the builder instead
 * @multiton
 * @provider
 */
export class SpecialMusicInStarModeContainer
    implements SpecialMusicInStarMode {

    //region -------------------- Fields --------------------

    static readonly #EVERY_CONTAINERS: ExtendedMap<ArgumentsReceived, SpecialMusicInStarModeContainer> = new ExtendedMapContainer()

    readonly #property
    readonly #game

    //endregion -------------------- Fields --------------------

    private constructor([value, game,]: ArgumentsReceived,) {
        this.#property = PropertyProvider.newBooleanContainer<PossibleValuesReceived, true, false, true>(value, true, false,)
        this.#game = game == null ? null : GameReferences.getValueByNameOrAcronym(game)
    }

    //region -------------------- Getter methods --------------------

    public get value(): PossibleValues {
        return this.#property.value
    }


    public get gameReference(): NullOr<GameReferences> {
        return this.#game
    }

    public get translationKey(): PossibleTranslationKeys {
        return this.#property.comment
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Provider / Multiton method --------------------

    public static get(value: PossibleValuesReceived, game: PossibleGamesReceived,): SpecialMusicInStarMode {
        const argumentsReceived: ArgumentsReceived = [value, game,]

        return this.#EVERY_CONTAINERS.if(map => map.has(argumentsReceived))
            .isNotMet(reference => reference.set(argumentsReceived, new this(argumentsReceived)))
            .get(argumentsReceived)
    }

    //endregion -------------------- Provider / Multiton method --------------------

}

type ArgumentsReceived = readonly [value: PossibleValuesReceived, game: PossibleGamesReceived,]
