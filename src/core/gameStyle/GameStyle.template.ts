import type {PossibleAcronym}                                                    from './GameStyles.types';
import type {PossibleNightDesertWindDirection, PossibleNightDesertWindFrequency} from './Loader.types';
import type {SimpleGameFrom1And2Template}                                        from '../game/SimpleGame.template';

/**
 * @template
 */
export interface GameStyleTemplate {

    isIn: {
        game: SimpleGameFrom1And2Template<boolean, boolean>
    }

    reference: PossibleAcronym

    nightDesertWind: {
        direction: PossibleNightDesertWindDirection
        frequency: PossibleNightDesertWindFrequency
    }

}
