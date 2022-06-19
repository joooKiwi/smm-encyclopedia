import type {PossibleAcronym}                                                    from './GameStyles.types';
import type {PossibleIsAvailableFromTheStart}                                    from '../availableFromTheStart/loader.types';
import type {PossibleNightDesertWindDirection, PossibleNightDesertWindFrequency} from './Loader.types';
import type {SimpleGameFrom1And2Template}                                        from '../game/SimpleGame.template';

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
