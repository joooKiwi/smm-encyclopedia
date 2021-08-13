import type {SMM2NameTemplate} from '../lang/SMM2Name.template';
import type {GameTemplate}     from '../game/Game.template';

/**
 * @template
 */
export interface ThemeTemplate {

    isIn: {
        game: GameTemplate
        theme: {
            course: boolean
            world: boolean
        }
    }

    name: SMM2NameTemplate

}
