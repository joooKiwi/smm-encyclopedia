import type {NameTemplate}             from '../../lang/name/Name.template';
import type {SimpleGameTemplate}       from '../game/SimpleGame.template';
import type {PossibleEnglishName}           from './NightEffects.types';
import type {TemplateWithNameTemplate} from '../_template/TemplateWithName.template';

/**
 * @template
 */
export interface ThemeTemplate
    extends TemplateWithNameTemplate<NameTemplate> {

    isIn: {
        game: SimpleGameTemplate
        theme: {
            course: boolean
            world: boolean
        }
    }
    effect: PossibleEffectInNightTheme

}

export type PossibleEffectInNightTheme = | PossibleEnglishName | null;
