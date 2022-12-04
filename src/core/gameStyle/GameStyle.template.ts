import type {PossibleIsAvailableFromTheStart}                                    from 'core/availableFromTheStart/loader.types'
import type {SimpleGameFrom1And2Template}                                        from 'core/game/SimpleGame.template'
import type {PossibleAcronym}                                                    from 'core/gameStyle/GameStyles.types'
import type {PossibleNightDesertWindDirection, PossibleNightDesertWindFrequency} from 'core/gameStyle/Loader.types'

/**
 * @template
 */
export interface GameStyleTemplate {

    is: {
        in: {
            game: SimpleGameFrom1And2Template<boolean, boolean>
        }
        availableFromTheStart: PossibleIsAvailableFromTheStart
    }

    reference: PossibleAcronym

    nightDesertWind: NightDesertWindTemplate

}

/**
 * @template
 */
export interface NightDesertWindTemplate {

    direction: PossibleNightDesertWindDirection

    frequency: PossibleNightDesertWindFrequency

}
