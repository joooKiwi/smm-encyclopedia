import type {PossibleAmount, PossibleGamesReceived, PossibleValuesReceived, SoundEffectOnJump} from 'core/mysteryMushroom/properties/sound/SoundEffectOnJump'
import type {ExtendedMap}                                                                      from 'util/extended/ExtendedMap'

import {PropertyProvider}     from 'core/_properties/Property.provider'
import {GameReferences}       from 'core/gameReference/GameReferences'
import {ExtendedMapContainer} from 'util/extended/ExtendedMap.container'

/**
 * @todo move the content in the constructor in the builder instead
 * @multiton
 * @provider
 */
export class SoundEffectOnJumpContainer
    implements SoundEffectOnJump {

    //region -------------------- Fields --------------------

    public static readonly $3_IMAGES = '3 images'
    static readonly #EVERY_CONTAINERS: ExtendedMap<ArgumentsReceived, SoundEffectOnJumpContainer> = new ExtendedMapContainer()

    readonly #property
    readonly #game
    #haveMultipleImages?: boolean

    //endregion -------------------- Fields --------------------

    private constructor([value, game,]: ArgumentsReceived,) {
        this.#property = PropertyProvider.newBooleanContainer<PossibleValuesReceived, true, true, true>(value, true, true,)
        this.#game = game == null ? null : GameReferences.getValueByNameOrAcronym(game)
    }

    //region -------------------- Getter methods --------------------

    public get value(): BooleanOrNotApplicable {
        return this.#property.value
    }

    public get haveMultipleImages(): boolean {
        return this.#haveMultipleImages ??= this.#property.comment === SoundEffectOnJumpContainer.$3_IMAGES
    }

    public get amount(): PossibleAmount {
        return this.#property.amount
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
