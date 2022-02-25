import type {SimpleGameTemplate}                                                 from '../game/SimpleGame.template';
import type {PossibleAcronym}                                                    from './GameStyles.types';
import type {PossibleNightDesertWindDirection, PossibleNightDesertWindFrequency} from './Loader.types';

/**
 * @template
 */
export interface GameStyleTemplate {

    isIn: {
        game: SimpleGameTemplate
    }

    reference: PossibleAcronym

    nightDesertWind: {
        direction: PossibleNightDesertWindDirection
        frequency: PossibleNightDesertWindFrequency
    }

}
