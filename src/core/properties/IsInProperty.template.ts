import type {SimpleGameTemplate}      from '../game/SimpleGame.template';
import type {SimpleGameStyleTemplate} from '../gameStyle/SimpleGameStyle.template';
import type {SimpleThemeTemplate}     from '../theme/SimpleTheme.template';
import type {SimpleTimeTemplate}      from '../time/SimpleTime.template';

/**
 * @template
 */
export interface IsInPropertyTemplate {

    game: SimpleGameTemplate

    style: SimpleGameStyleTemplate

    theme: SimpleThemeTemplate

    time: SimpleTimeTemplate

}
