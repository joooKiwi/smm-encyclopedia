import type {SimpleGameTemplate}       from '../game/SimpleGame.template';
import type {NameTemplate}             from '../../lang/name/Name.template';
import type {TemplateWithNameTemplate} from '../_template/TemplateWithName.template';

/**
 * @template
 */
export interface GameStyleTemplate
    extends TemplateWithNameTemplate<NameTemplate> {

    isIn: {
        game: SimpleGameTemplate
    }

}
