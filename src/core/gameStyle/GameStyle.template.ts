import type {SimpleGameTemplate} from '../game/SimpleGame.template';
import type {PossibleAcronym}    from './GameStyles.types';

/**
 * @template
 */
export interface GameStyleTemplate {

    isIn: {
        game: SimpleGameTemplate
    }

    reference: PossibleAcronym

}
