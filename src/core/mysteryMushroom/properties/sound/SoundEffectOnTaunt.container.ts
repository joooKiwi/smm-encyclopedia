import type {PossibleGamesReceived, PossibleValuesReceived, SoundEffectOnTaunt} from 'core/mysteryMushroom/properties/sound/SoundEffectOnTaunt'
import type {ExtendedMap}                                                       from 'util/extended/ExtendedMap'

import {GameReferences}       from 'core/gameReference/GameReferences'
import {NOT_APPLICABLE}       from 'util/commonVariables'
import {ExtendedMapContainer} from 'util/extended/ExtendedMap.container'

/**
 * @todo move the content in the constructor in the builder instead
 * @multiton
 * @provider
 */
export class SoundEffectOnTauntContainer
    implements SoundEffectOnTaunt {

    //region -------------------- Fields --------------------

    static readonly #EVERY_CONTAINERS: ExtendedMap<ArgumentsReceived, SoundEffectOnTauntContainer> = new ExtendedMapContainer()

    readonly #value
    readonly #game

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    private constructor([value, game]: ArgumentsReceived,) {
        this.#value = value ?? NOT_APPLICABLE as NotApplicable
        this.#game = game == null ? null : GameReferences.getValueByNameOrAcronym(game)
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get value(): BooleanOrNotApplicable {
        return this.#value
    }

    public get gameReference(): NullOr<GameReferences> {
        return this.#game
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Provider / Multiton method --------------------

    public static get(value: PossibleValuesReceived, game: PossibleGamesReceived,): SoundEffectOnTaunt {
        const argumentsReceived: ArgumentsReceived = [value, game,]

        return this.#EVERY_CONTAINERS.if(map => map.has(argumentsReceived))
            .isNotMet(reference => reference.set(argumentsReceived, new this(argumentsReceived)))
            .get(argumentsReceived)
    }

    //endregion -------------------- Provider / Multiton method --------------------

}

type ArgumentsReceived = readonly [value: PossibleValuesReceived, game: PossibleGamesReceived,]
