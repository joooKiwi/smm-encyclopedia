import type {BooleanGameTemplate}      from '../game/Game.template';
import type {BooleanGameStyleTemplate} from '../gameStyle/GameStyle.template';
import type {BooleanThemeTemplate}          from '../theme/Theme.template';
import type {BooleanTimeTemplate}           from '../time/Time.template';

/**
 * @template
 */
export interface PropertyTemplate {

    game: BooleanGameTemplate

    style: BooleanGameStyleTemplate

    theme: BooleanThemeTemplate

    time: BooleanTimeTemplate

}
