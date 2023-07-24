import type {PossibleGamesReceived, PossibleTranslationKeys, PossibleValuesReceived, SpecialMusicInStarMode} from 'core/mysteryMushroom/properties/sound/SpecialMusicInStarMode'
import type {ExtendedMap}                                                                                    from 'util/extended/ExtendedMap'

import {GameReferences}       from 'core/gameReference/GameReferences'
import {NOT_APPLICABLE}       from 'util/commonVariables'
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

    readonly #value
    readonly #translationKey
    readonly #game

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    private constructor([value, game,]: ArgumentsReceived,) {
        if (value == null) {
            this.#value = NOT_APPLICABLE as NotApplicable
            this.#translationKey = null
        } else if (typeof value == 'boolean') {
            this.#value = value
            this.#translationKey = null
        } else {
            this.#value = true
            this.#translationKey = value
        }
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

    public get translationKey(): PossibleTranslationKeys {
        return this.#translationKey
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
