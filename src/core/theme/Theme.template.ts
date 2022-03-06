import type {NameTemplate}                from '../../lang/name/Name.template';
import type {PossibleEnglishName}         from './NightEffects.types';
import type {SimpleGameFrom1And2Template} from '../game/SimpleGame.template';
import type {TemplateWithNameTemplate}    from '../_template/TemplateWithName.template';

/**
 * @template
 */
export interface ThemeTemplate
    extends TemplateWithNameTemplate<NameTemplate> {

    isIn: {
        game: SimpleGameFrom1And2Template
        theme: {
            course: boolean
            world: boolean
        }
    }
    effect: PossibleEffectInNightTheme

}

export type PossibleEffectInNightTheme = | PossibleEnglishName | null;
