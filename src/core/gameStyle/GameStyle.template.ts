import type {PossibleIsAvailableFromTheStart}                                    from 'core/availableFromTheStart/loader.types'
import type {SimpleGameFrom1And2Template}                                        from 'core/game/SimpleGame.template'
import type {PossibleAcronym}                                                    from 'core/gameStyle/GameStyles.types'
import type {PossibleNightDesertWindDirection, PossibleNightDesertWindFrequency} from 'core/gameStyle/loader.types'

/** @template */
export interface GameStyleTemplate {

    is: IsGameStyleTemplate

    reference: PossibleAcronym

    nightDesertWind: NightDesertWindTemplate

}


/** @template */
export interface IsGameStyleTemplate {

    in: IsInGameStyleTemplate

    availableFromTheStart: PossibleIsAvailableFromTheStart

}

/** @template */
export interface IsInGameStyleTemplate {

    game: SimpleGameFrom1And2Template<boolean, boolean>

}

/** @template */
export interface NightDesertWindTemplate {

    direction: PossibleNightDesertWindDirection

    frequency: PossibleNightDesertWindFrequency

}
