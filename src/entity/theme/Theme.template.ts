import type {SimpleGameTemplate}       from '../game/SimpleGame.template';
import type {SMM2NameTemplate}         from '../lang/SMM2Name.template';
import type {TemplateWithNameTemplate} from '../TemplateWithName.template';

/**
 * @template
 */
export interface ThemeTemplate
    extends TemplateWithNameTemplate<SMM2NameTemplate> {

    isIn: {
        game: SimpleGameTemplate
        theme: {
            course: boolean
            world: boolean
        }
    }

}
