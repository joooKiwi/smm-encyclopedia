import type {SimpleGameFromAllGamesTemplate} from 'core/game/SimpleGame.template'
import type {SimpleGameStyleTemplate}        from 'core/gameStyle/SimpleGameStyle.template'
import type {SimpleThemeTemplate}            from 'core/theme/SimpleTheme.template'
import type {SimpleTimeTemplate}             from 'core/time/SimpleTime.template'

/**
 * @template
 */
export interface IsInPropertyTemplate {

    game: SimpleGameFromAllGamesTemplate<boolean, boolean, boolean>

    style: SimpleGameStyleTemplate

    theme: SimpleThemeTemplate

    time: SimpleTimeTemplate

}
