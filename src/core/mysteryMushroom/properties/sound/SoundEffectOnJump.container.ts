import type {PossibleAmount, PossibleGamesReceived, PossibleValuesReceived, SoundEffectOnJump} from 'core/mysteryMushroom/properties/sound/SoundEffectOnJump'
import type {ExtendedMap}                                                                      from 'util/extended/ExtendedMap'

import {GameReferences}       from 'core/gameReference/GameReferences'
import {NOT_APPLICABLE}       from 'util/commonVariables'
import {ExtendedMapContainer} from 'util/extended/ExtendedMap.container'

/**
 * @todo move the content in the constructor in the builder instead
 * @multiton
 * @provider
 */
export class SoundEffectOnJumpContainer
    implements SoundEffectOnJump {

    //region -------------------- Fields --------------------

    static readonly #EVERY_CONTAINERS: ExtendedMap<ArgumentsReceived, SoundEffectOnJumpContainer> = new ExtendedMapContainer()

    readonly #value
    readonly #haveMultipleImages
    readonly #amount
    readonly #game

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    private constructor([value, game,]: ArgumentsReceived,) {
        if (value == null) {
            this.#value = NOT_APPLICABLE as NotApplicable
            this.#haveMultipleImages = false
            this.#amount = null
        } else if (typeof value == 'boolean') {
            this.#value = value
            this.#haveMultipleImages = false
            this.#amount = value ? 0 as const : 1 as const
        } else {
            this.#value = true
            this.#haveMultipleImages = true
            this.#amount = typeof value == 'string' ? 3 as const : 2 as const
        }
        this.#game = game == null ? null : GameReferences.getValueByNameOrAcronym(game)
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get value(): BooleanOrNotApplicable {
        return this.#value
    }

    public get haveMultipleImages(): boolean {
        return this.#haveMultipleImages
    }

    public get amount(): PossibleAmount {
        return this.#amount
    }

    public get gameReference(): NullOr<GameReferences> {
        return this.#game
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Provider / Multiton method --------------------

    public static get(value: PossibleValuesReceived, game: PossibleGamesReceived,): SoundEffectOnJump {
        const argumentsReceived: ArgumentsReceived = [value, game,]

        return this.#EVERY_CONTAINERS.if(map => map.has(argumentsReceived))
            .isNotMet(reference => reference.set(argumentsReceived, new this(argumentsReceived)))
            .get(argumentsReceived)
    }

    //endregion -------------------- Provider / Multiton method --------------------

}

type ArgumentsReceived = readonly [value: PossibleValuesReceived, game: PossibleGamesReceived,]
