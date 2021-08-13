import type {SMM2NameTemplate} from '../lang/SMM2Name.template';
import type {GameTemplate}     from '../game/Game.template';

/**
 * @template
 */
export interface GameStyleTemplate {

    isIn: {
        game: GameTemplate
    }
    name: SMM2NameTemplate

}